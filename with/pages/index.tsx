import { Button, FacebookButton } from "../components/Button.styled";
import { Container } from "../components/Container.styled";
import { StyledLink } from "../components/Link.styled";

export default function Home() {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
      `}
    >
      <Button role="button" variant="primary">
        Styled Button
      </Button>
      <FacebookButton size="large">Login with Facebook</FacebookButton>
      <StyledLink href="/">Next JS Styled Link</StyledLink>
    </div>
  );
}
