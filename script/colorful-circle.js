// List of random colors
                    const colors = ["#f87171", "#facc15", "#4ade80", "#60a5fa", "#a78bfa", "#f472b6", "#34d399", "#fbbf24"];

                    const circle = document.getElementById("colorful-circle");

                    circle.addEventListener("click", () => {
                        // Pick a random color
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];

                        // Change the background color of the page
                        document.body.style.backgroundColor = randomColor;
                    });