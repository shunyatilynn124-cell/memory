import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, RotateCcw, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface MultipleChoiceQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface TrueFalseQuestion {
  statement: string;
  isTrue: boolean;
  explanation: string;
}

interface CompletionQuestion {
  sentence: string;
  blank: string;
  answer: string;
  hint?: string;
}

const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    question: "Which type of memory stores personal experiences and events from your past?",
    options: ["Semantic Memory", "Episodic Memory", "Procedural Memory", "Short-term Memory"],
    correctIndex: 1,
    explanation: "Episodic memory refers to the long-term storage of information regarding personal experiences and events.",
  },
  {
    question: "What is the typical capacity of short-term memory?",
    options: ["1-2 items", "5-9 items", "15-20 items", "Unlimited"],
    correctIndex: 1,
    explanation: "Short-term memory can hold approximately 5 to 9 items, known as 'The Magic Number 7 ± 2'.",
  },
  {
    question: "Which type of memory helps you ride a bicycle without thinking about each step?",
    options: ["Episodic Memory", "Semantic Memory", "Procedural Memory", "Working Memory"],
    correctIndex: 2,
    explanation: "Procedural memory helps us perform motor and cognitive skills automatically, like riding a bicycle.",
  },
  {
    question: "Knowing that '2 × 2 = 4' is an example of which type of memory?",
    options: ["Episodic Memory", "Semantic Memory", "Procedural Memory", "Sensory Memory"],
    correctIndex: 1,
    explanation: "Semantic memory stores factual knowledge about the world, independent of personal experience.",
  },
  {
    question: "How long does short-term memory typically last without rehearsal?",
    options: ["1-5 seconds", "15-30 seconds", "5-10 minutes", "Several hours"],
    correctIndex: 1,
    explanation: "Short-term memory stores information for 15 to 30 seconds without active rehearsal.",
  },
];

const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    statement: "Episodic memory contains all our factual knowledge about the world.",
    isTrue: false,
    explanation: "This is FALSE. Semantic memory (not episodic) contains factual knowledge. Episodic memory stores personal experiences.",
  },
  {
    statement: "Long-term memory has essentially unlimited capacity.",
    isTrue: true,
    explanation: "This is TRUE. Long-term memory capacity is essentially unlimited and can store information for decades.",
  },
  {
    statement: "Procedural memory is also known as 'knowing how' memory.",
    isTrue: true,
    explanation: "This is TRUE. Procedural memory is about knowing how to do things, like riding a bike or playing an instrument.",
  },
  {
    statement: "Short-term memory is associated with the hippocampus.",
    isTrue: false,
    explanation: "This is FALSE. Short-term memory is associated with the prefrontal cortex. The hippocampus is involved in forming long-term memories.",
  },
  {
    statement: "Memory is described as the 'database' of the human mind.",
    isTrue: true,
    explanation: "This is TRUE. Memory functions like a database, storing all our knowledge, skills, and experiences.",
  },
];

const completionQuestions: CompletionQuestion[] = [
  {
    sentence: "Episodic, Semantic, and Procedural memories are all components of _____ Memory.",
    blank: "_____",
    answer: "long-term",
    hint: "Opposite of short-term",
  },
  {
    sentence: "The capacity of short-term memory is approximately _____ items.",
    blank: "_____",
    answer: "7",
    hint: "A number between 5 and 9",
  },
  {
    sentence: "_____ memory helps us perform motor skills automatically, like tying shoelaces.",
    blank: "_____",
    answer: "procedural",
    hint: "Related to procedures or processes",
  },
  {
    sentence: "Short-term memory is associated with the _____ cortex.",
    blank: "_____",
    answer: "prefrontal",
    hint: "Located at the front of the frontal lobe",
  },
  {
    sentence: "Memory is the foundation of our _____, knowledge, and experience.",
    blank: "_____",
    answer: "identity",
    hint: "Who you are as a person",
  },
];

