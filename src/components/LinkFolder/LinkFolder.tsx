import { Folder } from "@material-ui/icons";
import { LinkFolderText } from "@/styles/components/LinkFolder.style";
import { LinkFolderProps } from "./LinkFolder.types";

const LinkFolder = ({ href }: LinkFolderProps) => {
  return (
    <LinkFolderText href={href}>
      Acesse minha pasta <Folder />
    </LinkFolderText>
  );
};

export default LinkFolder;
