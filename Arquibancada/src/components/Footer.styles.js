import { Link } from "react-router-dom";
import styled from "styled-components";

export const Rota = styled(Link)`
    display: inline-block;

    color: #ffffff;
    text-decoration: none;
    font-weight: 500;

    transition:
        color 0.3s ease,
        transform 0.3s ease;

    &:hover {
        color: #00e676;
        transform: translateY(-4px);
    }
`;

export const FooterContainer = styled.footer`
    width: 100%;
    background: #121824;
    color: #ffffff;
    padding: 40px 20px 20px;
    border-top: 2px solid #1f293d;
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 800;
    color: #00e676;
    text-decoration: none;
    letter-spacing: 0.5px;

    span {
        color: #ffffff;
    }

    &:hover {
        opacity: 0.9;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 25px;

    @media (max-width: 435px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Copyright = styled.p`
    margin: 30px 0 0;
    padding-top: 20px;

    border-top: 1px solid #1f293d;

    color: #94a3b8;
    font-size: 13px;
    text-align: center;
`; 