export default function Loading() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-5 font-light mx-5 min-h-screen rounded-md mt-4 mb-4 p-2">
      <div
        id="user"
        className="animate-pulse bg-slate-300 sticky top-0 min-h-full shadow rounded-md lg:col-span-2 col-span-12 m-auto w-full sm:w-full p-4 order-3 md:order-1"
      ></div>

      <div
        id="current"
        className="animate-pulse bg-slate-300 min-h-full shadow rounded-md lg:col-span-3 col-span-12 m-auto w-full sm:w-full p-4 order-2"
      ></div>

      <div
        id="portfolio"
        className="animate-pulse bg-slate-300 min-h-full shadow rounded-md lg:col-span-5 col-span-12 m-auto w-full sm:w-full p-4 order-1 md:order-3"
      ></div>
    </section>
  );
}
