import React from 'react'
import { Customercontainer ,
        CustomerHeading,
        CustomerHeadingText,
        Customercontent,
        Customercard,
        Customerimg,
        CustomerTitle,
        CustomerDesc
    } from './Customerdatacss'
import {ImStarFull} from 'react-icons/im/index'
const CustnomerReview = ({Customerdata}) => {
    return (
        <Customercontainer>
                <CustomerHeading>
                    <CustomerHeadingText>
                        What Our Customer's Have To Say
                    </CustomerHeadingText>
                    <Customercontent>
                        {
                             Customerdata.map((data, index) => {
                                return (
                                <Customercard className="card" productcard>
                                <CustomerTitle >{data.Title}
                                <span><ImStarFull className="rating"/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/></span>
                                </CustomerTitle>
                                
                                <CustomerDesc>
                                            {data.Desc}
                                </CustomerDesc>
                            </Customercard>
                           
                                )}
                           
                              ) }
                            
                    </Customercontent>        
               </CustomerHeading>

        </Customercontainer>
    )
}

export default CustnomerReview


