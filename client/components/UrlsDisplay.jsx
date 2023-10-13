"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const UrlsDisplay = () => {
  const [url, setUrl] = useState([]);
  const [len, setLen] = useState(0);
  const [copiedLink, setCopiedLink] = useState(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();
  let userId = session?.user.id;
  const getUrl = `http://localhost:8080/url/all-urls/${userId}`;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(getUrl);
        setUrl(response.data.urls);
        console.log(response?.data?.urls.length);
        setLen(response?.data?.urls.length);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log("error:", error);
      }
    })();
  }, [len]);

  const handleCopyLink = (link) => {
    // Create a temporary input element to copy the link
    const input = document.createElement("input");
    input.value = link;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    // Set the copiedLink state to show a message
    setCopiedLink(link);
  };

  if (error) {
    return <p className="p-2 m-auto text-center">🧐 Something went wrong 🧐</p>;
  }

  if (loading) {
    return <h1 className="p-2 m-auto text-center">Loading...</h1>;
  }

  return (
    <section className="flex justify-center mt-2">
      <div className="w-full max-h-screen p-4 overflow-y-auto bg-white rounded-lg shadow-md sm:w-3/4 md:w-10/12 lg:w-2/3 xl:w-1/2">
        <table className="w-full">
          <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Short Url
              </th>
              <th scope="col" className="px-6 py-3">
                Real Link
              </th>
              <th scope="col" className="px-6 py-3">
                Clicks
              </th>
            </tr>
          </thead>

          <tbody className="text-center">
            {url.map((item) => (
              <tr key={item._id}>
                <td>
                  <button
                    onClick={() =>
                      handleCopyLink(`http://localhost:8080/${item.shortId}`)
                    }
                  >
                    Copy
                  </button>
                </td>
                <td>
                  <a
                    href={`http://localhost:8080/url/${item.shortId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`http://localhost:8080/url/${item.shortId}`}
                  </a>
                </td>
                <td>{item.redirectUrl}</td>
                <td>{item.visitHistory.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UrlsDisplay;
