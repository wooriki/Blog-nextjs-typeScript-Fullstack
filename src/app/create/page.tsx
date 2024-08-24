"use client";

import Button from "@/components/button";
import Spinner from "@/components/spinner";
import { GlobalCotext } from "@/context";
import { firebaseConfig, formControls, initialBlogFormData } from "@/utils";
import { BlogFormData } from "@/utils/types";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://nextjs-blog24-ts.appspot.com");

function createUniqueFileName(filename: string) {
  const timeStamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 12);

  return `${filename}-${timeStamp}-${randomString}`;
}

async function handleImageSaveToFirebase(file: any) {
  const extractUniqueFileName = createUniqueFileName(file?.name);
  const storageRef = ref(storage, `blog/${extractUniqueFileName}`);
  const uploadImg = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadImg.on(
      "state_changed",
      (snapshot) => {},
      (error) => reject(error),
      () => {
        getDownloadURL(uploadImg.snapshot.ref)
          .then((url) => resolve(url))
          .catch((error) => reject(error));
      }
    );
  });
}

export default function Create() {
  const { formData, setFormData } = useContext(GlobalCotext);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const { data: session } = useSession();
  const router = useRouter();
  console.log("session", session);

  async function handleBlogImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!event.target.files) return;
    setImageLoading(true);

    const saveImageToFirebase: any = await handleImageSaveToFirebase(
      event.target.files[0]
    );
    if (saveImageToFirebase !== "") {
      setImageLoading(false);
      console.log(saveImageToFirebase, "saveImageToFirebase");
      setFormData({
        ...formData,
        image: saveImageToFirebase,
      });
    }
  }
  function areFieldsFilled() {
    return Object.values(formData).every(
      (field) => field !== null && field !== ""
    );
  }

  async function handleSaveBlogPost() {
    if (!areFieldsFilled()) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }

    console.log(formData);

    const res = await fetch("/api/blog-post/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        userid: session?.user?.name,
        userimage: session?.user?.image,
        comments: [],
      }),
    });

    const data = await res.json();

    console.log(data, "data123");
    if (data && data.success) {
      setFormData(initialBlogFormData);
      router.push("/blogs");
    }
  }

  return (
    <section className=" overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-md bg-primary/[3%] py-10 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8  xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                나만의 새 글을 작성해 보세요.
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <div className={`${imageLoading ? "w-1/2" : "w-full"}`}>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      블로그 이미지 올리기
                    </label>
                    <input
                      id="fileinput"
                      accept="image/*"
                      max={1000000}
                      type="file"
                      onChange={handleBlogImageChange}
                      className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  {imageLoading ? (
                    <div className="w-1/2">
                      <Spinner />
                    </div>
                  ) : null}
                </div>

                <div className="-mx-4 flex flex-wrap">
                  {formControls.map((control) => (
                    <div className="w-full px-4">
                      <label className="mb-2 text-sm font-medium text-dark dark:text-white">
                        {control.label}
                      </label>
                      {control.component === "input" ? (
                        <input
                          type={control.type}
                          placeholder={control.placeholder}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setFormData({
                              ...formData,
                              [control.id]: event.target.value,
                            });
                          }}
                          value={formData[control.id as keyof BlogFormData]}
                          className="w-full mt-2 mb-8 rounded-md border border-transparent py-3 px-6 text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      ) : control.component === "textarea" ? (
                        <textarea
                          placeholder={control.placeholder}
                          rows={5}
                          name={control.id}
                          onChange={(
                            event: React.ChangeEvent<HTMLTextAreaElement>
                          ) => {
                            setFormData({
                              ...formData,
                              [control.id]: event.target.value,
                            });
                          }}
                          value={formData[control.id as keyof BlogFormData]}
                          className="w-full mt-2 resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      ) : control.component === "select" ? (
                        <select
                          name={control.id}
                          onChange={(
                            event: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            setFormData({
                              ...formData,
                              [control.id]: event.target.value,
                            });
                          }}
                          value={formData[control.id as keyof BlogFormData]}
                          className="w-full mt-2 mb-8 rounded-md border border-transparent py-3 px-6  text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        >
                          <option value={""} id="">
                            카테고리 선택
                          </option>
                          {control.options.map((optionItem, index) => (
                            <option
                              id={optionItem.value}
                              value={optionItem.value}
                              key={index}
                            >
                              {optionItem.label}
                            </option>
                          ))}
                        </select>
                      ) : null}
                    </div>
                  ))}
                  <div className="w-full px-4">
                    <Button text="새 글 포스팅" onClick={handleSaveBlogPost} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
