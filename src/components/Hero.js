import React from "react";
export default function Hero() {
  return (
    <section className="hero">
      <img
        src="images/best-dog-breed.jpeg"
        alt="photogrid"
        className="hero--photo"
      />
      <h1 className="hero--header"> The Online Doggo Experience!</h1>
      <p className="hero--text">
        Join millions of good dogs in their journey to self-discovery and human
        loving.
      </p>
    </section>
  );
}
