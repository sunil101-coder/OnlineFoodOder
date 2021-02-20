import React from 'react'
import { generateMedia } from "styled-media-query"
import {
    ProdouctsContainer,
    ProdouctsHeading,
    ProductWrapper,
    Prodouctstext,
    Productcard,
    ProductTitle,
    Productimg
} from '../Product/ProductElement'

const Product = ({ data }) => {
    return (
        <ProdouctsContainer >
            <ProdouctsHeading productheading>
                Collection
                <br/>
                <Prodouctstext>
                    Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
                </Prodouctstext>
            </ProdouctsHeading>
            <ProductWrapper>
                {
                    data.map((data, index) => {
                        return (
                            <Productcard class="card" key={index }productcard>
                                <Productimg src={data.image} class="card-img-top" alt="..." secondary />
                                <ProductTitle class="card-title" producttitle>{data.Title}</ProductTitle>
                            </Productcard>)
                    }
                    )}
            </ProductWrapper>

        </ProdouctsContainer>
    )
}

export default Product
const customMedia = generateMedia({
    lgdesktop: '1440px',
    mdDesktop: '1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
});
