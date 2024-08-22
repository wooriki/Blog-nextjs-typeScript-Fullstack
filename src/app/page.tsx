"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Next.js Full-Stack Website Using Prisma
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  해당 사이트는 다양한 카테고리를 기반으로 포스트를 생성하고
                  <br />
                  다른 유저과 소통할 수 있는 Next.js Full-Stack 작업물입니다.
                  <br />
                  포스트 작성, 카테고리 별 분류, 검색 및 댓글 달기 기능 등
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white 
                  hover:bg-primary/80"
                  href={"/blogs"}
                >
                  블로그 구경하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
