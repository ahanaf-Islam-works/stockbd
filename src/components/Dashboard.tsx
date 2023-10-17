import Wrapper from "./Wrapper";

export default function Dashboard() {
  return (
    <Wrapper full>
      <div className="grid grid-cols-12 bg-red-600 gap-7 gap-y-8">
        <div className="col-span-3 bg-pink-500">
          <p className="h-32"></p>
        </div>
        <div className="col-span-9 bg-pink-900">
          <p className="h-32"></p>
        </div>

        <div className="col-span-3 bg-pink-500">
          <p className="h-32"></p>
        </div>
        <div className="col-span-9 bg-pink-900">
          <p className="h-32"></p>
        </div>

        <div className="col-span-3 bg-pink-500">
          <p className="h-32"></p>
        </div>
        <div className="col-span-9 bg-pink-900">
          <p className="h-32"></p>
        </div>
      </div>
    </Wrapper>
  );
}
