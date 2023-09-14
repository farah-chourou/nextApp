
import Services from "./Components/Services";
import OurStory from "./Components/OurStory";
import Stats from "./Components/Stats";
import Team from "./Components/Team";


export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      {/* MAP */}
      <div className="mt-10 mr-100 h-5 justify-start items-center gap-3 inline-flex">
        <div className="opacity-50 text-black text-sm font-normal leading-tight">
          Home
        </div>
        <div className="opacity-50 text-black text-sm font-normal leading-tight">
          /
        </div>
        <div className="text-black text-sm font-normal leading-tight">
          About
        </div>
      </div>
      {/* MAP */}
      <OurStory />
      <Stats />
      <Team />
      <Services />
    </main>
  );
}
