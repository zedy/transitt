import { LoadingOutlined } from "@ant-design/icons";
import FlexWrapper from "./_components/elements/flex-wrapper";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <FlexWrapper justifyContent="center" alignItems="center">
        <LoadingOutlined style={{ fontSize: "40px" }} />
      </FlexWrapper>
    </div>
  );
}
