const vendors = [
  { name: "Ramu Chaat Bhandar", location: "Chennai Central", rating: 4.7, items: ["Pani Puri", "Samosa", "Aloo Tikki"] },
  { name: "Mumbai Vada Pav", location: "Mumbai CST", rating: 4.5, items: ["Vada Pav", "Misal Pav"] },
  { name: "Delhi Dilliwala Chat", location: "Connaught Place, Delhi", rating: 4.6, items: ["Chole Bhature", "Papdi Chaat"] },
  { name: "Hyderabad Biryani Point", location: "Charminar, Hyderabad", rating: 4.8, items: ["Biryani", "Kebabs"] },
  { name: "Kolkata Rolls Hub", location: "Park Street, Kolkata", rating: 4.4, items: ["Kathi Rolls", "Puchka"] },
  { name: "Bangalore Dosa Cart", location: "MG Road, Bangalore", rating: 4.5, items: ["Masala Dosa", "Idli", "Vada"] },
  { name: "Ahmedabad Snack Corner", location: "CG Road, Ahmedabad", rating: 4.6, items: ["Dhokla", "Fafda"] },
  { name: "Pune Pav Bhaji Spot", location: "JM Road, Pune", rating: 4.3, items: ["Pav Bhaji", "Dabeli"] },
  { name: "Kochi Spice Street", location: "Fort Kochi", rating: 4.7, items: ["Fish Fry", "Appam"] },
  { name: "Jaipur Sweets", location: "MI Road, Jaipur", rating: 4.4, items: ["Ghewar", "Kachori"] },
  { name: "Lucknow Nawabi Tandoor", location: "Hazratganj, Lucknow", rating: 4.8, items: ["Kebabs", "Kulcha"] },
  { name: "Bhopal Street Taste", location: "New Market, Bhopal", rating: 4.5, items: ["Poha", "Jalebi"] }
];

const container = document.getElementById("vendors");
const searchInput = document.getElementById("search");
const roleSelect = document.getElementById("role");
const formContainer = document.getElementById("form-container");

function renderVendors(filteredVendors) {
  container.innerHTML = "";
  filteredVendors.forEach(vendor => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${vendor.name}</h3>
      <p><strong>Location:</strong> ${vendor.location}</p>
      <p><strong>Rating:</strong> ⭐ ${vendor.rating}</p>
      <p><strong>Menu:</strong> ${vendor.items.join(", ")}</p>
    `;
    container.appendChild(card);
  });
}

renderVendors(vendors);

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = vendors.filter(v =>
    v.name.toLowerCase().includes(term) ||
    v.location.toLowerCase().includes(term) ||
    v.items.some(item => item.toLowerCase().includes(term))
  );
  renderVendors(filtered);
});

roleSelect.addEventListener("change", () => {
  const selected = roleSelect.value;
  if (!selected) return formContainer.innerHTML = "";

  formContainer.innerHTML = `
  <form>
    <div class="form-group">
      <label for="name">Full Name</label>
      <input type="text" id="name" placeholder="Your full name" required />
    </div>
    <div class="form-group">
      <label for="email">Email Address</label>
      <input type="email" id="email" placeholder="you@example.com" required />
    </div>
    <div class="form-group">
      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" placeholder="e.g. 9876543210" required />
    </div>
    <div class="form-group">
      <label for="message">Details</label>
      <textarea id="message" placeholder="Tell us about your ${selected} needs..." required></textarea>
    </div>
    <button type="submit">Submit as ${selected.charAt(0).toUpperCase() + selected.slice(1)}</button>
  </form>
`;
})








