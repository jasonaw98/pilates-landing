import Community from "@/components/Community";
import FormExperience from "@/components/FormExperience";
import Hero from "@/components/Hero";
import MoreThanJust from "@/components/MoreThanJust";
import OurFacilities from "@/components/OurFacilities";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FormExperience />
      <MoreThanJust />
      <OurFacilities />
      <Community />
    </div>
  );
}
