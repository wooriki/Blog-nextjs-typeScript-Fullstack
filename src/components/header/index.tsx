"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { menuItems } from "../../utils";
import { MenuItem } from "../../utils/types";
import Button from "../button";
import ThemeToggler from "../theme";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { GlobalCotext } from "@/context";
import Image from "next/image";

export default function Header() {
  const [sticky, setSticky] = useState<boolean>(false);
  const [navbarOpen, serNavbarOpen] = useState<boolean>(false);
  const { setSearchQuery, setSearchResults } = useContext(GlobalCotext);

  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();

  function handleStickyNavbar() {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  function handleNavbarToggle() {
    serNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  useEffect(() => {
    setSearchResults([]);
    setSearchQuery("");
  }, [pathName]);

  return (
    <div>
      <header
        className={`top-0 left-0 z-30 flex w-full items-center bg-transparent
            ${
              sticky
                ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop:blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
                : "absolute"
            }
            `}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-cneter justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href={"/"}
                className={` text-[30px] font-extrabold cursor-pointer flex gap-2 w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                }`}
              >
                <Image
                  src="/icon/B-icon.png"
                  alt="Bicon"
                  priority
                  width={30}
                  height={30}
                  className="w-auto h-auto"
                />
                log
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={handleNavbarToggle}
                  id="navbarToggler"
                  aria-label="mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-7px rotate-45 w-[18px] ml-2" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-8px -rotate-45 w-[18px] ml-2" : ""
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-black lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visible top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuItems.map((item: MenuItem) => (
                      <li key={item.id} className="group relative">
                        <Link
                          href={item.path}
                          className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex gap-4 items-center justify-end pr-16 lg:pr-0">
                {session !== null ? (
                  <Button
                    text="Create"
                    onClick={() => {
                      router.push("/create");
                    }}
                  />
                ) : null}
                <Button
                  text={session !== null ? "Logout" : "Login"}
                  onClick={
                    session !== null
                      ? () => signOut()
                      : () => {
                          signIn("github");
                        }
                  }
                />
                <div className="flex gap-3 items-center">
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
