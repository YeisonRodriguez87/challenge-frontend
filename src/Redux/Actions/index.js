import axios from "axios";
import {
  GET_MODELS,
  FILTER_PICKUPS,
  FILTER_SUVS    
} from "./type";
  
export function getModels(){
  return async function(distpach){
  try {
      const countriesJson = await axios.get("https://challenge.agenciaego.tech/api/models/");
      return distpach({
          type: GET_MODELS,
          payload: countriesJson.data
      })
  } catch (error) {
      return(error)
    }       
  }
}


export function filterPickups(){
  return({
          type: FILTER_PICKUPS,
      })
}


export function filterSuvs(){
  return({
          type: FILTER_SUVS,
      })
}

