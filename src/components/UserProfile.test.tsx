import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";
import * as userApi from "../api/userApi";

vi.mock("../api/userApi");

describe("UserProfile", () => {
    const mockUser = {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
        phone: "123-456",
        website: "johndoe.com",
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("shows loading state", () => {
        vi.spyOn(userApi, "getUser").mockReturnValue(
            new Promise(() => { }) // never resolves
        );

        render(<UserProfile />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it("renders user data on success", async () => {
        vi.spyOn(userApi, "getUser").mockResolvedValue(mockUser);

        render(<UserProfile />);

        expect(await screen.findByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("john@example.com")).toBeInTheDocument();
    });

    it("renders error message on failure", async () => {
        vi.spyOn(userApi, "getUser").mockRejectedValue(
            new Error("API Error")
        );

        render(<UserProfile />);

        expect(await screen.findByText(/error/i)).toBeInTheDocument();
    });
});
