import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Beaker, Brain, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
          <Zap className="w-4 h-4" />
          Interactive Physics Learning
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Stimuli
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Master physics through interactive simulations. Answer questions, experiment in real-time, and level up your understanding.
        </p>
        <Link to="/simulation/1">
          <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
            Start Learning
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Beaker className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interact</h3>
              <p className="text-muted-foreground">
                Use PhET simulations to experiment with physics concepts in real-time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary transition-colors">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Answer</h3>
              <p className="text-muted-foreground">
                Use the simulation to find the answer to physics questions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-colors">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress</h3>
              <p className="text-muted-foreground">
                Get instant feedback and advance to the next challenge.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-3xl">
          <div className="bg-card rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Master Physics?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join students learning physics through hands-on experimentation.
            </p>
            <Link to="/simulation/1">
              <Button size="lg" variant="default" className="text-lg px-8 py-6 rounded-full">
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground border-t">
        <p>Powered by PhET Interactive Simulations</p>
      </footer>
    </div>
  );
};

export default Index;
