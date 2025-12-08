import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen snap-start flex items-center justify-center md:pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-[4rem] animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm
              <br />
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                Mehdi Azzam
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Frontend Developer
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            I craft performant React frontends with thoughtful UX, accessibility
            first, and a focus on clean, maintainable systems.
          </p>
          <div className="flex items-center gap-3 justify-center text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-secondary/60 border border-border/60">
              Remote-friendly
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/60 border border-border/60">
              Freelance & full-time
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-xl px-8"
            >
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="md:hidden inset-x-0 flex justify-center mt-7 pointer-events-auto">
          <button
            onClick={scrollToNext}
            aria-label="Scroll to next section"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-transparent border border-border/30 backdrop-blur-sm text-muted-foreground hover:scale-105 transition-transform duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
