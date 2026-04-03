import Image from "next/image";
import Wonders from "../wonders";
export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const photo = Wonders.find((w) => w.id === parseInt(id));
  return (
    <>
      {photo && (
        <div className="container mx-auto my-10">
          <div className="w-1/2 mx-auto">
            <div>
              <h1 className="text-center text-3xl font-bold my-4">
                {photo.name}
              </h1>
            </div>
            <Image
              className="w-full object-cover aspect-square mx-auto"
              src={photo.src}
              alt={photo.name}
              width={400}
              height={300}
            />
          </div>
          <div className="bg-white py-4">
            <h3>{photo.photographer}</h3>
            <h3>{photo.location}</h3>
          </div>
        </div>
        //
      )}
    </>
  );
}
