import styled, { keyframes } from "styled-components";

export interface IButtonProps {
  variant?: "primary" | "secondary";
  size?: "large";
}

export const Button = styled.button.attrs<Pick<IButtonProps, "size">>(
  (props) => {
    size: props?.size;
  }
)<IButtonProps>`
  background: ${(props) =>
    props.variant === "primary"
      ? props?.theme.colors.primary
      : props?.theme.colors.secondary};
  border-radius: 999px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: ${(props) => (props?.size === "large" ? "18px 28px" : "8px 18px")};
  width: fit-content;
  word-break: break-word;
  border: 0;
  margin: 0.25em;

  animation-name: breath-animation;
  animation-duration: 5s;
  animation-iteration-count: infinite;

  &:hover {
    background-color: #ff4742;
  }
  @keyframes breath-animation {
    0% {
      height: 50px;
    }

    30% {
      height: 100px;
    }

    100% {
      height: 50px;
    }
  }
`;

export const FacebookButton = styled(Button)`
  background: #3a5a97;
  color: white;
`;
