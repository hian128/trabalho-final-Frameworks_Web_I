import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    min-height: 275px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.5rem;

    background: linear-gradient(145deg, #15221b, #111a16);
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 20px;

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        border-color: rgba(142, 230, 160, 0.6);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    }
`;

export const Imagem = styled.img`
    width: 100px;
    height: 100px;

    object-fit: cover;

    border-radius: 50%;
    border: 2px solid #8ee6a0;

    margin-bottom: 20px;
`;

export const Avatar = styled.div`
    display: grid;
    place-items: center;
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    border: 2px solid #8ee6a0;
    border-radius: 50%;
    background: rgba(142, 230, 160, 0.12);
    color: #a5edb1;
    font-size: 1.8rem;
    font-weight: 800;
`;

export const Nome = styled.h2`
    margin: 0 0 10px;

    color: #f4f7f3;
    font-size: 1.15rem;
    font-weight: 700;

    text-align: center;
`;

export const Descricao = styled.p`
    margin: 0;

    color: #9eaca2;
    font-size: 14px;
    line-height: 1.6;

    text-align: center;
`;

export const ListaLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 15px;

    margin: auto 0 0;
    padding: 25px 0 0;

    list-style: none;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    width: 42px;
    height: 42px;

    border-radius: 50%;

    background: #e8f3e9;

    transition:
        transform 0.3s ease,
        background 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        background: #8ee6a0;
    }
`;

export const LogoLinks = styled.img`
    width: 22px;
    height: 22px;

    object-fit: contain;
`;
