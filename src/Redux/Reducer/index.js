const initialState = {
    models: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MODELS":
      return {
        ...state,
        models: action.payload
      };
    case 'FILTER_PICKUPS':
      const pickupsModels = state.models;
      const pickupsFiltered = pickupsModels.filter(element => element.segment === "Pickups y Comerciales") 
      return{
        ...state,
        models: pickupsFiltered,                
      };
    case 'FILTER_SUVS':
      const suvsModels = state.models;
      const suvsFiltered = suvsModels.filter(element => element.segment === "SUVs") 
      return{
        ...state,
        models: suvsFiltered,                
      };

    default:
      return { ...state };
  }
}

export default rootReducer;