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
