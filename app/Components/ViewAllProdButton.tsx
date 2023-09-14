import Link from "next/link";

export default function ViewAllProdButton () {
    return(
        <Link href="/AllProducts">
        <div className="w-60 h-14 px-12 py-4 bg-red-500 mt-10 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-base font-medium leading-normal">
            View All Products
          </div>
        </div>
      </Link>
    )
}