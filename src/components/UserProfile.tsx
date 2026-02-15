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
        <div className="profil_info">
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>User Profile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <th>Website</th>
                        <td>{user.website}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserProfile;
