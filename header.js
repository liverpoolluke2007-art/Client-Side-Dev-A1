class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav class="navbar"> <!-- Navigation Bar -->
                    <a href="index.html" class="logo" style="text-decoration: none; color: inherit;">
                        <span class="logo-icon">A</span>
                        <div class="logo-text">
                            <h1>THE AZURE TIDE</h1>
                            <p>HOTEL</p>
                        </div>
                    </a>
                    <ul class="nav-links">
                        <li><a href="dining.html">Dining</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="booking.html" class="btn-nav">Book Now</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('site-header', SiteHeader);
