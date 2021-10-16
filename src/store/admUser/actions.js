import '../../services/firebase'

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const db = getDatabase();

const actions = {
    sigIn({commit}, user){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error)
            });
        
    },
    createUser({commit}, user){

        let creationDate = new Date().getTime()
        let lastUpdate = new Date().getTime()
        user.creationDate = creationDate;
        user.lastUpdate = lastUpdate;
        user.id = creationDate;

        const colection = ref(db, 'Usuarios/' + user.id );
        this.dispatch('sigIn', user)

        set(colection, user);
    }
}

export default actions;