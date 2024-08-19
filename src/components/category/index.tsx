"use client";

import { Blog } from "@/utils/types";
import Button from "../button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { categories } from "@/utils";
import Link from "next/link";

export default function CategoryList({ list }: { list: Blog[] }) {
  const router = useRouter();

  console.log(list, "list");

  const getMxId = Math.max(...list.map((item) => item.id));
  console.log(getMxId);
  const getLatestBlogForCurrentCategory =
    list && list.length ? list.find((item) => item.id === getMxId) : null;

  const relatedBlogs =
    list && list.length ? list.filter((item) => item.id !== getMxId) : [];

  return (
    <section className="overflow-hidden pt-[180px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            {getLatestBlogForCurrentCategory === null ? (
              <div className="flex flex-col gap-4">
                <h2 className="mb-8 text-3xl font font-bold leading-tight text-black dark:text-white sm:text-4xl">
                  관련된 카테고리 포스트가 없습니다.
                  <br />
                  먼저 작성해 보세요.
                </h2>
                <Button
                  text="새글 작성하기"
                  onClick={() => router.push("/create")}
                />
              </div>
            ) : (
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                  {getLatestBlogForCurrentCategory?.title}
                </h2>
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={getLatestBlogForCurrentCategory?.image || ""}
                      alt="Blog"
                      fill
                      className="h-full w-full object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 
                      (max-width: 1200px) 50vw, 
                      33vw"
                      priority
                    />
                  </div>
                </div>
                <p className="mb-8 overflow-hidden leading-relaxed text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  {getLatestBlogForCurrentCategory?.description}
                </p>
              </div>
            )}
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
              <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                카테고리 필터
              </h3>
              <div className="flex flex-wrap py-6 px-8">
                {categories.map((catItem, index) => (
                  <button
                    className="mr-3 mb-3 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white duration-300 "
                    key={index}
                    onClick={() => router.push(`/category/${catItem.value}`)}
                  >
                    {catItem.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
              <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                관련 포스팅
              </h3>
              <ul className="p-8">
                {relatedBlogs && relatedBlogs.length ? (
                  relatedBlogs.map((item) => (
                    <li
                      className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10"
                      key={item.id}
                    >
                      <div className="flex items-center lg:block xl:flex">
                        <div className="mr-5 lg:mb-3 xl:mb-0">
                          <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px] ">
                            <Image
                              src={item.image}
                              alt="Blog"
                              fill
                              sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
                              priority
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <h5>
                            <Link
                              href={"/"}
                              className="mb-[8px] block text-base font-medium text-black dark:text-white hover:text-primary dark:hover:text-primary"
                            >
                              {item.title}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <h1>관련 포스팅이 없습니다.</h1>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
