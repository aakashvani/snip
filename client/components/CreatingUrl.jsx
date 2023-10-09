"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Form from "./Form";

const CreatingUrl = () => {
  const { data: session } = useSession();
  const [post, setPost] = useState({
    url: "",
  });

  // console.log(session?.user.id);
  const CREATE_URL = "http://localhost:8080/url";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(CREATE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: post.url,
          userId: session?.user.id,
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
        <Form
          post={post}
          setPost={setPost}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
        />
      </section>
    </>
  );
};

export default CreatingUrl;
