import { BsArrowRight } from 'react-icons/bs';

import { StyledCard } from './styles';

const Card = ({ color, img }: { color: string; img: string }) => {
  return (
    <StyledCard color={color}>
      <img src={img} alt="" />

      <div>
        <h1>Search Data</h1>
        <p>
          Don’t worry if your data is very large, the Data Warehoue provides a
          search engine, which is useful for making it easier to find data
          effectively saving time.
        </p>

        <button>
          Learn more <BsArrowRight size={30} color="#9C69E2" />
        </button>
      </div>
    </StyledCard>
  );
};

export default Card;