const Practice = () => {
  const [activeTab, setActiveTab] = useState("multiple-choice");
  
  // Multiple Choice State
  const [mcAnswers, setMcAnswers] = useState<(number | null)[]>(new Array(multipleChoiceQuestions.length).fill(null));
  const [mcSubmitted, setMcSubmitted] = useState(false);
  
  // True/False State
  const [tfAnswers, setTfAnswers] = useState<(boolean | null)[]>(new Array(trueFalseQuestions.length).fill(null));
  const [tfSubmitted, setTfSubmitted] = useState(false);
  
  // Completion State
  const [completionAnswers, setCompletionAnswers] = useState<string[]>(new Array(completionQuestions.length).fill(""));
  const [completionSubmitted, setCompletionSubmitted] = useState(false);

  const handleMcSelect = (questionIndex: number, optionIndex: number) => {
    if (mcSubmitted) return;
    const newAnswers = [...mcAnswers];
    newAnswers[questionIndex] = optionIndex;
    setMcAnswers(newAnswers);
  };

  const handleTfSelect = (questionIndex: number, answer: boolean) => {
    if (tfSubmitted) return;
    const newAnswers = [...tfAnswers];
    newAnswers[questionIndex] = answer;
    setTfAnswers(newAnswers);
  };

  const handleCompletionChange = (index: number, value: string) => {
    if (completionSubmitted) return;
    const newAnswers = [...completionAnswers];
    newAnswers[index] = value;
    setCompletionAnswers(newAnswers);
  };

  const submitMc = () => {
    if (mcAnswers.some((a) => a === null)) {
      toast.error("Please answer all questions before submitting.");
      return;
    }
    setMcSubmitted(true);
    const correct = mcAnswers.filter((a, i) => a === multipleChoiceQuestions[i].correctIndex).length;
    toast.success(`You got ${correct} out of ${multipleChoiceQuestions.length} correct!`);
  };

  const submitTf = () => {
    if (tfAnswers.some((a) => a === null)) {
      toast.error("Please answer all questions before submitting.");
      return;
    }
    setTfSubmitted(true);
    const correct = tfAnswers.filter((a, i) => a === trueFalseQuestions[i].isTrue).length;
    toast.success(`You got ${correct} out of ${trueFalseQuestions.length} correct!`);
  };

  const submitCompletion = () => {
    if (completionAnswers.some((a) => a.trim() === "")) {
      toast.error("Please fill in all blanks before submitting.");
      return;
    }
    setCompletionSubmitted(true);
    const correct = completionAnswers.filter(
      (a, i) => a.toLowerCase().trim() === completionQuestions[i].answer.toLowerCase()
    ).length;
    toast.success(`You got ${correct} out of ${completionQuestions.length} correct!`);
  };

  const resetMc = () => {
    setMcAnswers(new Array(multipleChoiceQuestions.length).fill(null));
    setMcSubmitted(false);
  };

  const resetTf = () => {
    setTfAnswers(new Array(trueFalseQuestions.length).fill(null));
    setTfSubmitted(false);
  };

  const resetCompletion = () => {
    setCompletionAnswers(new Array(completionQuestions.length).fill(""));
    setCompletionSubmitted(false);
  };

  const getMcScore = () => mcAnswers.filter((a, i) => a === multipleChoiceQuestions[i].correctIndex).length;
  const getTfScore = () => tfAnswers.filter((a, i) => a === trueFalseQuestions[i].isTrue).length;
  const getCompletionScore = () => completionAnswers.filter((a, i) => a.toLowerCase().trim() === completionQuestions[i].answer.toLowerCase()).length;

  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Practice Exercises
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Test your understanding with Multiple Choice, True/False, and Fill-in-the-Blank exercises.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 h-auto p-1">
              <TabsTrigger value="multiple-choice" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Multiple Choice
              </TabsTrigger>
              <TabsTrigger value="true-false" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                True / False
              </TabsTrigger>
              <TabsTrigger value="completion" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Completion
              </TabsTrigger>
            </TabsList>

            {/* Multiple Choice */}
            <TabsContent value="multiple-choice" className="space-y-6">
              <div className="max-w-3xl mx-auto">
                {mcSubmitted && (
                  <Card className="mb-6 border-2 border-secondary bg-secondary/5">
                    <CardContent className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-3">
                        <Award className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="font-semibold text-lg">Your Score</p>
                          <p className="text-muted-foreground">{getMcScore()} out of {multipleChoiceQuestions.length} correct</p>
                        </div>
                      </div>
                      <Button variant="outline" onClick={resetMc}>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Try Again
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {multipleChoiceQuestions.map((q, qIndex) => (
                  <Card key={qIndex} className="border-2 mb-4">
                    <CardHeader>
                      <CardTitle className="font-display text-lg flex gap-3">
                        <span className="text-primary">{qIndex + 1}.</span>
                        {q.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {q.options.map((option, oIndex) => {
                        const isSelected = mcAnswers[qIndex] === oIndex;
                        const isCorrect = oIndex === q.correctIndex;
                        
                        return (
                          <button
                            key={oIndex}
                            onClick={() => handleMcSelect(qIndex, oIndex)}
                            disabled={mcSubmitted}
                            className={cn(
                              "exercise-option w-full text-left flex items-center gap-3",
                              isSelected && !mcSubmitted && "selected",
                              mcSubmitted && isCorrect && "correct",
                              mcSubmitted && isSelected && !isCorrect && "incorrect"
                            )}
                          >
                            <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium flex-shrink-0">
                              {String.fromCharCode(65 + oIndex)}
                            </span>
                            <span className="flex-grow">{option}</span>
                            {mcSubmitted && isCorrect && <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />}
                            {mcSubmitted && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />}
                          </button>
                        );
                      })}
                      
                      {mcSubmitted && (
                        <div className="mt-4 p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                          {q.explanation}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}

                {!mcSubmitted && (
                  <Button onClick={submitMc} size="lg" className="w-full">
                    Submit Answers
                  </Button>
                )}
              </div>
            </TabsContent>

            {/* True/False */}
            <TabsContent value="true-false" className="space-y-6">
              <div className="max-w-3xl mx-auto">
                {tfSubmitted && (
                  <Card className="mb-6 border-2 border-secondary bg-secondary/5">
                    <CardContent className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-3">
                        <Award className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="font-semibold text-lg">Your Score</p>
                          <p className="text-muted-foreground">{getTfScore()} out of {trueFalseQuestions.length} correct</p>
                        </div>
                      </div>
                      <Button variant="outline" onClick={resetTf}>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Try Again
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {trueFalseQuestions.map((q, qIndex) => {
                  const isAnswered = tfAnswers[qIndex] !== null;
                  const isCorrect = tfAnswers[qIndex] === q.isTrue;
                  
                  return (
                    <Card key={qIndex} className="border-2 mb-4">
                      <CardHeader>
                        <CardTitle className="font-display text-lg flex gap-3">
                          <span className="text-primary">{qIndex + 1}.</span>
                          {q.statement}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex gap-4">
                          <button
                            onClick={() => handleTfSelect(qIndex, true)}
                            disabled={tfSubmitted}
                            className={cn(
                              "exercise-option flex-1 text-center py-4 font-semibold",
                              tfAnswers[qIndex] === true && !tfSubmitted && "selected",
                              tfSubmitted && q.isTrue && "correct",
                              tfSubmitted && tfAnswers[qIndex] === true && !q.isTrue && "incorrect"
                            )}
                          >
                            TRUE
                          </button>
                          <button
                            onClick={() => handleTfSelect(qIndex, false)}
                            disabled={tfSubmitted}
                            className={cn(
                              "exercise-option flex-1 text-center py-4 font-semibold",
                              tfAnswers[qIndex] === false && !tfSubmitted && "selected",
                              tfSubmitted && !q.isTrue && "correct",
                              tfSubmitted && tfAnswers[qIndex] === false && q.isTrue && "incorrect"
                            )}
                          >
                            FALSE
                          </button>
                        </div>
                        
                        {tfSubmitted && (
                          <div className="mt-4 p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                            {q.explanation}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}

                {!tfSubmitted && (
                  <Button onClick={submitTf} size="lg" className="w-full">
                    Submit Answers
                  </Button>
                )}
              </div>
            </TabsContent>

            {/* Completion */}
            <TabsContent value="completion" className="space-y-6">
              <div className="max-w-3xl mx-auto">
                {completionSubmitted && (
                  <Card className="mb-6 border-2 border-secondary bg-secondary/5">
                    <CardContent className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-3">
                        <Award className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="font-semibold text-lg">Your Score</p>
                          <p className="text-muted-foreground">{getCompletionScore()} out of {completionQuestions.length} correct</p>
                        </div>
                      </div>
                      <Button variant="outline" onClick={resetCompletion}>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Try Again
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {completionQuestions.map((q, qIndex) => {
                  const isCorrect = completionAnswers[qIndex].toLowerCase().trim() === q.answer.toLowerCase();
                  const parts = q.sentence.split(q.blank);
                  
                  return (
                    <Card key={qIndex} className="border-2 mb-4">
                      <CardHeader>
                        <CardTitle className="font-display text-lg flex gap-3 items-start">
                          <span className="text-primary">{qIndex + 1}.</span>
                          <span>Fill in the blank:</span>
                        </CardTitle>
                        {q.hint && <CardDescription>Hint: {q.hint}</CardDescription>}
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-lg flex flex-wrap items-center gap-2">
                          {parts[0]}
                          <Input
                            type="text"
                            value={completionAnswers[qIndex]}
                            onChange={(e) => handleCompletionChange(qIndex, e.target.value)}
                            disabled={completionSubmitted}
                            className={cn(
                              "w-40 inline-block text-center font-semibold",
                              completionSubmitted && isCorrect && "border-green-500 bg-green-50",
                              completionSubmitted && !isCorrect && "border-destructive bg-red-50"
                            )}
                            placeholder="..."
                          />
                          {parts[1]}
                        </p>
                        
                        {completionSubmitted && (
                          <div className={cn(
                            "p-3 rounded-lg text-sm",
                            isCorrect ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                          )}>
                            {isCorrect ? (
                              <span className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4" />
                                Correct!
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                <XCircle className="h-4 w-4" />
                                The correct answer is: <strong>{q.answer}</strong>
                              </span>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}

                {!completionSubmitted && (
                  <Button onClick={submitCompletion} size="lg" className="w-full">
                    Submit Answers
                  </Button>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Practice;
