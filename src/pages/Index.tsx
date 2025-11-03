import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Trophy } from "lucide-react";
import { modules } from "@/data/simulations";
import { ModuleCard } from "@/components/ModuleCard";
import { useProgress } from "@/hooks/useProgress";

const Index = () => {
  const { totalPoints, isModuleUnlocked, getModuleCompletedCount } = useProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Interactive Physics Learning
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
          Stimuli
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          Master physics through interactive simulations. Earn points, unlock modules, and level up your understanding.
        </p>

        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border-2 border-primary/20 shadow-lg">
            <Trophy className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Total Points</p>
              <p className="text-2xl font-bold text-primary">{totalPoints}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border-2 border-secondary/20 shadow-lg">
            <Sparkles className="w-5 h-5 text-secondary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Modules</p>
              <p className="text-2xl font-bold text-secondary">
                {modules.filter(m => isModuleUnlocked(m.requiredPoints)).length}/{modules.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-border/50">
          <h3 className="font-semibold text-lg mb-2">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-primary font-bold">1</span>
              </div>
              <p className="text-muted-foreground">Answer questions using PhET simulations</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                <span className="text-secondary font-bold">2</span>
              </div>
              <p className="text-muted-foreground">Earn 10 points per correct answer</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                <span className="text-accent font-bold">3</span>
              </div>
              <p className="text-muted-foreground">Get 2/3 correct to unlock next module</p>
            </div>
          </div>
        </div>
      </header>

      {/* Modules Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Physics Modules
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              isUnlocked={isModuleUnlocked(module.requiredPoints)}
              completedCount={getModuleCompletedCount(module.id)}
              totalPoints={totalPoints}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-border/50">
        <p className="text-muted-foreground text-sm">
          Powered by PhET Interactive Simulations from University of Colorado Boulder
        </p>
      </footer>
    </div>
  );
};

export default Index;
