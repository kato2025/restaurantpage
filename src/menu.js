/* Import images and styles */
import './styles.css'; 
import image1 from './images/myondo.png';
import image2 from './images/cocwithpear.png';
import image3 from './images/ondoh.png';
import image4 from './images/okongobong.png';
import image5 from './images/guava.png';
import image6 from './images/soursop.png';

/*Create menu page*/
export function createMenuPage() {
  const content = document.getElementById('content');
  /*Create menu page content to be displayed in index.html content div*/
  content.innerHTML = `
  <div class="menuDetails">
      <h1 id="mainHeading">You Can Eat These African Vuisines Today</h1>
      <div class="headingline">──────────────── 💖･ᴗ･💖 ───────────────</div>
      <p id="mIntro">We also bring food to homes and offices.</p>
      <div class="foodsAvailable">
        <div class="mfoods">
          <img src="${image1}" alt="Myondo">
          <div class="foodDescription">
            <p class="foodHeading">Myondo (5500FCFA)</p>
            <div class="foodline">────── ⋆⋅💖⋅⋆ ─────</div>
            <p class="foodDetails">🍒 With fruits; <br> 🧇 With Egussi puding; <br> 🥦 With vegetables; <br> 🍯 With spiced sauce; <br> 🌶️ Red peper available.</p>
          </div>
        </div>
        <div class="mfoods">
          <img src="${image2}" alt="Puridge Coco">
          <div class="foodDescription">
            <p class="foodHeading">Puridge Coco (5000FCFA)</p>
            <div class="foodline">────── ⋆⋅💖⋅⋆ ─────</div>
            <p class="foodDetails">🥑 With Avocado <br> 🍒 With fruits; <br> 🥦 With vegetables; <br> 🍲 With Ndoh; <br> 🌶️ Red peper available.</p>
          </div>
        </div>
        <div class="mfoods">
          <img src="${image3}" alt="Ndoh">
          <div class="foodDescription">
            <p class="foodHeading">Ndoh (6000FCFA)</p>
            <div class="foodline">────── ⋆⋅💖⋅⋆ ─────</div>
            <p class="foodDetails">🥔 With okani; <br> 🍌 With plantains; <br> 🌾 With rive; <br> 🥑 With Avocado <br> 🌶️ Red peper available.</p>
          </div>
        </div>
        <div class="mfoods">
          <img src="${image4}" alt="Okongobong">
          <div class="foodDescription">
            <p class="foodHeading">Okongobong (6000FCFA)</p>
            <div class="foodline">────── ⋆⋅💖⋅⋆ ─────</div>
            <p class="foodDetails">🍌 With plantains; <br> 🥔 With okani cocoyams; <br> 🌾 With rive; <br> 🥑 With Avocado <br> 🌶️ Red peper available.</p>
          </div>
        </div>
        <div class="mfoods">
          <img src="${image5}" alt="Guava">
          <div class="foodDescription">
            <p class="foodHeading">Guava (1500FCFA)</p>
            <div class="foodline">────── ⋆⋅💖⋅⋆ ─────</div>
            <p class="foodDetails">🥛 Serve as fruit juice; <br> 🍧 Served as smoothy; <br> 🍿 Served as snac; <br> ☕️ Served as tea</p>
          </div>
        </div>
        <div class="mfoods">
          <img src="${image6}" alt="Soursop">
          <div class="foodDescription">
            <p class="foodHeading">Soursop (1500FCFA)</p>
            <div class="foodline">────── ⋆⋅💖⋅⋆ ─────</div>
            <p class="foodDetails">🥛 Serve as fruit juice; <br> 🍧 Served as smoothy; <br> 🍿 Served as snac; <br> ☕️ Served as tea</p>
          </div>
        </div>
       </div> 
    </div>
  `;
}
