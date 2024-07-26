import { NextRequest, NextResponse } from "next/server";

import { db } from "src/server/db";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id')

        if (id) {
            const autor = await db.autor.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return NextResponse.json(autor)
        }

        const autors  = await db.autor.findMany()
        return NextResponse.json(autors)
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}

export async function POST(req: NextRequest) {
    try {
        const { nome , foto } = await req.json() as {
            nome: string,
            foto: string,
        };
        const autor = await db.autor.create({
            data: {
                nome,
                foto
            }
        })
        return NextResponse.json(autor)
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const { id, nome, foto } = await req.json() as {
            id: number,
            nome: string,
            foto: string,
        };
        const autor = await db.autor.update({
            where: {
                id
            },
            data: {
                nome,
                foto
            }
        })
        return NextResponse.json(autor)
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
        await db.autor.delete({
            where: {
                id
            }
        })
        return NextResponse.json({message: 'Autor deletado com sucesso'})
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.error()
        }
    }
}