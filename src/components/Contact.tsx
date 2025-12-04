import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-52 px-6 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get in{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's collaborate on your next project. I'm always open to
              discussing new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="group p-8 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in">
              <a
                href="mailto:mehdiazzam81@gmail.com"
                className="flex flex-col items-center justify-center space-y-4 text-center h-full"
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
                className="flex flex-col items-center justify-center space-y-4 text-center h-full"
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
          <div
            className="text-center pt-12 pb-6 space-y-4 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <a href="https://github.com/mehdiazzam" target="_blank">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <a href="https://www.linkedin.com/in/mehdi-azzam-58859b38a/" target="_blank">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              &copy; 2025 Mehdi Azzam. Built with React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
