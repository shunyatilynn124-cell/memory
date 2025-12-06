import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Headphones, Mic, PenLine, ArrowRight, CheckCircle2 } from "lucide-react";

const readingContent = {
  title: "Reading: Understanding Memory Types",
  sections: [
    {
      heading: "Episodic Memory",
      content: `Episodic memory refers to the long-term storage of information regarding experiences. Examples of episodic memories include information about past events and activities, such as what happened, how we felt, or who said what to whom.

For example, Janelle will make an excellent psychotherapist because she has an excellent recall of the feelings that her patients reveal during sessions. Mitchell remembers everything about the first time he went fishing with his father.

Memory of events, situations, and places from the past — like your first day of school (who took you, the school name, whether you cried) or a memorable family vacation (when, where, with whom, duration, feelings).`,
    },
    {
      heading: "Semantic Memory",
      content: `Semantic memory is our storehouse of more-or-less permanent knowledge, such as the meanings of words in a language and the huge collection of facts about the world.

For example: There are 196 countries in the world and 206 bones in your body.

All of our factual knowledge about the world, independent of personal experience:
• Cats and dogs are four-legged animals but are distinct species
• Milk, coffee, and tea are liquids with different colors and tastes
• Fire is hot and ice is cold
• 2 × 2 = 4

The key concept is impersonal knowledge.`,
    },
    {
      heading: "Procedural Memory",
      content: `Procedural memory refers to our often unexplainable knowledge of how to do things. When we walk, speak, dial a phone, or play a video game, we are using procedural memory.

Examples of procedural memory:
• Riding a bike at age 50 even though you haven't ridden in over 30 years
• Playing a well-rehearsed song on the piano while daydreaming
• A child who has learned to tie their shoes

The key concept is "knowing how." This memory is often non-conscious and difficult to verbalize.`,
    },
    {
      heading: "Short-Term vs Long-Term Memory",
      content: `Short-Term Memory (STM):
• Duration: 15-30 seconds without active rehearsal
• Capacity: 5-9 items (The "Magic Number 7 ± 2")
• Function: Temporary workspace for current tasks
• Location: Prefrontal cortex

Long-Term Memory (LTM):
• Duration: Potentially limitless, from minutes to decades
• Capacity: Essentially unlimited
• Function: Permanent repository for all knowledge, skills, and experiences
• Contains: Episodic, Semantic, and Procedural memories`,
    },
  ],
};

const listeningContent = {
  title: "Listening: Memory in Action",
  description: "Listen to these scenarios and identify which type of memory is being used.",
  scenarios: [
    {
      text: "Maria recalls her wedding day — the flowers, the music, her emotions, and every detail of that special moment.",
      answer: "Episodic Memory",
      explanation: "This is a personal event from the past with specific details and emotions.",
    },
    {
      text: "John automatically ties his shoelaces every morning without thinking about the steps involved.",
      answer: "Procedural Memory",
      explanation: "This is a motor skill performed automatically without conscious thought.",
    },
    {
      text: "Sarah knows that the capital of France is Paris and that water boils at 100°C.",
      answer: "Semantic Memory",
      explanation: "These are general facts about the world, independent of personal experience.",
    },
  ],
};

const speakingTopics = [
  {
    topic: "Discussion: Personal Episodic Memories",
    prompt: "Share one of your most vivid episodic memories. Describe the event, the emotions you felt, and why you think this memory has stayed with you.",
    tips: ["Use descriptive language", "Include sensory details", "Explain the emotional significance"],
  },
  {
    topic: "Explain: Types of Memory",
    prompt: "Explain the difference between episodic, semantic, and procedural memory to a classmate. Give at least one example for each type.",
    tips: ["Define each type clearly", "Use relatable examples", "Compare and contrast"],
  },
  {
    topic: "Analyze: Memory in Daily Life",
    prompt: "Discuss how you use all three types of memory in a typical school day. Provide specific examples.",
    tips: ["Think about different activities", "Connect to learning", "Reflect on automatic behaviors"],
  },
];

const writingPrompts = [
  {
    title: "Compare and Contrast Essay",
    prompt: "Write a short essay comparing episodic memory and semantic memory. Discuss their definitions, characteristics, and provide examples of each.",
    wordCount: "200-300 words",
  },
  {
    title: "Reflection Writing",
    prompt: "Describe a time when your procedural memory helped you in a challenging situation. How did your automatic skills benefit you?",
    wordCount: "150-200 words",
  },
  {
    title: "Analytical Paragraph",
    prompt: "Explain why memory is described as 'the database of a computer' for humans. What would life be like without memory?",
    wordCount: "100-150 words",
  },
];

