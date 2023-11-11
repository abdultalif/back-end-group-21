import { validate } from "../validation/validation.js";
import { v4 as uuid } from "uuid"
import {
    loginUserValidation,
    registerUserValidation
} from "../validation/user-validation.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()


const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            username: user.username
        }
    });

    if (countUser === 1) {
        throw new ResponseError(400, "Username already exists");
    }

    user.password = await bcrypt.hash(user.password, 10);

    return prismaClient.user.create({
        data: user,
        select: {
            username: true,
            name: true
        }
    });
}


const login = async (request) => {

    const loginRequest = validate(loginUserValidation, request);
    const user = await prismaClient.user.findFirst({
        where: {
            username: loginRequest.username
        },
        select: {
            id: true,
            username: true,
            password: true
        }
    });

    if (!user) {
        throw new ResponseError(401, "Username or password wrong");
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    if (!isPasswordValid) {
        throw new ResponseError(401, "Username or password wrong");
    }

    const token = uuid().toString();
    return await prismaClient.user.update({
        where: {
            id: user.id
        },
        data: {
            token: token
        },
        select: {
            token: true
        }
    });


}




export default {
    register,
    login
}