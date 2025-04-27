import { LanguageAbout } from "@/app/_components/LanguageAbout";
import { Sidebar } from "@/app/_components/SideBar";

export default function AboutPage() {
  return (
    <main className="mb-24 md:mt-32 mt-10 flex w-full flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div className="hidden md:flex md:flex-1">
        <Sidebar />
      </div>

      <div className="w-full md:w-3/4 lg:w-4/5 prose prose-invert">
        <LanguageAbout />
      </div>
    </main>
  );
}
