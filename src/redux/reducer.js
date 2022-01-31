const initialState = [];
const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('LOAD_COMPANIES'): {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const loadCompanies = (payload) => ({
  type: 'LOAD_COMPANIES',
  payload,
});

export default stockReducer;
