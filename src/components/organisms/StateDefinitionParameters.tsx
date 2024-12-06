import { Flex, Separator } from "@radix-ui/themes";

import useMakerStore from "~/stores/maker";
import { isCaseSupported } from "~/helpers/maker";

import TextFieldParameter from "../molecules/TextFieldParameter";
import FaceletDefinitionParameter from "./FaceletDefinitionParameter";

function StateDefinitionParameters() {
  const { pzl, case: makerCase } = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  return (
    <Flex direction="column">
      <Flex direction="column" p="3" gap="3">
        <TextFieldParameter
          id="case"
          label="Algorithm to solve case"
          value={makerCase}
          onChange={handleCaseChange}
          placeholder="R U R' U'"
          isDisabled={!isCaseSupported(pzl)}
        />
        <FaceletDefinitionParameter />
      </Flex>

      <Separator size="4" />
    </Flex>
  );

  function handleCaseChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateParameters({ case: e.target.value });
  }
}

export default StateDefinitionParameters;
