"use client"
import "./globals.css";

import { useState } from "react";

interface WrapperProps {
    children: React.ReactNode;
}

const ErrorSimulator =({
    message = "An error occurred",
}) => {
    const [error, setError] = useState<Error | null>(null);

    if (error) throw error;
    
    return (
        <button onClick={() => setError(new Error(message))}>
            Simulate Error
        </button>
    );
}

export default function ErrorWrapper({children}: WrapperProps) {
    return (
        <div>
            <ErrorSimulator />
            {children}
        </div>
    );
}