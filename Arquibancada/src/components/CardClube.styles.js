import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    max-width: 350px;

    background: #121824;
    border: 1px solid #1f293d;
    border-radius: 12px;

    padding: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-6px);
        border-color: #00e676;
        box-shadow: 0 8px 25px rgba(0, 230, 118, 0.12);
    }
`;

export const Escudo = styled.img`
    width: 110px;
    height: 110px;

    object-fit: contain;

    margin-bottom: 20px;
`;

export const Informacoes = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const Nome = styled.h2`
    margin: 0;

    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
`;

export const Serie = styled.p`
    margin: 0;

    color: #94a3b8;
    font-size: 14px;
`;

export const LinkClube = styled.a`
    margin-top: 10px;

    color: #00e676;
    text-decoration: none;
    font-weight: 600;

    transition:
        color 0.3s ease,
        transform 0.3s ease;

    &:hover {
        color: #ffffff;
        transform: translateX(4px);
    }
`;