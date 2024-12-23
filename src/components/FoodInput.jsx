import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
   return (
     <input
     type="text"
     placeholder="Enter Food Item here"
     className={styles.foodinput}
     onKeyDown={handleKeyDown}
     />
   );
};
export default FoodInput;