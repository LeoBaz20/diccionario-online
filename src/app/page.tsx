// components
import { Navbar, Footer, SearchBar } from "../components";
import { useSession, signIn, signOut, SessionProvider } from 'next-auth/react';

// sections
import Hero from  "./hero";
import Articles from "./articles";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export default async function Campaign() {
  return (
    <>
      <SearchBar/>
      <Hero />
      <Footer />
    </>
  );
}
