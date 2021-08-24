import Link from "next/link";
import {
  Container,
  MyFolderLink,
  NameLink,
} from "@/styles/components/Header.style";

const Header = () => {
  return (
    <Container>
      <Link href="/projetos">
        <MyFolderLink href="/projetos">
          <h1>MINHA PASTA</h1>
        </MyFolderLink>
      </Link>

      <Link href="/">
        <NameLink href="/">ALICE COSTA</NameLink>
      </Link>
    </Container>
  );
};

export default Header;
