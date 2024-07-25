import { prisma } from "prisma";

const main = async () => {
    const user = await prisma.usuario.create({
        data: {
            nome: "Victor",
            email: "123@gmail.com",
            telefone: "123456789",
            endereco: "Rua 1",
            cidade: "Cidade 1",
            estado: "Estado 1",
            cep: "12345678",
            permicao : 1
        }
    });    

    const user2 = await prisma.usuario.create({
        data: {
            nome: "bruno",
            email: "1234@gmail.com",
            telefone: "12345678910",
            endereco: "Rua 2",
            cidade: "Cidade 2",
            estado: "Estado 2",
            cep: "12345655",
            permicao : 2
        }
    });  
};

main()
    .then(async () => await prisma.$disconnect())
    .catch(async(e) => {
        console.log(e); 
        await prisma.$disconnect();
    }
);