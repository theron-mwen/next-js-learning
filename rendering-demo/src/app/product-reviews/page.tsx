import { Suspense } from "react";

import { Product } from "@/components/products";
import { Reviews } from "@/components/reviews";
export default function ProductReviews() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<h1>Loading product details...</h1>}>
        <Product />
      </Suspense>
      <Suspense fallback={<h1>Loading reviews...</h1>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
