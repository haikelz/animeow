import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MenuLink } from "src/utils/data";
import Link from "next/link";

const DropdownMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Menu
      </MenuButton>
      <MenuList>
        {MenuLink.map((item) => (
          <Link key={item.key} href={item.link}>
            <MenuItem>
              <Text fontWeight="semibold">{item.name}</Text>
            </MenuItem>
          </Link>
        ))}
        <MenuItem onClick={toggleColorMode}>
          <Text fontWeight="semibold">
            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
