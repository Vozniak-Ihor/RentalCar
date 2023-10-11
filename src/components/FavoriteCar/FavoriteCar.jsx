import css from './FavoriteCar.module.css';
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/advertSlice';
import Modal from 'components/Modal/Modal';
const FavoriteCar = () => {
 const [modalActive, setModalActive] = useState(true);
 const favoriteCarArr = useSelector(state => state.advert.items);
 const dispatch = useDispatch();
 const inFavorite = item => {
  if (favoriteCarArr.includes(item)) {
   dispatch(removeFavorite(item.id));
  } else {
   dispatch(addFavorite(item));
  }
 };
 const [selectedCar, setSelectedCar] = useState(null);
 const handleLearnMore = info => {
  setSelectedCar(info);
  setModalActive(true);
 };
 
 return (
  <>
   <div className={css.catalogConteiner}>
    {favoriteCarArr.map(info => (
     <div className={css.cards} key={info.id}>
      <div className={css.carImgCheckbox}>
       <img
        className={css.carImg}
        src={info.img}
        alt={`${info.make} ${info.model}, ${info.year}`}
       />
       <input
        className={css.checkbox}
        onChange={() => inFavorite(info)}
        type="checkbox"
        checked={favoriteCarArr.includes(info)}
       />
      </div>
      <div className={css.carTitle}>
       <h3 className={css.carTitleMake}>
        {info.make} <span className={css.carTitleModel}>{info.model}</span>,{' '}
        {info.year}
       </h3>
       <span>{info.rentalPrice}</span>
      </div>
      <p className={css.cardInfo}>
       {info.address} | {info.rentalCompany} | "Premium audio system" |{' '}
       {info.model} | {info.id} | "Power liftgate"
      </p>

      <button className={css.cardBtn} onClick={() => handleLearnMore(info)}>
       Learn more
      </button>
      <Modal
       active={modalActive}
       setActive={setModalActive}
       infoCar={selectedCar}
      />
     </div>
    ))}
   </div>
  </>
 );
};

export default FavoriteCar;
