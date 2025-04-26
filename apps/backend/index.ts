import express from "express"
import { prisma } from "db/client"

const app = express();
require('dotenv').config();

app.use(express.json());

app.get("/users", async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({ error: e.message });

    }
})

app.post("/users", async (req, res) => {

    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ error: "Username and password are required" });
            return;
        }

        await prisma.user.create({
            data: {
                username,
                password
            }
        })

        res.status(200).json({ message: "user created succefully" });
    }
    catch (err) {
        res.status(500).json({ error: e.message });
    }
})

app.listen(8000, () => console.log("listening on port 8000"));