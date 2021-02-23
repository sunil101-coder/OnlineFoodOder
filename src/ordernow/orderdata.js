import Burgur from '../images/burgur.jpg'
import Pizza from '../images/pizza.jpg'
import Meal from '../images/meal.jpg'
import Drink from '../images/drink.jpg'
import NorthIndian from '../images/NorthIndian.jpg'
import SouthIndian from '../images/SouthIndian.jpg'
import Continental from '../images/Continental.jpg'
import Chicken from '../images/Orderonline.jpg'
import Malaikofta from '../images/Malaikofta.jpg'

import Chole from '../images/Chole.jpg'
import Palakpanner from '../images/Palakpanner.jpg'
import PapdiChaat from '../images/PapdiChaat.jpg'

const productdata  =[
  {
    id:1,
    image:Burgur,
    Title:"Burgur",
    },
  {
    id:2,
    image:Pizza,
    Title:"Pizza",
     },
  {
    id:3,
    image:Meal,
    Title:"Meal",
    },
  {
    id:4,
    image:Drink,
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
        image:Chicken,
        Title:"Chicken",
        Price:"$29.99",
        button:"Order Now"
      },
      {
        id:9,
        image:Malaikofta,
        Title:"Malai kofta",
        Price:"$29.99",
        button:"Order Now"
      },
      {
        id:10,
        image:Chole,
        Title:"Chole",
        Price:"$29.99",
        button:"Order Now"
      },
      {
        id:11,
        image:Palakpanner,
        Title:"Palak Panner",
        Price:"$29.99",
        button:"Order Now"
      },
      {
        id:12,
        image:PapdiChaat,
        Title:"Papdi Chaat",
        Price:"$29.99",
        button:"Order Now"
      }
    
]
 export const RemovedEl = productdata.slice(0, productdata.length - 6);
 export const Filter = productdata.filter(productdata => productdata.id >6);
 export const Item1= productdata.slice(4, 8);
export default productdata