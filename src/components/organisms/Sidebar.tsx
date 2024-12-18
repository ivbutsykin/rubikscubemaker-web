import { Flex } from "@radix-ui/themes";

import GeneralParameters from "./GeneralParameters";
import StateDefinitionParameters from "./StateDefinitionParameters";
import CubeStyleParameters from "./CubeStyleParameters";
import AddedFeaturesParameters from "./AddedFeaturesParameters";
import SidebarFooter from "./SidebarFooter";

function Sidebar() {
  return (
    <aside className="Sidebar">
      <Flex direction="column">
        <div className="SidebarSpacer" />

        <GeneralParameters />
        <StateDefinitionParameters />
        <CubeStyleParameters />
        <AddedFeaturesParameters />

        <SidebarFooter />
      </Flex>
    </aside>
  );
}

export default Sidebar;
