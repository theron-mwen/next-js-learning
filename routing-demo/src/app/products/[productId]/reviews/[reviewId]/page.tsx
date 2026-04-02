import { notFound, redirect } from "next/navigation";
export default async function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000 || !productId || !reviewId) {
    // notFound();
    redirect("/products");
  }
  return (
    <div>
      <h1>Review Details</h1>
      <p>Product ID: {productId}</p>
      <p>Review ID: {reviewId}</p>
    </div>
  );
}
