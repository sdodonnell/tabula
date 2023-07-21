import React from 'react';
import styled from 'styled-components';
import { User } from '../old/lib/types';

interface GridProps {
  items: User[];
}

const GridContainer = styled.div``;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  border: 1px solid black;
  width: 100%;
`;

const Grid = ({ items }: GridProps) => (
  <GridContainer>
    {items.map(item => (
      <GridRow key={item.id}>
        <p>{item.first_name}</p>
        <p>{item.last_name}</p>
        <p>{item.email}</p>
        <p>{item.gender}</p>
        <p>{item.type}</p>
      </GridRow>
    ))}
  </GridContainer>
);

export default Grid;
