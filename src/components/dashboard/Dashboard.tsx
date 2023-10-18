import Wrapper from "../Wrapper";
export default function Dashboard() {
  return (
    <section className="bg-slate-300 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-5 font-light mx-5 min-h-screen rounded-md mt-4 mb-4 p-2">
      <div className="min-h-full bg-slate-500 rounded-md lg:col-span-2 col-span-12 m-auto w-full sm:w-full">
        <h1>Profile</h1>
      </div>

      <div className="min-h-full bg-slate-500 rounded-md lg:col-span-4 col-span-12 m-auto w-full sm:w-full">
        <h1>Markets Overview</h1>
      </div>

      <div className="min-h-full bg-slate-500 rounded-md lg:col-span-4 col-span-12 m-auto w-full sm:w-full">
        <h1>Portfolio</h1>
      </div>
    </section>
  );
}
