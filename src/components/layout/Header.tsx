import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Brain, BookOpen, PenTool, RefreshCw, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Introduction", path: "/", icon: Brain },
  { name: "Teaching", path: "/teaching", icon: BookOpen },
  { name: "Practice", path: "/practice", icon: PenTool },
  { name: "Review", path: "/review", icon: RefreshCw },
  { name: "Acknowledgements", path: "/acknowledgements", icon: Award },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-nav-gradient shadow-elevated">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/20 transition-all duration-300 group-hover:bg-secondary/30">
              <Brain className="h-6 w-6 text-secondary" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-bold text-primary-foreground">
                Memory
              </h1>
              <p className="text-xs text-primary-foreground/70">Unit 3 · Grade 11</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || 
                (item.path !== "/" && location.pathname.startsWith(item.path));
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "nav-link flex items-center gap-2 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10",
                    isActive && "text-secondary bg-primary-foreground/10"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-80 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path ||
                (item.path !== "/" && location.pathname.startsWith(item.path));

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors",
                    isActive && "text-secondary bg-primary-foreground/10"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
