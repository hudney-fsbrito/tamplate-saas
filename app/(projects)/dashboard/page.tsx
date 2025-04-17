import { handleAuth } from "@/app/actions/hendle-auth";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 className="text-4xl font-bold">Protected Dashboard</h1>
      <p>
        {session?.user?.email
          ? session.user.email
          : "Usuário não está logado!!!"}
      </p>
      {session.user?.email && (
        <form action={handleAuth}>
          <button
            type="submit"
            className="border border-t-neutral-700 p-3 rounded-2xl cursor-pointer "
          >
            Logout
          </button>
        </form>
      )}
    </div>
  );
}
