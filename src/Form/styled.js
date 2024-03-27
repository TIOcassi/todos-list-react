import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.color.vinRouge};
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: 0.4s;

    &:hover {
        background-color: hsl(34, 39%, 50%);
        transform: scale(1.1);
    }
`;