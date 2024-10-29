import React from 'react'

function Features() {
    return (
        <section className="app-features">
        <div className="image">
            <img src="src/assets/mobile3.svg" alt="app image"/>
            </div>
            <div className="container">
                <div className="mobile">  <img src="src/assets/mobile4.svg" alt="" /></div>
            <div className="features">
                <h2>App Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices.</p>
                
                <div className="feature-list">
                    <div className="feature-item">
                        <img src="src/assets/payment.svg" alt="" />
                        <h3>Easy Payments</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                    <div className="feature-item">
                        <img src="src/assets/data.svg" alt="" />
                        <h3>Data Security</h3>
                        <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                    </div>
                    <div className="feature-item">
                        <img src="src/assets/cost.svg" alt="" />
                        <h3>Cost Statistics</h3>
                        <p>Mattis urna ultricies non amet, purus in auctor non.</p>
                    </div>
                    <div className="feature-item">
                        <img src="src/assets/support.svg" alt="" />
                        <h3>Support 24/7</h3>
                        <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                    </div>
                    <div className="feature-item">
                        <img src="src/assets/cashback.svg" alt="" />
                        <h3>Regular Cashback</h3>
                        <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                    </div>
                    <div className="feature-item">
                        <img src="src/assets/standards.svg" alt="" />
                        <h3>Top Standards</h3>
                        <p>Faucibus cursus maecenas lorem cursus nibh. Sit facilisis dolor arcu.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export   default Features