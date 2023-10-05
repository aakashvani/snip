"use client";

import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState();

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setProviders();
  }, []);

  return (
    <nav className=" flex justify-between w-full mb-16 pt-3 items-center">
      <Link href="/" className="flex gap-2 flex-center">
        Snip
      </Link>

      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex items-center  gap-3 md:gap-5">
            <Link href="/create-url" className="border-black cursor-pointer">
              Create Snip
            </Link>
            <button type="button" onClick={signOut}>
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div>
                <Link href="/profile" onClick={() => setToggleDropdown(false)}>
                  My Profile
                </Link>
                <Link
                  href="/create-url"
                  onClick={() => setToggleDropdown(false)}
                >
                  create url
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
