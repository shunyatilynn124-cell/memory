import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, CheckCircle2 } from "lucide-react";

const keyPoints = [
  {
    title: "Three Meanings of Memory",
    points: [
      "The thing we remember (individual pieces of information)",
      "The ability to remember (cognitive function)",
      "The period of time (duration of recall)",
    ],
  },
  {
    title: "Three Types of Memory",
    points: [
      "Episodic Memory — Personal experiences and events",
      "Semantic Memory — Factual knowledge about the world",
      "Procedural Memory — Skills and 'knowing how'",
    ],
  },
  {
    title: "Short-Term vs Long-Term Memory",
    points: [
      "STM: 15-30 seconds duration, 5-9 items capacity",
      "LTM: Potentially limitless duration and capacity",
      "LTM contains Episodic, Semantic, and Procedural memories",
    ],
  },
  {
    title: "Why Memory Matters",
    points: [
      "Memory is like the database of a computer",
      "Without memory, we would be helpless and functionless",
      "Memory is the foundation of identity, knowledge, and experience",
    ],
  },
];

const Review = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Review
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              A comprehensive summary of key concepts about memory to help you consolidate your learning.
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Key Takeaways
              </h2>
              <p className="text-muted-foreground text-lg">
                Review these essential points about human memory
              </p>
            </div>

            <div className="grid gap-6">
              {keyPoints.map((section, index) => (
                <Card key={index} className="border-2 card-hover">
                  <CardHeader>
                    <CardTitle className="font-display text-xl flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {index + 1}
                      </span>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Memory Model Diagram */}
            <Card className="mt-8 border-2 bg-muted/20">
              <CardHeader>
                <CardTitle className="font-display text-xl text-center">
                  Multi-Store Model (Atkinson & Shiffrin)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6">
                  <div className="text-center">
                    <div className="w-32 h-20 rounded-lg bg-blue-500/20 border-2 border-blue-500/40 flex items-center justify-center mb-2">
                      <span className="font-semibold text-blue-700">Sensory Input</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Sights, sounds, etc.</span>
                  </div>
                  
                  <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                  
                  <div className="text-center">
                    <div className="w-32 h-20 rounded-lg bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center mb-2">
                      <span className="font-semibold text-amber-700">Short-Term</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Attention & Rehearsal</span>
                  </div>
                  
                  <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                  
                  <div className="text-center">
                    <div className="w-32 h-20 rounded-lg bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center mb-2">
                      <span className="font-semibold text-emerald-700">Long-Term</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Storage & Retrieval</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conclusion Quote */}
            <Card className="mt-8 border-2 border-secondary/30 bg-secondary/5">
              <CardContent className="py-8 text-center">
                <p className="text-lg md:text-xl italic text-foreground/80 mb-4">
                  "Metaphorically, memory allows us to scroll down memory lane.
                  Recalling memories triggers emotional states — we smile when remembering
                  something pleasant, we frown when recalling something unpleasant."
                </p>
                <p className="font-display text-secondary font-semibold">
                  Memory is the foundation of our identity, knowledge, and experience.
                </p>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/teaching">
                  Review Teaching Materials
                </Link>
              </Button>
              <Button asChild size="lg">
                <Link to="/practice">
                  Test Your Knowledge
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Review;
