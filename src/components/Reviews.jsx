import React from 'react'

function Reviews() {
    return (
        <section class="review-section">
        <h2>Clients are Loving Our App</h2>
        <div class="review-boxes">
            <div class="reviews">
                <div class="quote"><img src="src/assets/quotes.svg" alt="" /></div>
                <div class="stars">★★★★☆</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique sed voluptate nihil architecto vero praesentium nulla dolorum cum error ipsam in mollitia aspernatur quibusdam rem animi aliquid blanditiis, laudantium reprehenderit.</p>
                <div class="users">
                    <img src="src/assets/fannie.svg" alt="Fannie Summers"/>
                </div>
            </div>
        
            <div class="reviews">
                <div class="quote"><img src="src/assets/quotes.svg" alt="" /></div>
                <div class="stars">★★★★☆</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique sed voluptate nihil architecto vero praesentium nulla dolorum cum error ipsam in mollitia aspernatur quibusdam rem animi aliquid blanditiis, laudantium reprehenderit.</p>
                <div class="users">
                    <img src="src/assets/albert.svg" alt="Albert Flores"/>
                </div>
            </div>
        </div>
    </section>
)
}

export default Reviews