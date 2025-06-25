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

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    const recipeForm = document.querySelector('.recipe-form');
    if (recipeForm) recipeForm.addEventListener('submit', handleRecipeRequest);
}); 