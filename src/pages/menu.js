function menupage()
{
    const content = document.querySelector("#content");
    content.innerHTML=`<h1 class="heading">Notre Menu</h1>
        <div class="menu-container">
      
      
      <div class="menu-card">
        <h2>Entrees</h2>
        <ul>
          <li><span>Soupe à l’Oignon</span> — Classic French onion soup with melted Gruyère.</li>
          <li><span>Escargots de Bourgogne</span> — Snails baked in garlic-parsley butter.</li>
          <li><span>Pâté de Campagne</span> — Rustic country-style meat pâté.</li>
        </ul>
      </div>

      
      <div class="menu-card">
        <h2>Plats Principaux</h2>
        <ul>
          <li><span>Coq au Vin</span> — Chicken slow-cooked in Burgundy wine with lardons and onions.</li>
          <li><span>Ratatouille</span> — Provençal vegetable medley in tomato sauce.</li>
          <li><span>Canard à l’Orange</span> — Roast duck with orange glaze.</li>
        </ul>
      </div>

      
      <div class="menu-card">
        <h2>Desserts</h2>
        <ul>
          <li><span>Crème Brûlée</span> — Vanilla custard with a caramelized sugar crust.</li>
          <li><span>Tarte Tatin</span> — Caramelized upside-down apple tart.</li>
          <li><span>Mousse au Chocolat</span> — Rich dark chocolate mousse.</li>
        </ul>
      </div>

    
      <div class="menu-card">
        <h2>Boissons</h2>
        <ul>
          <li><span>Vin Rouge</span> — French red wine, full-bodied and aromatic.</li>
          <li><span>Champagne</span> — Classic sparkling wine from Reims.</li>
          <li><span>Évian</span> — Still mineral water from the French Alps.</li>
        </ul>
      </div>`;

    const body = document.querySelector("body");
    body.classList.remove(".about")
}

export default menupage;