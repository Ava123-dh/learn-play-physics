import { useState, useEffect } from "react";

interface Progress {
  totalPoints: number;
  completedQuestions: Record<string, boolean>;
  moduleProgress: Record<number, number>;
}

const STORAGE_KEY = "stimuli_progress";

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return {
      totalPoints: 0,
      completedQuestions: {},
      moduleProgress: {}
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const addPoints = (moduleId: number, questionId: number, points: number) => {
    const key = `${moduleId}-${questionId}`;
    
    setProgress(prev => {
      // Don't add points if question already completed
      if (prev.completedQuestions[key]) {
        return prev;
      }

      const newModuleProgress = { ...prev.moduleProgress };
      newModuleProgress[moduleId] = (newModuleProgress[moduleId] || 0) + 1;

      return {
        totalPoints: prev.totalPoints + points,
        completedQuestions: {
          ...prev.completedQuestions,
          [key]: true
        },
        moduleProgress: newModuleProgress
      };
    });
  };

  const isModuleUnlocked = (requiredPoints: number) => {
    return progress.totalPoints >= requiredPoints;
  };

  const getModuleCompletedCount = (moduleId: number) => {
    return progress.moduleProgress[moduleId] || 0;
  };

  const isQuestionCompleted = (moduleId: number, questionId: number) => {
    const key = `${moduleId}-${questionId}`;
    return progress.completedQuestions[key] || false;
  };

  const resetProgress = () => {
    setProgress({
      totalPoints: 0,
      completedQuestions: {},
      moduleProgress: {}
    });
  };

  return {
    totalPoints: progress.totalPoints,
    addPoints,
    isModuleUnlocked,
    getModuleCompletedCount,
    isQuestionCompleted,
    resetProgress
  };
};
