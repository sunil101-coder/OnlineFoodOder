import React from 'react'
import Header from '../component/Header'
import Item from '../Product/Item'
import Item2 from '../Product/Item2'
import CustomerReview from '../Customerreview/CustomerReview'
import Product from '../Product/Product'
import {RemovedEl,Item1} from '../Product/Productdata'
import Customerdata from '../Customerreview/Customerdata'
const index = () => {
    return (
        <div>
            <Header/>     
            <Item data1={RemovedEl}/>
            <Product  data={Item1}/> 
            <Item2 data1={RemovedEl}/>  
            <CustomerReview Customerdata={Customerdata}/>    
        </div>
    )
}
export default index
