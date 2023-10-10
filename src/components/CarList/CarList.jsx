import css from './CarList.module.css';
import React, { useEffect, useState, useRef } from 'react';
import fetchData from '../../Services/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/advertSlice';
import Modal from 'components/Modal/Modal';
const CarList = () => {
 const [adverts, setAdverts] = useState([]);
 const [page, setPage] = useState(1);
 const isFirstRender = useRef(true);
 const favoriteCarArr = useSelector(state => state.advert.items);
 //  const checkbox = useSelector(state => state.advert.items);
 const [modalActive, setModalActive] = useState(true);

 const getData = page => {
  fetchData(page)
   .then(data => {
    setAdverts(prevAdverts => {
     return [...prevAdverts, ...data];
    });
   })
   .catch(err => console.log(err));
 };

 useEffect(() => {
  if (isFirstRender.current) {
   isFirstRender.current = false;
   return;
  }

  getData(page);
 }, [page]);

 const handleLoadMore = () => {
  setPage(prevPage => prevPage + 1);
 };


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
    {adverts.map(info => (
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
     </div>
    ))}
    <button
     onClick={handleLoadMore}
     className={css.loadMoreButton}
     type="button"
    >
     Load More
    </button>
    <Modal active={modalActive} setActive={setModalActive} infoCar={selectedCar} />
   </div>
  </>
 );
};

export default CarList;
