import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Loading() {
  return (
    <main className="min-h-screen w-full px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="skeleton h-9 w-48 mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="bg-card shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="skeleton h-6 w-6 rounded-full" />
                  <div className="skeleton h-6 w-32" />
                </div>
                <div className="skeleton h-4 w-full mt-2" />
                <div className="skeleton h-4 w-3/4 mt-1" />
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="skeleton h-3 w-3 rounded-full" />
                  <div className="skeleton h-4 w-20" />
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-4">
                <div className="flex items-center gap-1">
                  <div className="skeleton h-4 w-4 rounded-full" />
                  <div className="skeleton h-4 w-8" />
                </div>
                <div className="flex items-center gap-1">
                  <div className="skeleton h-4 w-4 rounded-full" />
                  <div className="skeleton h-4 w-8" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
} 