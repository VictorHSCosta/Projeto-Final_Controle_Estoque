import { prisma } from "prisma";

const main = async () => {
    const administrador = await prisma.administrador.create({
        data: {
            nome: "Administrador",
            foto: "https://www.google.com.br",
        }
    }
)};

main()
    .then(async () => await prisma.$disconnect())
    .catch(async(e) => {
        console.log(e); 
        await prisma.$disconnect();
    }
);