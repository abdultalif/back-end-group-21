import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export const authentication = async (req, res, next) => {
    const tokenHeader = req.get('Authorization');

    if (!tokenHeader) {
        res.status(401).json({
            errors: "token ga ada"
        }).end();
    } else {
        const [bearer, token] = tokenHeader.split(' ');

        if (bearer !== 'Bearer') {
            res.status(401).json({
                errors: "masih ada"
            }).end();
        } else {

            const user = await prismaClient.user.findFirst({
                where: {
                    token: token
                }
            });
            console.log(user)
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
}