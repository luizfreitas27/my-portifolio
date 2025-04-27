import { RenderSkills } from "../_components/RenderSkills";
export default function SkillPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold ">Skill and Knolodges</h1>
      </div>
      <RenderSkills />
    </main>
  );
}
