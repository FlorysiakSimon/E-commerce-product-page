import React from 'react'
import './HomePage.scss'
import Carousel from '../../components/Carousel/Carousel'
import Header from '../../components/Header/Header';
export default function HomePage() {

    const [carouselOpen, setCarouselOpen] = React.useState(false);
    const [sliderIndex,setSliderIndex] = React.useState(0)
    const [numbersItems,setNumbersItems] = React.useState(0)

    const items = {
            src:"./images/image-product-1-thumbnail.jpg",
            name:"Fall Limited Edition",
            price:"$125.00"
        }
    
    const plusSlide = () =>{
        sliderIndex >= sliderData.length -1 
        ? setSliderIndex(0)
        : setSliderIndex(sliderIndex + 1)
    }
    const lessSlide = () =>{
        sliderIndex === 0
        ? setSliderIndex( sliderData.length  - 1)
        : setSliderIndex(sliderIndex - 1)
    }
    const sliderData = [
        {src:"./images/image-product-1.jpg"},
        {src:"./images/image-product-2.jpg"},
        {src:"./images/image-product-3.jpg"},
        {src:"./images/image-product-4.jpg"}
    ]

    const toggleCarousel = () => {
        setCarouselOpen(!carouselOpen);
    };
    
    const plusItem = ()=>{
        setNumbersItems(numbersItems + 1);
    }
    const lessItem = () =>{
        numbersItems !== 0
       ? setNumbersItems(numbersItems - 1)
       : setNumbersItems(0)
    }
    
    return (
    <>
        <Header items={items}/>
        <Carousel 
            carouselClose={toggleCarousel} 
            carouselOpen={carouselOpen} 
            data={sliderData} 
            sliderIndex={sliderIndex}  
            setSliderIndex={setSliderIndex}
            lessSlide={lessSlide}
            plusSlide={plusSlide}
        />
        <div className='wrapper'>
            <div className='wrapper-img'>
                <img className="wrapper-imgLeft" src="./images/icon-previous.svg" onClick={lessSlide} alt="arrow"/>
                <img className="wrapper-imgRight"src="./images/icon-next.svg" onClick={plusSlide} alt="arrow"/>
                <img className='wrapper-img-activ' src={sliderData[sliderIndex].src} alt="product" onClick={toggleCarousel}/>
                <div className='wrapper-img-bottom'>
                    <img className={`${sliderIndex === 0 ? "active" : ""}`} src="./images/image-product-1-thumbnail.jpg" onClick={()=>setSliderIndex(0)} alt="product1"/>
                    <img className={`${sliderIndex === 1 ? "active" : ""}`} src="./images/image-product-2-thumbnail.jpg" onClick={()=>setSliderIndex(1)} alt="product2"/>
                    <img className={`${sliderIndex === 2 ? "active" : ""}`} src="./images/image-product-3-thumbnail.jpg" onClick={()=>setSliderIndex(2)} alt="product3"/>
                    <img className={`${sliderIndex === 3 ? "active" : ""}`} src="./images/image-product-4-thumbnail.jpg" onClick={()=>setSliderIndex(3)} alt="product4"/>
                </div>
            </div>
            <div className='wrapper-txt'>
                <h2>Sneaker company</h2>
                <h3>Fall Limited Edition Sneakers</h3>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className='wrapper-txt-price'>
                    <p>$125.00<span>50%</span></p>
                </div>
                <p className='wrapper-txt-oldprice'>$250.00</p>
                <div className='wrapper-txt-buttons'>
                    <div className="wrapper-txt-buttons-cart">
                            <span className="wrapper-txt-buttons-cart-minus" onClick={lessItem}>-</span>
                            <span className="wrapper-txt-buttons-cart-total">{numbersItems}</span>
                            <span className="wrapper-txt-buttons-cart-plus" onClick={plusItem}>+</span>
                    </div>
                    <button type='button'><img src="./images/icon-cart-button.svg" alt="add-to-cart"/>Add to cart</button>
                </div>
            </div>
        </div>
    </>
    )
}
