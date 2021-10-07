import '../../services/firebase'
import routes from '../../router'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const actions = {
    sigIn(){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, 'yuri.oliveira@brasoftware.com.br', '123456')
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error)
            });
        
    },
    loginWithEmailAndPasw({commit}, credentials){
        console.log(credentials)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, credentials.login, credentials.password)
            .then((userCredential) => {
                routes.push('/home')
            })
            .catch((error) => {
                commit('loginInvalido')
                console.log(error)
            });
    },
    verifyAuth(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (!user) {
              routes.push('/')
            }
        });
    },
    login(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log(result.user)
                routes.push('/home');
            }).catch((error) => {
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    },
    logOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
            routes.push('/');
        }).catch((error) => {
            console.log(error);
        });
    }
}

export default actions;