import { useEffect, useState } from "react";
import { getUser } from "../api/userApi";
import type { User } from "../api/userApi";

const UserProfile = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getUser()
            .then((data) => setUser(data))
            .catch((err: Error) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!user) return <p>No user data</p>;

    return (
        <div>
            <h2>User Profile</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
    );
};

export default UserProfile;
