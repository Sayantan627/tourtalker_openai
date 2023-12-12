"use client";

import { getAllTours } from "@/utils/action";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList";
import { useState } from "react";

const ToursPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isPending } = useQuery({
    queryKey: ["tours", searchValue],
    queryFn: () => getAllTours(searchValue),
  });
  return (
    <>
      <form className="max-w-2xl mb-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="enter city or country here..."
            className="join-item w-full input input-bordered"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button
            type="button"
            className="join-item btn btn-primary"
            disabled={isPending}
            onClick={() => setSearchValue("")}
          >
            {isPending ? "please wait" : "reset"}
          </button>
        </div>
      </form>
      {isPending ? (
        <span className="loading"></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
};
export default ToursPage;
