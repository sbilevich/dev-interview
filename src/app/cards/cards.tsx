'use client';

import { FC } from 'react';
import Carousel from '../carousel';
import CardItem, { Card } from './[id]/page';

interface CardsProps {
    cards: Card[];
}

const Cards: FC<CardsProps> = ({ cards }) => {
    return (
        <Carousel items={cards} render={(item) => <CardItem card={item} />} />
    );
};
export default Cards;
