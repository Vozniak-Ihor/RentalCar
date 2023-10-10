import makesCar from '../../makes.json';
import css from './FilterBar.module.css';
const FilterBar = () => {
 const priceOptions = [];
 for (let i = 10; i <= 300; i += 10) {
  priceOptions.push(i);
 }

 return (
  <>
   <form className={css.form}>
    <label className={css.label}>
     <p className={css.inputName}>Car brand</p>

     <input
      className={css.inputCarName}
      type="text"
      name="car"
      list="carName"
      placeholder="Enter the text"
     />
     <datalist id="carName">
      {makesCar.map((carName, index) => (
       <option key={index} value={carName} />
      ))}
     </datalist>
    </label>
    <label className={css.label}>
     <p className={css.inputName}>Price/ 1 hour</p>
     <input
      className={css.inputPrice}
      type="number"
      name="price"
      list="carPrice"
      placeholder="To"
     />
     <datalist id="carPrice">
      {priceOptions.map(option => (
       <option key={option} value={option} />
      ))}
     </datalist>
    </label>
    <label className={css.label}>
     <p className={css.inputName}> Сar mileage / km</p>
     <input
      className={css.inputСarMileageMin}
      type="number"
      name="min"
      min={1}
      placeholder="From"
     />
     <input
      className={css.inputСarMileageMax}
      type="number"
      name="max"
      max={9999}
      placeholder="To"
     />
    </label>
    <button className={css.formBtn}>Search</button>
   </form>
  </>
 );
};

export default FilterBar;
