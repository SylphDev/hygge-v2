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
const updateUser = async (user, email, reserve, newReserve) => {
    const userDB = await db.collection('users').where('email', '==', email).get()
    const userID = userDB.docs[0].id
    let newInfo;
    if (reserve.active[0] == null) {
        newInfo = {
            "reserves.active": [{
                name: newReserve.name,
                entryDate: newReserve.entryDate,
                leaveDate: newReserve.leaveDate,
                roomType: newReserve.roomType,
                price: newReserve.price,
                rating: newReserve.rating
            }]
        }
    } else {
        newInfo = {
            "reserves.active": [...reserve.active, newReserve]
        }
    }
    await db.collection('users').doc(userID).update(newInfo)
}

export { pushUser, getUser, updateUser };