// Get elements
const signInBtn = document.getElementById('signInBtn');
const signInSection = document.getElementById('signInSection');
const closeButton = document.querySelector('.close-button');

const signUpBtn = document.getElementById('signUpBtn');
const signUpSection = document.getElementById('signUpSection');
const closeBtnSu = document.querySelector('.close-buttonSu');

// Show Sign In Section
if(signInBtn){
    signInBtn.addEventListener('click', () => {
        signInSection.style.display = 'block';
    });    
}

if(signUpBtn){
    // Show Sign Up Section
signUpBtn.addEventListener('click', () => {
    signUpSection.style.display = 'block';
});
}
// Close Sign In Section
closeButton.addEventListener('click', () => {
    signInSection.style.display = 'none';
});

// Close Sign Up Section
closeBtnSu.addEventListener('click', () => {
    signUpSection.style.display = 'none';
});

// Close the modal if user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === signInSection) {
        signInSection.style.display = 'none';
    }
    else if(event.target === signUpSection){
        signUpSection.style.display = 'none';
    }
});
