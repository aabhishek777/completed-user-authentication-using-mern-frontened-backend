import Jwt from "jsonwebtoken"


export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(400).json({ msg: "Invalid Token" })
        }
        const user = Jwt.verify(token, "fhgsdfgsdfjkgsdhgfhgsdgfhsgd");
        if (!user) {
            return res.status(400).json({ msg: "Invalid Token" })

        }
        req.email = user.email;
        req.token = token;
        next();

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error })
    }
}