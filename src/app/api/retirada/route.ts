import { NextRequest, NextResponse } from "next/server";

import { db } from "src/server/db";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id')

        if (id) {
            const livro = await db.retirar.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return NextResponse.json(livro)
        }

        const livros = await db.retirar.findMany()
        return NextResponse.json(livros)
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}

export async function POST(req: NextRequest) {
    try {
        const { idUsuario, idLivro , quantidade ,  dataRetirada} = await req.json() as {
            idUsuario: number,
            idLivro: number,
            quantidade: number,
            dataRetirada: string
        };
        const retirada = await db.retirar.create({
            data: {
                idUsuario,
                idLivro,
                quantidade,
                dataRetirada
            }
        })
        return NextResponse.json(retirada)
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const { id, idUsuario, idLivro , quantidade ,  dataRetirada} = await req.json() as {
            id: number,
            idUsuario: number,
            idLivro: number,
            quantidade: number,
            dataRetirada: string
        };

        const retirada = await db.retirar.update({
            where: {
                id
            },
            data: {
                idUsuario,
                idLivro,
                quantidade,
                dataRetirada
            }
        })
        return NextResponse.json(retirada)
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json() as { id: number };

        await db.retirar.delete({
            where: {
                id
            }
        })
        return NextResponse.json({ message: 'Retirada deletada com sucesso' })
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}