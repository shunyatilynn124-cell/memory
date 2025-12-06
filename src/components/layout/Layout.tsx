import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <footer className="bg-nav-gradient py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 Memory Learning Platform · Grade 11 · Unit 3
          </p>
          <p className="text-primary-foreground/50 text-xs mt-2">
            Presented by Daw Shun Yati Lynn · B.E.H.S Nandar Taung (B)
          </p>
        </div>
      </footer>
    </div>
  );
};
