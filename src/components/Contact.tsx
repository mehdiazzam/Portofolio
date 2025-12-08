import { useState, FormEvent } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ExternalLink } from "lucide-react";
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
        <div className="mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get in{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's collaborate on your next project. I'm always open to
              discuss new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="group p-8 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in">
              <a
                href="mailto:mehdiazzam81@gmail.com"
                className="flex flex-col items-center justify-center space-y-4 text-center h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground font-mono break-all">
                    mehdiazzam81@gmail.com
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Card>

            <Card
              className="group p-8 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <a
                href="tel:+963945279568"
                className="flex flex-col items-center justify-center space-y-4 text-center h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    +963 945 279 568
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Card>
          </div>

          <Card className="p-8 bg-card/70 border-border hover:border-primary/40 transition-all duration-300 animate-fade-in">
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  placeholder="Share a short brief, timeline, or goals."
                />
              </label>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm text-muted-foreground">
                  I typically reply within 24 hours. Let’s build something great.
                </p>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>

          <div
            className="text-center pt-12 pb-6 space-y-4 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
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
            <p className="text-sm text-muted-foreground font-mono">
              &copy; 2025 Mehdi Azzam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
