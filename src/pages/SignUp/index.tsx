import { Link } from "react-router-dom";
import { Container } from "./styles";
import logo from "../../assets/logo-rj.png";
import { FormSignUp } from "../../components/FormSignUp";

export function SignUp() {
  return (
    <Container>
      <div className="signInPart2">
        <FormSignUp />
      </div>

      <div className="signInPart1">
        <div>
          <h1>Task Manager</h1>
          <Link to={"https://emauelquintino.github.io/Page-WDC"} target="blank">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
