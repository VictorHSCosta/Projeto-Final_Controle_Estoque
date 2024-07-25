import { prisma } from "prisma";

const main = async () => {
    const user = await prisma.user.create({
        data: {
            email: ""
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