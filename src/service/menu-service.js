import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import { createMenuValidation } from "../validation/menu-validation.js"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createMenu = async (userId, request) => {
    const menu = validate(createMenuValidation, request);
    menu.user_id = userId;

    const countUser = await prisma.menu.count({
        where: {
            name: menu.name
        }
    });

    if (countUser === 1) {
        throw new ResponseError(400, "Menu already exists");
    }

    return await prisma.menu.create({
        data: menu,
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            stok: true,
            category: true,
            image: true
        }
    });
}


export default {
    createMenu,

}