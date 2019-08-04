import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = ({monsters}) => {
    return (
    <div className = 'card-list'>
      {
        monsters.map((item) => 
            <Card key = { item.id } monster = {item}/>
        )
      }
    </div>
    );
}

//instead of props.monsters we destructure it-ES6