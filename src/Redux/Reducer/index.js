const initialState = {
  models: [],
  allModels: [],
  details: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MODELS":
      return {
        ...state,
        models: action.payload,
        allModels: action.payload,
      };
    case "FILTER_PICKUPS":
      const pickupsModels = state.allModels;
      const pickupsFiltered = pickupsModels.filter(
        (element) => element.segment === "Pickups y Comerciales"
      );
      return {
        ...state,
        models: pickupsFiltered,
      };
    case "FILTER_SUVS":
      const suvsModels = state.allModels;
      const suvsFiltered = suvsModels.filter(
        (element) => element.segment === "SUVs"
      );
      return {
        ...state,
        models: suvsFiltered,
      };
    case "FILTER_AUTOS":
      const autosModels = state.allModels;
      const autosFiltered = autosModels.filter(
        (element) =>
          element.segment === "Sedan" || element.segment === "Hatchback"
      );
      return {
        ...state,
        models: autosFiltered,
      };
    case "PRICE_AND_YEAR_ORDER":     
      action.payload === "minprice" &&
        state.models.sort(function (a, b) {
          return a.price - b.price;
        });
      action.payload === "maxprice" &&
        state.models.sort(function (a, b) {
          return b.price - a.price;
        });
      action.payload === "masnuevo" &&
        state.models.sort(function (a, b) {
          return b.year - a.year;
        });
      action.payload === "masviejo" &&
        state.models.sort(function (a, b) {
          return a.year - b.year;
        });
      return {
        ...state,
        models: state.models,
      };
    case "MODEL_DETAIL":
      return{
        ...state,
        details: action.payload  
      }
    default:
      return { ...state };
  }
}

export default rootReducer;
