import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi/index'
import { CgSearch } from 'react-icons/cg/index'

import { CgProfile } from 'react-icons/cg/index'
import ListItem from './ListItem'
import '../css/Listitem.css'
import Icontab from './Icontab'
import Pizza from '../images/pizza.jpg'
import Displaycard from './Displaycard'
import Foodquery from './Foodquery'
import {Maincontainer} from './Foodquery'

import {
    Ordercotainer,
    Topbar,
    Content,
    Image,
    Searchbox,
    Searchbar,
} from './ordercss'

const Ordernow = () => {

    const Api_id = "d49ed10d";
    const Api_key = "5582391e69fc64dc773671f9625c9b7f";
    const [search, setsearch] = useState([]);
    const [foodsearch, setfoodsearch] = useState('');
    const [query,setquery]=useState('');
    const [isloading,setisloading] =useState(false);
    useEffect(() => {
        const fetchapi = async () => {

            const result = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${Api_id}&app_key=${Api_key}`);
            console.log(result.data.hits);
            setsearch(result.data.hits);

        }
        fetchapi()
    }, [query]);

    const onchange = (q) => {
        setfoodsearch(q)
        console.log(search)

    };
    const handlequery=(e)=>{
        e.preventDefault();
        setquery(foodsearch);
        setfoodsearch('');
        setisloading(true);
        

    }

    return (
        <Ordercotainer className="order-container">
            <Topbar className="top-bar">
                <NavLink to="/"><BiLeftArrowAlt size={40} className="left-arrow" /></NavLink>
                <CgProfile size={40} className="profile" />
            </Topbar>
            <Content>
                <div className="top-content">
                <form onSubmit={handlequery}>
                         
                    <Searchbox>''
                        <Searchbar type="text" value={foodsearch} placeholder="" onChange={(e) => onchange(e.target.value)} />
                        <button className="searchicon">
                            <CgSearch  size={35}/>
                        </button>   
                      <Image src={Pizza} />
                    </Searchbox>
                    </form>
                       
                </div>
                <ListItem /> 

{
isloading?
<div>
{
        search.map((search, index) => {
            return (
                <Foodquery  className={Maincontainer}
                    key={index}
                    Title={search.recipe.label}
                    Image={search.recipe.image}

                />
            )

        })
    }

</div>:
    <Displaycard />

    
   

}
               
   
            </Content>


            <Icontab />
        </Ordercotainer>



    )
}

export default Ordernow
