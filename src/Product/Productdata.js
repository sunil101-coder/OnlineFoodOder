import Orderonline from '../images/Orderonline.jpg'
import Meal1 from '../images/Meal1.jpg'
import Night from '../images/Night.jpg'
import Member from '../images/Member.jpg'
import NorthIndian from '../images/NorthIndian.jpg'
import SouthIndian from '../images/SouthIndian.jpg'
import Continental from '../images/Continental.jpg'
import Delhi from '../images/Delhi.jpg'
import Burgur from '../images/burgur.jpg'
import Pizza from '../images/pizza.jpg'
import Meal from '../images/meal.jpg'
import Drink from '../images/drink.jpg'

const productdata  =[
  {
    id:1,
    image:Orderonline,
    Title:"Order Food Online",
    },
  {
    id:2,
    image:Meal1,
    Title:"Go out for a meal",
     },
  {
    id:3,
    image:Night,
    Title:"Nightlife & Clubs",
    },
  {
    id:4,
    image:Member,
    Title:"Drink",
      },
    {
        id:5,
        image:NorthIndian,
        Title:"North Indian	",
        Price:"$19.99",
        button:"Order Now"
      },
      {
        id:6,
        image:SouthIndian,
        Title:"South Indian",
        Price:"$16.99",
        button:"Order Now"
      },
      {
        id:7,
        image:Continental,
        Title:"Continental",
        Price:"$29.99",
        button:"Order Now"
      },
      {
        id:8,
        image:Delhi,
        Title:"Delhi",
        Price:"$29.99",
        button:"Order Now"
      },
    
]
 export const RemovedEl = productdata.slice(0, productdata.length - 4);
 export const Item1= productdata.slice(4, 8);
export default productdata