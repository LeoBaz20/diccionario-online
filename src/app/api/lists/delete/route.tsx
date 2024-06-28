import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import prisma from '@/lib/prisma';
import { authConfig } from "@/lib/auth";

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authConfig);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: 'ID es requerido' }, { status: 400 });
  }

  try {
    await prisma.list.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Lista eliminada correctamente' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
