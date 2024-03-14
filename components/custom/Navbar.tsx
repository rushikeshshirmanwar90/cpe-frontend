import React from "react";
import Link from "next/link";
import Image from "next/image";

// image
import Logo from "@/assets/logo.png";
import TemporaryDrawer from "../material/drawer";

// clerk
import { UserButton, useUser } from "@clerk/nextjs";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const isSignedIn = true;
  const yellowColor = "bg-amber-500";
  
  return (
    <>
      <nav className="flex items-center justify-between mt-1 sticky top-0 left-0 bg-white shadow-xl py-3  z-50">
        <div className="ml-4">
          <TemporaryDrawer />
        </div>
        <div>
          <Link href={"/"}>
            <Image src={Logo} alt="this is logo" width={125} height={250} />
          </Link>
        </div>

        <div className="flex items-center justify-between gap-12 mr-4">
          <div>
            <FaHeart size={25} />
          </div>
          {isSignedIn ? (
            <div>
              <UserButton />
            </div>
          ) : (
            <>
              <Link href={"/sign-in"}>
                <button
                  className={`${yellowColor} text-white text-lg font-semibold rounded-3xl px-6 py-3 border shadow-inner`}
                >
                  Join now
                </button>
              </Link>
              <div className="line bg-gray-400 h-[3rem] w-[1px]"></div>
              <Link href={"/sign-up"}>
                <button
                  className={`text-lg font-semibold rounded-3xl px-6 py-3 border-2 shadow-inner `}
                >
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
