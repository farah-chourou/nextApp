import Link from "next/link";

export default function LargeImage() {
  return (
    <div className="w-[1140px] h-[500px] relative">
      <img
        className="border-opacity-100 h-full"
        src="https://assets.boots.com/content/dam/boots/brands/brand---l/l%27oreal/loreal-cp-power-of-luxe/loreal_cp_power-of-more_2022-11/2022-10_loreal_content-page_power-of-more_100-background_hero_discover-iconic-fragrances-xmas.dam.ts%3D1668426287574.jpg"
        alt=""
      />
      <div className="w-96 left-[56px] top-[60px] absolute text-white text-5xl font-semibold leading-10 tracking-widest">
        Get Your Unique Perfume
      </div>
      <Link href="/AllProducts">
        <div className="px-12 py-4 left-[56px] top-[165px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex text-white">
            Buy Now!
        </div>
      </Link>
    </div>
  );
}
