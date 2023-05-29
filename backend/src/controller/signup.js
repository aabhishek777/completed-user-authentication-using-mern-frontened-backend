
import pool from '../db/db.js';
import Jwt from 'jsonwebtoken';




export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;



        const q = 'INSERT INTO user_reg (name,email,password) VALUES ($1,$2,$3) RETURNING *'
        const v = [name, email, password]
        await pool.query(q, v, (err, resp) => {
            if (err) console.log(err);
            else console.log(resp);
        })
        console.log(`${name}`)
        res.status(201).send(` success `)

    }
    catch (e) {
        console.log(e)
        res.status(500).send(e);


    }
}

export const login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;

        console.log(email, password);

        const findQuery = `Select * from user_reg where email = $1 AND password = $2 `;


        const data = await pool.query(findQuery, [email, password]);
        if (data.rows < 1) {
            res.status(400).json({ msg: "Invalid Credintials" })
        }

        const token = Jwt.sign({
            email: data.rows[0].email,
        }, "fhgsdfgsdfjkgsdhgfhgsdgfhsgd", { expiresIn: '24h' });

        console.log(token, "token");

        res.status(200).json({ msg: "Login success", data: data.rows[0], token: token })


    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error });
    }
}

export const loadUser = async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM user_reg WHERE email=$1", [req.email]);
        res.status(200).json({ data: data.rows[0], token: req.token });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error });
    }
}



