import { Blog } from "@/utils/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";

export default function SingleBlog({
  blogItem,
  handleDelete,
}: {
  blogItem: Blog;
  handleDelete: (id: number) => {};
}) {
  const { image, category, title, description, userimage, userid, id } =
    blogItem;
  const { data: session } = useSession();

  return (
    <div>
      <div className="relative overflow-hidden rounded-md bg-white shadow-one dark dark:bg-dark">
        <Link className="relative block h-[250px] w-full" href={`/blogs/${id}`}>
          <span className="absolute top-6 right-6 z-20 inline-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {category}
          </span>
          <Image
            src={image}
            alt="Blog Post"
            fill
            sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
            priority
          />
        </Link>
      </div>
      <div className="p-6 sm:-8 md:py-8 mb:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
        <h3>
          <Link
            className="mb-4 text-ellipsis overflow-hidden whitespace-nowrap block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            href={`/blogs/${id}`}
          >
            {title}
          </Link>
        </h3>
        <p className="h-[20px] ext-ellipsis overflow-hidden whitespace-nowrap mb-6 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {description}
        </p>
        <div className=" flex items-center justify-between">
          <div className=" flex relative items-center xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4">
              <div className="h-10 relative w-10 overflow-hidden rounded-full">
                <Image
                  alt="Author"
                  fill
                  src={userimage}
                  sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="mb-1 text-sm font-medium text-dark dark:text-white">
                By
              </p>
              <p className="mb-1 text-sm font-medium text-dark dark:text-white">
                {userid.split("_")[0].toUpperCase()}
              </p>
            </div>
            <div className="absolute bottom-0 right-[-12px] pl-8 pb-2 lg:p-2">
              {session !== null && session?.user?.name === userid ? (
                <FaTrash
                  size={16}
                  className="cursor-pointer"
                  onClick={() => handleDelete(id)}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
