// Get the custom cursor element
const customCursor = document.querySelector('.custom-cursor');

// Move the custom cursor based on the mouse position
document.addEventListener('mousemove', (e) => {
    const cursorX = e.clientX;
    const cursorY = e.clientY;
    
    customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
});

// Add hover effect when hovering over interactive elements
const interactiveElements = document.querySelectorAll('a, button, .cta-btn');

interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('hover-effect');
    });

    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hover-effect');
    });
});
// Initialize the particles effect
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
// Array of inspirational quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Dream big and dare to fail. - Norman Vaughan",
    "Do something today that your future self will thank you for. - Sean Patrick Flanery"
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to "type out" the quote
function typeOutQuote(quote) {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = ""; // Clear existing content
    quoteElement.classList.remove('finished-quote'); // Reset in case of multiple loads
    let index = 0;

    function typeCharacter() {
        if (index < quote.length) {
            quoteElement.textContent += quote.charAt(index); // Add one character at a time
            index++;
            setTimeout(typeCharacter, 100); // Adjust speed (lower for faster typing)
        } else {
            // Once the quote is fully typed, remove the blinking cursor
            quoteElement.classList.add('finished-quote');
        }
    }

    typeCharacter();
}

// Initialize typing effect on page load
window.onload = () => {
    const randomQuote = getRandomQuote();
    typeOutQuote(randomQuote);
};
