import './CardsCompanies.css';

const CardsCompanies = (props) => {
  return (
    <div>
      <img
        className='car__img bg-white rounded-lg p-3 m-3'
        src={props.url}
        alt={props.name}
      />
    </div>
  );
};

export default CardsCompanies;
