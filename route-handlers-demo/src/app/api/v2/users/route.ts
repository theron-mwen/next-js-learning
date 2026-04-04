type UserV2 = {
    id: string;
    email: string;
    fullName: string;
    createdAt: string;
    name: {
        first: string;
        last: string;
    };
    status: "active" | "inactive";
    lastLoginAt: string;
    profile :{
        avatar: string;
        title: string;
        department: string;
    }
    preferences: {
        language: string;
        timezone: string;
        emauilNotifications: boolean;
    };
}

export async function GET() {
    const users: UserV2[] = [
        {
            id: "1",
            email: "john.doe@example.com",
            fullName: "John Doe",
            createdAt: "2023-01-01T00:00:00Z",
            name: {
                first: "John",
                last: "Doe"
            },
            status: "active",
            lastLoginAt: "2023-10-01T00:00:00Z",
            profile: {
                avatar: "https://example.com/avatar1.jpg",
                title: "Software Engineer",
                department: "Engineering"
            },
            preferences: {
                language: "en",
                timezone: "UTC",
                emauilNotifications: true
            }
        },
        {
            id: "2",
            email: "jane.smith@example.com",
            fullName: "Jane Smith",
            createdAt: "2023-01-01T00:00:00Z",
            name: {
                first: "Jane",
                last: "Smith"
            },
            status: "active",
            lastLoginAt: "2023-10-01T00:00:00Z",
            profile: {
                avatar: "https://example.com/avatar2.jpg",
                title: "Product Manager",
                department: "Product"
            },
            preferences: {
                language: "en",
                timezone: "UTC",
                emauilNotifications: true
            }
        }

    ];
    return Response.json(users);
}