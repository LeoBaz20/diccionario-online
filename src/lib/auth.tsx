import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
  

          const fakeDbUser = {
            email: 'hola@hola',
            password: 'hola',
            createdAt: new Date(),
            id: 1
          };

          const dbUser = fakeDbUser;
  
          //Verify Password here
          //We are going to use a simple === operator
          //In production DB, passwords should be encrypted using something like bcrypt...
          if (dbUser.email == credentials.email && dbUser.password === credentials.password) {
            const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
            return dbUserWithoutPassword as User;
          }
  
          return null;
        },
      }),
    ],
  };