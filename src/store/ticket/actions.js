import '../../services/firebase'
import routes from '../../router'

import { getDatabase, ref, set } from "firebase/database";
const db = getDatabase();

const actions = {
    createTicket(state, ticket){

        let creationDate = new Date().getTime()
        let lastUpdate = new Date().getTime()
        ticket.creationDate = creationDate;
        ticket.lastUpdate = lastUpdate;

        const colection = ref(db, 'Tickets/' + creationDate );

        set(colection, ticket);
    }
}

export default actions;