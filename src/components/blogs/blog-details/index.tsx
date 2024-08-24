"use client";

import Button from "@/components/button";
import { Blog } from "@/utils/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetailsHome({ blogData }: { blogData: Blog }) {
  const [comment, setComment] = useState<string>("");
  const { data: session } = useSession();

  const router = useRouter();

  async function handleCommentSave() {
    let extractComments = [...blogData.comments];

    extractComments.push(`${comment}{__}${session?.user?.name}`);

    const response = await fetch(`/api/blog-post/update-post`, {
      method: "PUT",
      headers: {
        "Content-Tpye": "applicaiton/json",
      },
      body: JSON.stringify({ id: blogData?.id, comments: extractComments }),
    });
    const data = await response.json();
    console.log(data.body, "here is the comments ");
    if (data && data.success) {
      setComment("");
      router.refresh();
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      router.refresh();
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!blogData) return null;

  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-col gap-4 items-center justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                {blogData?.title}
              </h2>
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">
                  <div className="mr-10 mb-5 flex items-center">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={blogData?.userimage}
                          alt="User"
                          fill
                          sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
                          priority
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-base font-medium text-body-color">
                        By
                        <span className="pl-2">
                          {blogData?.userid.split("_")[0]}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <Link
                    className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white"
                    href={`/category/${blogData?.category}`}
                  >
                    {blogData?.category}
                  </Link>
                </div>
              </div>
              <div>
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={blogData?.image || ""}
                      alt="Blog Image"
                      fill
                      sizes="(max-width: 768px) 100vw, 
(max-width: 1200px) 50vw, 
33vw"
                      priority
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <p className="mb-8 overflow-hidden leading-relaxed text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  {blogData?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-8/12 flex gap-4">
            {session !== null ? (
              <>
                <input
                  name="comment"
                  id="comment"
                  value={comment}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setComment(e.target.value);
                  }}
                  autoFocus
                  autoComplete="off"
                  placeholder="댓글을 달아주세요."
                  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                />
                <Button text="추가" onClick={handleCommentSave} />
              </>
            ) : null}
          </div>
          <section className="dark:bg-gray-900 py-8 lg:py-16 w-full lg:w-8/12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-black dark:text-white">
                작성댓글 ({blogData?.comments.length})
              </h2>
            </div>
            {blogData && blogData.comments && blogData.comments.length > 0
              ? blogData.comments.map((comment, index) => (
                  <div
                    key={index}
                    className="p-6 text-base rounded-lg dark:bg-gray-900"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-black dark:text-white font-semibold">
                          {comment.split("{__}")[1] === blogData?.userid
                            ? `${
                                comment.split("{__}")[1].split("_")[0]
                              } (작성자)`
                            : comment.split("{__}")[1].split("_")[0]}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      {comment.split("{__}")[0]}
                    </p>
                  </div>
                ))
              : null}
          </section>
        </div>
      </div>
    </section>
  );
}
