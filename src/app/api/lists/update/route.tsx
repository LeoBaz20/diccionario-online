import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import prisma from '@/lib/prisma';
import { authConfig } from '@/lib/auth';

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authConfig);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id, name } = await req.json();

  if (!id || !name) {
    return NextResponse.json({ error: 'ID and name are required' }, { status: 400 });
  }

  try {
    const updatedList = await prisma.list.update({
      where: { id },
      data: { name },
    });

    return NextResponse.json(updatedList, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
