import { Assets } from "@/utils/assets";
import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import { ExperienceCard } from "@/components/experience-card";

export default function AboutPage() {
  return (
    <div>
      <div className="flex items-start">
        <Image
          isBlurred
          alt="NextUI Album Cover"
          className="backdrop-blur-sm"
          src={Assets.profileImage}
          width={240}
        />
        <div>
          <h1 className="ml-7 text-4xl font-bold pb-3">Hi, Im David</h1>
          <h1 className="ml-7 text-2xl font-bold pb-3">
            Im a Founder, Engineer & Fintech Enthusiast
          </h1>
          <h1 className="ml-7 text-2xl text-slate-600 pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <ExperienceCard
          className="border-none bg-gradient-to-r from-[#93C5FD] to-[#E0F2FE] bg-opacity-60 backdrop-blur-md max-w-[610px] mt-10"
          title={"Registercheck"}
          subtitle={"Co-Founder & COO"}
          text={"Fwegewge"}
          imageSrc={Assets.registercheck}
          status="Active"
          link={"https://www.registercheck.de/"}
        />
        <ExperienceCard
          className="border-none bg-gradient-to-r from-[#6ADF7B] to-[#369944] bg-opacity-60 backdrop-blur-md max-w-[610px] mt-10"
          title={"Trustyourvc"}
          subtitle={"Technical Development"}
          text={"Fwegewge"}
          imageSrc={Assets.trustyourvc}
          imageClassName={"p-3 bg-green-200"}
          status="January 2024–October 2024"
          link={""}
        />
        <ExperienceCard
          className="border-none bg-gradient-to-r from-[#FF5733] to-[#C70039] bg-opacity-60 backdrop-blur-md max-w-[610px] mt-10"
          title={"Google"}
          subtitle={"Technical Development"}
          text={"Fwegewge"}
          imageSrc={Assets.google}
          imageClassName={"p-3 bg-white"}
          status="March 2023–Aug. 2023"
          link={"https://publicpolicy.google/"}
        />
        <ExperienceCard
          className="border-none bg-opacity-60 backdrop-blur-md max-w-[610px] mt-10 bg-gradient-to-br from-[#0093E9] to-[#020947]"
          title={"bunch.capital"}
          subtitle={"Operations & Business Automation"}
          text={"Fwegewge"}
          imageSrc={Assets.bunch}
          imageClassName={"bg-[#010846] p-2"} // #010846
          status="Dec. 2022–Aug. 2023"
          link={"https://www.bunch.capital/"}
        />
        <ExperienceCard
          className="border-none bg-gradient-to-r from-[#F7FB2A] to-[#fdff99] bg-opacity-60 backdrop-blur-md max-w-[610px] mt-10"
          title={"lemon.markets"}
          subtitle={"Developer Relations"}
          text={"Fwegewge"}
          imageSrc={Assets.lemon_markets}
          imageClassName={"p-3 bg-white"}
          status="June 2022–Sept 2022"
          link={"https://www.lemon.markets/"}
        />
        <ExperienceCard
          className="border-none bg-[#1e2022] bg-gradient-to-br from-[#1e2022] to-[#c1c3c3] bg-opacity-60 backdrop-blur-md max-w-[610px] mt-10"
          title={"CODE University"}
          subtitle={"Student - Software Engineering"}
          text={"Fwegewge"}
          imageSrc={Assets.code}
          imageClassName={"p-3 bg-white"}
          status="June 2022–current"
          link={"https://code.berlin/en/"}
        />
      </div>
    </div>
  );
}
