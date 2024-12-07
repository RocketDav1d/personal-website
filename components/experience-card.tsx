import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";

interface ExperienceCardProps {
  className: string;
  title: string;
  subtitle: string;
  text: string;
  imageSrc: string;
  imageClassName?: string;
  buttonColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  status: string;
  link: string; // Added link as a prop
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  className,
  title,
  subtitle,
  text,
  imageSrc,
  imageClassName = "",
  buttonColor = "primary",
  status,
  link, // Destructured link prop
}) => {
  return (
    <Card
      isBlurred
      className={`border-none bg-opacity-60 backdrop-blur-md max-w-[610px] mt-10 relative ${className}`}
    >
      <CardBody className="pb-16">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4 aspect-square w-full">
            <Image
              alt="Album cover"
              className={`object-contain w-[150px] h-[150px] ${imageClassName}`}
              src={imageSrc}
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">{title}</h3>
                <p className="text-small text-foreground/80">{subtitle}</p>
                <h1 className="text-large font-medium mt-2">{text}</h1>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="absolute bottom-0 w-full border-t-1 border-zinc-100/50 z-10 justify-between bg-white/30">
        <div>
          <p className="text-black text-tiny">{status}</p>
        </div>
        <Button
          as="a"
          href={link}
          target="_blank" // Opens the link in a new window
          rel="noopener noreferrer" // Security measure for opening new tabs
          className="text-tiny"
          color={buttonColor}
          radius="full"
          size="sm"
        >
          Learn more
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;
