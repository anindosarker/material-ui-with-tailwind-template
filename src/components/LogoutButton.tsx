import Link from "next/link";

export default async function LogoutButton() {
  const user = undefined;

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user}!
      <form>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}
