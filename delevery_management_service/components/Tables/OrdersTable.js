import React from "react";

const OrdersTable = () => {
  return (
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    Title
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Description
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Commision offered
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Placed By
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple iMac 27&#34;
                  </th>
                  <td class="px-4 py-3">PC</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">300</td>
                  <td class="px-4 py-3">
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple iMac 20&#34;
                  </th>
                  <td class="px-4 py-3">PC</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">200</td>
                  <td class="px-4 py-3">
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple iPhone 14
                  </th>
                  <td class="px-4 py-3">Phone</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">1237</td>
                  <td class="px-4 py-3">
                    {" "}
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple iPad Air
                  </th>
                  <td class="px-4 py-3">Tablet</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">4578</td>
                  <td class="px-4 py-3">
                    {" "}
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Xbox Series S
                  </th>
                  <td class="px-4 py-3">Gaming/Console</td>
                  <td class="px-4 py-3">Microsoft</td>
                  <td class="px-4 py-3">56</td>
                  <td class="px-4 py-3">
                    {" "}
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    PlayStation 5
                  </th>
                  <td class="px-4 py-3">Gaming/Console</td>
                  <td class="px-4 py-3">Sony</td>
                  <td class="px-4 py-3">78</td>
                  <td class="px-4 py-3">
                    {" "}
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Xbox Series X
                  </th>
                  <td class="px-4 py-3">Gaming/Console</td>
                  <td class="px-4 py-3">Microsoft</td>
                  <td class="px-4 py-3">200</td>
                  <td class="px-4 py-3">
           
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple Watch SE
                  </th>
                  <td class="px-4 py-3">Watch</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">657</td>
                  <td class="px-4 py-3">
        
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    NIKON D850
                  </th>
                  <td class="px-4 py-3">Photo</td>
                  <td class="px-4 py-3">Nikon</td>
                  <td class="px-4 py-3">465</td>
                  <td class="px-4 py-3">
                  
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Monitor BenQ EX2710Q
                  </th>
                  <td class="px-4 py-3">TV/Monitor</td>
                  <td class="px-4 py-3">BenQ</td>
                  <td class="px-4 py-3">354</td>
                  <td class="px-4 py-3">
                  
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersTable;
