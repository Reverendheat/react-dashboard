import React from 'react'
import styled from 'styled-components';

interface CardProps {
    size: string,
    text: string,
    title: string
}

export const Card: React.FC<CardProps> = (CardProps) => {
    const calculateSize = (size: string) => {
        switch (size) {
            case "small":
                return "25%"
            case "medium":
                return "44%"
            case "large":
                return "100%"
        }
    }
    const StyledCard = styled.div`
    width: ${calculateSize(CardProps.size)};
    margin: 2em;
    padding: 0.5em;
    box-shadow: 3px 3px 5px 6px rgb(202, 202, 202);
    &:hover {
        background-color: mistyrose;
    }
    @media (max-width: 768px) {
        width: 100%;
      }
`
    return (
        <StyledCard>
            <h3>{CardProps.title}</h3>
            <p>{CardProps.text}</p>
        </StyledCard>
    )
}