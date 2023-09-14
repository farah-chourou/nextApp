import Link from "next/link";

export default function Sidebar () {
    return(
        <div className="w-56 h-80 flex-col justify-start items-start  gap-5  inline-flex">
        <Link className="hover:text-red-500" href="/AllProducts">Makeup</Link>
        <Link className="hover:text-red-500" href="/AllProducts">Parfumes</Link>
        <Link className="hover:text-red-500" href="/AllProducts">Hygiene</Link>
        <Link className="hover:text-red-500" href="/AllProducts">Skin Care</Link>
        <Link className="hover:text-red-500" href="/AllProducts">Hair Care</Link>
      </div>
    )
}