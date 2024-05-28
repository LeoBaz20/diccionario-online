import { useState } from "react";
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';

const languages = [
  { code: 'EN', name: 'Inglés' },
  { code: 'ES', name: 'Español' },
  { code: 'FR', name: 'Francés' },
];

const targetLanguages = [
  { code: 'EN-US', name: 'Inglés' },
  { code: 'ES', name: 'Español' },
  { code: 'FR', name: 'Francés' },
];

export function TranslateUI() {

  const [sourceLanguage, setSourceLanguage] = useState("detect");
  const [targetLanguage, setTargetLanguage] = useState("ES");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleSwapLanguages = () => {
    // Intercambiar los idiomas seleccionados
    const temp = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(temp);
  };

  const handleTranslate = async () => {
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          sourceLang: sourceLanguage === "detect" ? null : sourceLanguage.toLowerCase(),
          targetLang: targetLanguage.toLowerCase(),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setTranslatedText(data.translatedText);
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error al traducir el texto:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <div className="w-full max-w-7xl p-5 bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <select
            className="w-full md:w-1/2 h-12 px-4 py-2 mb-4 border border-gray-300 rounded-lg"
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option value="detect">Detectar Idioma</option>
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
            {/* Agregar más opciones de idiomas según sea necesario */}
          </select>
          <button
            className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-2 mb-4 ml-auto text-black bg-white rounded-lg hover:bg-stone-50"
            onClick={handleSwapLanguages}
            disabled={sourceLanguage === "detect"} // Deshabilitar si el idioma origen es "Detect Language"
          >
            <ArrowsRightLeftIcon className="w-6 h-6" />
          </button>
          <select
            className="w-full md:w-1/2 h-12 px-4 py-2 mb-4 border border-gray-300 rounded-lg"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            {targetLanguages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
            {/* Agregar más opciones de idiomas según sea necesario */}
          </select>
        </div>
        <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-4">
          <textarea
            className="w-full md:w-1/2 h-80 p-4 mb-4 border border-gray-300 rounded-lg resize-none"
            placeholder="Ingrese el texto a traducir"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
          <textarea
            className="w-full md:w-1/2 h-80 p-4 mb-4 border border-gray-300 rounded-lg resize-none"
            readOnly
            value={translatedText}
          ></textarea>
        </div>
        <button className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        onClick={handleTranslate}
        >
          Traducir
        </button>
      </div>
    </div>
  );
    
}

export default TranslateUI;