import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 8px;
  text-align: left;
`;

export const Title = styled.h1`
  font-family: "BebasNeue";
  color: white;
  max-width: 640px;
  font-size: 110px;
  font-weight: 200;
  margin: 190px 10% 0 10%;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const FocusWord1 = styled.span`
  color: white;
  background-color: #d11c54;
  max-width: 640px;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const FocusWord2 = styled.span`
  color: #d11c54;
  max-width: 640px;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  max-width: 640px;
  margin: 80px 10% 190px 10%;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const CallToAction = styled.button`
  --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%));
  --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);
  --primary-hue: 0;
  --primary-lightness: 50;
  --color: hsl(0, 0%, 100%);
  --font-size: 26px;
  --shadow-primary-hue: 180;
  font-family: Arial;
  color: var(--color);
  text-transform: uppercase;
  background: var(--primary);
  font-size: var(--font-size);
  outline: transparent;
  letter-spacing: 2px;
  font-weight: 700;
  border: 0;
  min-width: 300px;
  padding: 32px 64px;
  box-shadow: inset -3px 0 0 var(--shadow-primary);
  clip-path: polygon(-10% -10%, 110% -10%, 110% 110%, 10% 110%, -10% 40%);

`;
