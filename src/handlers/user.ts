import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";


// Create a function that allows to make a user
export const createNewUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })

    const token = createJWT(user);
    res.json({ token });
}

// Create a function that allows the sign-in

export const signIn = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })

    const isValid = await comparePasswords(req.body.password, user.password)

    if (!isValid) {
        res.status(401);
        res.json({ message: "Unauthorized" })
    }

    const token = createJWT(user);
    res.json({ token });
}