const Teaching = () => {
  const [activeTab, setActiveTab] = useState("reading");
  const [revealedScenarios, setRevealedScenarios] = useState<number[]>([]);

  const toggleScenario = (index: number) => {
    setRevealedScenarios((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Teaching Materials
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Comprehensive learning resources covering Reading, Writing, Speaking, and Listening skills.
            </p>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-auto p-1">
              <TabsTrigger value="reading" className="flex flex-col gap-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BookOpen className="h-5 w-5" />
                <span className="hidden sm:inline text-sm">Reading</span>
              </TabsTrigger>
              <TabsTrigger value="writing" className="flex flex-col gap-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <PenLine className="h-5 w-5" />
                <span className="hidden sm:inline text-sm">Writing</span>
              </TabsTrigger>
              <TabsTrigger value="speaking" className="flex flex-col gap-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Mic className="h-5 w-5" />
                <span className="hidden sm:inline text-sm">Speaking</span>
              </TabsTrigger>
              <TabsTrigger value="listening" className="flex flex-col gap-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Headphones className="h-5 w-5" />
                <span className="hidden sm:inline text-sm">Listening</span>
              </TabsTrigger>
            </TabsList>

            {/* Reading Tab */}
            <TabsContent value="reading" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                  {readingContent.title}
                </h2>
                
                <div className="space-y-8">
                  {readingContent.sections.map((section, index) => (
                    <Card key={index} className="border-2">
                      <CardHeader>
                        <CardTitle className="font-display text-xl text-primary">
                          {section.heading}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-slate max-w-none">
                          {section.content.split("\n\n").map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-foreground/80 mb-4 last:mb-0 whitespace-pre-line">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Writing Tab */}
            <TabsContent value="writing" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Writing Exercises
                </h2>
                
                <div className="grid gap-6">
                  {writingPrompts.map((prompt, index) => (
                    <Card key={index} className="border-2 card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <CardTitle className="font-display text-xl">{prompt.title}</CardTitle>
                            <CardDescription className="mt-1">Target: {prompt.wordCount}</CardDescription>
                          </div>
                          <span className="text-3xl font-display text-primary/30">{index + 1}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">{prompt.prompt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Speaking Tab */}
            <TabsContent value="speaking" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Speaking Activities
                </h2>
                
                <div className="grid gap-6">
                  {speakingTopics.map((topic, index) => (
                    <Card key={index} className="border-2 card-hover">
                      <CardHeader>
                        <CardTitle className="font-display text-xl flex items-center gap-3">
                          <Mic className="h-5 w-5 text-primary" />
                          {topic.topic}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-foreground/80">{topic.prompt}</p>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Speaking Tips:</h4>
                          <ul className="space-y-1">
                            {topic.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-center gap-2 text-sm text-foreground/70">
                                <CheckCircle2 className="h-4 w-4 text-secondary" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Listening Tab */}
            <TabsContent value="listening" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {listeningContent.title}
                </h2>
                <p className="text-muted-foreground mb-8">{listeningContent.description}</p>
                
                <div className="space-y-6">
                  {listeningContent.scenarios.map((scenario, index) => (
                    <Card key={index} className="border-2">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                            {index + 1}
                          </span>
                          <CardTitle className="font-display text-lg">Scenario {index + 1}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-muted/30 rounded-lg p-4 flex items-start gap-3">
                          <Headphones className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-foreground italic">"{scenario.text}"</p>
                        </div>
                        
                        <Button
                          variant="outline"
                          onClick={() => toggleScenario(index)}
                          className="w-full"
                        >
                          {revealedScenarios.includes(index) ? "Hide Answer" : "Reveal Answer"}
                        </Button>
                        
                        {revealedScenarios.includes(index) && (
                          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 animate-scale-in">
                            <p className="font-semibold text-secondary mb-2">{scenario.answer}</p>
                            <p className="text-sm text-muted-foreground">{scenario.explanation}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Navigation to Practice */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Ready to test your knowledge?</p>
            <Button asChild size="lg">
              <Link to="/practice">
                Go to Practice Exercises
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Teaching;
