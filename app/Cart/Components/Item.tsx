export default function Item() {
  return (
    <div className="w-[1170px] h-24 relative bg-white rounded shadow">
      {/* PRODUCT */}
      <div className="group">
        <img
          className=" w-14 h-14 px-0.5 pt-2 pb-1.5 left-[40px] top-[24px] absolute justify-center items-center inline-flex rounded-lg"
          src="data:image/jpeg;base64,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"
        />
        <svg
          className="opacity-0 w-6 h-6 left-[30px] top-[20px] absolute group-hover:opacity-100"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9" fill="#DB4444" />
          <path
            d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {/* PRODUCT */}
      {/* PRODUCT-NAME */}
      <p className="left-[114px] top-[39px] absolute text-black text-base font-normal leading-normal">
        DIOR Shit
      </p>
      {/* PRODUCT-NAME */}
      {/* PRICE */}
      <p className="left-[387px] top-[39px] absolute text-black text-base font-normal leading-normal">
        $650
      </p>
      {/* PRICE */}
      {/* QUANTITY */}
      <input
        type="number"
        className="w-16 h-11 px-3 py-1.5 left-[710px] top-[29px] absolute rounded border border-black border-opacity-40 justify-center items-center inline-flex"
      />
      {/* QUANTITY */}
      {/* TOTAL */}
      <p className="left-[1063px] top-[39px] absolute text-black text-base font-normal leading-normal">
        $650
      </p>
      {/* TOTAL */}
    </div>
  );
}
