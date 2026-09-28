import {
    CardContainer,
    Escudo,
    Informacoes,
    Nome,
    Serie,
    LinkClube
} from "./CardClube.styles";

export default function CardClube({ clube }) {
    return (
        <CardContainer>
            <Escudo
                src={clube.escudo}
                alt={`Escudo do ${clube.nome}`}
            />

            <Informacoes>
                <Nome>{clube.nome}</Nome>
                <Serie>{clube.serie}</Serie>
                {clube.link && (
                    <LinkClube href={clube.link} target="_blank" rel="noreferrer">
                        Página do clube →
                    </LinkClube>
                )}
            </Informacoes>
        </CardContainer>
    );
}
