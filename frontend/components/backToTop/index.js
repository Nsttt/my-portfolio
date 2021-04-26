import { useEffect, useState } from "react";
import { Container, Icon } from "./styles/backToTop";

export default function BackToTop({ ...restProps }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    visible && (
      <Container
        {...restProps}
        onClick={() => {
          scrollToTop();
        }}
      >
        <Icon src="arrow.svg" alt="Go to top" />
      </Container>
    )
  );
}
