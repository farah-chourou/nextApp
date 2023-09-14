export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">

      <div className="inline-flex gap-5">
        {/* LEFT-PANEL */}
        <div className="w-80 h-[460px] pt-14 pl-8 bg-white rounded shadow flex-col justify-start items-center inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-10 h-10 p-2.5 bg-red-500 rounded-3xl justify-center items-center flex">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.55423 5.24003L6.17123 1.33503C5.78123 0.88503 5.06623 0.88703 4.61323 1.34103L1.83123 4.12803C1.00323 4.95703 0.766232 6.18803 1.24523 7.17503C4.10685 13.1 8.88528 17.8851 14.8062 20.755C15.7922 21.234 17.0222 20.997 17.8502 20.168L20.6582 17.355C21.1132 16.9 21.1142 16.181 20.6602 15.791L16.7402 12.426C16.3302 12.074 15.6932 12.12 15.2822 12.532L13.9182 13.898C13.8484 13.9712 13.7565 14.0195 13.6566 14.0354C13.5567 14.0513 13.4543 14.0339 13.3652 13.986C11.1357 12.7021 9.28622 10.8503 8.00523 8.61903C7.95726 8.52978 7.93989 8.42726 7.95578 8.32719C7.97168 8.22711 8.01996 8.13502 8.09323 8.06503L9.45323 6.70403C9.86523 6.29003 9.91023 5.65003 9.55423 5.23903V5.24003Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-black text-base font-medium leading-normal">
                  Call us
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-64 text-black text-sm font-normal leading-tight">
                  We are available 24/7, 7 days a week.
                </div>
                <div className="text-black text-sm font-normal leading-tight">
                  Phone: +216 50 50 50 50
                </div>
              </div>
            </div>
            <div className="w-64 h-px opacity-50 justify-center items-center inline-flex">
              <div className="w-64 h-px border border-black"></div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-10 h-10 px-2.5 py-3 bg-red-500 rounded-3xl justify-center items-center flex">
                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L11 8L21 1M1 15H21V1H1V15Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-black text-base font-medium leading-normal">
                  Write us
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-64 text-black text-sm font-normal leading-tight">
                  Fill out our form and we will contact you within 24 hours.
                </div>
                <div className="text-black text-sm font-normal leading-tight">
                  Emails: customer@exclusive.com
                </div>
                <div className="text-black text-sm font-normal leading-tight">
                  Emails: support@exclusive.com
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LEFT-PANEL */}
        {/* RIGHT-PANEL */}
        <div className="w-[800px] h-[460px] px-8 py-10 bg-white rounded shadow justify-center items-center inline-flex">
          <div className="self-stretch flex-col justify-start items-end gap-8 inline-flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <input
                placeholder="Your name *"
                className="w-60 h-12 pl-4 left-0 top-0 relative bg-neutral-100 rounded"
              />

              <input
                placeholder="Your Email *"
                className="w-60 h-12 pl-4 left-0 top-0 relative bg-neutral-100 rounded"
              />

              <input
                placeholder="Your Phone *"
                className="w-60 h-12 pl-4 left-0 top-0 relative bg-neutral-100 rounded"
              />
            </div>
            <textarea
              placeholder="Your Message *"
              className="w-[750px] h-52 pl-4 pt-4 left-0 top-0 relative bg-neutral-100 rounded"
            />
            <button className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex text-neutral-50 text-base font-medium leading-normal">
              Send Massage
            </button>
          </div>
        </div>
        {/* RIGHT-PANEL */}
      </div>

    </main>
  );
}
