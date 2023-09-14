import Link from "next/link";

export default function Footer() {
  return (
    <main className="mt-40 w-screen h-96 pt-0 pb-5 bg-black text-white flex-col justify-end items-center  inline-flex">
      <div>
        <div className="mb-10 gap-20 leading-10 flex justify-between">
          {/* EXCLUSIVE */}
          <div>
            <h4 className="font-bold text-2xl">Exclusive</h4>
            <Link href='https://www.youtube.com' target="_blank">
            <h3 className="text-xl">Subscribe</h3>
            </Link>
            <p className="">Get 10% off your first order</p>
            <div className="justify-start items-center  inline-flex">
              <input
                className="absolute mt-2 pl-3 border-2 rounded-md bg-black w-56 placeholder-opacity-100"
                placeholder="Enter your email"
              ></input>
              <Link href="mailto:exclusive@gmail.com">
                <svg
                  className="relative left-44 w-8 h-8 inset-y-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          {/* EXCLUSIVE */}
          {/* SUPPORT */}
          <div>
            <h4 className="font-bold text-2xl">Support</h4>
            <p className="">34 Chem's Street</p>
            <p className="">exclusive@gmail.com</p>
            <p className="">+216 50 50 50 50</p>
          </div>
          {/* SUPPORT */}
          {/* ACCOUNT */}
          <div>
            <h4 className="font-bold text-2xl">Account</h4>
            <Link href="/Account">
              <p className="">My account</p>
            </Link>
            <Link href="/SignUp">
              <p className="">Login/Register</p>
            </Link>
            <Link href="/Cart">
              <p className="">Cart</p>
            </Link>
            <Link href="/Wishlist">
              <p className="">Wishlist</p>
            </Link>
            <Link href="/AllProducts">
              <p className="">Shop</p>
            </Link>
          </div>
          {/* ACCOUNT */}
          {/* QUICKLINK */}
          <div>
            <h4 className="font-bold text-2xl">QuickLink</h4>
            <Link href="/About">
              <p className="">Privacy Policy</p>
              <p className="">Terms Of Use</p>
              <p className="">FAQ</p>
            </Link>
            <Link href="/Contact">
              <p className="">Contact</p>
            </Link>
          </div>
          {/* QUICKLINK */}
          {/* DOWNLOAD */}
          <div>
            <h4 className="font-bold text-2xl">Download App</h4>
            <p className="text-gray-400">Save $3 with App New User only!</p>
            <div className="w-60 h-20 justify-start items-center gap-2 inline-flex">
              <div className="w-20 h-20 p-0.5 bg-black justify-center items-center flex">
                <img
                  className="w-36 h-20 "
                  src="https://www.bdc.ca/globalassets/digizuite/40415-bdc-qr-code.jpg?v=498d76"
                />
              </div>
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-28 h-10 relative bg-black">
                  <Link href='https://play.google.com/store/apps?hl=en&gl=US' target="_blank">
                  <img
                    className="w-27 h-10 left-[3px] top-[5px] absolute "
                    src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                  />
                  </Link>
                </div>
                <div className="w-28 h-10 p-0.5 bg-black justify-center items-center inline-flex">
                  <Link href='https://www.apple.com/app-store/' target="_blank">
                  <img
                    className="w-24 h-10 rounded"
                    src="https://developer.apple.com/assets/elements/icons/download-on-the-app-store/download-on-the-app-store.svg"
                  />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="w-50 h-6 justify-start items-start gap-6 inline-flex">
              <Link href="https://www.facebook.com" target="_blank">
                  <img
                    className="w-6 h-6"
                    src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-1024.png"
                  />
                </Link>
                <Link href="https://www.instagram.com" target="_blank">
                  <img
                    className="w-6 h-6 relative"
                    src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png"
                  />
                </Link>
                <Link href="https://www.twitter.com" target="_blank">
                  <img
                    className="w-6 h-6 relative"
                    src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-1024.png"
                  />
                </Link>
                <Link href="https://www.linkedin.com" target="_blank">
                  <img
                    className="w-6 h-6 relative"
                    src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* DOWNLOAD */}
        </div>
      </div>
    </main>
  );
}
