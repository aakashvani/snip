"use client";
import { useContext, useState } from "react";
import { ContextGet } from "@/app/page";

const UrlsDisplay = () => {
  const { urlData } = useContext(ContextGet);

  // console.log(urlData);

  const [copiedLink, setCopiedLink] = useState(null);

  const handleCopyLink = (link) => {
    // Create an input element to hold the URL
    const input = document.createElement("input");
    input.value = link;
    document.body.appendChild(input);

    // Select the input content and copy to clipboard
    input.select();
    document.execCommand("copy");

    // Remove the input element
    document.body.removeChild(input);
    setCopiedLink(link);
  };

  return (
    <section className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4 font-Poppins">
      {urlData?.map(({ _id, title, shortId, visitHistory }) => (
        <div key={_id} className="rounded-lg shadow-md">
          <p className="">{title}</p>
          <p className="italic text-blue-500 ">
            <a
              // href={`http://localhost:8080/url/${shortId}`}
              href={`https://snip-server-production.up.railway.app/url/${shortId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`${title}/${shortId}`}
            </a>
          </p>
          <div className="flex justify-around p-3">
            <div className="px-4 py-2 rounded-md  bg-slate-400">
              <p>{visitHistory.length} Clicks</p>
            </div>

            <button
              className="px-4 py-2 rounded-md bg-slate-400"
              onClick={() =>
                // handleCopyLink(`http://localhost:8080/url/${shortId}`)
                handleCopyLink(
                  `https://snip-server-production.up.railway.app/url/${shortId}`
                )
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
