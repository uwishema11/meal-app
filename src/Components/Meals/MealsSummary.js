import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return(
    <div className={classes.summary}>
    <h2 className={classes.h2}>Delicious Food, Delivered To You</h2>
    <p>Choose your favorite from our broad selection of available meals
      and enjoy a deliciouslunch or dinner at home
    </p>
    <p>
      All our meals are cooked with high-quality ingredients, just-in-time
      and ofcourse by experienced chiefs
    </p>
  </div>
  )
};

export default MealsSummary;