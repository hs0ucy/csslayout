import React from 'react';

import random from '../helpers/random';

const Block = ({ justify = 'start', numberOfBlocks }) => {
    return (
        <div className={`flex flex-wrap w-100 justify-${justify}`}>
            {
                Array(numberOfBlocks).fill(0).map((_, i) => {
                    const s = random(1, 5);
                    return (
                        <div key={i} className={`mr2 mb2 w-${s * 10}`}>
                            <div className="w-100 bg-black-30 br-pill" style={{ height: '8px' }} />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Block;
