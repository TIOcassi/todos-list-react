import styled from "styled-components";

export const Part = styled.section`
    margin: 10px 0;
    background-color: white;
    box-shadow: 0 0 10px hsl(0, 24%, 94%);
`;

export const Header = styled.header`
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
`;

export const Body = styled.div`
    padding: 20px;
`;