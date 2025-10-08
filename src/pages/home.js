function homepage()
{
    const content = document.querySelector("#content");
    content.innerHTML=`<div class="slide">
            <h1>FOOD PICTURES!!!</h1>
            <div class="curr"><img src="../src/images/slide1.webp" alt="alt"></div>
            <button class="prev">➳</button>
            <button class="next">➳</button>
        </div>
        <h1>As of <script>document.write(new Date().toLocaleString('default', { month: 'long' }));document.write(" ");document.write(new Date().getFullYear());</script>: We are fully local</h1>
        <p>As of 2025, we have switched to local farms to source all our goods and we no longer use any industrially produced goods. We also donate 10% of our earnings every month to local charities that sponsor higher education for underprivileged students in San Diego and help uplift our tradional communities. You can also support here <a href ="https://www.sdef.org/donate" target="_blank" rel="noopener noreferrer">@DEF</a></p>
        <img src="../src/images/local.png" alt="100% local" class="local">
        <h1>Dinner Reservations!</h1>
        <p>We are open for dinner services Monday to Saturday! We only accept limited walks in's so please reserve a table. You can resere by clicking <button class ="reserve">here</button></p>
        <h1>Parking</h1>
        <p>We have limited parking available at our location. However there is a public parking space 2 minutes walk away! We sincerly await your arrival.</p>
        <h1>Business Hours</h1>
        <p>Monday-Thursday:5pm-11pm</p>
        <p>Friday,Saturday:5pm-1am</p>
        <p><strong>Closed: Sunday</strong></p>
        <p>Dine-in, takeout, and delivery (via DoorDash, GrubHub & UberEats) available</p>
        <div class="location">
            <h1>Location:</h1>
            <p>We are found at 9500 Gilman Dr #0422, La Jolla, CA 92093</p>
            <p>Here are directions to our location</p>
            <div class="loc">
                <div class="map">
                    <iframe width="500px" height="450px" allowfullscreen loading="lazy" referrerpolicy="no-referrer" src="https://www.google.com/maps/embed/v1/place?q=9500%20Gilman%20Dr%20%230422%2C%20La%20Jolla%2C%20CA%2092093&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                </div>
            </div>
        </div>
        <h1>Contact Us!</h1>
        <p><strong>Phone:</strong>+1 (858)214-6009 <strong>&nbsp;&nbsp;&nbsp;&nbsp;Email:</strong>prs016@ucsd.edu</p>
        <div class = "footer">
        <div class = "copyright">
            <div class = "copytext">
                Made with love by @Prakhar_Shah <script>document.write(new Date().getFullYear());</script> ©
            </div>
            <div class = "github">
                <a href="https://github.com/prs-016/library-app#" target="_blank" rel="noopener">
                    <img src="../src/images/github.png" , alt="github">
                </a>
            </div>
        </div>`;
    const body = document.querySelector("body");
    body.classList.remove(".about")
}

export default homepage;