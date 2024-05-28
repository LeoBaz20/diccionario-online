import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, lastname, email, password } = req.body;

    if (!name || !lastname || !email || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          lastname,
          email,
          password: hashedPassword,
        },
      });
      res.status(201).json(newUser);
    } catch (error) {
      if (error.code === 'P2002') {
        res.status(400).json({ error: 'El email ya está registrado' });
      } else {
        res.status(500).json({ error: 'Error al crear el usuario' });
      }
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}