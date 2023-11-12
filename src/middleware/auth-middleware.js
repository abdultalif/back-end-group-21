import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export const authentication = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        res.status(401).json({
            errors: "token ga ada"
        }).end();
    } else {
        const user = await prismaClient.user.findFirst({
            where: {
                token: token
            }
        });

        if (!user) {
            res.status(401).json({
                errors: "user ga ada"
            }).end();
        } else {
            req.user = user;
            next();
        }
    }
}