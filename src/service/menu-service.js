import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import { createMenuValidation } from "../validation/menu-validation.js"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createMenu = async (request, file) => {
    const menu = validate(createMenuValidation, request);

    const countUser = await prisma.menu.count({
        where: {
            name: menu.name
        }
    });

    if (countUser === 1) {
        throw new ResponseError(400, "Menu already exists");
    }

    menu.image = file.filename;

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


const deleteMenu = async (menuId) => {
    const menuDatabase = await prisma.menu.findUnique({
        where: {
            id: parseInt(menuId)
        }
    });

    if (!menuDatabase) {
        throw new ResponseError(404, "menu is not found");
    }

    return await prisma.menu.delete({
        where: {
            id: parseInt(menuId)
        }
    })
}

const menus = async () => {
    return await prisma.menu.findMany();
}

const menu = async (menuId) => {
    const menu = await prisma.menu.findUnique({
        where: {
            id: menuId
        }
    });

    if (!menu) {
        throw new ResponseError(404, "menu is not found");
    }

    return menu;
}

export default {
    createMenu,
    deleteMenu,
    menus,
    menu

}