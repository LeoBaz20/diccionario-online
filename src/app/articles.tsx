"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import ArticleCard from "../components/article-card";

const ARTICLES = [
  {
    img: "/image/art-1.jpg",
    title: "Cómo mejorar tu vocabulario en 5 pasos simples",
    desc: "Este artículo presenta cinco pasos simples que puedes seguir para mejorar tu vocabulario en cualquier idioma de manera efectiva.",
  },
  {
    img: "/image/art-1.jpg",
    title: "Consejos para aprender nuevas palabras más rápido",
    desc: "Descubre algunos consejos útiles y estrategias probadas para aprender nuevas palabras de forma más rápida y eficiente.",
  },
  {
    img: "/image/art-1.jpg",
    title: "Los beneficios de ser bilingüe",
    desc: "En este artículo, exploramos los numerosos beneficios de ser bilingüe, desde ventajas cognitivas hasta oportunidades profesionales.",
  },
];


export function Articles() {
  return (
    <section className="container mx-auto px-8 py-20">
      <Typography variant="h2" color="blue-gray">
        Articulos
      </Typography>
      <Typography
        variant="lead"
        className="my-2 w-full font-normal !text-gray-500 lg:w-5/12"
      >
¡Descubre las novedades en el mundo de los idiomas y la lingüística! No olvides suscribirte a nuestro blog para recibir las últimas noticias.
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {ARTICLES.map((props, idx) => (
          <ArticleCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Articles;
