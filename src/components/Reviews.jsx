import React from 'react'

function Reviews() {
    return (
        <section className="review-section">
        <h2>Clients are Loving Our App</h2>
        <div className="review-boxes">
            <div className="reviews">
                <div className="quote"><img src="src/assets/quotes.svg" alt="" /></div>
                <div className="stars">★★★★☆</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique sed voluptate nihil architecto vero praesentium nulla dolorum cum error ipsam in mollitia aspernatur quibusdam rem animi aliquid blanditiis, laudantium reprehenderit.</p>
                <div className="users">
                    <img src="src/assets/fannie.svg" alt="Fannie Summers"/>
                </div>
            </div>
        
            <div className="reviews">
                <div className="quote"><img src="src/assets/quotes.svg" alt="" /></div>
                <div className="stars">★★★★☆</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique sed voluptate nihil architecto vero praesentium nulla dolorum cum error ipsam in mollitia aspernatur quibusdam rem animi aliquid blanditiis, laudantium reprehenderit.</p>
                <div className="users">
                    <img src="src/assets/albert.svg" alt="Albert Flores"/>
                </div>
            </div>
        </div>
    </section>
)
}

export default Reviews