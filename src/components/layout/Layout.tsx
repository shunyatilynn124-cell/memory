import { ReactNode } from 'react';
import { Header } from './Header';
import { BookOpen, GraduationCap, Heart } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <footer className='bg-nav-gradient border-t border-primary/20'>
        {/* Decorative elements */}
        <div className='absolute left-0 right-0 -translate-y-1/2 flex justify-center'>
          <div className='bg-secondary rounded-full p-4 shadow-lg'>
            <BookOpen className='h-6 w-6 text-secondary-foreground' />
          </div>
        </div>

        <div className='container mx-auto px-4 py-8 pt-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
            {/* Copyright section */}
            <div className='text-center md:text-left'>
              <div className='flex items-center justify-center md:justify-start gap-2 mb-2'>
                <GraduationCap className='h-5 w-5 text-primary-foreground/70' />
                <p className='text-primary-foreground font-semibold'>
                  Memory Learning Platform
                </p>
              </div>
              <p className='text-primary-foreground/70 text-sm'>
                © 2025 · Grade 11 · Unit 3
              </p>
            </div>

            {/* Presenter info - centered on mobile */}
            <div className='text-center'>
              <div className='inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-2'>
                <span className='text-primary-foreground font-medium text-sm'>
                  Presented by Daw Shun Yati Lynn
                </span>
              </div>
              <p className='text-primary-foreground/60 text-xs'>
                B.E.H.S Nandar Taung (Branch), Pathein Gyi Township, Mandalay
              </p>
            </div>

            {/* Educational info */}
            <div className='text-center md:text-right'>
              <div className='inline-flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 text-xs text-primary-foreground/80'>
                <span className='h-2 w-2 rounded-full bg-secondary animate-pulse'></span>
                Educational Resource
              </div>
              <p className='text-primary-foreground/50 text-xs mt-2'>
                Ministry of Education, Myanmar
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
