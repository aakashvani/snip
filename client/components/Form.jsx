"use client";

import axios from "axios";

const Form = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = event.target.url.value;

    try {
      const response = await axios.post("http://localhost:8080/url", {
        url,
      });
      console.log("Shortened URL:", response.data);
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
    <section className="w-full h-auto p-2">
      <form
        className="relative flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="url"
          placeholder="Enter a URL to shorten"
          name="url"
          required
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
  );
};

export default Form;
