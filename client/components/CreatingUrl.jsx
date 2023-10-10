"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "react-toastify";

const CreatingUrl = () => {
  const { data: session } = useSession();
  const [post, setPost] = useState({
    url: "",
  });

  const CREATE_URL = "http://localhost:8080/url";

  const altetSucesses = async () => {
    toast.success("Short URl is generated 🎉", {
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const altetError = async () => {
    toast.error("An error occurred while creating the URL 🫣", {
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(CREATE_URL, {
        url: post.url,
        userId: session?.user.id,
      })
      .then((res) => {
        altetSucesses();
        console.log("res:", res.data.message);
      })
      .catch((error) => {
        altetError();
        console.log("error:", error);
      });
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <>
      <section className="w-full max-w-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-4 rounded-lg shadow-md flex"
        >
          <input
            value={post.url}
            type="url"
            onChange={(e) => setPost({ ...post, url: e.target.value })}
            placeholder="URL"
            required
            className="form_input flex-grow mr-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            className="bg-blue-400 text-white px-5 py-1 rounded-md hover:bg-blue-500 transition duration-300"
          >
            Enter
          </button>
        </form>
      </section>
    </>
  );
};

export default CreatingUrl;
