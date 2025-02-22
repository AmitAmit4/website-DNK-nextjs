"use client"
import React, { useEffect, useRef } from 'react'
// import Shoe from './pictures/sports-shoe1-300x300.jpg'
import Image from 'next/image'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel styles
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 

  const cart = [
    { title: "DNK Yellow Shoes", img: "/pictures/sports-shoe3-300x300.jpg", category: "Men", rate: "$120.00" },
    { title: "DNK Blue Shoes", img: "/pictures/sports-shoe1-300x300.jpg", category: "Men", rate: "$200.00-$240.00", btnColor: "impBlue", btn: "imp" },
    { title: "Dark Brown Jeans", img: "/pictures/product-m-jeans1-300x300.jpg", category: "Men", rate: "$150.00" },
    { title: "Blue Denim Jeans", img: "/pictures/product-w-jeans2-300x300.jpg", category: "Women", rate: "$150.00" },
    { title: "Basic Gray Jeans", img: "/pictures/product-w-jeans4-300x300.jpg", category: "Women", rate: "$150.00" },
    { title: "Blue Denim Shorts", img: "/pictures/product-w-jeans1-300x300.jpg", category: "Women", rate: "$130.00" },
    { title: "Anchor Bracelet", img: "/pictures/product-accessory2-300x300.jpg", category: "Accessories", rate: "$150.00-$180.00", btnColor: "impBlack", btn: "imp" },
    { title: "Boho Bangle Bracelet", img: "/pictures/product-accessory1-300x300.jpg", category: "Accessories", rate: "150.00-$170.00", btnColor: "impSkyBlue", btn: "imp" },
    { title: "Light Brown Purse", img: "/pictures/product-bag1-300x300.jpg", category: "Accessories", rate: "$150.00" },
    { title: "Bright Red Bag", img: "/pictures/product-bag3-300x300.jpg", category: "Accessories", rate: "100.00-$140.00", btnColor: "impBlueFour", btn: "imp" },
  ]

  return (

    <div id="main-section">
      {/* <div id="navbar" className='d-flex justify-between py-4 px-7'>
        <div className='d-flex justify-between items-center text-sm'>
          <div>
            <img src="/pictures/logo1-free-img.png" alt="DNK" width="130px" />
          </div>
          <div className='d-flex justify-between items-center gap-3 text-white font-semibold'>
            <p>EVERYTHING</p>
            <p>WOMEN</p>
            <p>MEN</p>
            <p>ACCESSORIES</p>
          </div>
        </div>
        <div className='d-flex justify-between items-center gap-3 text-white'>
          <p>ABOUT</p>
          <p>CONTACTS</p>
          <p>
            <span className='mr-3'>$0.00</span>
            <span><i class="fa-solid fa-bag-shopping"></i></span>
          </p>
          <p><i class="fa-solid fa-user"></i></p>
        </div>
      </div> */}
      <div id="navbar" className='py-4 px-7'>
        <Container fluid>
          <Row className='justify-content-between align-items-center'>
            <Col className='d-flex align-items-center' xs={6} md={6}>
              <Image src="/pictures/logo1-free-img.png" alt="DNK" width={130} height={100} />
              <div className='d-lg-flex d-none d-xl-flex gap-3 ms-3 text-white font-semibold'>
                <p>EVERYTHING</p>
                <p>WOMEN</p>
                <p>MEN</p>
                <p>ACCESSORIES</p>
              </div>
            </Col>
            <Col className='nav_about_section d-flex gap-2 gap-md-3 justify-content-end text-white nav-right-sec' xs={6} md={6}>
              <p>ABOUT</p>
              <p>CONTACTS</p>
              <p>
                <span className='me-3'>$0.00</span>
                <span><i className="fa-solid fa-bag-shopping"></i></span>
              </p>
             <p><i className="fa-solid fa-user"></i></p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="first-section d-flex items-center">
        <div className='text-white' style={{ width: "50%" }}>
          <h1 className='font-medium text-6xl'>Raining Offers For <br/> Hot Summer!</h1>
          <h3>25% Off On All Products</h3>
          <div className='first-section-buttons'>
            <button className='bg-white fs-btn-1 px-3 py-2'>SHOP NOW</button>
            <button className='first_section_btn2 px-3 py-2 mx-3 fs-btn-2' style={{ backgroundColor: "#165D76", border: "1px solid white" }}>FIND MORE</button>
          </div>
        </div>
      </div>
      <div className='second-section'>

<div className="slider-container" style={{width:"85%",margin:"auto"}}>
      <Slider {...settings}>
        <div>
        <img src="/pictures/client-logo-1.png" alt="Slide 1" style={{width:"140px"}}/>
        </div>
        <div>
        <img src="/pictures/client-logo-2.png" alt="Slide 1" style={{width:"140px"}}/>
        </div>
        <div>
        <img src="/pictures/client-logo-3.png" alt="Slide 1" style={{width:"140px"}}/>
        </div>
        <div>
        <img src="/pictures/client-logo-4.png" alt="Slide 1" style={{width:"140px"}}/>
        </div>
        <div>
        <img src="/pictures/client-logo-5.png" alt="Slide 1" style={{width:"140px"}}/>
        </div>
       
      </Slider>
    </div>


        <div className='second-section-cart m-auto' style={{ width: '100%' }}>
  <Container fluid>
    <Row className="gx-3 gy-2"> {/* gx-3 adds horizontal space, gy-2 adds vertical space */}
      <Col className='p-2' xs={12} sm={12} md={4}>
      <div className='second-section-cart-1' style={{width:'100%'}}>
        <h2 className='text-white'>20% Off On Tank Tops</h2>
        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button className='fs-btn-1'>SHOP NOW</button>
        </div>
      </Col>
      <Col className='p-2' xs={12} sm={12} md={4}>
      <div className='second-section-cart-2' style={{width:'100%'}}>
        <h2 className='text-white'>Latest Eyewear For You</h2>
        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button className='fs-btn-1'>SHOP NOW</button>
        </div>
      </Col>
      <Col className='p-2' xs={12} sm={12} md={4}>
      <div className='second-section-cart-3' style={{width:'100%'}}>
        <h2 className='text-white'>Let&#39;s Lorem Suit Up!</h2>
        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button className='fs-btn-1'>CHECK OUT</button>
        </div>
      </Col>
    </Row>
  </Container>
</div>

      </div>
      <div className="third-section">
        <h2 className='text-center' style={{fontSize:"42px",color:"black",marginBottom:"30px"}}>Featured Products</h2>
        <p style={{width:"100px",border:"1px solid #0084d6",margin:"auto",marginBottom:"48px"}}></p>
        <div className='third-section-carts'>
          {
            cart.map((val, i) => (
              <div className='third-section-cart m-md-2 m-auto mb-5' key={i} style={{marginTop:val.btnColor=== "impBlue"? "8px":"0px"}}>              
                <img src={val.img} alt="accessorry" style={{width:"250px", height:"230px"}} />
                <p className='text-sm mt-3 mb-0.5' style={{fontSize:"15px", fontWeight:600}}>{val.title}</p>
                <p className='text-sm mb-0.5 text-gray-500'>{val.category}</p>
                <p className='text-sm mb-0.5'>{val.rate}</p>
                {
                  // val.btn ?
                  //   <>
                  //     <button style={{ backgroundColor: val.btnColor === "impBlue" ? "#1E73BE" : val.btnColor === "impBlack" ? "#000000" : val.btnColor === "impSkyBlue" ? "#1FB1C1" : "#1E73BE", height: "16px", width: "16px", borderRadius: "50%", margin: "0px 4px" }}></button>
                  //     <button style={{ backgroundColor: val.btnColor === "impBlue" ? "#81D742" : val.btnColor === "impBlack" ? "#AA7627" : val.btnColor === "impSkyBlue" ? "#81D742" : "#F49922", height: "16px", width: "16px", borderRadius: "50%", margin: "0px 4px" }}></button>
                  //     <button style={{ backgroundColor: val.btnColor === "impBlue" ? "#CE592F" : val.btnColor === "impBlack" ? "#CE592F" : val.btnColor === "impSkyBlue" ? "#CE592F" : "#CE25E8", height: "16px", width: "16px", borderRadius: "50%", margin: "0px 4px" }}></button>
                  //   </> :
                  //   <></>
                }
                {
                  // val.btnColor === "impBlueFour" ?
                  //   <button style={{ backgroundColor: "#CE592F", height: "16px", width: "16px", borderRadius: "50%", margin: "0px 4px" }}></button> :
                  //   <></>
                }
                <div className='text-sm'>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
            ))
          }

        </div>
      </div>
      <div className='fourth-section'>
        <div className='fourth-section-description'>
          <h4 className='text-lg mb-4'>Limited Time Offer</h4>
          <h3 className='text-4xl mb-3'>Special Edition</h3>
          <p className='text-sm leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quidem explicabo quam sequi tempora velit.</p>
          <p className='mb-5'>Buy This T-Shirt At 20% Discount, Use Code OFF20</p>
          <button className='fs-btn-1'>SHOP NOW</button>
        </div>

      </div>
      <div className="fifth-section">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3} className="text-center mb-4">
              <img src="/pictures/globe-free-img.png" alt="Worldwide Shopping" width={50} className='text-center m-auto mb-3' />
              <h4 className='text-base'>Worldwide Shopping</h4>
              <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </Col>
            <Col xs={12} sm={6} md={3} className="text-center mb-4">
              <img src="/pictures/quality-free-img.png" alt="Best Quality" width={50} className='text-center m-auto mb-3' />
              <h4 className='text-base'>Best Quality</h4>
              <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </Col>
            <Col xs={12} sm={6} md={3} className="text-center mb-4">
              <img src="/pictures/tag-free-img.png" alt="Best Offers" width={50} className='text-center m-auto mb-3' />
              <h4 className='text-base'>Best Offers</h4>
              <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </Col>
            <Col xs={12} sm={6} md={3} className="text-center mb-4">
              <img src="/pictures/lock-free-img.png" alt="Secure Payments" width={50} className='text-center m-auto mb-3' />
              <h4 className='text-base'>Secure Payments</h4>
              <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='sixth-section'>
        <h3>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h3>
      </div>
      <div className='footer'>
        <Container>
          <Row>
            <Col sm={12} md={5}>
              <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png" alt="DNK" width="80px" />
              <h4 className='text-sm text-black'>The best look anytime, anywhere.</h4>
            </Col>
            <Col sm={12} md={2}>
              <h4>For Her</h4>
              <ul>
                <li>Women Jeans</li>
                <li>Tops and Shirts</li>
                <li>Women Jackets</li>
                <li>Heels and Flats</li>
                <li>Women Accessories</li>
              </ul>
            </Col>
            <Col sm={12} md={2}>
              <h4>For Him</h4>
              <ul>
                <li>Men Jeans</li>
                <li>Men Shirts</li>
                <li>Men Shoes</li>
                <li>Men Accessories</li>
                <li>Men Jackets</li>
              </ul>
            </Col>
            <Col sm={12} md={3}>
              <h4>Subscribe</h4>
              <input type="text" placeholder='Your email address...' className='p-2 subs-input' />
              <button className='text-xs subs-btn'>SUBSCRIBE</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>


  )
}

export default Page