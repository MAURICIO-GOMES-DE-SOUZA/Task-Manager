import { ButtonStyle, Container } from "./style";
import loadingGif from "../../assets/loading.gif";

type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  loading?: boolean;
  variant?: ButtonStyle;
};

export function Button({
  title,
  loading = false,
  variant = "primary",
  type = "submit",
  onClick,
}: ButtonTypes) {
  return (
    <Container variant={variant} onClick={onClick} type={type}>
      {loading ? <img src={loadingGif} width={14} /> : title}
    </Container>
  );
}
