import ProductCard from "./ProductCard";
import ViewAllProdButton from "./ViewAllProdButton";

interface Props {
  data:[];
}

export default function OurProducts(props:Props) {
  const { data } = props;
  return (
    <div className="justify-center items-center flex flex-col">
      <div className="flex flex-col gap-5 ">
        <div className="items-center gap-4 flex">
          <div className=" w-5 h-10 bg-red-500 rounded" />
          <p className=" text-red-500 text-base font-semibold leading-tight pr-96">
            Our Products
          </p>
          <div className="gap-2 flex relative pl-96">
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
            <path
              d="M22 16L15 23L22 30M15 23H31"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
            <path
              d="M14.5 23H31M31 23L24 16M31 23L24 30"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        </div>
        <p className="text-black text-2xl font-semibold tracking-wider">
          Explore Our Products
        </p>
      </div>
      <div className="inline-grid grid-cols-4 mt-5 gap-4">
        {data && data.map((elem)=>{
          return(
            <ProductCard data={elem} />
          )
        })}
      </div>
      <ViewAllProdButton />
    </div>
  );
}
