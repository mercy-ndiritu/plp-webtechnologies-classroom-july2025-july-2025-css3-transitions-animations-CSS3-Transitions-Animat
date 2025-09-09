// Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        
        // Check for saved theme preference or respect OS preference
        if (localStorage.getItem('theme') === 'dark' || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))) {
            document.body.classList.add('dark-mode');
            themeToggle.checked = true;
        }
        
        themeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });

        // ===== PART 2: JAVASCRIPT FUNCTIONS - SCOPE, PARAMETERS & RETURN VALUES =====
        
        // Counter Game Functionality
        const counterElement = document.getElementById('counter');
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');
        const resetBtn = document.getElementById('reset');
        const gameMessage = document.getElementById('game-message');
        
        let count = 0;
        
        // Function to update counter with parameter for change amount
        function updateCounter(change) {
            count += change;
            counterElement.textContent = count;
            
            // Return a message based on the current count
            return evaluateCount(count);
        }
        
        // Function to evaluate count and return appropriate message
        function evaluateCount(value) {
            if (value === 10) {
                return 'Congratulations! You reached 10!';
            } else if (value > 10) {
                return 'You went over 10! Try again.';
            } else if (value < 0) {
                return "You can't go below 0!";
            } else {
                return `Keep going! ${10 - value} more to reach 10.`;
            }
        }
        
        // Function to reset counter
        function resetCounter() {
            count = 0;
            counterElement.textContent = count;
            return 'Counter has been reset!';
        }
        
        // Event listeners for counter buttons
        incrementBtn.addEventListener('click', function() {
            const message = updateCounter(1);
            gameMessage.textContent = message;
            gameMessage.style.color = count === 10 ? 'var(--success-color)' : 
                                    count > 10 ? 'var(--error-color)' : 'var(--text-color)';
        });
        
        decrementBtn.addEventListener('click', function() {
            const message = updateCounter(-1);
            gameMessage.textContent = message;
            gameMessage.style.color = count < 0 ? 'var(--error-color)' : 'var(--text-color)';
        });
        
        resetBtn.addEventListener('click', function() {
            const message = resetCounter();
            gameMessage.textContent = message;
            gameMessage.style.color = 'var(--text-color)';
        });

        // ===== PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT =====
        
        // Animation controls functionality
        const animTarget = document.getElementById('anim-target');
        const fadeBtn = document.getElementById('fade-btn');
        const slideBtn = document.getElementById('slide-btn');
        const pulseBtn = document.getElementById('pulse-btn');
        const bounceBtn = document.getElementById('bounce-btn');
        const spinBtn = document.getElementById('spin-btn');
        const flipBtn = document.getElementById('flip-btn');
        const resetAnimBtn = document.getElementById('reset-anim-btn');
        
        // Function to apply animation with parameters
        function applyAnimation(element, animationName, shouldReset = false) {
            // First remove any existing animations
            element.classList.remove('animated', 'fadeIn', 'slideIn', 'pulse', 'bounce', 'spin', 'flip');
            
            if (!shouldReset) {
                // Add the new animation
                element.classList.add('animated', animationName);
            }
        }
        
        // Add event listeners to animation buttons
        fadeBtn.addEventListener('click', () => applyAnimation(animTarget, 'fadeIn'));
        slideBtn.addEventListener('click', () => applyAnimation(animTarget, 'slideIn'));
        pulseBtn.addEventListener('click', () => applyAnimation(animTarget, 'pulse'));
        bounceBtn.addEventListener('click', () => applyAnimation(animTarget, 'bounce'));
        spinBtn.addEventListener('click', () => applyAnimation(animTarget, 'spin'));
        flipBtn.addEventListener('click', () => applyAnimation(animTarget, 'flip'));
        resetAnimBtn.addEventListener('click', () => applyAnimation(animTarget, '', true));
        
        // Card flip functionality
        const flipCard = document.getElementById('flip-card');
        
        flipCard.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
        
        // Loading animation control
        const loader = document.getElementById('loader');
        const startLoaderBtn = document.getElementById('start-loader');
        const stopLoaderBtn = document.getElementById('stop-loader');
        
        // Function to control loading animation
        function toggleLoadingAnimation(isLoading) {
            if (isLoading) {
                loader.style.display = 'inline-block';
            } else {
                loader.style.display = 'none';
            }
        }
        
        startLoaderBtn.addEventListener('click', () => toggleLoadingAnimation(true));
        stopLoaderBtn.addEventListener('click', () => toggleLoadingAnimation(false));
        
        // Modal functionality
        const modal = document.getElementById('modal');
        const openModalBtn = document.getElementById('open-modal');
        const closeModalBtn = document.getElementById('close-modal');
        
        // Function to toggle modal with animation
        function toggleModal(show) {
            if (show) {
                modal.classList.add('show');
            } else {
                modal.classList.remove('show');
            }
        }
        
        openModalBtn.addEventListener('click', () => toggleModal(true));
        closeModalBtn.addEventListener('click', () => toggleModal(false));
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                toggleModal(false);
            }
        });
        
        // Form validation functionality
        const form = document.getElementById('user-form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');
        const successMessage = document.getElementById('success-message');
        
        // Function to validate name
        function validateName(name) {
            return name.length >= 2;
        }
        
        // Function to validate email
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        // Function to validate password
        function validatePassword(password) {
            // At least 8 characters, one uppercase, one lowercase, one number
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            return passwordRegex.test(password);
        }
        
        // Function to show error message
        function showError(inputElement, errorElement) {
            errorElement.style.display = 'block';
            inputElement.style.borderColor = 'var(--error-color)';
        }
        
        // Function to hide error message
        function hideError(inputElement, errorElement) {
            errorElement.style.display = 'none';
            inputElement.style.borderColor = '#ddd';
        }
        
        // Real-time validation
        nameInput.addEventListener('input', function() {
            if (validateName(this.value)) {
                hideError(this, nameError);
            }
        });
        
        emailInput.addEventListener('input', function() {
            if (validateEmail(this.value)) {
                hideError(this, emailError);
            }
        });
        
        passwordInput.addEventListener('input', function() {
            if (validatePassword(this.value)) {
                hideError(this, passwordError);
            }
        });
        
        // Form submission handler
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Validate name
            if (!validateName(nameInput.value)) {
                showError(nameInput, nameError);
                isValid = false;
            }
            
            // Validate email
            if (!validateEmail(emailInput.value)) {
                showError(emailInput, emailError);
                isValid = false;
            }
            
            // Validate password
            if (!validatePassword(passwordInput.value)) {
                showError(passwordInput, passwordError);
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                successMessage.style.display = 'block';
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    form.reset();
                    successMessage.style.display = 'none';
                }, 3000);
            }
        });

        // Initialize page with some animations
        window.addEventListener('load', function() {
            // Animate sections on page load
            document.querySelectorAll('section').forEach((section, index) => {
                setTimeout(() => {
                    section.classList.add('animated', 'fadeIn');
                }, index * 200);
            });
        });