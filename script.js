// Navbar

const navclose = document.getElementById('nav-close');
function toggleMenu() {
    navclose.classList.toggle('hidden');
}

// Modal and buttons

const signInModal = document.getElementById('signInModal');
const signInButtons = document.querySelectorAll('.signInbtn');
const closeModal = document.getElementById('closeModal');
const submitSignIn = document.querySelector('#signInModal button[type="submit"]');

signInButtons.forEach((button) => {
    button.addEventListener('click', () => {
        signInModal.classList.remove('hidden'); 
    });
});

closeModal.addEventListener('click', () => {
    signInModal.classList.add('hidden');
});

window.addEventListener('click', (e) =>{
    if(e.target === signInModal){
        signInModal.classList.add('hidden');
    }
});

// Form submission
  submitSignIn.addEventListener('click', (e) => {
        e.preventDefault(); 

        // Get the values of the input fields
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validate input fields
        if (email && password) {
            alert('Congrats! You are signed in! 😊'); 
            signInModal.classList.add('hidden'); 
        }
         else {
            alert('Please fill out all fields!'); 
        }
    });

