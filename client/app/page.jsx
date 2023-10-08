import CreatingUrl from "@/components/CreatingUrl";
import UrlsDisplay from "@/components/UrlsDisplay";
import React from "react";

const Home = () => {
  return (
    <section className="container w-full flex flex-center flex-col">
      <h1 className="text-center font-bold text-2xl mb-2">
        Shortern any Url here!!!
      </h1>

      {/* input for url section*/}
      <main className="container grid grid-row-2 divide-x h-1/2">
        <CreatingUrl />
        <UrlsDisplay />
      </main>
    </section>
  );
};

export default Home;
