//@utils
import { cn } from "@utils";

//@components
import Tab from "@components/ui/tab";

interface TabSelectorProps {
  tabs: string[];
  selectedTab: string;
  setActiveTab: (tab: string) => void;
  wrapperClassName?: string;
  tabClassName?: string;
}

/**
 * Returns the tab selector component
 * @param TabSelectorProps
 * @returns JSX.Element
 */
const TabSelector: React.FC<TabSelectorProps> = ({
  tabs,
  selectedTab,
  tabClassName,
  wrapperClassName,
  setActiveTab,
}) => (
  <div
    className={cn("flex flex-row justify-between space-x-1", wrapperClassName)}
  >
    {tabs.map((tab) => (
      <Tab
        onClick={() => setActiveTab(tab)}
        isActive={tab === selectedTab}
        label={tab}
        key={tab}
        className={tabClassName}
      />
    ))}
  </div>
);

export default TabSelector;
