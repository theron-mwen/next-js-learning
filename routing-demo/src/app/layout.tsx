import React from "react"

export const metadata = {
    title: 'Routing Demo',
    description: 'A demo of routing in Next.js 13',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                    {children}
            </body>
        </html>
    );
}