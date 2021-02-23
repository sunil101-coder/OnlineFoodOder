import React, { useState } from 'react'
import {BiLeftArrowAlt} from 'react-icons/bi/index'
import {IoIosArrowDown} from 'react-icons/io/index'
import Icontab from './Icontab'
import {Ordercotainer,Topbar,Content,
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
                
                <BiLeftArrowAlt size={40} className="left-arrow"/>
            </Topbar>
            <Content>
                    <Searchbar type="text" placeholder="Cuisine"/>
                    
                    <Foodlist>
                    <Title>Eat what makes you happy</Title>
                    <Foodcard>
                    {
                    RemovedEl.map((data, index) => {
                        return ( 
                   
                        <Productcard class="card" >
                                <Productimg src={data.image} class="card-img-top" alt="..." />

                                <div class="card-body">
                        <ProductTitle class="card-title" item-title>{data.Title}</ProductTitle>
                                </div>
                            </Productcard>
                        )}
                    )}
                    </Foodcard >
                    
                    {showfilter?
                    <Foodcard >
                    {
                    Filter.map((data, index) => {
                        return ( 
                            
                        <Productcard  key={index}>
                                <Productimg src={data.image} class="card-img-top" alt="..." />

                                <div className="card-body">
                                <ProductTitle className="card-title" item-title>{data.Title}</ProductTitle>
                                </div>
                            </Productcard>
                            
                        )}
                    )}   
     
                    </Foodcard>
   :null  }                           
                    <Button onClick={showfilterdata} itembtn >See More<span><IoIosArrowDown/></span></Button>
                    
                    </Foodlist>
            </Content>
            <Icontab/>
                  </Ordercotainer>
                  

       
    )
}

export default Ordernow
