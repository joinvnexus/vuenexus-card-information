
        // Sample data for information cards
        const cardData = [
            {
                id: 1,
                title: "HTML5 Documentation",
                content: "HTML5 is the latest evolution of the standard that defines HTML. It includes new elements, attributes, and behaviors.",
                icon: "fab fa-html5",
                color: "#e34f26",
                category: "frontend",
                date: "2023-10-15"
            },
            {
                id: 2,
                title: "CSS Flexbox Guide",
                content: "The Flexible Box Layout Module makes it easier to design flexible responsive layout structure.",
                icon: "fab fa-css3-alt",
                color: "#264de4",
                category: "frontend",
                date: "2023-09-22"
            },
            {
                id: 3,
                title: "JavaScript ES6 Features",
                content: "ECMAScript 2015, also known as ES6, introduced major new features like arrow functions, classes, and modules.",
                icon: "fab fa-js-square",
                color: "#f7df1e",
                category: "frontend",
                date: "2023-11-05"
            },
            {
                id: 4,
                title: "Tailwind CSS Framework",
                content: "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
                icon: "fas fa-palette",
                color: "#38bdf8",
                category: "frontend",
                date: "2023-08-17"
            },
            {
                id: 5,
                title: "MongoDB Basics",
                content: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database.",
                icon: "fas fa-database",
                color: "#4fa94d",
                category: "backend",
                date: "2023-07-29"
            },
            {
                id: 6,
                title: "Express.js Routing",
                content: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
                icon: "fas fa-server",
                color: "#000000",
                category: "backend",
                date: "2023-10-30"
            },
            {
                id: 7,
                title: "GitHub Best Practices",
                content: "Learn how to use GitHub effectively for version control and collaboration on software projects.",
                icon: "fab fa-github",
                color: "#6e5494",
                category: "tools",
                date: "2023-09-10"
            },
            {
                id: 8,
                title: "REST API Design",
                content: "REST APIs are a way to provide interoperability between computer systems on the internet.",
                icon: "fas fa-code",
                color: "#3b82f6",
                category: "backend",
                date: "2023-11-12"
            },
            {
                id: 9,
                title: "Responsive Web Design",
                content: "Responsive web design makes your web page look good on all devices by using fluid layouts and media queries.",
                icon: "fas fa-mobile-alt",
                color: "#8b5cf6",
                category: "frontend",
                date: "2023-08-25"
            },
            {
                id: 10,
                title: "Node.js Event Loop",
                content: "The event loop is what allows Node.js to perform non-blocking I/O operations despite being single-threaded.",
                icon: "fab fa-node-js",
                color: "#68a063",
                category: "backend",
                date: "2023-10-05"
            }
        ];

        // Add subtle animation to the floating elements
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.floating-element');
            
            elements.forEach((element, index) => {
                // Set random initial position and delay for animation
                const delay = index * 0.7;
                element.style.animation = `float 8s ${delay}s infinite ease-in-out`;
                
                // Add more random floating elements
                if (index < 10) {
                    const newElement = element.cloneNode(true);
                    newElement.style.top = Math.random() * 100 + '%';
                    newElement.style.left = Math.random() * 100 + '%';
                    newElement.style.opacity = Math.random() * 0.1;
                    document.querySelector('.floating-elements').appendChild(newElement);
                }
            });
            
            // Add animation style
            const style = document.createElement('style');
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(5px, 10px) rotate(2deg); }
                    50% { transform: translate(10px, 5px) rotate(-2deg); }
                    75% { transform: translate(5px, -5px) rotate(1deg); }
                }
            `;
            document.head.appendChild(style);
            
            // GitHub repo button functionality
            const publicBtn = document.querySelector('.public-btn');
            const privateBtn = document.querySelector('.private-btn');
            
            publicBtn.addEventListener('click', function() {
                alert('Creating public repository...\n\nThis would typically connect to the GitHub API to create a new public repo.');
                publicBtn.textContent = 'Creating...';
                setTimeout(() => {
                    publicBtn.textContent = 'Public Repo Created!';
                    publicBtn.style.background = '#86efac';
                    publicBtn.style.color = '#0f172a';
                }, 1500);
            });
            
            privateBtn.addEventListener('click', function() {
                alert('Creating private repository...\n\nThis would typically connect to the GitHub API to create a new private repo.');
                privateBtn.textContent = 'Creating...';
                setTimeout(() => {
                    privateBtn.textContent = 'Private Repo Created!';
                    privateBtn.style.background = '#86efac';
                    privateBtn.style.color = '#0f172a';
                }, 1500);
            });
            
            // Initialize cards
            renderCards(cardData);
            
            // Add search functionality
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', handleSearch);
            
            // Add scroll loading functionality
            const cardsContainer = document.getElementById('cardsContainer');
            cardsContainer.addEventListener('scroll', handleScroll);
        });
        
        // Render cards function
        function renderCards(cards) {
            const cardsContainer = document.getElementById('cardsContainer');
            cardsContainer.innerHTML = '';
            
            cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                cardElement.innerHTML = `
                    <div class="card-header">
                        <div class="card-icon" style="background: ${card.color}">
                            <i class="${card.icon}"></i>
                        </div>
                        <h3 class="card-title">${card.title}</h3>
                    </div>
                    <div class="card-content">
                        <p>${card.content}</p>
                    </div>
                    <div class="card-footer">
                        <span>${card.category}</span>
                        <span>${formatDate(card.date)}</span>
                    </div>
                `;
                cardsContainer.appendChild(cardElement);
            });
        }
        
        // Format date function
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        }
        
        // Search functionality
        function handleSearch() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            
            if (searchTerm === '') {
                renderCards(cardData);
                return;
            }
            
            const filteredCards = cardData.filter(card => 
                card.title.toLowerCase().includes(searchTerm) || 
                card.content.toLowerCase().includes(searchTerm) ||
                card.category.toLowerCase().includes(searchTerm)
            );
            
            renderCards(filteredCards);
        }
        
        // Scroll loading functionality
        function handleScroll() {
            const cardsContainer = document.getElementById('cardsContainer');
            const loadingIndicator = document.getElementById('loadingIndicator');
            
            // Check if user has scrolled to the bottom
            if (cardsContainer.scrollTop + cardsContainer.clientHeight >= cardsContainer.scrollHeight - 10) {
                loadingIndicator.classList.add('show');
                
                // Simulate loading more data
                setTimeout(() => {
                    // In a real app, you would fetch more data from an API
                    // For this demo, we'll just duplicate the existing cards
                    const currentCards = Array.from(cardsContainer.querySelectorAll('.card'));
                    if (currentCards.length < 30) { // Limit to prevent too many cards
                        renderCards([...cardData, ...cardData]);
                    }
                    loadingIndicator.classList.remove('show');
                }, 1500);
            }
        }
