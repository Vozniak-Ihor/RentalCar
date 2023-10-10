import css from './FavoriteCar.module.css';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/advertSlice';

const FavoriteCar = () => {
 const favoriteCarArr = useSelector(state => state.advert.items);
 const dispatch = useDispatch();
 const inFavorite = item => {
  if (favoriteCarArr.includes(item)) {
   dispatch(removeFavorite(item.id));
  } else {
   dispatch(addFavorite(item));
  }
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

      <button className={css.cardBtn}>Learn more</button>
     </div>
    ))}
   </div>
  </>
 );
};

export default FavoriteCar;
