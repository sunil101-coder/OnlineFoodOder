import React ,{useState} from 'react'
import {IoIosArrowDown} from 'react-icons/io/index'
import {RemovedEl,Filter} from './orderdata'
import Popularitem from './Popularitem'
import Recommended from './Recommended'

import {
    Foodlist,
    Title,
    Productcard,
    Productimg,
    ProductTitle,
    Foodcard,
    Button

} from './ordercss'

const Displaycard = () => {
    const [showfilter, setshowfilter] = useState(false);
    const showfilterdata=()=>{
        setshowfilter({ setshowfilter: !showfilter });
        if (showfilter) {
            setshowfilter(false)
        }
          }
    
    return (
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
            <div className={showfilter?'Popular':'setPopular'}>
       <Popularitem/>
       <Recommended/>
   </div>
        </Foodlist>
  
    )
}

export default Displaycard
