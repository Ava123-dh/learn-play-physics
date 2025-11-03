import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, CheckCircle2, Rocket, Waves, Clock, Zap, Activity } from "lucide-react";
import { Link } from "react-router-dom";

interface ModuleCardProps {
  module: {
    id: number;
    title: string;
    description: string;
    icon: string;
    requiredPoints: number;
    questions: any[];
  };
  isUnlocked: boolean;
  completedCount: number;
  totalPoints: number;
}

const iconMap: Record<string, any> = {
  Rocket,
  Waves,
  Clock,
  Zap,
  Activity
};

export const ModuleCard = ({ module, isUnlocked, completedCount, totalPoints }: ModuleCardProps) => {
  const Icon = iconMap[module.icon] || Rocket;
  const totalQuestions = module.questions.length;
  const canProgress = completedCount >= 2;
  
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 ${
      isUnlocked 
        ? "hover:shadow-xl hover:-translate-y-1 border-2 hover:border-primary" 
        : "opacity-60"
    }`}>
      <CardContent className="pt-6">
        {!isUnlocked && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="text-center">
              <Lock className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm font-medium text-muted-foreground">
                Requires {module.requiredPoints} points
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                You have {totalPoints} points
              </p>
            </div>
          </div>
        )}
        
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
            isUnlocked ? "bg-primary/10" : "bg-muted"
          }`}>
            <Icon className={`w-7 h-7 ${isUnlocked ? "text-primary" : "text-muted-foreground"}`} />
          </div>
          
          {completedCount > 0 && (
            <Badge variant={canProgress ? "default" : "secondary"} className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              {completedCount}/{totalQuestions}
            </Badge>
          )}
        </div>

        <h3 className="text-xl font-bold mb-2">{module.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {module.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{totalQuestions} questions</span>
            <span>10 points each</span>
          </div>
          
          {isUnlocked ? (
            <Link to={`/simulation/${module.id}/1`}>
              <Button className="w-full" variant={completedCount > 0 ? "default" : "outline"}>
                {completedCount === 0 ? "Start Module" : completedCount >= 2 ? "Review" : "Continue"}
              </Button>
            </Link>
          ) : (
            <Button className="w-full" disabled variant="outline">
              Locked
            </Button>
          )}
        </div>

        {canProgress && (
          <div className="mt-3 p-2 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-xs text-center font-medium text-primary">
              ✨ Module Unlocked! Ready for next challenge
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
