import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Brain,
  BookOpen,
  Lightbulb,
  Clock,
  ArrowRight,
  Sparkles,
  User,
} from 'lucide-react';
import heroImage from '@/assets/hero-memory.jpg';

const memoryTypes = [
  {
    title: 'Episodic Memory',
    description: 'Memory of events, situations, and places from your past',
    examples: [
      'First day of school',
      'Memorable family vacation',
      'Your last birthday party',
    ],
    icon: '🎬',
    color: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'Semantic Memory',
    description:
      'Factual knowledge about the world, independent of personal experience',
    examples: ['Cats are mammals', '2 × 2 = 4', 'Fire is hot, ice is cold'],
    icon: '📚',
    color: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    title: 'Procedural Memory',
    description:
      'Memory that helps us perform motor and cognitive skills automatically',
    examples: ['Riding a bicycle', 'Playing piano', 'Tying shoelaces'],
    icon: '🚴',
    color: 'bg-amber-500/10 border-amber-500/20',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60' />
        </div>

        <div className='relative container mx-auto px-4 py-20 md:py-32'>
          <div className='max-w-3xl animate-slide-up'>

            <h1 className='font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight'>
              Understanding <span className='text-gradient'>Memory</span>
            </h1>

            <div className='mb-6 text-lg text-primary-foreground/90'>
              Presented by
              {'   '}
              <span className='font-semibold'>Daw Shun Yati Lynn</span>
              <br />
              <span>
                B.E.H.S Nandar Taung (Branch), Pathein Gyi Township, Mandalay
              </span>
            </div>

            <p className='mb-8 max-w-2xl border-l-4 bg-white text-gray-900 border-amber-400 px-4 py-2'>
              Explore the fascinating world of human memory. Learn about
              different types of memory, how our brain stores information, and
              why memory is the foundation of our identity.
            </p>

            <div className='flex flex-wrap gap-4'>
              <Button
                asChild
                size='lg'
                className='bg-amber-400 text-neutral-900 hover:bg-amber-300'
              >
                <Link to='/teaching'>
                  <BookOpen className='mr-2 h-5 w-5' />
                  Start Learning
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='hover:bg-white/80'
              >
                <Link to='/practice'>
                  Practice Exercises
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Memory Section */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='section-title text-foreground mb-4'>
              What is Memory?
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
              Memory can be understood in three different ways
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
            <Card className='card-hover animate-slide-up delay-100 border-2'>
              <CardHeader className='text-center'>
                <div className='mx-auto w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4'>
                  <Lightbulb className='h-8 w-8 text-secondary' />
                </div>
                <CardTitle className='font-display text-xl'>
                  The Thing We Remember
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-center'>
                  An individual piece of recalled information — a name, a
                  number, a color, or a face.
                </p>
              </CardContent>
            </Card>

            <Card className='card-hover animate-slide-up delay-200 border-2'>
              <CardHeader className='text-center'>
                <div className='mx-auto w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4'>
                  <Brain className='h-8 w-8 text-secondary' />
                </div>
                <CardTitle className='font-display text-xl'>
                  The Ability to Remember
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-center'>
                  The cognitive function or capacity to recall past information.
                  "I remembered that poem!"
                </p>
              </CardContent>
            </Card>

            <Card className='card-hover animate-slide-up delay-300 border-2'>
              <CardHeader className='text-center'>
                <div className='mx-auto w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-4'>
                  <Clock className='h-8 w-8 text-accent' />
                </div>
                <CardTitle className='font-display text-xl'>
                  The Period of Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-center'>
                  The duration over which events can be recalled — "a frightful
                  storm in recent memory."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Types of Memory */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='section-title text-foreground mb-4'>
              Three Types of Memory
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
              Understanding how our brain categorizes and stores different kinds
              of information
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {memoryTypes.map((type, index) => (
              <Card
                key={type.title}
                className={`card-hover animate-slide-up border-2 ${type.color}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className='text-5xl mb-4'>{type.icon}</div>
                  <CardTitle className='font-display text-2xl'>
                    {type.title}
                  </CardTitle>
                  <CardDescription className='text-base'>
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className='font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3'>
                    Examples:
                  </h4>
                  <ul className='space-y-2'>
                    {type.examples.map((example) => (
                      <li key={example} className='flex items-start gap-2'>
                        <span className='text-secondary mt-1'>•</span>
                        <span className='text-foreground'>{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STM vs LTM Section */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='section-title text-foreground mb-4'>
              Short-Term vs Long-Term Memory
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
              Based on psychology, memory is classified into two major kinds
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            <Card className='card-hover border-2 border-blue-500/20 bg-blue-500/5'>
              <CardHeader>
                <CardTitle className='font-display text-2xl flex items-center gap-3'>
                  <span className='text-3xl'>⏱️</span>
                  Short-Term Memory (STM)
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h4 className='font-semibold text-foreground'>Duration</h4>
                  <p className='text-muted-foreground'>
                    15 to 30 seconds without active rehearsal
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-foreground'>Capacity</h4>
                  <p className='text-muted-foreground'>
                    5 to 9 items (The "Magic Number 7 ± 2")
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-foreground'>Function</h4>
                  <p className='text-muted-foreground'>
                    Temporary workspace for current tasks
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-foreground'>Location</h4>
                  <p className='text-muted-foreground'>
                    Prefrontal cortex (frontal lobe)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='card-hover border-2 border-emerald-500/20 bg-emerald-500/5'>
              <CardHeader>
                <CardTitle className='font-display text-2xl flex items-center gap-3'>
                  <span className='text-3xl'>🧠</span>
                  Long-Term Memory (LTM)
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h4 className='font-semibold text-foreground'>Duration</h4>
                  <p className='text-muted-foreground'>
                    Potentially limitless — minutes to decades
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-foreground'>Capacity</h4>
                  <p className='text-muted-foreground'>Essentially unlimited</p>
                </div>
                <div>
                  <h4 className='font-semibold text-foreground'>Function</h4>
                  <p className='text-muted-foreground'>
                    Permanent repository for knowledge & experiences
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-foreground'>Contains</h4>
                  <p className='text-muted-foreground'>
                    Episodic, Semantic, and Procedural memories
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Memory is Essential */}
      <section className='py-16 md:py-24 bg-hero-gradient text-primary-foreground'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='font-display text-3xl md:text-4xl font-bold mb-6'>
            Why is Memory Essential?
          </h2>
          <p className='text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8'>
            Memory is like the database of a computer. Without a database, a
            computer is useless. Without memory, we would be helpless and
            functionless.
          </p>
          <p className='text-lg text-secondary font-medium italic'>
            "Memory is the foundation of our identity, knowledge, and
            experience."
          </p>

          <div className='mt-12'>
            <Button
              asChild
              size='lg'
              className='bg-secondary text-secondary-foreground hover:bg-secondary/90'
            >
              <Link to='/practice'>
                Test Your Knowledge
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
