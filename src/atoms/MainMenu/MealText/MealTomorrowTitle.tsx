import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.p`
    font-size: 30px;
    font-family: 'Godo', sans-serif;
    color: var(--color-orange);
`;

const MealTomorrowTitle: React.FC = ({ children }) => <TextStyle>{children}</TextStyle>;

export default MealTomorrowTitle;
