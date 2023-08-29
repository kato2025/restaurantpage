/* Import styles */
import './styles.css'; 

/*Create contact page*/
export function createContactPage() {
  const content = document.getElementById('content');
  const orderForm = document.createElement("form");
  orderForm.id = "order-form";
  /*Create contact page content to be displayed in index.html content div*/
  content.innerHTML = `
  <h1 id="cMainHeading">Place Your Order 🍟</h1>
  <div class="headingline">─────── 💖･ᴗ･💖 ───────</div>
  <form id="orderForm" action="mailto:kato.namuene@ubuea.cm" method="post" enctype="text/plain">
  <div class="formGroup">
    <label for="fullName">Name:</label>
    <input type="text" id="fullName" name="Full Name" required>
  </div>
  <div class="formGroup">
    <label for="email">Email:</label>
    <input type="email" id="email" name="Email" required>
  </div>
  <div class="formGroup">
    <label for="foodChoice">Food:</label>
    <select id="foodChoice" name="Food ordered" required>
      <option value="choice" disabled selected>Choose food</option>
      <option value="Kwakoko">Kwakoko</option>
      <option value="Ekwang">Ekwang</option>
      <option value="Egussi soup">Egussi soup</option>
      <option value="Koki">Koki</option>
      <option value="Myondo">Myondo</option>
      <option value="Ndoh">Ndoh</option>
      <option value="Okongobong">Okongobong</option>
      <option value="Puridge coco">Puridge coco</option>
      <option value="Soursop">Soursop</option>
      <option value="Guava">Guava</option>
    </select>
  </div>
  <div class="formGroup">
    <label for="accompanyingFood">With:</label>
    <select id="accompanyingFood" name="Accompanying food">
      <option value="choice" disabled selected>Choose food</option>
      <option value="Vegetables">Vegetables</option>
      <option value="Plantain">Plantain</option>
      <option value="Okani coco">Okani coco</option>
      <option value="Cocoyam">Cocoyam</option>
      <option value="Sweet potato">Sweet potato</option>
      <option value="Avocado">Avocado</option>
      <option value="Banana">Banana</option>
      <option value="Irish potatoes">Irish potatoes</option>
      <option value="Yam">Yam</option>
      <option value="Cassava">Cassava</option>
      <option value="Garri">Garri</option>
      <option value="Fufu">Fufu</option>
    </select>
  </div>
  <div class="formGroup">
    <label for="delivery">Delivery:</label>
    <select id="delivery" name="delivery">
      <option value="choice" disabled selected>Choose delivery</option>
      <option value="Eat at restaurant">Eat at restaurant</option>
      <option value="Home delivery">Home delivery</option>
      <option value="Office delivery">Office delivery</option>
      <option value="Home and office delivery">Home and office delivery</option>
      <option value="Sweet potato">Sweet potato</option>
      <option value="Mobile food pack">Mobile food pack</option>
    </select>
  </div>
  <div class="formGroup">
    <label for="numPlates">Places:</label>
    <input type="number" id="numPlates" name="Number of plates" required>
  </div>
  <div class="formGroup">
    <label for="comment">Comment:</label>
    <textarea id="comment" name="Comment" rows="3"></textarea>
  </div>
  <div class="buttons">
    <button type="submit" id="submitbtn">Place Order</button>
    <button type="button" id="resetBtn">Reset</button> <!-- Adding Reset button -->
  </div>
</form>
  `;
 
  //Submit the form
  submitForm()
  //Reset the form
  resetForm()

}
//Function to submit form
function submitForm() {
    const form = document.getElementById('orderForm');
    // Event listener for form submission
    form.addEventListener('submit', function (event) {
      alert('Type and send your message using the email program that opens.');
    });
}
//Function to reset form to open for another order
function resetForm () {
  const form = document.getElementById('orderForm');
  const resetButton = document.getElementById('resetBtn');
  // Event listener for reset button
  resetButton.addEventListener('click', function () {
    form.reset();
  });
}
