import { createContext, useContext, useState } from "react";

const BurgerContext = createContext();

export function BurgerWrapper({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <BurgerContext.Provider
      value={{
        isMenuOpen: open,
        toggleMenu: () => {
          setOpen(!open);
          console.log("test");
        },
      }}
    >
      {children}
    </BurgerContext.Provider>
  );
}

export function useBurgerContext() {
  return useContext(BurgerContext);
}
