// app/page.tsx
import Board from "./board";
import { db } from "@/lib/db";
import { addResolution } from "./actions";
import Link from "next/link";
import VisualEffects from "@/components/ve"; // Import the new component

export default async function Home(props: {
  searchParams: Promise<{ view?: string }>;
}) {
  const searchParams = await props.searchParams;
  const showBoard = searchParams.view === "board";

  const resolutions = await db.resolution.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="relative min-h-screen">
      {/* This is now a Client Component, so Snowfall won't crash */}
      <VisualEffects />

      <main className="relative p-4 md:p-8 font-sans">
        {/* ... rest of your code (H1, Form, Board) remains the same ... */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white italic drop-shadow-lg">
            {showBoard ? "The Resolution Board" : "New Year Resolution 2026"}
          </h1>
        </div>

        {!showBoard ? (
          <div className="max-w-2xl mx-auto">
            <form action={addResolution} className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl space-y-4">
              <input name="name" placeholder="Nickname" className="w-full p-3 border-2 rounded-lg text-black" required />
              <textarea name="message" placeholder="Your Resolution" className="w-full p-3 border-2 rounded-lg text-black h-32" required />
              <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-lg font-black hover:bg-green-700 transition-all uppercase">
                ✨Post to Board✨
              </button>
            </form>
            <div className="flex justify-center mt-8">
              <Link href="/?view=board" className="bg-white border-4 border-red-600 text-red-600 px-6 py-2 rounded-full font-black uppercase">
                View the Board
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex justify-center mb-10">
              <Link href="/" className="bg-white text-red-600 px-8 py-3 rounded-full font-black border-4 border-red-600 uppercase">
                Back to Submission
              </Link>
            </div>
            <Board resolutions={resolutions} />
          </div>
        )}
      </main>
    </div>
  );
}