import './Modal.css';
import crossImg from '../../images/x.svg';
const Modal = ({ active, setActive, infoCar }) => {
 if (!infoCar || !infoCar.img) {
  return null;
 }
 const handleOnClose = e => {
  if (e.code === 'Escape') {
   setActive(false);
  }
 };

 window.addEventListener('keydown', handleOnClose);
 return (
  <div
   className={active ? 'modal active' : 'modal'}
   onClick={() => setActive(false)}
  >
   <div
    className={active ? 'modalContent active' : 'modal'}
    onClick={e => e.stopPropagation()}
   >
    <button className='CloseButton' onClick={() => setActive(false)}>
     <img src={crossImg} alt="cancel" />
    </button>
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
    <h4 className="modalTitle">Rental Conditions: </h4>
    <div className="modalCondition">
     {infoCar.rentalConditions.split('\n').map((condition, index) => (
      <p className="modalConditions" key={index}>
       {condition}
      </p>
     ))}
     <p className="modalConditions">{`Mileage: ${infoCar.mileage}`}</p>
     <p className="modalConditions">{`Price:${infoCar.rentalPrice}`}</p>
    </div>

    <a className="modalBtn" href="tel:+380730000000">
     Rental car
    </a>
   </div>
  </div>
 );
};

export default Modal;
