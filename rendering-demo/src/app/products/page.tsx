import Link from "next/link";

export default function ProductPage() {
    return(
    <>
        <h1>Featured Products</h1>
        <Link href="/products/1">View Product 1</Link>
        <Link href="/products/2">View Product 2</Link>
        <Link href="/products/3">View Product 3</Link>

    </>)
}
