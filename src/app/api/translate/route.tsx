import { NextRequest, NextResponse } from 'next/server';
import * as deepl from 'deepl-node';

const authKey = "8b850ce7-2318-41ed-b161-00314d79c1bf:fx"; // Reemplaza con tu clave de autenticación
const translator = new deepl.Translator(authKey);

export async function POST(req: NextRequest) {
  try {
    const { text, targetLang, sourceLang } = await req.json();

    if (!text || !targetLang) {
      return NextResponse.json({ error: 'Faltan parámetros necesarios' }, { status: 400 });
    }

    const result = await translator.translateText(
      text,
      sourceLang === 'detect' ? null : sourceLang, // Asegúrate de usar minúsculas
      targetLang
    );

    return NextResponse.json({ translatedText: result.text });
  } catch (error) {
    console.error('Error al traducir el texto:', error);
    return NextResponse.json({ error: 'Error al traducir el texto' }, { status: 500 });
  }
}