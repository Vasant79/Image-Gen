import { useState } from "react";

function ImageSearch({ data }) {
  //this state can go up -- in app as we need to pass search term to fetchData -- pass setSearch as props to imageSearch
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    data(search);
  }

  return (
    <div className="center">
      <form className="center" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center  lg:flex-row ">
          <label className=" mx-8 text-xl text-center font-semibold">
            {" "}
            Search
          </label>
          <input
            type="text"
            className="h-8 px-2 max-w-sm border-b bg-slate-100 rounded-xl"
            onChange={handleChange}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
