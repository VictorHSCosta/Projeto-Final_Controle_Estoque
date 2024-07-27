import { NextRequest, NextResponse } from "next/server";

import { db } from "src/server/db";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id')

        if (id) {
            const livro = await db.adicionar.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return NextResponse.json(livro)
        }

        const livros = await db.adicionar.findMany()
        return NextResponse.json(livros)
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}

export async function POST(req: NextRequest) {
    try {
        const { idUsuario, idLivro , quantidade ,  dataAdicao} = await req.json() as {
            idUsuario: number,
            idLivro: number,
            quantidade: number,
            dataAdicao: string
        };
        const retirada = await db.adicionar.create({
            data: {
                idUsuario,
                idLivro,
                quantidade,
                dataAdicao
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
        const { id, idUsuario, idLivro , quantidade ,  dataAdicao} = await req.json() as {
            id: number,
            idUsuario: number,
            idLivro: number,
            quantidade: number,
            dataAdicao: string
        };
        const retirada = await db.adicionar.update({
            where: {
                id
            },
            data: {
                idUsuario,
                idLivro,
                quantidade,
                dataAdicao
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
        await db.adicionar.delete({
            where: {
                id
            }
        })
        return NextResponse.json({ message: 'Livro removido com sucesso' })
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}