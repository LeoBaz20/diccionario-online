import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import prisma from '@/lib/prisma';
import { authConfig } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const session = await getServerSession(authConfig);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    // Consulta la base de datos para obtener las listas y el conteo de palabras en cada lista
    const lists = await prisma.list.findMany({
      where: { userId },
      include: {
        _count: {
          select: {
            words: true,
          },
        },
      },
    });

    const formattedLists = lists.map(list => ({
      ...list,
      wordCount: list._count.words,
    }));

    return NextResponse.json(formattedLists, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
