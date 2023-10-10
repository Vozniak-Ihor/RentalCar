import './Modal.css';

const Modal = ({ active, setActive, infoCar }) => {
 if (!infoCar || !infoCar.img) {
  // Handle the case when infoCar or its img property is not defined
  return null; // or return some default content or an error message
 }

 return (
  <div
   className={active ? 'modal active' : 'modal'}
   onClick={() => setActive(false)}
  >
   <div
    className={active ? 'modalContent active' : 'modal'}
    onClick={e => e.stopPropagation()}
   >
    <div className="carImgCheckbox">
     <img
      className="carImg"
      src={infoCar.img}
      alt={`${infoCar.make} ${infoCar.model}, ${infoCar.year}`}
     />
    </div>
    <div className="carTitle">
     <h3 className="carTitleMake">
      {infoCar.make} <span className="carTitleModel">{infoCar.model}</span>,{' '}
      {infoCar.year}
     </h3>
    </div>
    <p className="cardinfoCar">
     {infoCar.address} | {infoCar.id} | {`Year: ${infoCar.year}`} |
     {`Type: ${infoCar.type}`}| {`Fuel Consumption:${infoCar.fuelConsumption}`}{' '}
     | {`Engine Size: ${infoCar.engineSize}`}
    </p>
    <p>{infoCar.description}</p>
    <p>Accessories and functionalities:</p>
    <p className="cardinfoCar">
     {infoCar.accessories.join(' | ')} | {infoCar.functionalities.join(' | ')}
    </p>
    <h4>Rental Conditions: </h4>
    {infoCar.rentalConditions.split('\n').map((condition, index) => (
     <p key={index}>{condition}</p>
    ))}
    <p>{`Mileage:${infoCar.mileage}`}</p>
    <p>{`Price:${infoCar.rentalPrice}`}</p>

    <button className="cardBtn">Rental car</button>
   </div>
  </div>
 );
};

export default Modal;
