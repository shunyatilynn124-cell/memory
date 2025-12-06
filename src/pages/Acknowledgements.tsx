import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap, Heart, MapPin } from "lucide-react";

const Acknowledgements = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Acknowledgements
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Recognizing the contributions to this educational resource.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Presenter */}
            <Card className="border-2 mb-8">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl">Presented By</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Daw Shun Yati Lynn
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center gap-2">
                    <Award className="h-4 w-4 text-secondary" />
                    <span>Senior Assistant Teacher</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <BookOpen className="h-4 w-4 text-secondary" />
                    <span>B.E.H.S Nandar Taung (B)</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary" />
                    <span>Pathein Gyi Township, Mandalay</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card className="border-2 mb-8 bg-muted/20">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Course Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Subject</p>
                    <p className="font-semibold text-foreground">ICT</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Grade</p>
                    <p className="font-semibold text-foreground">Grade 11</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Unit</p>
                    <p className="font-semibold text-foreground">Unit 3</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Topic</p>
                    <p className="font-semibold text-foreground">Memory</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* References */}
            <Card className="border-2 mb-8">
              <CardHeader>
                <CardTitle className="font-display text-xl">References</CardTitle>
                <CardDescription>Academic sources used in this presentation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Kearns & Lee (2015) - Semantic Memory Research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Andrade & Walker (2021) - Procedural Memory Studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>HelpfulProfessor.com - Educational Resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Atkinson & Shiffrin - Multi-Store Memory Model</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Thank You */}
            <Card className="border-2 border-secondary/30 bg-secondary/5">
              <CardContent className="py-8 text-center">
                <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Thank You
                </h3>
                <p className="text-muted-foreground">
                  Thank you for using this educational resource. We hope it helps you understand
                  the fascinating world of human memory.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Acknowledgements;
