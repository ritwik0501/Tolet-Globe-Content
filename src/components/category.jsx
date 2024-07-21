import "../style/category.css"
import { Col, Container, Row } from 'react-bootstrap';

import Rectangle1 from '../assets/image/blog/blogimage/Rectangle1.png';
import Rectangle2 from '../assets/image/blog/blogimage/Rectangle2.png';
import Rectangle3 from '../assets/image/blog/blogimage/Rectangle3.png';
import Rectangle4 from '../assets/image/blog/blogimage/Rectangle4.png';
import Rectangle5 from '../assets/image/blog/blogimage/Rectangle5.png';
import Rectangle6 from '../assets/image/blog/blogimage/Rectangle6.png';


export const Category =() =>{
    return(
        <Container className='category'>
            <div className="column">
                <h5>Categories</h5>
            </div>
            <Row xs={1} sm={2} lg={3}>
                <Col>
                    <img src={Rectangle5} alt="img" width="300px" className="img" />
                    <div className="block"><a href="/blog" className="column-header">News & Events</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                </Col>
                <Col>
                    <img src={Rectangle4} alt="img" width="300px" className="img" />
                    <div className="block"><a href="/blog" className="column-header">Feature Updates</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                </Col>
                <Col>
                    <img src={Rectangle1} alt="img" width="300px" className="img" />
                    <div className="block"><a href="/blog" className="column-header">Brand Collaboration</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                </Col>
                <Col>
                    <img src={Rectangle2} alt="img" width="300px" className="img" />
                    <div className="block"><a href="/blog" className="column-header">Life at To-Let</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                </Col>
                <Col>
                    <img src={Rectangle6} alt="img" width="300px" className="img" />
                    <div className="block"><a href="/blog" className="column-header">Internship Campaigns</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                </Col>
                <Col>
                    <img src={Rectangle3} alt="img" width="300px" className="img" />
                    <div className="block"><a href="/blog" className="column-header">Giveway & Offers</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                </Col>
            </Row>

         </Container>
    )
}