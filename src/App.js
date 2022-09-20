import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import { Divider } from "@mui/material";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const cards = data
    .filter((item) => {
      return item.title.toLowerCase().includes(searchTerm);
    })
    .map((item) => {
      return <Card key={item.id} item={item} />;
    });
  return (
    <div className="div--all">
      <Navbar />
      <Hero />
      <input
        type="text"
        placeholder="search for classes"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search--bar"
      />
      <Divider />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
