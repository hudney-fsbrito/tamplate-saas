import { handleAuth } from "@/app/actions/hendle-auth";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-2">Login</h1>
      <form action={handleAuth}>
        <button
          type="submit"
          className="border border-t-neutral-700 p-3 rounded-2xl cursor-pointer "
        >
          Signin with Google
        </button>
      </form>
    </div>
  );
}
