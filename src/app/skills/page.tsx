import { RenderSkills } from "../_components/RenderSkills";

export default function SkillPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 pb-16">
      <div className="flex flex-col items-start mb-2">
        <h1 className="text-2xl font-bold">Skills &amp; Knowledge</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Technologies I work with on a daily basis
        </p>
      </div>
      <RenderSkills />
    </main>
  );
}
