class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav class="navbar navbar-expand-md">
                    <a href="index.html" class="logo" style="text-decoration: none; color: inherit;">
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
                            <li class="nav-item"><a href="DiningMenu.HTML" class="nav-link">Dining</a></li>
                            <li class="nav-item"><a href="about.html" class="nav-link">About Us</a></li>
                            <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                            <li class="nav-item"><a href="booking.html" class="btn-nav">Book Now</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('site-header', SiteHeader);
