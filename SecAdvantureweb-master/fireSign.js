

//   const firebaseConfig = {
//     apiKey: "AIzaSyCfIkAeB114pEodDfgiUnFJ7EIbouKRccA",
//     authDomain: "blogbook-92b00.firebaseapp.com",
//     projectId: "blogbook-92b00",
//     storageBucket: "blogbook-92b00.appspot.com",
//     messagingSenderId: "626996935537",
//     appId: "1:626996935537:web:826e20a20d12c279df94d0"
//   };

  
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js'
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup
 } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyCfIkAeB114pEodDfgiUnFJ7EIbouKRccA",
    authDomain: "blogbook-92b00.firebaseapp.com",
    projectId: "blogbook-92b00",
    storageBucket: "blogbook-92b00.appspot.com",
    messagingSenderId: "626996935537",
    appId: "1:626996935537:web:826e20a20d12c279df94d0"
  };
  const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
var getbtn = document.getElementById('subtn')
if(getbtn){
    getbtn.addEventListener('click',function(){
        var name = document.getElementById('username')
        var email = document.getElementById('email')
        var password = document.getElementById('password')
        createUserWithEmailAndPassword(auth, email.value, password.value, name.value)
     .then((userCredential) => {
       const user = userCredential.user;
       console.log("user ",user)
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log("error", errorCode,errorMessage)
     });
    })
}

var getinbtn = document.getElementById('sibtn')
if(getinbtn){
    getinbtn.addEventListener('click',function(){
        var email = document.getElementById('semail')
        var password = document.getElementById('spassword')
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user ",user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error", errorCode,errorMessage)
                });
                })
}




auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
var getsbtn = document.getElementById('sgoogle')
if(getsbtn){
getsbtn.addEventListener('click',function(){
signInWithPopup(auth, provider)
.then((result) => {
const credential = GoogleAuthProvider.credentialFromResult(result);
const user = result.user;
console.log(user);
window.location.href = './index.html'
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;

});
})
        }