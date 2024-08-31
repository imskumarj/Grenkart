
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBohCddAirBIwBjxQwSOZysLo619dXwZW4",
  authDomain: "grenkart-web.firebaseapp.com",
  projectId: "grenkart-web",
  storageBucket: "grenkart-web.appspot.com",
  messagingSenderId: "284997831220",
  appId: "1:284997831220:web:c86ea269064ada657b9861",
  measurementId: "G-7L1FZ1C7G9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value; 

    console.log('Form submitted:', { email, password, role });

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User registered:', userCredential); 
            alert('Registration successful! Please log in.');
            window.location.href = 'login.html'; 
        })
        .catch((error) => {
            console.error('Error registering user:', error);
            alert('Registration failed. Please try again.');
        });
});
