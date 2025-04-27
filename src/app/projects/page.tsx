import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchPinnedRepositories } from "@/lib/api/fetchPinnedRepos";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import Link from "next/link";

export default async function ProjectsPage() {
  const repos = await fetchPinnedRepositories("luizfreitas27");

  return (
    <main className="min-h-screen w-full px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <Card key={repo.name} className="hover:scale-105 transition-all duration-200 ease-in-out dark:bg-card bg-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaGithub className="text-xl" />
                  <Link 
                    href={repo.url} 
                    target="_blank"
                    className="hover:text-red-400 transition-colors"
                  >
                    {repo.name}
                  </Link>
                </CardTitle>
                <CardDescription>{repo.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                {repo.primaryLanguage && (
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: repo.primaryLanguage.color }}
                    />
                    <span className="text-sm">{repo.primaryLanguage.name}</span>
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="flex gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span>{repo.stargazerCount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCodeBranch className="text-gray-500" />
                  <span>{repo.forkCount}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
