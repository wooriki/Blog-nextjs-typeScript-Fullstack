"use client";

import Button from "@/components/button";
import { GlobalCotext } from "@/context";
import { useContext } from "react";

export default function Search() {
  const { searchQuery, setSearchQuery, searchResults, setSearchResults } =
    useContext(GlobalCotext);

  async function handleSearch() {
    console.log(searchQuery);

    const res = await fetch(`/api/search?query=${searchQuery}`, {
      method: "GET",
      cache: "no-store",
    });
    const data = await res.json();

    if (data.success) {
      setSearchResults(data.data);
    }
  }
  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[50px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                포스트를 검색해 보세요.
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input
                    name="search"
                    id="search"
                    type="text"
                    placeholder="Search Blogs"
                    autoFocus
                    autoComplete="off"
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setSearchQuery(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <Button text="검색" onClick={handleSearch} />
                </div>
              </div>
            </div>
          </div>
          <section className="pt-[80px] w-full pb-[120px]">
            <div className="container"></div>
          </section>
        </div>
      </div>
    </section>
  );
}
