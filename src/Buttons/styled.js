import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.vinRouge};
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.4s;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color:hsl(34, 39%, 50%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;