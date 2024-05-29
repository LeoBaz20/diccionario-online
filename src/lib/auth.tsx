import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

import prisma from "./prisma";


export const authConfig: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Sign in",
        credentials: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "example@example.com",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials || !credentials.email || !credentials.password)
            return null;
  
           // Consultar el usuario en la base de datos con Prisma
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          return null;
        }

        // Comparar la contraseña ingresada con la almacenada en la base de datos
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        // Excluir la contraseña del objeto de usuario retornado
        const { password, ...userWithoutPassword } = user;

        return userWithoutPassword as User;
      },
    }),
    
  ],
  };