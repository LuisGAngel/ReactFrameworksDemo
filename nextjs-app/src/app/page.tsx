import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link href="/anime">Anime</Link>
        </li>
        <li>
          <Link href="/other">Other</Link>
        </li>
      </ul>
    </div>
  );
}
