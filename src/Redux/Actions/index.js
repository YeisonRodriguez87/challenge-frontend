import axios from "axios";
import {
  GET_MODELS,
  FILTER_PICKUPS,
  FILTER_SUVS,
  FILTER_AUTOS,
  PRICE_AND_YEAR_ORDER,
} from "./type";

export function getModels() {
  return async function (distpach) {
    try {
      const countriesJson = await axios.get(
        "https://challenge.agenciaego.tech/api/models/"
      );
      return distpach({
        type: GET_MODELS,
        payload: countriesJson.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function filterPickups() {
  return {
    type: FILTER_PICKUPS,
  };
}

export function filterSuvs() {
  return {
    type: FILTER_SUVS,
  };
}

export function filterAutos() {
  return {
    type: FILTER_AUTOS,
  };
}

export function priceAndYearOrder(payload) {
  return {
    type: PRICE_AND_YEAR_ORDER,
    payload,
  };
}
