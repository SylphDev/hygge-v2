const initialState = {
  user: {
    name: null,
    lastName: null,
    email: null,
    country: null,
    city: null,
    photoUrl: null,
    phone: null,
    reserves: {
      active: [],
      finished: [],
    },
  },
  view: "landing",
  citys: [],
  huts: [{ name: 'Fondo de bikini', description: '', photo: [], rooms: [], city: '' }],
};

export { initialState };
