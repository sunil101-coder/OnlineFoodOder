import React from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query"
import {Link } from 'react-router-dom'
import {
    ProdouctsContainer,
    ProductWrapper,
    Productcard,
    Productinfo,
    ProductTitle,
    Productimg
} from './ProductElement'

const Item = ({ data1 }) => {
    return (
        <ProdouctsContainer primary >
            <ProductWrapper>
                {
                    data1.map((data, index) => {
                        return (
                            <Link className="hover">
                            <Productcard class="card" >
                                <Productimg src={data.image} class="card-img-top" alt="..." />

                                <div class="card-body">
                                <ProductTitle class="card-title" item-title>{data.Title}</ProductTitle>
                                </div>
                            </Productcard>
                            </Link>
                            )
                    }
                    )}
            </ProductWrapper>

        </ProdouctsContainer>
    )
}

export default Item

