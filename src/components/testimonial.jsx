import { Col, Row } from "react-bootstrap";
import "../style/testimonial.css";
import man2  from "../assets/image/testimonial/man2.jpg";
import man11 from "../assets/image/testimonial/man11.jpg";
import girl from "../assets/image/testimonial/girl.jpg";



export const Testimonial = () => {
  let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("testimonialSlider");
  let dots = document.getElementsByClassName("dot");

  // Check if slides and dots exist
  if (slides.length === 0 || dots.length === 0) {
    console.error("Slides or dots not found");
    return;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}    

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

  return (
    <>
      <div className="Testimonial-Container">
        <h2>Testimonials</h2>
        <div className="testimonial-container">
          <Row className="rows-center">
          <Col md={6} className="text-center">
              <h3 className="heading-color">What People Say About Us</h3>
                  <div className="testimonialSlider">
                    <div className="card">
                    <img src={man11} alt="imagge"/>
                    <h1>David</h1>
            
                     <p>To-Let is a game-changer for professionals like me relocating to new cities. I found a comfortable flat with ease, and the process was incredibly smooth.
              
                    </p>

                  </div>
                  </div>
                  <div className="testimonialSlider">
                    <div className="card">
                    <img src={girl} alt="imagge"/>
                    <h1>David</h1>
            
                     <p> To-Let is a game-changer for professionals like me relocating to new cities. I found a comfortable flat with ease, and the process was incredibly smooth.
                    </p>

                  </div>
                  </div>
                  <div className="testimonialSlider">
                    <div className="card">
                    <img src={man2} alt="imagge"/>
                    <h1>David</h1>
            
                     <p> To-Let is a game-changer for professionals like me relocating to new cities. I found a comfortable flat with ease, and the process was incredibly smooth.
                    </p>

                  </div>
                  </div>
                  <div >
                  <span class="dot"></span> 
                  <span class="dot"></span> 
                  <span class="dot"></span> 
  </div>
            </Col>
          </Row>
          
        </div>
      </div>
    </>
  );
};

