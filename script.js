// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuButton.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        `;
    } else {
        mobileMenu.classList.add('hidden');
        menuButton.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        `;
    }
}

// Main function to handle recipe requests
function handleRecipeRequest(event) {
    event.preventDefault();
    const result = document.getElementById('recipe-result');
    const content = result.querySelector('.recipe-content');
    content.innerHTML = '<h4>Grilled Chicken with Quinoa</h4><p>A healthy, balanced meal perfect for your dietary needs.</p><ul><li>2 chicken breasts</li><li>1 cup quinoa</li><li>Mixed vegetables</li></ul>';
    result.classList.remove('hidden');
}

// Function to handle plan selection
function selectPlan(planType) {
    const checkout = document.getElementById('checkout');
    checkout.classList.remove('hidden');
    checkout.scrollIntoView({ behavior: 'smooth' });
}

// Login form functionality
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.auth-section');
    sections.forEach(section => section.classList.add('hidden'));
    
    // Reset tab styles
    const tabs = document.querySelectorAll('#signin-tab, #signup-tab');
    tabs.forEach(tab => {
        tab.classList.remove('bg-white', 'text-black', 'shadow-sm');
        tab.classList.add('text-gray-600');
    });
    
    // Show selected section
    document.getElementById(sectionName + '-section').classList.remove('hidden');
    
    // Update tab styles for signin/signup
    if (sectionName === 'signin' || sectionName === 'signup') {
        const activeTab = document.getElementById(sectionName + '-tab');
        activeTab.classList.add('bg-white', 'text-black', 'shadow-sm');
        activeTab.classList.remove('text-gray-600');
    }
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Recipe form
    const recipeForm = document.querySelector('.recipe-form');
    if (recipeForm) recipeForm.addEventListener('submit', handleRecipeRequest);
    
    // Mobile menu button
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on links
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            const menuButton = document.getElementById('mobile-menu-button');
            mobileMenu.classList.add('hidden');
            menuButton.innerHTML = `
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            `;
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const nav = document.querySelector('nav');
        
        if (mobileMenu && !mobileMenu.classList.contains('hidden') && 
            !nav.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            if (mobileMenuButton) {
                mobileMenuButton.innerHTML = `
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                `;
            }
        }
    });
}); 