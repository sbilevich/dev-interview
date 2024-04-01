'use client';

import { Button } from '@mui/material';
import { FC, ReactNode, useMemo, useState } from 'react';

type Item = {
    id: number;
};
interface CarouselProps<TItem> {
    items: TItem[];
    render: (item: TItem) => ReactNode;
}

const Carousel = <TItem extends Item>({
    items,
    render,
}: CarouselProps<TItem>) => {
    const [selectedItem, setSelectedItem] = useState(items[0]);

    const itemIdx = useMemo(() => {
        if (selectedItem && items) {
            return items.findIndex((i) => i.id === selectedItem.id);
        }
    }, [selectedItem, items]);

    const handlePrev = () => {
        if (itemIdx && itemIdx !== 0) {
            setSelectedItem(items[itemIdx - 1]);
        }
    };
    const handleNext = () => {
        if (itemIdx && itemIdx !== items.length - 1) {
            setSelectedItem(items[itemIdx + 1]);
        }
    };

    return (
        <>
            <div>{render(selectedItem)}</div>
            <div>
                <Button onClick={handlePrev}>Prev</Button>
                <Button onClick={handleNext}>Next</Button>
            </div>
        </>
    );
};
export default Carousel;
