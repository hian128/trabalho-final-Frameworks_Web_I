import { Card, Imagem, Link, ListaLinks, Nome, Descricao, LogoLinks } from "./CardIntegantes.styles"
import logoLinkedIn from "../assets/logos/linkedin-svgrepo-com.svg";
import logoGitHub from "../assets/logos/github-svgrepo-com.svg";
import logoInstagram from "../assets/logos/instagram-svgrepo-com.svg";
export default function CardIntegrantes(props) {
    
    return (
        <>
            <Card>
                <Imagem src={props.imagem} alt="Foto Perfil"></Imagem>
                <Nome>{props.nome}</Nome>
                <Descricao>{props.descricao}</Descricao>
                <ListaLinks>
                    {props.urlGit &&(<>
                        <Link href = {props.urlGit} target="_blank" rel="noopener noreferrer">
                            <LogoLinks src={logoGitHub} alt="Icone do GitHub">
                            </LogoLinks>
                        </Link>
                    </>)}
                    {props.urlLinked &&(<>
                        <Link href = {props.urlLinked} target="_blank" rel="noopener noreferrer">
                            <LogoLinks src={logoLinkedIn} alt="Icone do LinkedIn">
                            </LogoLinks>
                        </Link>
                    </>)}
                    {props.urlInsta &&(<>
                        <Link href = {props.urlInsta} target="_blank" rel="noopener noreferrer">
                            <LogoLinks src={logoInstagram} alt="Icone do Instagram">
                            </LogoLinks>
                        </Link>
                    </>)}
                </ListaLinks>
            </Card>
        </>
    );
}