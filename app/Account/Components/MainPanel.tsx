"use client";

import Link from "next/link";
import PictureUpload from "./PictureUpload";
import { useEffect, useState } from "react";
import { compare } from "bcryptjs";

interface UserData {
  data: {
    user: {
      name: string;
      email: string;
    };
  };
}

export default function MainPanel() {
  const [userData, setUserData] = useState<UserData | any>(null);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        const response = await fetch("/api/users/me");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        setUserData(data);
        setFirstName(data.data.user.name);
        setLastName(data.data.user.lastName);
        setEmail(data.data.user.email);
        setAddress(data.data.user.address);

        console.log("User Data:", data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the user data:", error);
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    const updatedUserData = {
      name: firstName,
      lastName: lastName,
      email: email,
      address: address,
      password: password,
    };

    try {
      console.log(JSON.stringify(updatedUserData));
      const response = await fetch(`/api/users/${userData.data.user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });
      const responseText = await response.text();
      console.log(responseText);

      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
    } catch (error) {
      console.error("Error updating the user data:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="w-[870px] h-[630px] relative bg-white rounded shadow">
        <div className="left-[80px] top-[40px] absolute text-red-500 text-xl font-medium leading-7">
          Edit Your Profile
        </div>
        <PictureUpload />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="left-[80px] top-[84px] absolute justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <p className="text-black text-base font-normal leading-normal">
                First Name
              </p>
              <input
                placeholder="Malek"
                className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <p className="text-black text-base font-normal leading-normal">
                Last Name
              </p>
              <input
                placeholder="Hadrich"
                className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="left-[80px] top-[190px] absolute justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <p className="text-black text-base font-normal leading-normal">
                Email
              </p>
              <input
                placeholder="mhadrich@gmail.com"
                type="email"
                className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <p className="text-black text-base font-normal leading-normal">
                Address
              </p>
              <input
                placeholder="34 Chem's Street"
                className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="left-[80px] top-[296px] absolute flex-col justify-start items-start gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <p className="text-black text-base font-normal leading-normal">
                Password Changes
              </p>
              {/*  <input
                placeholder="Current Password"
                type="password"
                className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              /> */}
            </div>
            <input
              placeholder="New Password"
              type="password"
              className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordError(null);
              }}
            />
          </div>
          {passwordError && <div className="text-red-500">{passwordError}</div>}
          <div className="left-[487px] top-[534px] absolute justify-start items-center gap-8 inline-flex">
            <Link
              href="/"
              className="text-black text-base font-normal leading-normal"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex text-neutral-50 text-base font-medium leading-normal hover:bg-red-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
