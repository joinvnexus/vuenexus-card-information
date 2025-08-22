
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
        });
