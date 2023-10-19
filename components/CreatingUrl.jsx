import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useSession } from "next-auth/react";



const CreatingUrl = ({onNameChange}) => {
// const CreatingUrl = () => {
// post req start --------->
  const [post, setPost] = useState({
    title: "",
    url: "",
  });
  const [xyz, setXyz] = useState("");
  const { data: session } = useSession();



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
        title: post.title,
        url: post.url,
        userId: session?.user.id,
      })
      .then((res) => {
        altetSucesses();
        console.log("res:", res.data.message);
        // setXyz()
        onNameChange(xyz)
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

  // post req end ------------>

  return (
    <>
      <section className=" flex items-center justify-center w-full ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md p-4 bg-white rounded-lg shadow-md"
        >
          <input
            value={post.title}
            type="text"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="Title"
            required
            className="  mr-2 border border-gray-300 rounded-md form_input focus:outline-none focus:ring focus:border-blue-400"
            onKeyDown={handleKeyDown}
          />
          <input
            value={post.url}
            type="url"
            onChange={(e) => setPost({ ...post, url: e.target.value })}
            placeholder="URL"
            required
            className="w-full p-2 mr-2 border border-gray-300 rounded-md form_input focus:outline-none focus:ring focus:border-blue-400"
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            className="px-5 py-2 text-white transition duration-300 bg-blue-400 rounded-md hover:bg-blue-500"
          >
            Enter
          </button>
        </form>
      </section>
    </>
  );
};

export default CreatingUrl;
