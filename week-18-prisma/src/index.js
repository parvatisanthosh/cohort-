import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
async function createUser() {
    await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });
}
createUser();
//# sourceMappingURL=index.js.map