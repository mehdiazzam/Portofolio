import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const certs = [
  {
    url: "https://www.coursera.org/account/accomplishments/verify/TMT0B8KZRAEA",
    image: "./coursera-js-deep-dive.jpeg",
    title: "JavaScript Deep Dive",
    issuer: "Coursera",
    year: "2025",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen snap-start py-28 relative border-t border-border/60 bg-gradient-to-b from-background via-background/94 to-background/84"
    >
      <div className="container mx-auto">
        <div className="mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Certifications &{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional credentials and accomplishments
            </p>
          </div>

          <Card className="p-12 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 animate-fade-in">
            <div className="flex flex-col items-center justify-center space-y-6 text-center min-h-[300px]">
              <Carousel>
                <CarouselContent>
                  {certs.map((cert, index) => (
                    <CarouselItem key={index}>
                      <figure className="space-y-4">
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
                        >
                          <img
                            src={cert.image}
                            alt={`${cert.title} certificate`}
                            loading="lazy"
                            className="rounded-md shadow-md"
                          />
                        </a>
                        <figcaption className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{cert.title}</span>
                          {" • "}
                          {cert.issuer}
                          {cert.year ? ` (${cert.year})` : ""}
                        </figcaption>
                      </figure>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
