import NavPanel from "./Components/NavPanel";
import MainPanel from "./Components/MainPanel";

export default function Account() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      <div className="inline-flex gap-10">
        <NavPanel />
        <MainPanel />
      </div>
    </main>
  );
}
