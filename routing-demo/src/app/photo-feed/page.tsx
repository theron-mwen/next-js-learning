import Link from "next/link";
import Image from "next/image";
import wonders from "./wonders";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonders.map(({ id, src, name }) => (
          <Link
            key={id}
            href={`/photo-feed/${id}`}
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            <Image
              src={src}
              alt={name}
              width={400}
              height={300}
              className="w-full h-auto object-cover aspect-square text-gray-300"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
