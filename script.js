        document.addEventListener("DOMContentLoaded", function () {
            // Add dynamic CSS styles
            const style = document.createElement("style");
            style.textContent = `
                body {
                    font-family: Arial, sans-serif;
                    background-color: #121212;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .contact-container {
                    background: #2c2f33;
                    padding: 20px;
                    border-radius: 10px;
                    max-width: 400px;
                    width: 100%;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
                }
                input, textarea, button {
                    width: 100%;
                    margin-bottom: 15px;
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                }
                input, textarea {
                    background: #3e4147;
                    color: white;
                }
                button {
                    background: #43a047;
                    color: white;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                button:hover {
                    background: #388e3c;
                }
                #success-message {
                    color: #4caf50;
                    font-weight: bold;
                    text-align: center;
                    margin-top: 10px;
                    animation: fadeOut 3s forwards;
                }
                @keyframes fadeOut {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);

            // Add HTML structure dynamically
            const app = document.getElementById("app");
            app.innerHTML = `
                <div class="contact-container">
                    <form id="contactForm">
                        <label for="name">Your Name:</label>
                        <input type="text" id="name" placeholder="Enter your name" required>
                        
                        <label for="email">Your Email:</label>
                        <input type="email" id="email" placeholder="Enter your email" required>
                        
                        <label for="message">Your Message:</label>
                        <textarea id="message" placeholder="Enter your message" required></textarea>
                        
                        <button type="submit">Send Message</button>
                    </form>
                    <p id="success-message" style="display: none;">✅ Thank you! Your message has been sent successfully.</p>
                </div>
            `;

            // Form submission handler
            const contactForm = document.getElementById("contactForm");
            const successMessage = document.getElementById("success-message");

            contactForm.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent the form from submitting normally

                // Show the success message
                successMessage.style.display = "block";

                // Reset the form
                contactForm.reset();

                // Refresh the page after 3 seconds
                setTimeout(() => {
                    location.reload();
              }, 3000);
            });
    });
