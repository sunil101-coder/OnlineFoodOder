import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {BiLeftArrowAlt} from 'react-icons/bi/index'
import {IoIosArrowDown} from 'react-icons/io/index'
import {CgProfile} from 'react-icons/cg/index'
import ListItem from './ListItem'
import Popularitem from './Popularitem'
import Recommended from './Recommended'
import '../css/Listitem.css'
import Icontab from './Icontab'
import Pizza from '../images/pizza.jpg'

import {Ordercotainer,Topbar,Content,
    Image,Searchbox,
    Searchbar,Foodlist,
    Title,Productcard,Productimg,
    ProductTitle,Foodcard,Button

} from './ordercss'
import {RemovedEl,Filter} from './orderdata'

const Ordernow = () => {
    
    const [showfilter, setshowfilter] = useState(false);
    const showfilterdata=()=>{
        setshowfilter({ setshowfilter: !showfilter });
        if (showfilter) {
            setshowfilter(false)
        }
          }
    return (
        <Ordercotainer className="order-container">
            <Topbar className="top-bar">
                         <NavLink to="/"><BiLeftArrowAlt size={40} className="left-arrow"/></NavLink>
                         <CgProfile size={40} className="profile"/>
            </Topbar>
            <Content>
                <div className="top-content">
                    <Searchbox>
                    <Searchbar type="text" placeholder="Cuisine"/>
                     <Image src={Pizza}/>
                    </Searchbox>
                </div>
                    <ListItem/>
                    <Foodlist>
                    <Title>Eat what makes you happy</Title>
                    <Foodcard row1>
                    {
                    RemovedEl.map((data, index) => {
                        return ( 
                   
                        <Productcard row1card >
                                <Productimg src={data.image} class="card-img-top" alt="..." />

                                <div class="card-body">
                        <ProductTitle class="card-title" item-title>{data.Title}</ProductTitle>
                                </div>
                            </Productcard>
                        )}
                    )}
                    </Foodcard >
                    
                    {showfilter?
                    <Foodcard row1>
                    {
                    Filter.map((data, index) => {
                        return ( 
                            
                        <Productcard  key={index} row1card>
                                <Productimg src={data.image} class="card-img-top" alt="..." />

                                <div className="card-body">
                                <ProductTitle className="card-title" item-title>{data.Title}</ProductTitle>
                                </div>
                            </Productcard>
                            
                        )}
                    )}   
                  
       
                    </Foodcard>
                    
                    
   :null  }         

                    <div className="Seemorebtn">

                    <Button onClick={showfilterdata} className={showfilter?"showdata":"showhide"} ><span><IoIosArrowDown/></span></Button>
                    
                        </div>                   
                    
                    </Foodlist>
                    <div className={showfilter?'Popular':'setPopular'}>
                        <Popularitem/>
                        <Recommended/>
                    </div>
            </Content>
            <Icontab/>
                  </Ordercotainer>
                  

       
    )
}

export default Ordernow
