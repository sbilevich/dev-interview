import { getData } from '../getData';
import Cards from './cards';

const CardsPage = async () => {
    const cards = await getData('http://localhost:3000/api/cards/');
    return <Cards cards={cards} />;
};
export default CardsPage;
