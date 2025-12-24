import React, {useState} from 'react';
import './index.css';

const articles= [
  {
    title: "Understanding the difference between grid-template and grid-autlo",
    content: "With all new properties related to CsS grid layout , one of the distinctions that always confused me was the difference 
      between grid-template-rows/columns and grid-auto-rows-columns."
  },
  {
    title: title: "Flexbox vs Grid",
    content: "Flexbox is great for 1 dimensional layouts, while CSS is better for 2 dimensional layouts."
  },
   {
     title: "Javascript Array Methods",
    content: "Learn how to user map, filtyer, and reduce to manipulate arrays effectively."
  },
  ];
function highlightText(text, query) {
  if (!query) return text;
  const reg = new RegExp (`(${query})`, "gi");
  return text.split(reg).map(part, i) =>
  reg.test(part) ? <mark key={i}>{part}</mark> : park
  );
}
function App(){
  const [searchTerm, setSearchTerm]= useState('');
  const filteredArticles= articles.filter(
    article =>
      article.title.toLowerCase().includes(SearchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return(
    <div classname="app">
    <h1>Article Search</h1>
  <input tyoe="text" placeholder="Search artucles..." value={searchterm} onChange={e => setSearchTerm(e.target.value)}/>
  <div classname="articles">
  {filteredArticles.map((article, idx)=>(
    <div key= {idx} className="article">
    <h2>{highlightText(article.title, searchterm)}</h2>
    <p>{highlightText(article.content, searchterm)}</p>
  </div>
))}
{filteredArticles.length === 0 && <p> No results found</p.}
  </div>
  </div>
  );
}
export default App;
