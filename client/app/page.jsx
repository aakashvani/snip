"use client";
import CreatingUrl from "@/components/CreatingUrl";
import UrlsDisplay from "@/components/UrlsDisplay";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();
const Home = () => {
  const [urlData, setUrlData] = useState([]);
  const [len, setLen] = useState(0);

  const { data: session } = useSession();
  let userId = session?.user.id;
  console.log(userId);
  const getUrl = `http://localhost:8080/url/all-urls/${userId}`;

  useEffect(() => {
    async function handleGetData() {
      const data = await axios.get(getUrl);
      setUrlData(data.data.urls);
      // console.log(data);
    }
    handleGetData();
  }, [userId]);

  // console.log("url",url)

  return (
    <Context.Provider value={{ urlData }}>
      <section className="flex flex-col w-full flex-center">
        <h1 className="mb-2 text-2xl font-bold text-center">
          Shorten any Url here!!!
        </h1>

        {/* input for url section*/}
        <main className="container flex flex-col justify-center items-center lg:flex w-full gap-5">
          <div className="w-full p-2">
            <CreatingUrl />
          </div>
          <div className="w-full p-2 text-center">
            <UrlsDisplay />
          </div>
        </main>
        {/* <main className="container flex w-full justify-center gap-5">
        <div className="w-[30%] h-[75vh] bg-red-500  p-3 items-center flex flex-col justify-center">
          <p className=" font-Poppins text-lg  font-semibold">Create a Short URL</p>
          <CreatingUrl />
        </div>
        <div className="w-[70%] h-[75vh] bg-red-500 p-3">
          <UrlsDisplay />
        </div>
      </main> */}
      </section>
    </Context.Provider>
  );
};

export default Home;
