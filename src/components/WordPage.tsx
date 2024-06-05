"use client";

import React, { useState } from 'react';

import {
  IconButton,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "../components/MaterialTailwind";

export const WordPage = ({ definition }) => {
  const meanings = definition.meanings || [];
  const phonetics = definition.phonetics || [];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar el clic en el IconButton
  const handleIconButtonClick = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar la visibilidad del menú desplegable
  };


  return (
    <div className="min-h-screen bg-white text-black p-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-left mb-12 flex items-center">
          <h1 className="text-6xl font-bold">{definition.word}</h1>
          <div className="ml-4">
            <Menu>
              <MenuHandler>
              <IconButton color="black" variant='outlined' size="lg" onClick={handleIconButtonClick}>
              <i className="fas fa-star" />
            </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Crear nueva lista</MenuItem>
                <hr className="my-3" />
                <MenuItem>Favoritos</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </header>
        <main className="grid grid-cols-3 gap-8">
          <section className="col-span-2">
            {meanings.map((meaning, index) => (
              <div key={index} className={`mb-8 ${index < meanings.length - 1 ? 'pb-8 border-b border-gray-300' : ''}`}>
                <h2 className="text-lg text-gray-600">{meaning.partOfSpeech}</h2>
                {meaning.definitions.map((def, idx) => (
                  <div key={idx} className="mb-4">
                    <p className="text-2xl">{idx + 1}. {def.definition}</p>
                    {def.example && <p className="italic text-gray-600">"{def.example}"</p>}
                    {def.synonyms && def.synonyms.length > 0 && (
                      <p className="mt-4">
                        <span className="text-gray-600">sinónimos: </span>
                        {def.synonyms.map((synonym, idx) => (
                          <span key={idx}>
                            <a href={`/${synonym}`} className="text-blue-500">{synonym}</a>
                            {idx < def.synonyms.length - 1 && ', '}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </section>
          <aside className="space-y-8">
            <div>
              <h2 className="text-lg text-gray-600">Phonetics</h2>
              {phonetics.map((phonetic, index) => (
                <div key={index} className="mb-8">
                  <p className="text-2xl">{phonetic.text}</p>
                  {phonetic.audio && (
                    <audio controls>
                      <source src={phonetic.audio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                  {phonetic.sourceUrl && (
                    <p className="text-sm text-gray-600">
                      Source: <a href={phonetic.sourceUrl} target="_blank" className="text-blue-500">Link</a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default WordPage;

