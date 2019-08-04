import React from 'react';

export const Scroll = ({children}) => {
    return (
        <div style = {{overflowY: 'scroll', 
                       border: '1px solid #95dada',
                       height: '320px'}}>
            {children}
        </div>
    );
}

//props.children allows us to access CardList component.
//Destructuring it