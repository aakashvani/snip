"use client";
import { useContext, useState } from "react";
import { Context } from "@/app/page";

const UrlsDisplay = () => {
  const { urlData } = useContext(Context);

  // console.log(urlData);

  const [copiedLink, setCopiedLink] = useState(null);

  const handleCopyLink = (link) => {
    setCopiedLink(link);
  };

  return (
    <section className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 font-Poppins">
      {urlData?.map(({ _id, title, shortId, visitHistory }) => (
        <div key={_id} className="shadow-md rounded-lg">
          <p className="">{title}</p>
          <p className=" text-blue-500 italic">
            <a
              href={`http://localhost:8080/url/${shortId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`${title}/${shortId}`}
            </a>
          </p>
          <div className="flex  justify-around p-3">
            <div className=" bg-slate-400 px-4 py-2 rounded-md">
              <p>{visitHistory.length} Clicks</p>
            </div>

            <button
              className="bg-slate-400 px-4 py-2 rounded-md"
              onClick={() =>
                handleCopyLink(`http://localhost:8080/url/${shortId}`)
              }
            >
              Copy
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UrlsDisplay;
