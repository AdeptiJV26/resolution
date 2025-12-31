'use client';

type Resolution = {
  name: string;
  message: string;
};

export default function Board({ resolutions }: { resolutions: Resolution[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 justify-items-center mt-12 pb-20">
      {resolutions.map((res, i) => (
        <div
          key={i}
          className="group relative w-full min-w-[250px] max-w-[400px] h-[200px] overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
        >
          {/* FRONT: Name */}
          <div className="absolute inset-0 bg-red-600 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-110">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter text-center">
              {res.name}'s <br /> 2026 Goal
            </h3>
          </div>

          {/* REVEAL: Resolution */}
          <div className="absolute inset-0 bg-yellow-100 p-6 flex flex-col justify-between border-b-8 border-green-600 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <p className="italic text-lg text-slate-800 whitespace-pre-wrap leading-snug">
                "{res.message}"
              </p>
            </div>
            <div className="mt-2 pt-2 border-t border-slate-200">
              <p className="text-right font-bold text-red-600 text-sm italic">— {res.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}