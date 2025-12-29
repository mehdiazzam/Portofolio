import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const certifications = [
  {
    url: "https://www.coursera.org/account/accomplishments/verify/TMT0B8KZRAEA",
    image: "./coursera-js-deep-dive.jpeg",
    title: "JavaScript Deep Dive",
    issuer: "Coursera",
    year: "2025",
  },
  {
    url: "https://www.coursera.org/account/accomplishments/records/R766PVLUON96",
    image: "./CERTIFICATE_LANDING_PAGE.jpeg",
    title: "Getting Started with TypeScript",
    issuer: "Coursera",
    year: "2025",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen snap-start py-28 border-t border-border/60 bg-gradient-to-b from-background via-background/95 to-background/85"
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional credentials and verified accomplishments
            </p>
          </div>
          <Card className="p-10 bg-card/50 backdrop-blur-sm border-border transition-all duration-300 animate-fade-in">
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {certifications.map((cert, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-full"
                  >
                    <figure className="flex flex-col items-center space-y-6 text-center px-4 sm:px-8 md:p-24">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <img
                          src={cert.image}
                          alt={`${cert.title} certificate`}
                          loading="lazy"
                          className="rounded-md shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain transition-transform duration-300 hover:scale-105"
                        />
                      </a>
                      <figcaption className="text-sm sm:text-base text-muted-foreground">
                        <span className="font-medium text-foreground">
                          {cert.title}
                        </span>
                        {" • "}
                        {cert.issuer}
                        {cert.year && ` (${cert.year})`}
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
