"use client";

// app/[word]/page.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Head from 'next/head';
import { SearchBar, WordPage, Footer } from "../../components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WordPageContainer = () => {
  const { word } = useParams(); // Reemplazar useRouter con useParams
  const [definition, setDefinition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (word) {
      const fetchDefinition = async () => {
        try {
          const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
          setDefinition(response.data[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchDefinition();
    }
  }, [word]);

  if (loading) {
    return <div>
    </div>;
  }

  if (!definition) {
    return <div>No definition found.</div>;
  }

  return (
    <div>
      <ToastContainer />
      <Head>
        <title>{definition.word}</title>
      </Head>
      <SearchBar />
      <WordPage definition={definition} />
      <Footer />
    </div>
  );
}

export default WordPageContainer;
