import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  margin: 0 10% 0 10%;
`;

export const Group = styled.div`
  @media (max-width: 527px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LabelGroup = styled.div`
  padding: 5px;
  border-radius: 3px;
`;

export const TopImage = styled.img`
  object-fit: cover;
  vertical-align: middle;
  border-radius: 15px;
  width: 100%;
  max-height: 750px;

  @media (max-width: 527px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: "BebasNeue";
  font-size: 60px;
  letter-spacing: 0.2rem;
  color: #ed2e61;
  margin-bottom: 0px;

  @media (max-width: 527px) {
    text-align: center;
  }
`;

export const SubTitle = styled.h2`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 20px;

  @media (max-width: 527px) {
    text-align: center;
  }
`;

export const Body = styled.div`
  font-size: 22px;
`;

export const Label = styled.img`
  vertical-align: middle;
  margin-right: 5px;
  height: 25px;

  @media (max-width: 527px) {
    margin-top: 5px;
  }
`;

export const Button = styled.a`
  display: inline-block;
  min-width: 160px;
  text-align: center;
  margin: 0 20px 30px 0;
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: ${(props) => props.color};
  border: 0;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }

  @media (max-width: 527px) {
    justify-content: center;
    align-self: center;
    margin: 0 10px 10px 0;
  }
`;

export const Icon = styled.img`
  vertical-align: middle;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
