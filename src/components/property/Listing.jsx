/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from "react-router-dom";
import './../../style/property/listing.css';
import {CiShare2, CiHeart} from 'react-icons/ci';
import {FaImage, FaLocationDot, FaRegImage, FaVideo} from 'react-icons/fa6';
import {IoBedOutline, IoAdd} from 'react-icons/io5';
import {LuBath} from 'react-icons/lu';
import {PiGridFour} from 'react-icons/pi';
import p1 from '../../assets/image/property/property-1.jpg'
import author from "../../assets/image/property/author.jpg"
import p2 from '../../assets/image/property/property-2.jpg'
import p3 from '../../assets/image/property/property-3.jpg'
import p4 from '../../assets/image/property/property-4.png'
import p5 from '../../assets/image/property/property-5.jpg'
import p6 from '../../assets/image/property/property-6.jpg'
import p7 from '../../assets/image/property/property-7.jpg'
import p8 from '../../assets/image/property/property-8.jpg'
import a3 from '../../assets/image/property/author3.jpg'
import a2 from '../../assets/image/property/author2.jpg'
import a4 from '../../assets/image/property/author4.jpg'
import a5 from '../../assets/image/property/author5.jpg'
import a6 from '../../assets/image/property/author6.jpg'
import a7 from '../../assets/image/property/author7.jpg'
import a8 from '../../assets/image/property/author8.jpg'
// import { Footer } from '../footer';
const Listing = () => {
  //const navigate = useNavigate();
  return (
    <>
     
      <section className="property" id="property">

        <div className="container">

          <p className="section-subtitle">Properties listing 205</p>

          <ul className="property-list has-scrollbar">

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p1} alt="New Apartment Nice View" style={{w:"100"}} />
                  </a>
                
                  <div className="card-badge-right orange">For Rent</div>
                  <div className="card-badge-left green">Featured</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <FaLocationDot className='bed-bath-ft-icon' size={22}/>
                      &nbsp;
                      <address>D 801 the woods apartment, Lucknow </address>
                    </button>

                    <button className="banner-img_video-btn">
                      <FaVideo className='bed-bath-ft-icon' size={22}/>
                    </button>
                    <button className="banner-img_video-btn">
                      <FaRegImage className='bed-bath-ft-icon' size={22}/>
                      6
                    </button>

                  </div>

                </figure>

                <div className="card-content">
                  <div className='name_icon'>
                  <h3 className="h3 card-title">
                  <a href="#"> Flat For Rent</a>
                  
                  <div className="card-price">
                  Rs. 12,000 (negotiable)
                  </div>
                  </h3>

                  <div className='card_icons'>
                  <a href='#'>
                  <CiShare2 className='card_icon' size={22}/>
                  </a>
                  <a href='#'>
                  <IoAdd className='card_icon' size={22}/>
                  </a>
                  <a href='#'>
                  <CiHeart className='card_icon' size={22}/>
                  </a>
                  </div>
                  </div>
                  <p className="card-text">
                    Semi Furnished, 4th floor  <br/>
                    
                  </p>

                  <ul className="card-list">  
                    <li className="card-item">
                    <IoBedOutline className='bed-bath-ft-icon' size={25}/>
                    &nbsp;
                    2
                    </li>

                    <li className="card-item">
                    <LuBath className='bed-bath-ft-icon' size={25}/>
                    &nbsp;
                      Both
                    </li>

                    <li className="card-item">
                      <PiGridFour className='bed-bath-ft-icon' size={25}/>
                      &nbsp;
                      1358 ft<sup>2</sup>
                    </li>

                  </ul>

                </div>
                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={author} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Deepti rastogi</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn" /*onClick={() => navigate("/flow2a1")}*/ >
                      SHOW MORE
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p2} alt="Modern Apartments" style={{w:"100"}} />
                  </a>

                  <div className="card-badge-right orange">For Rent</div>
                  <div className="card-badge-left green">Featured</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                    <FaLocationDot className='bed-bath-ft-icon' size={22}/>

                      <address>Munshipulia opposite Ishwar Dham Mandir, Lucknow</address>
                    </button>
                    <button className="banner-img_video-btn">
                      <FaVideo className='bed-bath-ft-icon' size={22}/>
                    </button>
                    <button className="banner-img_video-btn">
                      <FaRegImage className='bed-bath-ft-icon' size={22}/>
                      6
                    </button>

                  </div>

                </figure>

                <div className="card-content">
                  <div className='name_icon'>
                  <h3 className="h3 card-title">
                    <a href="#">House for rent</a>
                
                  <div className="card-price">
                    Rs. 10,000/Month
                  </div>
                  </h3>
                  <div className='card_icons'>
                  <a href='#'>
                  <CiShare2 className='card_icon' size={22}/>
                  </a>
                  <a href='#'>
                  <IoAdd className='card_icon' size={22}/>
                  </a>
                  <a href='#'>
                  <CiHeart className='card_icon' size={22}/>
                  </a>
                  </div>
                  </div>

                  <p className="card-text">
                  Semi Furnished, Ground floor
                  </p>

                  <ul className="card-list">
                  <li className="card-item">
                    <IoBedOutline className='bed-bath-ft-icon' size={25}/>
                     &nbsp;
                       2
                    </li>

                    <li className="card-item">
                    <LuBath className='bed-bath-ft-icon' size={25}/>
                    &nbsp;
                      3
                    </li>

                    <li className="card-item">
                      <PiGridFour className='bed-bath-ft-icon' size={25}/>
                      &nbsp;
                      1358 ft<sup>2</sup>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a2} alt="William Seklo" style={{w:"100"}} />
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Vindhya Vikram</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn" /*onClick={() => navigate("/flow2a2")}*/>
                      SHOW MORE
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p3} alt="Comfortable Apartment" style={{w:"100"}}/>
                  </a>

                  <div className="card-badge-right orange">For Rent</div>
                  <div className="card-badge-left green">Featured</div>
                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                    <FaLocationDot className='bed-bath-ft-icon' size={22}/>
                      <address>Chinnat sarik road, Lucknow</address>
                    </button>
                    <button className="banner-img_video-btn">
                      <FaVideo className='bed-bath-ft-icon' size={22}/>
                    </button>
                    <button className="banner-img_video-btn">
                      <FaRegImage className='bed-bath-ft-icon' size={22}/>
                      6
                    </button>
                  </div>

                </figure>

                <div className="card-content">
                <div className='name_icon'>
                <h3 className="h3 card-title">
                    <a href="#">House For Rent </a>

                  <div className="card-price">
                  Rs. 14,000/Month
                  </div>
                  </h3>
                  <div className='card_icons'>
                  <a href='#'>
                  <CiShare2 className='card_icon' size={22}/>
                  </a>
                  <a href='#'>
                  <IoAdd className='card_icon' size={22}/>
                  </a>
                  <a href='#'>
                  <CiHeart className='card_icon' size={22}/>
                  </a>
                  
                  </div>
                  </div>

                  <p className="card-text">
                  Semi Furnished, Ground floor
                  </p>

                  <ul className="card-list">

                  <li className="card-item">
                    <IoBedOutline className='bed-bath-ft-icon' size={25}/>
                     &nbsp;
                       2
                    </li>

                    <li className="card-item">
                    <LuBath className='bed-bath-ft-icon' size={25}/>
                    &nbsp;
                      Both
                    </li>

                    <li className="card-item">
                      <PiGridFour className='bed-bath-ft-icon' size={25}/>
                      &nbsp;
                      1358 ft<sup>2</sup>
                    </li>
                    </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a3} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Rajesh kumar</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn" /*onClick={() => navigate("/flow2a3")}*/>
                      SHOW MORE
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>
                    </div>
                </div>
            </li>
                      
            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p4} alt="Luxury villa in Rego Park" style={{w:"100"}}/>
                  </a>
                  <div className="card-badge-right orange">For Rent</div>
                  <div className="card-badge-left green">Featured</div>
                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                    <FaLocationDot className='bed-bath-ft-icon' size={22}/>
                      <address>Keshav Nagar, Lucknow</address>
                    </button>

                    <button className="banner-img_video-btn">
                      <FaVideo className='bed-bath-ft-icon' size={22}/>
                    </button>
                    <button className="banner-img_video-btn">
                      <FaRegImage className='bed-bath-ft-icon' size={22}/>
                      6
                    </button>
                  </div>

                </figure>

                <div className="card-content">
                  <div className='name_icon'>
                <h3 className="h3 card-title">
                    <a href="#">House For Rent</a>
                  <div className="card-price">
                   Rs. 8,500
                  </div>
                  </h3>
                  <div className='card_icons'>
                  <a href='#'>
                  <CiShare2 className='card_icon' size={22}/>
                  </a>
                  <a href='#'>
                  <IoAdd className='card_icon' size={22}/>
                  </a>
                  <a href='#'>
                  <CiHeart className='card_icon' size={22}/>
                  </a>
                  </div>
                  </div>

                  <p className="card-text">
                  Semi Furnished, Ground
                  </p>

                  <ul className="card-list">
 
                  <li className="card-item">
                    <IoBedOutline className='bed-bath-ft-icon' size={25}/>
                     &nbsp;
                       2
                    </li>

                    <li className="card-item">
                    <LuBath className='bed-bath-ft-icon' size={25}/>
                    &nbsp;
                      Both
                    </li>

                    <li className="card-item">
                      <PiGridFour className='bed-bath-ft-icon' size={25}/>
                      &nbsp;
                      1358 ft<sup>2</sup>
                    </li>
                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a4} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Aman Saxena</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn" /*onClick={() => navigate("/flow2a4")}*/>
                      SHOW MORE
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
    


      <section className="property" id="property">
        <div className="container">

          <p className="section-subtitle">Properties listing 205</p>

          <ul className="property-list has-scrollbar">

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p5} alt="New Apartment Nice View" style={{w:"100"}}/>
                  </a>
                
                  
                  <div className="card-badge-right orange">For Rent</div>
                  <div className="card-badge-left green">Featured</div>
                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                    <FaLocationDot className='bed-bath-ft-icon' size={22}/>
                      <address>Chinhat Satrik Road, Lucknow</address>
                    </button>

                    <button className="banner-img_video-btn">
                      <FaVideo className='bed-bath-ft-icon' size={22}/>
                    </button>
                    <button className="banner-img_video-btn">
                      <FaRegImage className='bed-bath-ft-icon' size={22}/>
                      6
                    </button>
                  </div>

                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="#"> Flat For Sale</a>
                  </h3>
                  <div className="card-price">
                    Rs. 30,50,000
                  </div>

                  <p className="card-text">
                    Semi Furnished, 4th Floor
                  </p>

                  <ul className="card-list">

                  <li className="card-item">
                    <IoBedOutline className='bed-bath-ft-icon' size={25}/>
                     &nbsp;
                       2
                    </li>

                    <li className="card-item">
                    <LuBath className='bed-bath-ft-icon' size={25}/>
                    &nbsp;
                      Both
                    </li>

                    <li className="card-item">
                      <PiGridFour className='bed-bath-ft-icon' size={25}/>
                      &nbsp;
                      1358 ft<sup>2</sup>
                    </li>
                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a5} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Gupta property</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn" /*onClick={() => navigate("/flow2a5")}*/>
                    SHOW MORE
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p6} alt="Modern Apartments" style={{w:"100"}}/>
                  </a>

                  
                  <div className="card-badge-right orange">For Rent</div>
                  <div className="card-badge-left green">Featured</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <FaLocationDot className='bed-bath-ft-icon' size={22}/>
                      <address>Sarojini Nagar Kanpur highway and Bijnor road  ,Lucknow</address>
                    </button>

                    <button className="banner-img_video-btn">
                      <FaVideo className='bed-bath-ft-icon' size={22}/>
                    </button>
                    <button className="banner-img_video-btn">
                      <FaRegImage className='bed-bath-ft-icon' size={22}/>
                      6
                    </button>
                  </div>

                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    <a href="#">House For Rent</a>
                 </h3>
                  <div className="card-price">
                    Rs. 2,20,000
                  </div>

                  <p className="card-text">
                    Semi Furnished, 2nd Floor
                  </p>

                  <ul className="card-list">

                  <li className="card-item">
                    <IoBedOutline className='bed-bath-ft-icon' size={25}/>
                     &nbsp;
                       2
                    </li>

                    <li className="card-item">
                    <LuBath className='bed-bath-ft-icon' size={25}/>
                    &nbsp;
                      Both
                    </li>

                    <li className="card-item">
                      <PiGridFour className='bed-bath-ft-icon' size={25}/>
                      &nbsp;
                      1358 ft<sup>2</sup>
                    </li>               
                    </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a6} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Anurag</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn" /*onClick={() => navigate("/flow2a6")}*/>
                    SHOW MORE
                    </button>

                    {/*button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p7} alt="Comfortable Apartment" style={{w:"100"}}/>
                  </a>

                  
                  <div className="card-badge-right orange">For Rent</div>
                  <div className="card-badge-left green">Featured</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                    <FaLocationDot className='bed-bath-ft-icon' size={22}/>
                      <address>Panchmukhi Mandir, Alambagh</address>
                    </button>

                    <button className="banner-img_video-btn">
                      <FaVideo className='bed-bath-ft-icon' size={22}/>
                    </button>
                    <button className="banner-img_video-btn">
                      <FaRegImage className='bed-bath-ft-icon' size={22}/>
                      6
                    </button>
                  </div>

                </figure>

                <div className="card-content">
                <h3 className="h3 card-title">
                    <a href="#"> House For Rent </a>
                  </h3>

                  <div className="card-price">
                    Rs. 4,500/Month
                  </div>

                  

                  <p className="card-text">
                    Semi Furnished, 2nd Floor
                  </p>

                  <ul className="card-list">

                  <li className="card-item">
                    <IoBedOutline className='bed-bath-ft-icon' size={25}/>
                     &nbsp;
                       2
                    </li>

                    <li className="card-item">
                    <LuBath className='bed-bath-ft-icon' size={25}/>
                    &nbsp;
                      Both
                    </li>

                    <li className="card-item">
                      <PiGridFour className='bed-bath-ft-icon' size={25}/>
                      &nbsp;
                      1358 ft<sup>2</sup>
                    </li>

                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a7} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Sanjeev</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn"/* onClick={() => navigate("/flow2a7")}*/>
                    SHOW MORE
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={p8} alt="Luxury villa in Rego Park" style={{w:"100"}}/>
                  </a>

                  
                  <div className="card-badge-right orange">For Rent</div>
                  <div className="card-badge-left green">Featured</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                    <FaLocationDot className='bed-bath-ft-icon' size={22}/>
                      <address>Pinkcity Colony, Lucknow</address>
                    </button>

                    <button className="banner-img_video-btn">
                      <FaVideo className='bed-bath-ft-icon' size={22}/>
                    </button>
                    <button className="banner-img_video-btn">
                      <FaRegImage className='bed-bath-ft-icon' size={22}/>
                      6
                    </button>
                  </div>

                </figure>

                <div className="card-content">
                <h3 className="h3 card-title">
                    <a href="#">Shop For Rent</a>
                  </h3>

                  <div className="card-price">
                   Rs. 3,500
                  </div>

                  

                  <p className="card-text">
                    Non Furnished, Ground Floor
                  </p>

                  <ul className="card-list">

                  <li className="card-item">
                    <IoBedOutline className='bed-bath-ft-icon' size={25}/>
                     &nbsp;
                       2
                    </li>

                    <li className="card-item">
                    <LuBath className='bed-bath-ft-icon' size={25}/>
                    &nbsp;
                      Both
                    </li>

                    <li className="card-item">
                      <PiGridFour className='bed-bath-ft-icon' size={25}/>
                      &nbsp;
                      1358 ft<sup>2</sup>
                    </li>
                  </ul>

                </div>

                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src={a8} alt="William Seklo" style={{w:"100"}}/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">Devendra Kumar</a>
                      </p>

                      <p className="author-title"></p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn" /*onClick={() => navigate("/flow2a8")}*/>
                    SHOW MORE
                    </button>

                    {/*<button className="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>*/}

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </>
  )
}

export default Listing;