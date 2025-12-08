import { useState, FormEvent } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, Clock3, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, message } = formState;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:mehdiazzam81@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (field: "name" | "email" | "message") => (value: string) =>
    setFormState((prev) => ({ ...prev, [field]: value }));

  return (
    <section
      id="contact"
      className="min-h-screen snap-start py-52 relative border-t border-border/60 bg-gradient-to-b from-background via-background/92 to-background/82"
    >
      <div className="container mx-auto">
        <div className="mx-auto space-y-10">
          <div className="text-center space-y-3 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              <Sparkles className="w-4 h-4" />
              Let’s collaborate
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">Let’s work together</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready for a full-time remote role-share your team’s goals and timeline.
            </p>
          </div>

          <Card className="p-8 bg-card/70 border-border hover:border-primary/40 transition-all duration-300 animate-fade-in">
            <div className="grid gap-8 lg:grid-cols-3 items-start">
              <form className="space-y-6 lg:col-span-2" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2 text-left">
                    <span className="text-sm text-muted-foreground">Name</span>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => handleChange("name")(e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-left">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(e) => handleChange("email")(e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-left">
                  <span className="text-sm text-muted-foreground">Project / message</span>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(e) => handleChange("message")(e.target.value)}
                    className="min-h-[140px] rounded-md border border-border bg-background px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    placeholder="Share a brief, goals, and timeline."
                  />
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3">
                  <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </div>
              </form>

              <div className="hidden md:block rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/15 via-primary/8 to-background/80 p-6 space-y-5">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wide text-primary/90 font-semibold">
                    Collaboration fit
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">What you can expect</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear communication, thoughtful UX, and reliable delivery.
                  </p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Clock3 className="w-4 h-4 text-primary" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Remote-friendly, flexible time zones</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>Design-to-dev handoff ready</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                    React / TypeScript
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    UI/UX polish
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <div className="flex justify-center gap-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <a href="https://github.com/mehdiazzam" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <a
                  href="https://www.linkedin.com/in/mehdi-azzam-58859b38a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                </a>
              </Button>
            </div>
            <div className="flex justify-center">
            <p className="text-sm text-muted-foreground font-mono">
              &copy; 2025 Mehdi Azzam. Frontend developer.
            </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
