import React, { useEffect, useState } from 'react';
import Receipts from "./Receipts";
import './App.css';

function App() {

  const APIID = "18b79d0d";
  const APIKEY = "2e5fcabfba176a96e5d1f3098e84b40b";

  const [receipt, setReceipt] = useState([]);
  const [search, setSearch] = useState("");
  const[query,setQuery] = useState('chicken');
  useEffect(() => {
    getReceipts();

  }, [query]);

  const getReceipts = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APIID}&app_key=${APIKEY}`);
    const data = await response.json();
    setReceipt(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value)
    console.log(search)
  };
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange = {updateSearch} />
        <button className="search-button" type="submit">search</button>
      </form>
      {receipt.map(receipt => (
        <Receipts
        key = {receipt.recipe.label}
        title = {receipt.recipe.label}
        calories = {receipt.recipe.calories}
        url_image = {receipt.recipe.image}
        />
      ))};
    </div>
  );
}

export default App;
