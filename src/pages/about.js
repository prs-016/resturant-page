function aboutpage()
{
    const content = document.querySelector("#content");
    content.innerHTML=`<div class = "container">
            <h1>Where French tradition meets modern elegance.</h1>
            <div class="about-content">
                <h2>Our Story</h2>
                <p>
                    Established in the heart of Paris and reborn globally, <span>Bon Appétit</span> is a celebration of French cuisine and culture.
                    From the rich sauces of Burgundy to the delicate pastries of Provence, every dish is crafted to honor centuries of tradition —
                    with a touch of contemporary artistry.
                </p>
            </div>

            <div class="chef-card">
                <div class="chef-info">
                    <h2>Chef Lucien Moreau</h2>
                    <p>
                    Trained at Le Cordon Bleu, Chef Lucien brings over two decades of experience from Michelin-starred restaurants.
                    His signature dishes blend traditional French flavors with subtle modern twists, embodying the soul of <strong>Bon Appétit</strong>.
                    </p>
                </div>
            </div>

        
            <div class="mission">
                <p>“At Bon Appétit, dining is not just a meal — it’s an art form”</p>
            </div>
        </div>`;
    const body = document.querySelector("body");
    body.classList.add(".about")
    
}

export default aboutpage;