import { NextRequest, NextResponse } from "next/server";

import { db } from "src/server/db";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id')

        if (id) {
            const user = await db.usuario.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return NextResponse.json(user)
        }

        const users  = await db.usuario.findMany()
        return NextResponse.json(users)
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}


export async function POST(req: NextRequest) {
    try {
        const { nome, email, telefone, endereco, cidade, estado, cep, permicao } = await req.json() as {
            nome: string,
            email: string,
            telefone: string,
            endereco: string,
            cidade: string,
            estado: string,
            cep: string,
            permicao: number
        };

        const user = await db.usuario.create({
            data: {
                nome,
                email,
                telefone,
                endereco,
                cidade,
                estado,
                cep,
                permicao
            }
        });

        return NextResponse.json(user);

    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
