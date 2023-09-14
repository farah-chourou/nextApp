import Link from "next/link";

export default function Categories() {
  return (
    <div className="w-97 h-80 flex-col justify-start items-start gap-6 inline-flex">
      <div className="justify-center items-center gap-4 inline-flex">
        <div className="w-5 h-10 bg-red-500 rounded" />
        <p className="text-red-500 text-base font-semibold leading-tight">
          Categories
        </p>
      </div>
      <p className="text-2xl font-semibold tracking-wider">
        Browse-By-Category
      </p>
      <div className="justify-start items-start gap-12 inline-flex">
        {/*makeup  cart*/}
        <Link href="/AllProducts" className="group">
          <div className="px-14 py-6 w-44 h-36 rounded border border-black border-opacity-30  group-hover:bg-red-500">
            <img
              className="w-16 h-16 group-hover:invert"
              src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/38/beauty_hand_drawn_icon_illustration_-12-512.png"
              alt=""
            />
            <p className="text-black group-hover:text-white">Makeup</p>
          </div>
        </Link>
        {/*makeup cart */}
        {/*SkinCare Cart*/}
        <Link href="/AllProducts" className="group">
          <div className="px-12 py-8 w-44 h-36 rounded border border-black border-opacity-30  group-hover:bg-red-500">
            <img
              className="w-16 h-16 group-hover:invert"
              src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/40/beauty_hand_drawn_icon_illustration_-14-512.png"
              alt=""
            />
            <p className="text-black group-hover:text-white">Skin Care</p>
          </div>
        </Link>
        {/*SkinCare Cart*/}
        {/*haircare Cart*/}
        <Link href="/AllProducts" className="group">
          <div className="px-14 py-8 w-44 h-36 rounded border border-black border-opacity-30  group-hover:bg-red-500">
            <img
              className="w-16 h-16 group-hover:invert"
              src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/43/beauty_hand_drawn_icon_illustration_-13-512.png"
              alt=""
            />
            <p className="text-black group-hover:text-white">HairCare</p>
          </div>
        </Link>
        {/*haircare Cart*/}
        {/*hygiene Cart*/}
        <Link href="/AllProducts" className="group">
          <div className="px-14 py-8 w-44 h-36 rounded border border-black border-opacity-30  group-hover:bg-red-500">
            <img
              className="w-16 h-16 group-hover:invert"
              src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/42/beauty_hand_drawn_icon_illustration_-15-512.png"
              alt=""
            />
            <p className="text-black group-hover:text-white">Hygiene</p>
          </div>
        </Link>
        {/*hygiene Cart*/}
        {/*parfume Cart*/}
        <Link href="/AllProducts" className="group">
          <div className="px-12 py-8 w-44 h-36 rounded border border-black border-opacity-30  group-hover:bg-red-500">
            <img
              className="w-16 h-16 group-hover:invert"
              src="https://cdn4.iconfinder.com/data/icons/beauty-hand-drawn/37/beauty_hand_drawn_icon_illustration_-22-512.png"
              alt=""
            />
            <p className="text-black group-hover:text-white">Perfumes</p>
          </div>
        </Link>
        {/*parfume Cart*/}
      </div>
    </div>
  );
}
