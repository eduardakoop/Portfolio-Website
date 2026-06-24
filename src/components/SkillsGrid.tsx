import { useState } from "react";
import { skillsByCategory } from "../data";
import { Cpu, Terminal, Shield, Check } from "lucide-react";

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");

  const categories = Object.keys(skillsByCategory);

  return (
    <div className="space-y-6">
      {/* Category selector */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          id="btn-skill-cat-all"
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-1.5 rounded-md font-mono text-xs transition-all border ${
            selectedCategory === "all"
              ? "bg-violet-950/40 text-violet-400 border-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
              : "bg-slate-900/40 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-300"
          }`}
        >
          [ALL SKILLS]
        </button>
        {categories.map((cat, idx) => (
          <button
            id={`btn-skill-cat-${idx}`}
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-md font-mono text-xs transition-all border ${
              selectedCategory === cat
                ? "bg-violet-950/40 text-violet-400 border-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                : "bg-slate-900/40 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-300"
            }`}
          >
            [{cat.toUpperCase().replace(" & ", " ").replace(/_/g, " ")}]
          </button>
        ))}
      </div>

      {/* Grid structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skillsByCategory).map(([categoryName, skills], catIdx) => {
          // If a category is selected, filter others out
          if (selectedCategory !== "all" && selectedCategory !== categoryName) {
            return null;
          }

          // Assign different colors or headers based on category for depth
          const getModuleId = (index: number) => `MOD_0${index + 1}`;
          const getIcon = (index: number) => {
            switch (index) {
              case 0:
                return <Cpu className="w-4 h-4 text-violet-400" />;
              case 1:
                return <Shield className="w-4 h-4 text-pink-400" />;
              case 2:
                return <Terminal className="w-4 h-4 text-blue-400" />;
              default:
                return <Shield className="w-4 h-4 text-violet-400" />;
            }
          };

          return (
            <div
              id={`skill-card-${catIdx}`}
              key={categoryName}
              className="border border-slate-800 bg-slate-950/80 rounded-lg p-5 relative overflow-hidden group hover:border-violet-500/50 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.05)]"
            >
              {/* Terminal scanline header */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4 font-mono text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500/60" />
                  <span className="ml-1 text-slate-400 font-medium">
                    {getModuleId(catIdx)}.sys
                  </span>
                </div>
                <span className="text-[10px] text-violet-500/60 select-none animate-pulse">
                  ● CORE LOAD
                </span>
              </div>

              {/* Category label */}
              <div className="flex items-center gap-2 mb-4">
                {getIcon(catIdx)}
                <h3 className="font-display font-semibold text-slate-200 tracking-tight text-base">
                  {categoryName}
                </h3>
              </div>

              {/* Skills list styled with simulation levels */}
              <div className="space-y-3 font-mono">
                {skills.map((skill, sIdx) => {
                  // Determine dummy telemetry level for retro aesthetic
                  const progressWidths = ["95%", "90%", "85%", "80%", "75%"];
                  const width = progressWidths[sIdx % progressWidths.length];

                  return (
                    <div id={`skill-item-${catIdx}-${sIdx}`} key={skill} className="text-xs">
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span className="flex items-center gap-1.5 hover:text-violet-400 transition-colors">
                          <Check className="w-3.5 h-3.5 text-violet-400/80 shrink-0" />
                          {skill}
                        </span>
                        <span className="text-[10px] text-slate-600">
                          {width === "95%" ? "EXPERT" : width === "90%" ? "ADVANCED" : "PROFICIENT"}
                        </span>
                      </div>
                      {/* Technical progress bar */}
                      <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            catIdx % 2 === 0
                              ? "bg-gradient-to-r from-violet-600 to-violet-400"
                              : "bg-gradient-to-r from-blue-600 to-blue-400"
                          }`}
                          style={{ width }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
