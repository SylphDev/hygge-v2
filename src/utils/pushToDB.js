import { db } from "../firebase/firebaseConfig";

const pushUser = async (user) => {
    await db.collection('users').add(user)
}
const getUser = async (email) => {
    const user = await db.collection('users').where('email', '==', email).get()
    const usersArray = user.docs
    if (usersArray[0] != undefined) {
        const usersData = usersArray[0].data()
        return usersData;
    } else {
        return null;
    }

}

export { pushUser, getUser };