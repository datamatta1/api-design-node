import jwt from "jsonwebtoken"

export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id, 
        username: user.username
    }, 
    process.env.JWT_SECRET
    );
    return token;
}

export const protect = (req, res) => {
    const bearer = req.headers.authorization; 

    if(!bearer || !bearer.startsWith("Bearer ")) {
        return res.status(401).json({message: "Unauthorized"})
    }
}