import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealItems =DUMMY_MEALS.map((item)=>{
    return (
     <ul> 
         <MealItem 
         key={item.id}
         id={item.id}
         name={item.name}
         description={item.description}
         price={item.price}
        />
     </ul>
     )
  })
  return(
    <section className={classes.meals}>
      <Card>
        {mealItems}
      </Card>
    </section>
  )
};

export default AvailableMeals;