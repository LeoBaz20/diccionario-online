"use client";

import ListUI from '@/components/ListUI'
import { Footer } from '@/components';

export default function Home() {
  const lists = [
    { title: 'Universidad', wordCount: 4, color: 'blue' },
    { title: 'Favorites', wordCount: 1, color: 'blue' },
    { title: 'Favorites', wordCount: 1, color: 'blue' },
  ];

  return (
    <>
    <ListUI lists={lists}/>
    <Footer/>
    </>
  );
}