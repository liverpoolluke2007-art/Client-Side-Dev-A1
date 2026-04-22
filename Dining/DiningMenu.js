console.log("script loaded");
const app = document.getElementById("app");

const menu = [
  {
    title: "Starters",
    items: [
      {
        name: "Seaside Tomato Bruschetta",
        description: "Toasted sourdough, basil, confit tomato, and sea salt oil",
        price: "£7.50"
      },
      {
        name: "Oceanfront Chowder",
        description: "Creamy soup with herbs, sweetcorn, and artisan bread",
        price: "£8.00"
      }
    ]
  },
  {
    title: "Main Courses",
    items: [
      {
        name: "Azure Grilled Salmon",
        description: "Lemon butter glaze, seasonal greens, and roasted potatoes",
        price: "£18.95"
      },
      {
        name: "Coastal Herb Chicken",
        description: "Pan-roasted chicken breast with garlic mash and jus",
        price: "£16.50"
      },
      {
        name: "Tide Garden Risotto",
        description: "Creamy risotto with asparagus, peas, and parmesan",
        price: "£15.00"
      }
    ]
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Harbour Chocolate Torte",
        description: "Rich chocolate torte with vanilla cream",
        price: "£6.95"
      },
      {
        name: "Lemon Tart",
        description: "Bright citrus tart with berry garnish",
        price: "£6.50"
      }
    ]
  }
];

function createSection(section) {
  const card = document.createElement("section");
  card.className = "card";

  const heading = document.createElement("h2");
  heading.textContent = section.title;
  card.appendChild(heading);

  section.items.forEach(item => {
    const row = document.createElement("div");
    row.className = "menu-item";

    const left = document.createElement("div");

    const name = document.createElement("span");
    name.className = "menu-name";
    name.textContent = item.name;

    const description = document.createElement("span");
    description.className = "menu-desc";
    description.textContent = item.description;

    left.appendChild(name);
    left.appendChild(description);

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = item.price;

    row.appendChild(left);
    row.appendChild(price);
    card.appendChild(row);
  });

  return card;
}

function createPage() {
  menu.forEach(section => {
    app.appendChild(createSection(section));
  });

  const reserveCard = document.createElement("section");
  reserveCard.className = "card";

  const reserveTitle = document.createElement("h2");
  reserveTitle.textContent = "Reserve Your Table";

  const reserveText = document.createElement("p");
  reserveText.textContent =
    "Plan your dining experience at The Tide Azure Hotel and enjoy a calm evening by the water.";

  const button = document.createElement("button");
  button.className = "cta";
  button.textContent = "Reserve a Table";
  button.addEventListener("click", () => {
    alert("Reservations for The Tide Azure Hotel are coming soon.");
  });

  reserveCard.appendChild(reserveTitle);
  reserveCard.appendChild(reserveText);
  reserveCard.appendChild(button);
  app.appendChild(reserveCard);
}

createPage();
