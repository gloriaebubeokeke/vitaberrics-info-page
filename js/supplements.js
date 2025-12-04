const supplements = [
  {
    name: "Vitamin C",
    category: "Immunity",
    img: "./assets/images/week2/vitamin-c.png",
    desc: "Powerful antioxidant for immune support and skin health.",
    link: "./vitamin-c.html",
  },
  {
    name: "Zinc",
    category: "Immunity",
    img: "./assets/images/week2/zinc.png",
    desc: "Supports immunity, skin repair, and hormone balance.",
    link: "./zinc.html",
  },
  {
    name: "Magnesium",
    category: "Stress",
    img: "./assets/images/week2/magnesium.png",
    desc: "Helps relaxation, mood enhancement, and muscle recovery.",
    link: "./magnesium.html",
  },
  {
    name: "Omega-3",
    category: "Energy",
    img: "./assets/images/week2/omega3.png",
    desc: "Supports heart and brain function, inflammation, metabolism.",
    link: "./omega3.html",
  },
  {
    name: "Ashwagandha",
    category: "Stress",
    img: "./assets/images/week2/ashwagandha.png",
    desc: "Adaptogenic herb for stress relief, hormones, and energy.",
    link: "./ashwagandha.html",
  },
  {
    name: "Biotin",
    category: "Skin",
    img: "./assets/images/week2/biotin.png",
    desc: "Promotes healthy hair growth, glowing skin, strong nails.",
    link: "./biotin.html",
  }
];

const grid = document.getElementById("supplementGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-buttons button");

let activeCategory = "all";

// 🔄 Render all cards
function renderCards() {
  let searchText = searchInput.value.toLowerCase();

  const filtered = supplements.filter(item => {
    let matchesSearch = item.name.toLowerCase().includes(searchText);

    let matchesCategory =
      activeCategory === "all" || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  grid.innerHTML = filtered
    .map(
      item => `
    <div class="supp-card fade-in">
      <img src="${item.img}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <div class="tag ${item.category.toLowerCase()}">${item.category}</div>
      <p>${item.desc}</p>
      <a href="${item.link}">Read more</a>
    </div>
  `
    )
    .join("");
}

renderCards();

// 🔍 Search event
searchInput.addEventListener("input", renderCards);

// 🏷 Filter buttons
filterButtons.forEach(btn =>
  btn.addEventListener("click", () => {
    activeCategory = btn.dataset.category;
    renderCards();
  })
);
