import Link from "next/link";

export default function NewArrival() {
  return (
    <div className="pt-12">
      <div className="w-96 h-96 flex-col justify-start mt-[-100px] ml-[-140px] items-start gap-14 inline-flex">
        <div className="flex-col justify-start  mr-[-960px] items-start gap-5 flex">
          <div className="justify-start items-center gap-4 inline-flex mr-96px">
            <div className="w-5 h-10 relative">
              <div className="w-5 h-10 left-0 top-0  bg-red-500 rounded" />
            </div>
            <div className="text-red-500 text-base font-semibold leading-tight">
              Featured
            </div>
          </div>
          <div className="text-black text-4xl font-semibold leading-10 tracking-wider">
            New Arrival
          </div>
        </div>
      </div>
      <div className="inline flex gap-16 justify-center item-center mr-[-150px]">
      <div className="object-top-left mr-50 mt-[-250px] ml-[-250px]">
          <img
            className=" ml-[100px] "
            src="https://img.freepik.com/photos-gratuite/bouteille-parfum-mot-parfum-dessus_1340-37484.jpg"
          />
        </div>

        <div className="flex flex-col">
          <div className=" mr-50 mt-[-250px] ml-[-50px]">
            <img
              className=" ml-[15px] w-[450px] h-[300px]"
              src="https://cdn.shopify.com/s/files/1/0502/9393/2199/files/RD_Forever_Mood_Gamme_750x620_89691c93-0576-4e87-9f51-fe7312825e95.jpg?v=1692761458"
            />
          </div>
          <div className="inline-flex gap-16 mt-[270px]">
            <div className=" mr-30 mt-[-250px] ml-[-50px]">
              <img
                className=" ml-[15px] w-[210px] h-[305px]"
                src="https://media-afr-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F42343%2F42343_3.png%3Fversion%3D1620376200&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30"
              />
            </div>
            <div className=" mr-30 mt-[-250px] ml-[-50px]">
              <img
                className=" ml-[15px] w-[210px] h-[305px]"
                src="https://media-afr-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F42343%2F42343_3.png%3Fversion%3D1620376200&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
