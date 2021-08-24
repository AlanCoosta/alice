import Link from "next/link";
import { Container, NameLink } from "@/styles/components/Header.style";

const Header = () => {
  return (
    <Container>
      <div>
        <Link href="/projetos">
          <div className="logo">
            <h1>MINHA</h1>
            <h1>PASTA</h1>
          </div>
        </Link>
      </div>

      <Link href="/">
        <NameLink href="/">ALICE COSTA</NameLink>
      </Link>
    </Container>
  );
};

export default Header;
