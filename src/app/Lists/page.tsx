"use client";

import ListUI from '@/components/Lists/ListUI'
import { Footer, SearchBar } from '@/components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Favs() {

  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    router.push('/signin'); 
    return null;
  }

  return (
    <>
    <ToastContainer/>
    <SearchBar/>
    <ListUI/>
    <Footer/>
    </>
  );
}