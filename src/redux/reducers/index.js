const initialState = {
  query: {
    content: "",
  },
  jobs: {
    content: [],
  },
  companyJobs: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUERY":
      return {
        ...state,
        query: {
          ...state.query,
          content: action.payload,
        },
      };
    case "JOBS":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: action.payload,
        },
      };
    case "COMPANY_JOBS":
      return {
        ...state,
        companyJobs: {
          ...state.companyJobs,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
