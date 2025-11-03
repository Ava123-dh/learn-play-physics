import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Trophy, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { toast } from "@/hooks/use-toast";
import { TutorialDialog } from "./TutorialDialog";

export const Header = () => {
  const { totalPoints, resetProgress } = useProgress();

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Trophy className="w-4 h-4" />
              {totalPoints} points
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const ok = window.confirm("Reset all progress and points? This cannot be undone.");
                if (!ok) return;
                resetProgress();
                toast({
                  title: "Progress reset",
                  description: "All points and progress have been cleared.",
                });
              }}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Progress
            </Button>
            <TutorialDialog />
          </div>
        </div>
      </div>
    </header>
  );
};