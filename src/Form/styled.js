import styled from "styled-components";

export const Document = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: hsl(34, 39%, 45%);
    color: white;
    border: none;
    transition: 0.4s;

    &:hover {
        background-color: hsl(34, 39%, 50%);
        transform: scale(1.1);
    }
`;