import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-screen">
      <h1 className="text-4xl font-bold">Landing Page</h1>
      <Link href="/login">
        <button className="border border-t-neutral-700 p-3 rounded-2xl cursor-pointer ">Login</button>
      </Link>
    </div>
  );
}
