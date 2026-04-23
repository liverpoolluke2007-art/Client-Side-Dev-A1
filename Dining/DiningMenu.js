console.log("script loaded");
const app = document.getElementById("app");
class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav class="navbar navbar-expand-md">
                    <a href="/index.html" class="logo" style="text-decoration: none; color: inherit;">
                        <span class="logo-icon">A</span>
                        <div class="logo-text">
                            <h1>THE AZURE TIDE</h1>
                            <p>HOTEL</p>
                        </div>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navMenu">
                        <ul class="nav-links navbar-nav">
                            <li class="nav-item"><a href="/Dining/DiningMenu.HTML" class="nav-link">Dining</a></li>
                            <li class="nav-item"><a href="/About/about.html" class="nav-link">About Us</a></li>
                            <li class="nav-item"><a href="/Contact page/contact.html" class="nav-link">Contact</a></li>
                            <li class="nav-item"><a href="/Booking/booking.html" class="btn-nav">Book Now</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('site-header', SiteHeader);
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
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer> 
                <ul class="nav-links">
                <li><a href="contact.html" class="btn-nav">Contact Us</a></li>
                <li><button id="darkModeToggle" class="dark-mode-toggle">🌙 Dark Mode</button></li>
                </ul>
            </footer>
        `;
        
        const toggleBtn = this.querySelector('#darkModeToggle');
        const body = document.body;

        // Check if dark mode was previously enabled in localStorage
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            toggleBtn.textContent = '☀️ Light Mode';
        }

        // Toggle dark mode on click
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
            toggleBtn.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
        });
    }
}

customElements.define('site-footer', SiteFooter);

createPage();
