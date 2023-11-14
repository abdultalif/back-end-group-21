import menuService from "../service/menu-service.js";

const createMenu = async (req, res, next) => {
    try {
        const result = await menuService.createMenu(req.user.id, req.body);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

export default {
    createMenu
}