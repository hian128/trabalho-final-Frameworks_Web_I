import {
    CardContainer,
    Escudo,
    Informacoes,
    Nome,
    Serie,
    LinkClube
} from "./CardClube.styles";

export default function CardClube() {
    const clube = {
    nome: "Cruzeiro",
    escudo: "#",
    serie: "Brasileirão Série A",
    link: "#"
};
    return (
        <CardContainer>

            <Escudo
                src={clube.escudo}
                alt={`Escudo do ${clube.nome}`}
            />

            <Informacoes>

                <Nome>
                    {clube.nome}
                </Nome>

                <Serie>
                    {clube.serie}
                </Serie>

                <LinkClube
                    href={clube.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    Página do clube →
                </LinkClube>

            </Informacoes>

        </CardContainer>
    );
}