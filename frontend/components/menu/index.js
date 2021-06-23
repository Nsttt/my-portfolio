import { useBurgerContext } from "../../context/burger";
import { BurgerMenu } from "./styles/Menu";

export default function Menu({ children, ...restProps }) {
  const MenuContext = useBurgerContext();

  return (
    <BurgerMenu {...restProps} isOpen={MenuContext.isOpen}>
      test
    </BurgerMenu>
  );
}
