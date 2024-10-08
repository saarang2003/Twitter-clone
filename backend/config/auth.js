import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config({
    path : "../config/.env"
})

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token; // Corrected this line
        console.log(token);
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false
            });
        }

        const decode = await jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(decode);
        req.user = decode.userId;
        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};


export default isAuthenticated;