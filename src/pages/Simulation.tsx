import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Home, Lightbulb, CheckCircle2, XCircle, ArrowRight, Trophy } from "lucide-react";
import { modules } from "@/data/simulations";
import { TutorialDialog } from "@/components/TutorialDialog";
import { toast } from "@/hooks/use-toast";
import { useProgress } from "@/hooks/useProgress";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";

const Simulation = () => {
  const { id, questionId } = useParams();
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  
  const { addPoints, isQuestionCompleted, totalPoints, getModuleCompletedCount } = useProgress();

  const module = modules.find((m) => m.id === Number(id));
  const currentQuestionIndex = Number(questionId) - 1;
  const question = module?.questions[currentQuestionIndex];

  const isCompleted = question ? isQuestionCompleted(module!.id, question.id) : false;
  const moduleCompletedCount = module ? getModuleCompletedCount(module.id) : 0;

  useEffect(() => {
    setUserAnswer("");
    setShowHint(false);
    setIsCorrect(null);
    setAttempts(0);
    setShowSolution(false);
    setShowConfetti(false);
  }, [id, questionId]);

  if (!module || !question) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <XCircle className="w-16 h-16 mx-auto mb-4 text-destructive" />
            <h2 className="text-2xl font-bold mb-4">Question Not Found</h2>
            <Link to="/">
              <Button>
                <Home className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const checkAnswer = () => {
    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const normalizedCorrectAnswer = question.answer.toLowerCase();

    const isNumeric = !isNaN(Number(normalizedUserAnswer)) && !isNaN(Number(normalizedCorrectAnswer));

    let correct = false;
    if (isNumeric) {
      const userNum = parseFloat(normalizedUserAnswer);
      const correctNum = parseFloat(normalizedCorrectAnswer);
      const tolerance = Math.abs(correctNum * 0.1);
      correct = Math.abs(userNum - correctNum) <= tolerance;
    } else {
      correct = normalizedUserAnswer === normalizedCorrectAnswer;
    }

    setIsCorrect(correct);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (correct && !isCompleted) {
      addPoints(module.id, question.id, question.points);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
      
      toast({
        title: "Correct! 🎉",
        description: `You earned ${question.points} points! Total: ${totalPoints + question.points} points`,
      });
    } else if (correct) {
      toast({
        title: "Already Completed",
        description: "You've already earned points for this question.",
      });
    } else {
      toast({
        title: "Not quite right",
        description: `Try again! Attempts: ${newAttempts}/3`,
        variant: "destructive",
      });
    }

    if (newAttempts >= 3 && !correct) {
      setShowSolution(true);
      toast({
        title: "Solution Revealed",
        description: "Review the steps below to understand the answer.",
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < module.questions.length - 1) {
      navigate(`/simulation/${module.id}/${currentQuestionIndex + 2}`);
    } else {
      const currentModuleIndex = modules.findIndex(m => m.id === module.id);
      if (currentModuleIndex < modules.length - 1) {
        const completedCount = getModuleCompletedCount(module.id);
        if (completedCount >= 2) {
          toast({
            title: "Module Complete! 🎊",
            description: "You've unlocked the next module!",
          });
        }
      }
      navigate("/");
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / module.questions.length) * 100;
  const canProgressToNext = moduleCompletedCount >= 2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}
      
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
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
              <TutorialDialog />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <h1 className="font-bold text-lg">{module.title}</h1>
              <span className="text-muted-foreground">
                Question {currentQuestionIndex + 1} of {module.questions.length}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Progress: {moduleCompletedCount}/3 completed</span>
              <span className={canProgressToNext ? "text-success font-semibold" : ""}>
                {canProgressToNext ? "✓ Ready for next module" : "Need 2/3 to unlock next"}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Simulation */}
      <div className="container mx-auto px-4 py-6">
        <Card className="mb-6 overflow-hidden border-2">
          <iframe
            src={module.iframeUrl}
            className="w-full h-[70vh] min-h-[500px]"
            title={module.title}
            allowFullScreen
          />
        </Card>

        {/* Question Section */}
        <Card className="border-2">
          <CardContent className="pt-6 space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">{question.question}</h2>
                  {question.unit && (
                    <Badge variant="outline">Answer in {question.unit}</Badge>
                  )}
                </div>
                <Badge variant={isCompleted ? "default" : "secondary"} className="ml-4">
                  {isCompleted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      Completed
                    </>
                  ) : (
                    `${question.points} points`
                  )}
                </Badge>
              </div>

              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter your answer"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && checkAnswer()}
                  className="text-lg"
                  disabled={isCorrect === true}
                />
                <Button onClick={checkAnswer} disabled={!userAnswer || isCorrect === true} size="lg">
                  Submit
                </Button>
                <Button variant="outline" onClick={() => setShowHint(!showHint)} size="lg">
                  <Lightbulb className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Feedback */}
            {isCorrect === true && (
              <Alert className="border-success bg-success/10">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <AlertDescription className="text-success font-semibold">
                  Correct! {!isCompleted && `You earned ${question.points} points!`}
                </AlertDescription>
              </Alert>
            )}

            {isCorrect === false && (
              <Alert variant="destructive">
                <XCircle className="w-4 h-4" />
                <AlertDescription>
                  Incorrect. Attempts: {attempts}/3
                  {attempts >= 3 && " - Solution revealed below"}
                </AlertDescription>
              </Alert>
            )}

            {/* Hint */}
            {showHint && (
              <Alert className="border-secondary bg-secondary/10">
                <Lightbulb className="w-4 h-4 text-secondary" />
                <AlertDescription className="text-secondary-foreground">
                  <strong>Hint:</strong> {question.hint}
                </AlertDescription>
              </Alert>
            )}

            {/* Solution */}
            {(showSolution || isCompleted) && (
              <Alert className="border-primary bg-primary/10">
                <AlertDescription>
                  <div className="space-y-2">
                    <p className="font-bold text-lg">Solution Steps:</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      {question.solution.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                    <p className="font-bold mt-4">
                      Correct Answer: {question.answer} {question.unit}
                    </p>
                  </div>
                </AlertDescription>
              </Alert>
            )}

            {/* Next Button */}
            {(isCorrect === true || showSolution) && (
              <Button onClick={nextQuestion} size="lg" className="w-full">
                {currentQuestionIndex < module.questions.length - 1 ? (
                  <>
                    Next Question
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                ) : (
                  <>
                    Complete Module
                    <CheckCircle2 className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Simulation;
