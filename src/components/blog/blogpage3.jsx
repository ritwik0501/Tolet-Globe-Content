import "../../style/blog/blogpage.css"

// import image7 from '../../assets/image/blogpage/7.png';
import image1 from '../../assets/image/blog/blog3/image1.jpg'
import image2 from '../../assets/image/blog/blog3/image2.jpg'

export const BlogPage3 = () => {
    return (
        <section className="blog">
            <div className="blodtext">
                <div className="time">
                    <h4 className="date">18 Nov, 2023 |</h4>
                    <h4 className="news">News & Events</h4>
                </div>
                <div className="blogheading">
                    <h1>PGs vs. Rental Flats: Making the Right Choice in Lucknow</h1>
                </div>
                <div className="about">
                    <img src={image1} alt="img"/>
                    <div className="aboutname">
                        <h5 className="name">Raunak Deep Srivastava</h5>
                        <p className="designation">Full Stack Developer</p>
                    </div>
                </div>
                <div className="like">
                    <div className="seen">
                        <span><i className="fa-solid fa-eye"></i> 57</span>&nbsp;&nbsp;
                        <span><i className="fa-regular fa-heart"></i> 42</span>
                    </div>
                    <div className="read">10 min read</div>
                </div>
                <div className="hashtags">
                    <p>#BrandCollab2023</p>
                    <p>#InnovateTogether</p>
                </div>
                <div className="text">
                    <p>In Lucknow, as in many cities, individuals seeking accommodation are often faced with the decision between staying in a paying guest (PG) accommodation or renting a flat. Both options have their own set of advantages and disadvantages, and making the right choice depends on various factors including budget, lifestyle preferences, and personal circumstances. In this blog, we'll delve into the key considerations to help you make an informed decision between PGs and rental flats in Lucknow. </p>
                </div>
                <div className="blogimg">
                    <img src={image1} alt="img" />
                </div>
                <div className="subtext mt-3">
                    <h4>Cost:</h4>
                    <p>One of the primary factors influencing the choice between PGs and rental flats is cost. PG accommodations typically offer more affordable options compared to renting a flat. This is because in a PG, you're sharing the living space and amenities with other residents, which helps in splitting the overall cost. However, rental flats provide more privacy and autonomy, which might justify the higher cost for some individuals. </p>
                   <h4>Privacy and Independence:</h4>
                   <p>PG accommodations are characterized by shared living spaces, including common areas, kitchens, and sometimes bathrooms. While this fosters a sense of community and can be conducive to social interactions, it may lack the privacy and independence that renting a flat affords. Renting a flat provides tenants with exclusive use of the entire space, offering greater control over their living environment and lifestyle.</p>
                   <h4>Amenities and Facilities:</h4>
                   <p>Another aspect to consider is the amenities and facilities provided. PG accommodations often come with basic amenities such as Wi-Fi, housekeeping, and sometimes meals, making them convenient for those looking for a hassle-free living experience. On the other hand, rental flats may offer more spacious accommodations and the flexibility to furnish and customize the space according to personal preferences.</p>
                   <h4>Location and Accessibility:</h4>
                   <p>The location of the accommodation is crucial in determining convenience and accessibility to essential services and amenities. PGs are often located in residential areas or near educational institutions, making them ideal for students or young professionals. Rental flats, depending on the budget and preference, can be found in various neighbourhoods across Lucknow, offering a wider range of options in terms of location and proximity to workplaces, schools, and recreational facilities.</p>
                   <h4>Flexibility and Lease Terms:</h4>
                   <p>When it comes to flexibility, PG accommodations typically offer shorter lease terms and greater flexibility in terms of moving in and out. This can be advantageous for individuals with uncertain or changing plans, such as students or professionals on short-term assignments. Rental flats, on the other hand, may require longer lease commitments and stricter terms, which could be less suitable for those seeking more flexibility.</p>
                   <h4>Conclusion:</h4>
                    <p>Ultimately, the decision between staying in a PG accommodation or renting a flat in Lucknow boils down to individual preferences, priorities, and circumstances. While PGs offer affordability, convenience, and social opportunities, rental flats provide privacy, autonomy, and customization options. By carefully considering factors such as cost, privacy, amenities, location, and flexibility, you can make an informed choice that aligns with your needs and lifestyle.</p>
                    <h1>THE ROLE OF TO-LET GLOBE IN HELPING THE TENANTS TO CHOOSE THE BEST PG’S VS RENTAL FLATS</h1>
                    <h4>Brokerage-Free Service:</h4>
                    <p>To-Let Globe operates on a no-brokerage model, which means tenants do not have to pay any brokerage fees when renting properties through their platform.
By removing the brokerage element, To-Let Globe aims to make the rental process more affordable and transparent for tenants, allowing them to save on upfront costs.
</p>            
                <div className="blogimg">
                    <img src={image2} alt="img" />
                </div>

            
                    <h4 className="mt-2">Extensive Property Listings:</h4>
                    <p>To-Let Globe maintains an extensive database of rental properties, including PG accommodations and flats, available across various neighbourhoods in Lucknow.
Tenants can access a wide range of listings on the To-Let Globe platform, allowing them to compare different options based on factors such as location, amenities, rent, and occupancy type.
 </p>

                <h3>User-Friendly Search Filters:</h3>
                <p>The To-Let Globe website or app typically features user-friendly search filters that allow tenants to narrow down their options based on specific criteria, such as budget, preferred location, number of rooms, and required amenities.
These search filters help tenants quickly find properties that meet their preferences and requirements, saving them time and effort in the property search process.
</p>
                    <div className="hashtag-div">
                        <h2>#BestProperty</h2>
                        <h2>#NoBrokerage</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};
