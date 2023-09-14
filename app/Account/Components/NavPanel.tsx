import Link from "next/link";

export default function NavPanel() {
  return (
    <main>
      <div className="w-48 h-72 relative">
        <p className="left-0 top-0 absolute text-black text-base font-medium leading-normal">
          Manage My Account
        </p>
        <Link
          href="/Cart"
          className="left-0 top-[82px] absolute text-black text-base font-medium leading-normal"
        >
          My Orders
        </Link>
        <Link
          href="/Wishlist"
          className="w-24 h-6 left-0 top-[124px] absolute text-black text-base font-medium leading-normal"
        >
          My WishList
        </Link>
        <div className="w-40 h-20 left-[35px] top-[40px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <Link
            href="/Account"
            className="opacity-50 text-black text-base font-normal leading-normal hover:text-red-500 hover:opacity-100"
          >
            My Profile
          </Link>
        </div>
      </div>
    </main>
  );
}
