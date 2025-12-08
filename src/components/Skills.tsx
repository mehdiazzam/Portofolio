import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss,
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const skills = [
  {
    name: "HTML",
    icon: <FontAwesomeIcon icon={faHtml5} />,
    accent: "text-orange-500",
    gradient: "from-orange-500/70 via-amber-500/60 to-red-500/60",
  },
  {
    name: "CSS",
    icon: <FontAwesomeIcon icon={faCss3} />,
    accent: "text-sky-500",
    gradient: "from-sky-500/70 via-cyan-400/60 to-blue-500/60",
  },
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} />,
    accent: "text-yellow-500",
    gradient: "from-yellow-400/70 via-amber-400/60 to-orange-500/60",
  },
  {
    name: "Node JS",
    icon: <FontAwesomeIcon icon={faNodeJs} />,
    accent: "text-emerald-500",
    gradient: "from-emerald-500/70 via-green-400/60 to-teal-400/60",
  },
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} />,
    accent: "text-cyan-400",
    gradient: "from-cyan-400/70 via-blue-400/60 to-indigo-500/60",
  },
  {
    name: "Tailwind CSS",
    icon: <svg
        width=""
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
        />
      </svg>,
    accent: "text-teal-400",
    gradient: "from-teal-400/70 via-cyan-300/60 to-blue-400/60",
  },
  {
    name: "WordPress",
    icon: <FontAwesomeIcon icon={faWordpress} />,
    accent: "text-slate-200",
    gradient: "from-slate-400/70 via-gray-500/60 to-slate-700/60",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen snap-start py-28 relative border-t border-border/60 bg-gradient-to-b from-background via-background/95 to-background/85"
    >
      <div className="container mx-auto">
        <div className=" mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="p-8 space-y-4 text-center">
                  <div
                    className={cn(
                      "text-5xl group-hover:scale-110 transition-transform duration-300",
                      skill.accent
                    )}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <div className="inline-block px-6 py-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20">
              <p className="text-sm text-muted-foreground font-mono">
                Constantly learning and expanding my skill set
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
