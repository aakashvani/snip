import CreatingUrl from "@/components/CreatingUrl";
import UrlsDisplay from "@/components/UrlsDisplay";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col w-full flex-center">
      <h1 className="mb-2 text-2xl font-bold text-center">
        Shorten any Url here!!!
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
