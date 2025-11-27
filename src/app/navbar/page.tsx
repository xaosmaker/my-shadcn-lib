import ComponentsContainer from "@/components/ComponentsContainer";
import InstallTabs from "@/components/InstallTabs";
import Navbar from "@/components/Navbar";

export default function NavBarPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-center text-4xl">Navigation bar</h1>
      <InstallTabs name="navigation-bar" />

      <ComponentsContainer child2={<div className="h-28"></div>}>
        <Navbar />
      </ComponentsContainer>
    </div>
  );
}
