"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

const CreatingUrl = () => {
  const { data: session } = useSession();

  // console.log(session?.user.id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = session?.user.email;
    const url = event.target.url.value;
    console.log("url", url);

    try {
      const response = await fetch("http://localhost:8080/url", {
        method: "POST",
        body: JSON.stringify({
          url: url,
          userId: userId,
        }),
      });

      console.log(response.message);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <>
      <section className="w-full max-w-full flex-start flex-col">
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center"
        >
          <input
            type="url"
            placeholder="Enter a URL to shorten"
            required
            // onChange={(e) => setUrl(e.target.value)}
            // value={url}
            name="url"
            className="url_input peer"
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            Shorten
          </button>
        </form>
      </section>
    </>
  );
};

export default CreatingUrl;
