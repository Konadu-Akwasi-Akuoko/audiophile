"use client";
import Classes from "./Nav.module.scss";
import Link from "next/link";
import NavCats from "./NavCats";
import { usePathname } from "next/navigation";
import posts from "@/_data/cats.json";
import Image from "next/image";

type NavProps = {
  className?: string;
  variant: "main" | "footer";
};

const Nav = ({ className, variant }: NavProps) => {
  const pathname = usePathname();
  return variant === "main" ? (
    <nav
      className={`${Classes.mainNav} mainNav absolute top-full text-dark-100 bg-light-100 opacity-0 
            lg:opacity-100 lg:relative lg:top-0 lg:bg-transparent lg:[pointer-events:auto_!important]
            ${className}
            `}
    >
      <ul className="mainNav__Items lg:flex lg:gap-[1rem] ">
        <li className="mainNav__item hidden lg:block">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "active" : ""
            } text-[13px] leading-[25px] tracking-[2px] font-bold block p-1 uppercase lg:p-0 transition-all duration-[0.3s] lg:text-light-100/50 lg:hover:text-light-100 `}
          >
            Home
          </Link>
        </li>
        {posts.map(({ id, path, name, img }) => (
          <li key={id} className={`mainNav__item`}>
            <Link
              href={`/${path}`}
              className={`${
                pathname === `/${path}` ? "active" : ""
              } text-center  w-full text-[13px] leading-[25px] tracking-[2px] font-bold block p-1 uppercase lg:p-0 transition-all duration-[0.3s] lg:text-light-100/50 lg:hover:text-light-100 `}
            >
              <span className="icon lg:hidden">
                <Image
                  src={`/shared/desktop/${img.src}`}
                  alt={name}
                  width={img.width}
                  height={img.height}
                  className="block mx-auto"
                />
              </span>
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <nav
      className={`${Classes.footerNav} footerNav text-light-100 lg:text-dark-100 ${className}`}
    >
      <ul className="flex flex-col gap-5 md:flex-row">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "active" : ""
            } text-[13px] leading-[25px] tracking-[2px] font-bold block p-1 uppercase lg:p-0 transition-all duration-[0.3s] lg:text-light-100/50 lg:hover:text-light-100 `}
          >
            Home
          </Link>
        </li>
        {posts.map(({ id, path, name, img }) => (
          <li key={id} className={`mainNav__item`}>
            <Link
              href={`/${path}`}
              className={`${
                pathname === `/${path}` ? "active" : ""
              } text-center  w-full text-[13px] leading-[25px] tracking-[2px] font-bold block p-1 uppercase lg:p-0 transition-all duration-[0.3s] lg:text-light-100/50 lg:hover:text-light-100 `}
            >
              <span className="icon lg:hidden">
                <Image
                  src={`/shared/desktop/${img.src}`}
                  alt={name}
                  width={img.width}
                  height={img.height}
                  className="block mx-auto"
                />
              </span>
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.defaultProps = {
  variant: "main",
};

export default Nav;
