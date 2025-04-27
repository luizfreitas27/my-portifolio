import { Card, CardContent } from "@/components/ui/card";
import { ICONS } from "@/utils/constants";

export function RenderSkills() {
  const uniqueIcons = ICONS.filter(
    (icon, index, self) =>
      index === self.findIndex((i) => i.icon.type === icon.icon.type)
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8 ">
      {uniqueIcons.map(({ icon, name, colorClassName }, index) => (
        <Card
          key={index}
          className="hover:scale-105 transition-all duration-200 ease-in-out dark:bg-card bg-gray-200"
        >
          <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
            <div className={`text-4xl ${colorClassName}`}>{icon}</div>
            <span className="text-sm font-medium">{name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
