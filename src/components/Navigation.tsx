import { useState, useEffect, useRef } from "react";
import { Home, Sparkles, Award, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const manualTargetRef = useRef<string | null>(null);
  const manualTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const sections = ["home", "skills", "certifications", "contact"];
    const container = document.getElementById("main-scroll-container") || null;

    const observerOptions: IntersectionObserverInit = {
      root: container || undefined,
      rootMargin: "-20% 0% -20% 0%",
      threshold: [0.15, 0.35, 0.6],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        if (!sections.includes(id)) return;

        // If we are in a manual scroll, only accept updates for the target section,
        // then release control.
        if (manualTargetRef.current) {
          if (id !== manualTargetRef.current) return;
          manualTargetRef.current = null;
        }

        setActiveSection(id);
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (manualTimeoutRef.current) {
        clearTimeout(manualTimeoutRef.current);
        manualTimeoutRef.current = null;
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    manualTargetRef.current = sectionId;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      manualTargetRef.current = null;
    }, 1200);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Sparkles className="w-4 h-4" /> },
    { id: "certifications", label: "Certifications", icon: <Award className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg shadow-md">
        <div className="container mx-auto  py-5">
          <div className="flex items-center justify-center">
            <div className="hidden md:flex gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    onClick={() => scrollToSection(item.id)}
                    className={`transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-glow relative after:absolute after:inset-x-3 after:-bottom-2 after:h-0.5 after:rounded-full after:bg-primary-foreground/80"
                        : "hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-5 inset-x-0 z-50">
        <div className="mx-auto max-w-md px-4">
          <div className="flex items-center justify-between rounded-full bg-background/90 backdrop-blur-lg border border-border shadow-lg px-2 py-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`flex-1 flex items-center justify-center gap-2 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "hover:bg-secondary"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
