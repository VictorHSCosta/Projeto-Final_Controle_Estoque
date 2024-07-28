import { NextRequest, NextResponse } from "next/server";

import { db } from "src/server/db";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id')
        const email = req.nextUrl.searchParams.get("email")
        const nome = req.nextUrl.searchParams.get("nome")

        if (id) {
            const user = await db.usuario.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return NextResponse.json(user)
        }

        else if (email) {
            const user = await db.usuario.findUnique({
                where: {
                    email: String(email)
                }
            })
            return NextResponse.json(user)
        }

        else if (nome) {
            const user = await db.usuario.findMany({
                where: {
                    nome: String(nome)
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
        const { nome, email, telefone, endereco, permissao } = await req.json() as {
            nome: string,
            email: string,
            telefone: string,
            endereco: string,
            permissao: number
        };

        const user = await db.usuario.create({
            data: {
                nome,
                email,
                telefone,
                endereco,
                permissao
            }
        });

        return NextResponse.json(user);

    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const { id, nome, email, telefone, endereco,permissao } = await req.json() as {
            id: number,
            nome: string,
            email: string,
            telefone: string,
            endereco: string,
            permissao: number
        };

        const user = await db.usuario.update({
            where: {
                id
            },
            data: {
                nome,
                email,
                telefone,
                endereco,
                permissao
            }
        });

        return NextResponse.json(user);

    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const id = Number(req.nextUrl.searchParams.get('id'))

        if (id) {
            const user = await db.usuario.delete({
            where: {
                id
            }
            })
            return NextResponse.json(user);
        }
        

    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}