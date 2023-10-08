import React from "react";

const UrlsDisplay = () => {
  return (
    <section>
      <table>
        <thead className="  w-full text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Short Url
            </th>
            <th scope="col" className="px-6 py-3">
              Clicks
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Copy!!
              </a>
            </td>
            <td className="px-6 py-4 ">Silver</td>
            <td className="px-6 py-4">Laptop</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default UrlsDisplay;
