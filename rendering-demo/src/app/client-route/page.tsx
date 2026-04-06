"use client";
// use client is not allowed since the serverSideFunction is a server-only function. If you want to use server-side functionality, you should not use "use client" in this file.
// import { serverSideFunction } from "@/utils/server-util";
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utl";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export default function ClientRoutePage() {
//     const result = serverSideFunction();

//     return <h1>Client Route - result :{result}</h1>;
// }
export default function ClientRoutePage() {
  const settings = {
    dots: true,
  };
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    // <div className="image-slider-container">
    //   <Slider {...settings}>
    //     <div>
    //       <img src="http://picsum.com/g/400/200" />
    //     </div>
    //     <div>
    //       <img src="http://picsum.com/g/400/200" />
    //     </div>
    //     <div>
    //       <img src="http://picsum.com/g/400/200" />
    //     </div>
    //     <div>
    //       <img src="http://picsum.com/g/400/200" />
    //     </div>
    //   </Slider>
    // </div>
    <>
      <h1 style={{ color: theme.colors.primary }}>Client Route</h1>
      <p>{result}</p>
    </>
  );
}
