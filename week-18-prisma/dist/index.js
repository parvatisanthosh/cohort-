"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
app.get("/users", async (req, res) => {
    const users = await client.user.findMany();
    res.json(users);
});
app.get("/todos/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await client.user.findFirst({
        where: {
            id: id
        },
        select: {
            todo: true
        }
    });
    res.json(user);
});
async function createUser() {
    const user = await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todo: true
        }
    });
    console.log(user);
}
createUser();
app.listen(3000);
//# sourceMappingURL=index.js.map