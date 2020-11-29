import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Kowalski",
    text:
      "Teoria strun ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt ad dicta voluptas quibusdam harum, voluptate dolore perspiciatis eaque officiis. Doloremque unde eos minima fugit fuga itaque quia excepturi porro?",
  },
  {
    id: 2,
    title: "Jak się skutecznie uczyć?",
    author: "Tommy Jones",
    text:
      "Uczenie się ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt ad dicta voluptas quibusdam harum, voluptate dolore perspiciatis eaque officiis. Doloremque unde eos minima fugit fuga itaque quia excepturi porro?",
  },
  {
    id: 3,
    title: "Jak ugotować bigos?",
    author: "Bruce Lee",
    text:
      "Gotowanie ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt ad dicta voluptas quibusdam harum, voluptate dolore perspiciatis eaque officiis. Doloremque unde eos minima fugit fuga itaque quia excepturi porro?",
  },
];

const HomePage = () => {
  const articleList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{articleList}</div>;
};

export default HomePage;
