import { serverSideFunction } from "@/utils/server-util";
import ImageSlider from "@/components/ImageSlider";

export default function ServerRoutePage() {
  serverSideFunction();

  return (
    <>
      <h1>Server Route</h1>
      <ImageSlider />
    </>
  );
}
