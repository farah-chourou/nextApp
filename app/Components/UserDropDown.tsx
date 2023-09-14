"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

interface UserData {
  data: {
    user: {
      name: string;
      email: string;
    }
  }


}

export default function UserDropDown() {
  const [toggle, setToggle] = useState(false);
  const [hide, setHide] = useState("");
  const [userData, setUserData] = useState<UserData | any>(null);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (toggle) {
      setHide("");
    } else {
      setHide("hidden");
    }
  }, [toggle]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        const response = await fetch('/api/users/me');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setUserData(data);
        console.log('User Data:', userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the user data:', error);
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <main>
      <button
        onClick={() => setToggle(!toggle)}
        className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 "
        type="button"
      >
        <img
          className="w-8 h-8 mr-2 rounded-full"
          src="https://media.licdn.com/dms/image/D4E03AQG-2KOmnx4wQA/profile-displayphoto-shrink_800_800/0/1676026445864?e=2147483647&v=beta&t=dKX55fHtcqbM9ZJ8Bq4eUKvmYJxdzVQhzBzU-a7JVQY"
          alt="user photo"
        />
        <p className="text-black">{userData.data.user.name}</p>
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* DROPDOWN MENU */}
      <div className={hide}>
        <div className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <div className="px-4 py-3 text-sm text-gray-900">
            <div className="font-medium ">{userData.data.user.name +' '+ userData.data.user.lastName}</div>
            <div className="truncate">{userData.data.user.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <Link legacyBehavior href="./Account">
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My account</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="./Wishlist">
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Wishlist</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="./Cart">
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cart</a>
              </Link>
            </li>
          </ul>
          <div className="group">
            <div className="py-2 group-hover:bg-red-500 rounded-b-lg">
            <a
  href="/"
  className="block px-4 py-2 text-sm text-gray-700 group-hover:bg-red-500 hover:text-white"
  onClick={async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      if (response.ok) {
        window.location.href = '/';
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('An error occurred while logging out:', error);
    }
  }}
>
  Sign out
</a>

            </div>
          </div>
        </div>
      </div>
      {/* DROPDOWN MENU */}
    </main>
  );
}
