import React from "react";

function Main() {
  return (
    <div className="h-screen w-full" style={{ backgroundColor: "#edf3f3" }}>
      <div className="text-center">
        <div className="w-full h-28 flex items-center justify-center text-center">
          <img
            src="https://static.thenounproject.com/png/65293-200.png"
            alt=""
            className="w-14 h-26 bg-transparent pr-1"
          />
          <h4>unscreen</h4>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div
          className="mt-3	bg-white shadow"
          style={{ width: "558px", height: "474px" }}
        >
          <div className="w-full h-28 flex items-center justify-start">
            <img
              src="https://static.thenounproject.com/png/65293-200.png"
              alt=""
              className="w-14 h-24 ml-8"
            />
          </div>
          <div className="w-full h-8">
            <p className="ml-8 text-lg font-semibold">
              Set the admin area time zone
            </p>
          </div>
          <div className="h-40" style={{width:'487px'}}>
            <p className="ml-8 pt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              deleniti. Fugit totam iste dolorem, maiores fugiat obcaecati. Aut,
              ipsam earum? Dolor, deleniti maiores! Voluptates aut, porro quia
              sequi praesentium dicta. Ipsa corrupti alias reprehenderit
              repellat.
            </p>
          </div>
          <div className="h-16 w-full flex items-center justify-center border-gray-300">
            <div className=" w-full text-center p-2.5 no-underline text-base text-gray-400 px-7 my-2 mb-2">
              <select className="focus:outline-none focus:ring focus:border-gray-300 w-11/12 h-9 scroll text-center mr-5 rounded" style={{outline:'2px solid #BEBEBE'}}>
                <option className="w-full">Select The Location</option>
                <option className="w-full">option</option>
                <option className="w-full">option</option>
                <option className="w-full">option</option>
                <option className="w-full">option</option>
                <option className="w-full">option</option>
                <option className="w-full">option</option>
              </select>
            </div>
          </div>
            <div className="w-full h-24 flex items-center justify-center">
                <button className="w-10/12 h-8 bg-blue-600 text-white mr-5 mb-10">Set timezone</button>
            </div>
        </div>
        </div>
      </div>
  );
}

export default Main;
// <div className="bg-gray-200" style={{width:'558px', height:'474px'}}></div>
