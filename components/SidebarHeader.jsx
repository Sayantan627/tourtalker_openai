import ThemeToggle from "./ThemeToggle";
import { TbBrandOpenai } from "react-icons/tb";

const SidebarHeader = () => {
  return (
    <div className="flex items-center gap-4 mb-4 px-4">
      <TbBrandOpenai className="h-10 w-10 text-primary" />
      <h2 className="text-xl font-extrabold text-primary mr-auto">
        TourTalker
      </h2>
      <ThemeToggle />
    </div>
  );
};
export default SidebarHeader;
