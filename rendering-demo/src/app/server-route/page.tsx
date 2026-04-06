import { serverSideFunction } from "@/utils/server-util";
import { clientSideFunction } from "@/utils/client-utl";
import ImageSlider from "@/components/ImageSlider";

export default function ServerRoutePage() {
  serverSideFunction();
  // clientSideFunction is not allowed because it is "client-only" code.
  // const result = clientSideFunction();
  return (
    <>
      {/* <h1>Server Route ({result})</h1> */}
      <h1>Server Route</h1>
      <ImageSlider />
    </>
  );
}
