import Profile from "./profile";

export function Gallery() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Profile />
            <Profile />
            <Profile />
        </div>
    );
}
