import './Modal.css';

const Modal = ({ active, setActive, infoCar }) => {
 if (!infoCar || !infoCar.img) {
  return null;
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
    <div className="modalImgCheckbox">
     <img
      className="modalImg"
      src={infoCar.img}
      alt={`${infoCar.make} ${infoCar.model}, ${infoCar.year}`}
     />
    </div>

    <h3 className="modalTitleMake">
     {infoCar.make} <span className="modalTitleModel">{infoCar.model}</span>,{' '}
     {infoCar.year}
    </h3>

    <p className="modalInfoCar">
     {infoCar.address} | {infoCar.id} | {`Year: ${infoCar.year}`} |
     {`Type: ${infoCar.type}`}| {`Fuel Consumption:${infoCar.fuelConsumption}`}{' '}
     | {`Engine Size: ${infoCar.engineSize}`}
    </p>
    <p className="modalDescription">{infoCar.description}</p>
    <p className="modalAccessories">Accessories and functionalities:</p>
    <p className="modalInfoCar">
     {infoCar.accessories.join(' | ')} | {infoCar.functionalities.join(' | ')}
    </p>
    <h4>Rental Conditions: </h4>
    {infoCar.rentalConditions.split('\n').map((condition, index) => (
     <p key={index}>{condition}</p>
    ))}
    <p>{`Mileage:${infoCar.mileage}`}</p>
    <p>{`Price:${infoCar.rentalPrice}`}</p>

    <button className="modalBtn">Rental car</button>
   </div>
  </div>
 );
};

export default Modal;
