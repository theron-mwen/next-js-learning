import Link from "next/link"


export default function ProductList() {
    const productId = 100
    return (
        <>
            <Link href="/">Home</Link>
            <h1>Product List</h1>
            <ul>
                <li><Link href="/products/product-1">Product 1</Link></li>
                <li><Link href="/products/product-2" replace>Product 2</Link></li>
                <li><Link href={`/products/${productId}`}>Product ${productId}</Link></li>
            </ul>
        </>
    )
}