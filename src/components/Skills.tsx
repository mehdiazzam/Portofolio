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
    color: "text-orange-500 from-orange-500 to-red-500",
  },
  {
    name: "CSS",
    icon: <FontAwesomeIcon icon={faCss3} />,
    color: "text-orange-500 from-orange-500 to-red-500",
  },
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} />,
    color: "text-orange-500 from-orange-500 to-red-500",
  },
  {
    name: "Node JS",
    icon: <FontAwesomeIcon icon={faNodeJs} />,
    color: "text-orange-500 from-orange-500 to-red-500",
  },
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} />,
    color: "text-orange-500 from-orange-500 to-red-500",
  },
  {
    name: "Tailwind CSS",
    icon: <FontAwesomeIcon icon={faCss} />,
    color: "text-orange-500 from-orange-500 to-red-500",
  },
  {
    name: "WordPress",
    icon: <FontAwesomeIcon icon={faWordpress} />,
    color: "text-orange-500 from-orange-500 to-red-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-28 px-6 relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
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
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-25 transition-opacity duration-300`}
                ></div>
                <div className="p-8 space-y-4">
                  <div
                    className={cn(
                      "text-5xl group-hover:scale-110 transition-transform duration-300",
                      skill.color
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
                Constantly learning and expanding my skillset
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
