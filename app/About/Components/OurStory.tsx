export default function OurStory() {
  return (
    <main>
      <div className="w-screen mt-5 mb-20 w-96 h-96 justify-center items-center gap-20 inline-flex">
        <div className="w-96 h-80 flex-col justify-start items-start gap-10 inline-flex">
          <div className="text-justify text-black text-5xl font-semibold leading-10 tracking-widest">
            Our Story
          </div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-96 text-black text-base font-normal leading-relaxed">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </div>
            <div className="w-96 text-black text-base font-normal leading-relaxed">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </div>
          </div>
        </div>
        <img
          className="w-96 h-96"
          src="https://fian-indonesia.org/wp-content/uploads/2020/01/makeup-banner-kit.jpg"
        />
      </div>
    </main>
  );
}
