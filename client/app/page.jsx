import CreatingUrl from "@/components/CreatingUrl";
import UrlsDisplay from "@/components/UrlsDisplay";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex flex-center flex-col">
      <h1 className="text-center font-bold text-2xl mb-2">
        Shortern any Url here!!!
      </h1>

      {/* input for url section*/}
      <main className="container">
        <CreatingUrl />
        <UrlsDisplay />
      </main>
    </section>
  );
};

export default Home;
