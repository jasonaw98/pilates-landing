import Image from "next/image";
import FormExperience from "@/components/FormExperience";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";
import MoreThanJust from "@/components/MoreThanJust";
import OurFacilities from "@/components/OurFacilities";
import UnmaskLayers from "@/components/WrapCommunity";

export default function Home() {
  return (
    <div className="">
      <LoadingScreen
        title={
          <Image
            src="/logo/beige_wordmark.svg"
            alt="Logo"
            width={200}
            height={100}
          />
        }
      />
      <Hero />
      <FormExperience />
      <MoreThanJust />
      <OurFacilities />
      <UnmaskLayers />
    </div>
  );
}
