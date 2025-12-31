// app/page.tsx
import Board from "./board";
import { db } from "@/lib/db";
import { addResolution } from "./actions";
import Link from "next/link";
import VisualEffects from "@/components/ve";

export default async function Home(props: {
  searchParams: Promise<{ view?: string }>;
}) {
  const searchParams = await props.searchParams;
  const showBoard = searchParams.view === "board";

  const resolutions = await db.resolution.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="relative min-h-dvh w-full overflow-x-hidden">
      <VisualEffects />

      <main className="relative z-10 p-4 md:p-8 font-sans w-full">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h1 className="uppercase text-white font-bold text-4xl md:text-6xl">
            <span className="text-red-700">Happy</span>{" "}
            <span className="text-green-700">New</span>{" "}
            <span className="text-blue-700">Year!</span>
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mt-2 italic drop-shadow-lg leading-tight">
            {showBoard ? "The Resolution Board" : "New Year Resolution 2026"}
          </h1>
        </div>

        {!showBoard ? (
          <div className="max-w-2xl mx-auto">
            <form
              action={addResolution}
              className="relative bg-red-600 p-6 md:p-8 rounded-2xl shadow-2xl space-y-4 overflow-hidden border-4 border-red-700"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 md:w-8 h-full bg-white/90 z-0" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-6 md:h-8 bg-white/90 z-0" />

              <div className="relative z-10 space-y-4">
                <div className="bg-white p-1 rounded-lg">
                  <input
                    name="name"
                    placeholder="Nickname"
                    className="w-full p-3 border-2 rounded-lg text-black focus:ring-2 focus:ring-red-400 outline-none"
                    required
                  />
                </div>
                <div className="bg-white p-1 rounded-lg">
                  <textarea
                    name="message"
                    placeholder="Your Resolution"
                    className="w-full p-3 border-2 rounded-lg text-black h-32 focus:ring-2 focus:ring-red-400 outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-red-700 py-4 rounded-lg font-black hover:bg-yellow-300 transition-all uppercase shadow-lg border-b-4 border-yellow-600 active:border-b-0"
                >
                  ✨ Post to Board ✨
                </button>
              </div>
            </form>
            <div className="flex justify-center mt-8">
              <Link
                href="/?view=board"
                className="bg-white border-4 border-red-600 text-red-600 px-6 py-2 rounded-full font-black uppercase text-center"
              >
                View the Board
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex justify-center mb-10">
              <Link
                href="/"
                className="bg-white text-red-600 px-8 py-3 rounded-full font-black border-4 border-red-600 uppercase text-center"
              >
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