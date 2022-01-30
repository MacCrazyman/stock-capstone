const initialState = [];
const stockRedurec = (state = initialState, action) => {
  switch (action.type) {
    case ('LOAD_COMPANIES'): {
      return state;
    }
    default: {
      return state;
    }
  }
};

export const loadCompanies = (payload) => ({
  type: 'LOAD_COMPANIES',
  action: payload,
});

export default stockRedurec;
