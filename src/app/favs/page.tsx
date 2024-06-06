"use client";

import ListasUI from '@/components/ListasUI';
import { Footer } from '@/components';

export default function Home() {
  const lists = [
    { title: 'Universidad', wordCount: 4, color: 'blue' },
    { title: 'Favorites', wordCount: 1, color: 'blue' },
  ];

  return (
    <>
    <ListasUI lists={lists}/>
    <Footer/>
    </>
  );
}