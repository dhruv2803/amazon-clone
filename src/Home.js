import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
                    alt=""
                    />
            </div>
            <div className="home_row">
                <Product
                    id="1"
                    title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service"
                    price={36.30}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg"

                />
                <Product
                    id="2"
                    title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting" 
                    image="https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg"
                    price={370.00}
                    rating={4}
                />
            </div>
            <div className="home_row">
                <Product
                    id="3"
                    title="Hanes Women's V-Notch Pullover Fleece Sweatshirt"
                    price={31.84}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71N83eNYVqL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product 
                    id="4"
                    title="Lucky Brand Women's Long Sleeve Crew Neck Embroidered Sweatshirt"
                    price={56.16}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91L-Dazu9GL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product 
                    id="5"
                    title="Under Armour Women's Rival Flece Graphic Color Block Hoodie"
                    price={45}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81iUf5ovA2L._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home_row">
                <Product 
                    id="6"
                    title="Msaaex 50 Pcs Disposable 4-ply Non-woven Face Mask, Black Masks"
                    price={7.93}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71nrZB9sDYL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
