const initialState = [];
const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('LOAD_COMPANIES'): {
      return action.payload;
    }

    case ('LOAD_DETAILS'): {
      return state.map((item) => {
        if (item.symbol === action.payload.symbol) return { ...item, details: action.payload };
        return item;
      });
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

export const loadDetails = (payload) => ({
  type: 'LOAD_DETAILS',
  payload,
});

export default stockReducer;
