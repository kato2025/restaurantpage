/*Imoport images and styles*/
import './styles.css'; 
import image1 from './images/kwakoko.png';
import image2 from './images/koki.png';
import image3 from './images/pcoco.png';
import image4 from './images/egussisoup.png';
import image5 from './images/ndoh.png';
import image6 from './images/ekwang.png';

/*Create home page*/
export function createHomePage() {
  const content = document.getElementById('content');
  /*Create home page content to be displayed in index.html content div*/
  content.innerHTML = `
    <div class="restaurantDetails">
      <h1 id="mainHeading">Sumptuous African Cuisines</h1> 
      <div class="headingline">────────── 💖･ᴗ･💖 ─────────</div>
      <p id="intro">Welcome to NamueneTec Foods, where amazing food meets cozy vibes. Explore a menu full of tasty dishes, carefully crafted by our skilled chefs. Whether you love classics or crave something new, we've got you covered. Join us for a delightful dining experience that celebrates great food and good times.</p>
      <div class="foodsSold">
        <div class="foods">
          <img src="${image1}" alt="Kwakoko">
          <div class="foodDescription">
            <p class="foodHeading">Kwakoko</p>
            <div class="foodline">─⋆⋅💖⋅⋆─</div>
            <p class="foodDetails">Kwakoko is prepared from grated cocoyam mixed with vegetable, palm oil, spices, crayfish, fish, meat or both, wrapped in plantain leaves.</p>
          </div>
        </div>
        <div class="foods">
          <img src="${image2}" alt="Koki">
          <div class="foodDescription">
            <p class="foodHeading">Koki</p>
            <div class="foodline">─⋆⋅💖⋅⋆─</div>
            <p class="foodDetails">Koki a traditional African dish, is prepared from grounded peeled white-eyed beans combined with palm oil, spices, and fresh leafy vegetables.</p>
          </div>
        </div>
        <div class="foods">
          <img src="${image3}" alt="Puridge coco">
          <div class="foodDescription">
            <p class="foodHeading">Puridge Coco</p>
            <div class="foodline">─⋆⋅💖⋅⋆─</div>
            <p class="foodDetails">Puridge Coco is prepared from peeled boiled cocoyams, combined with palm oil, spices, vegetables, fish, meat or both, creating a porridge.</p>
          </div>
        </div>
        <div class="foods">
          <img src="${image4}" alt="Egussi soup">
          <div class="foodDescription">
            <p class="foodHeading">Egussi Soup</p>
            <div class="foodline">─⋆⋅💖⋅⋆─</div>
            <p class="foodDetails">Egusi Soup is prepared using ground melon seeds, spices, palm oil, meat, fish or both, resulting in a flavorful nutritious aromatic soup.</p>
          </div>
        </div>
        <div class="foods">
          <img src="${image5}" alt="Ndoh Bitterleaf">
          <div class="foodDescription">
            <p class="foodHeading">Ndoh</p>
            <div class="foodline">─⋆⋅💖⋅⋆─</div>
            <p class="foodDetails">Ndoh bitterleaf vegetable is prepared using the leaves of the bitterleaf plant, spices, crayfish, red palm oil, smoked meat, fish or both.</p>
          </div>
        </div>
        <div class="foods">
          <img src="${image6}" alt="Ekwang">
          <div class="foodDescription">
            <p class="foodHeading">Ekwang</p>
            <div class="foodline">─⋆⋅💖⋅⋆─</div>
            <p class="foodDetails">Ekwang is prepared from grated cocoyam mixed with palm oil, spices, and sometimes crayfish, wrapped in cocoyam leaves, forming little parcels.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
