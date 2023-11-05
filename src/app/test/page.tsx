import Wrapper from "@/components/Wrapper";
import { Test } from "@/components/test/Test";
const page = async () => {
  return (
    <Wrapper full>
      <div>
        <Test />
      </div>
    </Wrapper>
  );
};

export default page;
