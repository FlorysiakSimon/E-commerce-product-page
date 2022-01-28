import React from 'react';
import './Carousel.scss'


export default function Carousel({carouselOpen,carouselClose,data,sliderIndex,setSliderIndex,plusSlide,lessSlide}) {

    if(!carouselOpen){return null;} 

    return <>
        <section className="carousel">
            <div onClick={carouselClose}
                className="carouselOverlay">
            </div>
                <div className='carouselImg'>
                   
                    <div className='carouselImgContainer'>
                        <img className='carouselImgClose' src="./images/icon-close.svg" alt='close' onClick={carouselClose}/>
                        <img className="carouselImgLeft" src="./images/icon-previous.svg" onClick={lessSlide} alt="arrow"/>
                        <img className="carouselImgRight"src="./images/icon-next.svg" onClick={plusSlide} alt="arrow"/>
                        <img className='carouselImgActiv' src={data[sliderIndex].src} alt="product" />
                    </div>
                    <div className='carouselImgBottom'>
                        <img className={`${sliderIndex === 0 ? "active" : ""}`} src="./images/image-product-1-thumbnail.jpg" onClick={()=>setSliderIndex(0)} alt="product1"/>
                        <img className={`${sliderIndex === 1 ? "active" : ""}`} src="./images/image-product-2-thumbnail.jpg" onClick={()=>setSliderIndex(1)} alt="product2"/>
                        <img className={`${sliderIndex === 2 ? "active" : ""}`} src="./images/image-product-3-thumbnail.jpg" onClick={()=>setSliderIndex(2)} alt="product3"/>
                        <img className={`${sliderIndex === 3 ? "active" : ""}`} src="./images/image-product-4-thumbnail.jpg" onClick={()=>setSliderIndex(3)} alt="product4"/>
                    </div>
                </div>
            <p className='carouselCounter'></p>
        </section>
  </>;
}
