import React from "react";

const UrlsDisplay = () => {
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
                Clicks
              </th>
            </tr>
          </thead>

          <tbody className="text-center">
            <tr className="bg-white border-b">
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Copy!!
                </a>
              </td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
            </tr>

            {/* Add more table rows here */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UrlsDisplay;
