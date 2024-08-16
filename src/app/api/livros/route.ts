import { NextRequest, NextResponse } from "next/server";

import { db } from "src/server/db";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id')
        //const titulo = req.nextUrl.searchParams.get('titulo');

        if (id) {
            const livro = await db.livro.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return NextResponse.json(livro)
        }
        
        // if (titulo) {
        //     const livros = await db.livro.findMany({
        //         where: {
        //             titulo: {
        //                 contains: titulo
        //             }
        //         }
        //     });
        //     return NextResponse.json(livros);
        // }

        const livros = await db.livro.findMany()
        return NextResponse.json(livros)
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}

export async function POST(req: NextRequest) {
    try {
        const { titulo, quantidade, descricao, preco } = await req.json() as {
            titulo: string,
            quantidade: number,
            descricao: string,
            preco: number
        };

        const livro = await db.livro.create({
            data: {
                titulo,
                quantidade,
                descricao,
                preco
            }
        })
        return NextResponse.json(livro)
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const { id, titulo, quantidade, descricao, preco } = await req.json() as {
            id: number,
            titulo: string,
            quantidade: number,
            descricao: string,
            preco: number
        };

        const livro = await db.livro.update({
            where: {
                id
            },
            data: {
                titulo,
                quantidade,
                descricao,
                preco
            }
        })
        return NextResponse.json(livro)
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json() as {
            id: number
        };

        await db.livro.delete({
            where: {
                id
            }
        })
        return NextResponse.json({ message: 'Livro deletado com sucesso' })
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}