import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, XCircle } from "lucide-react";
import { simulations } from "@/data/simulations";
import { toast } from "sonner";

const Simulation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [attempts, setAttempts] = useState(0);

  const currentSimulation = simulations.find(sim => sim.id === Number(id));
  const progress = currentSimulation ? (currentSimulation.id / simulations.length) * 100 : 0;

  useEffect(() => {
    setAnswer("");
    setShowHint(false);
    setIsCorrect(null);
    setAttempts(0);
  }, [id]);

  if (!currentSimulation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Simulation not found</h2>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  const checkAnswer = () => {
    const userAnswer = answer.trim().toLowerCase();
    const correctAnswer = currentSimulation.answer.toLowerCase();
    
    // Allow for small numerical variations (within 10%)
    const numericUser = parseFloat(userAnswer);
    const numericCorrect = parseFloat(correctAnswer);
    
    let correct = false;
    if (!isNaN(numericUser) && !isNaN(numericCorrect)) {
      const tolerance = Math.abs(numericCorrect * 0.1);
      correct = Math.abs(numericUser - numericCorrect) <= tolerance;
    } else {
      correct = userAnswer === correctAnswer;
    }

    setIsCorrect(correct);
    setAttempts(prev => prev + 1);

    if (correct) {
      toast.success("Correct! Well done! 🎉", {
        description: "You can now move to the next simulation."
      });
    } else {
      toast.error("Not quite right. Try again!", {
        description: "Use the simulation to find the answer."
      });
    }
  };

  const nextSimulation = () => {
    const nextId = currentSimulation.id + 1;
    if (nextId <= simulations.length) {
      navigate(`/simulation/${nextId}`);
    } else {
      toast.success("Congratulations! You've completed all simulations! 🎊");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Button>
          <div className="flex-1 max-w-md mx-4">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground text-center mt-2">
              Simulation {currentSimulation.id} of {simulations.length}
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            Attempts: {attempts}
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Question and Input */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{currentSimulation.title}</CardTitle>
                    <CardDescription>{currentSimulation.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Question:</h3>
                  <p className="text-foreground">{currentSimulation.question}</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Answer:</label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Enter your answer..."
                      disabled={isCorrect === true}
                      onKeyPress={(e) => e.key === 'Enter' && !isCorrect && checkAnswer()}
                      className="text-lg"
                    />
                    {currentSimulation.unit && (
                      <div className="flex items-center px-3 bg-muted rounded-md">
                        <span className="text-sm font-medium">{currentSimulation.unit}</span>
                      </div>
                    )}
                  </div>
                </div>

                {isCorrect !== null && (
                  <div className={`p-4 rounded-lg flex items-start gap-3 ${
                    isCorrect ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
                  }`}>
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Correct!</p>
                          <p className="text-sm opacity-90">Great work! You can move to the next simulation.</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Incorrect</p>
                          <p className="text-sm opacity-90">Try using the simulation to find the answer.</p>
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="flex gap-2">
                  <Button 
                    onClick={checkAnswer} 
                    disabled={!answer || isCorrect === true}
                    className="flex-1"
                  >
                    Submit Answer
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowHint(!showHint)}
                    className="gap-2"
                  >
                    <Lightbulb className="w-4 h-4" />
                    Hint
                  </Button>
                </div>

                {showHint && (
                  <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                    <p className="text-sm"><strong>Hint:</strong> {currentSimulation.hint}</p>
                  </div>
                )}

                {isCorrect && (
                  <Button 
                    onClick={nextSimulation}
                    className="w-full gap-2"
                    size="lg"
                  >
                    {currentSimulation.id < simulations.length ? 'Next Simulation' : 'Complete'}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Simulation */}
          <Card className="lg:sticky lg:top-24 h-fit">
            <CardHeader>
              <CardTitle>Interactive Simulation</CardTitle>
              <CardDescription>Use this simulation to find the answer</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src={currentSimulation.iframeUrl}
                  className="w-full h-full border-0 rounded-b-lg"
                  title={currentSimulation.title}
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
