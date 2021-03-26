import React from 'react'
import styled from "styled-components"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <Container>
                <Banner>

                </Banner>
                <Content>
                    <LineOne>
                        <Product title="iPad Pro" price={959.99} rating={4} image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202003_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1583551131102"/>
                        <Product title="Razer Cynosa V2 Gaming Keyboard: Membrane Key Switches - Customizable Chroma RGB Lighting - Individually Backlit Keys - Programmable Macros" price={59.99} image="https://images-na.ssl-images-amazon.com/images/I/71ZXT9Hw0-L._AC_SL1280_.jpg" rating={4}/>
                    </LineOne>
                    <LineTwo>
                        <Product title="Amazon Echo Dot (4th Gen) Smart Speaker with Alexa - Charcoal" price={69.99} image="https://www.thesource.ca/medias/20200925150927-108091083-A.jpg-mediaConversion-640-x-480-mediaConversion-400-x-300-0?context=bWFzdGVyfGltYWdlc3w3MTMxMXxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGUyLzkyOTk4NTMxODA5NTguanBnfDY1NGVkN2VkODhlNjcxYzUzODdiNDBkNDc5Y2IwMDg4Y2FhY2MxZDBkYjZlMjdlMmM3NWJlOWZkODQ1ZDFjZDg" rating={2}/>
                        <Product title="Samsung Galaxy S21 Ultra 512GB 16GB RAM" price={1,179.99} image="https://images.hindustantimes.com/tech/img/2021/01/13/960x540/image_-_2021-01-13T091301.895_1610509382286_1610509388062.jpg" rating={5}/>
                        <Product title="Tenki no ko by Makoto Shinkai" price={29.99} rating={5} image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563210372l/50114505._SX318_SY475_.jpg"/>
                    </LineTwo>
                    <LineThree>
                        <Product title='Samsung - G97T Series LC49G97TSSNXDC 49" Class 1000R Curved Gaming Monitor - Black' price={1,479.99} image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425569_sd.jpg;maxHeight=640;maxWidth=550" rating={4}/>
                    </LineThree>
                </Content>
            </Container>
        </div>
    )
}

export default Home


const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`
const Banner = styled.div`
background-image: url('https://imgur.com/SYHeuYM.jpg') ;
min-height: 600px;
background-position: center;
background-size: cover;
z-index: 1;
mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -298px;
`
const LineOne = styled.div`
display: flex;
z-index: 1;
margin-right: 5px;
margin-left: 5px;
`
const LineTwo = styled.div`
display: flex;
z-index: 1;
margin-right: 5px;
margin-left: 5px;
`
const LineThree = styled.div`
display: flex;
z-index: 1;
margin-right: 5px;
margin-left: 5px;
`