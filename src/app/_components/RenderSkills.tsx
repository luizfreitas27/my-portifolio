import { Card, CardContent } from "@/components/ui/card";
import { ICONS, SkillCategory } from "@/utils/constants";

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  backend:  "Backend",
  frontend: "Frontend",
  database: "Database",
  devops:   "DevOps & Infrastructure",
};

const CATEGORIES: SkillCategory[] = ["backend", "frontend", "database", "devops"];

export function RenderSkills() {
  return (
    <div className="flex flex-col gap-10 mt-8">
      {CATEGORIES.map((cat) => {
        const icons = ICONS.filter((i) => i.category === cat);
        return (
          <section key={cat}>
            <h2 className="text-lg font-semibold text-red-400 mb-4 border-b border-border pb-2">
              {CATEGORY_LABELS[cat]}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {icons.map(({ icon, name, colorClassName }, index) => (
                <Card
                  key={index}
                  className="hover:scale-105 transition-all duration-200 ease-in-out bg-card shadow-sm hover:shadow-md"
                >
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                    <div className={`text-4xl ${colorClassName}`}>{icon}</div>
                    <span className="text-sm font-medium text-center">{name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
