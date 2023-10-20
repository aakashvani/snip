"use client";
import CreatingUrl from "@/components/CreatingUrl";
import UrlsDisplay from "@/components/UrlsDisplay";
import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import { useSession } from "next-auth/react";

export const ContextGet = createContext();

const Home = () => {
  const [urlData, setUrlData] = useState([]);
  const [count, setCount] = useState(0);

  const { data: session } = useSession();
  let userId = session?.user.id;
  // console.log(userId);
  // const getUrl = `http://localhost:8080/url/all-urls/${userId}`;
  const getUrl = `https://snip-server-production.up.railway.app/url/all-urls/${userId}`;

  const onNameChange1 = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    async function handleGetData() {
      const data = await axios.get(getUrl);
      setUrlData(data.data.urls);
      // setLen(data.data.urls.visitHistory.length);
      // console.log(data);
    }
    handleGetData();
  }, [userId, count]);
  // }, [userId]);

  // console.log("url",url)
  // console.log("len",len)

  return (
    <ContextGet.Provider value={{ urlData }}>
      <section className="flex flex-col w-full flex-center">
        <h1 className="mb-2 text-2xl font-bold text-center">
          Shorten any Url here!!!
        </h1>

        {/* input for url section*/}
        <main className="container flex flex-col items-center justify-center w-full gap-5 lg:flex">
          <div className="w-full p-2">
            <CreatingUrl onNameChange={onNameChange1} />
            {/* <CreatingUrl  /> */}
          </div>

          <div className="w-full p-2 text-center">
            <UrlsDisplay />
          </div>
        </main>
      </section>
    </ContextGet.Provider>
  );
};

export default Home;
