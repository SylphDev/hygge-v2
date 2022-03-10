const initialState = {
    user: {
        name: null,
        lastName: null,
        email: null,
        password: null,
        country: null,
        city: null,
        photoUrl: null,
        phone: null,
        reserves: {
            active: [],
            finished: [],
        }
    },
    view: 'landing',
    citys: [],
    huts: []
}

export { initialState };