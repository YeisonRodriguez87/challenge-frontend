import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getModels,
  filterPickups,
  filterSuvs,
  filterAutos,
  priceAndYearOrder,
} from "../Redux/Actions";
import Card from "./Card";

export default function Home() {
  const dispatch = useDispatch();
  const allModels = useSelector((state) => state.models);
  const [, /*order*/ setOrder] = useState("");

  useEffect(() => {
    dispatch(getModels());
  }, [dispatch]);

  function handleAllModels(e) {
    e.preventDefault();
    dispatch(getModels());
  }

  function handleFilterPickups(e) {
    e.preventDefault();
    dispatch(filterPickups());
  }

  function handleFilterSuvs(e) {
    e.preventDefault();
    dispatch(filterSuvs());
  }

  function handleFilterAutos(e) {
    e.preventDefault();
    dispatch(filterAutos());
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(priceAndYearOrder(e.target.value));
    setOrder(e.target.value);
  }

  return (
    <>
      <div>
        <h1>Descubrí todos los modelos</h1>
        <label>Filtrar por</label>
        <button
          onClick={(e) => {
            handleAllModels(e);
          }}>
          Todos
        </button>
        <button
          onClick={(e) => {
            handleFilterAutos(e);
          }}>
          Autos
        </button>
        <button
          onClick={(e) => {
            handleFilterPickups(e);
          }}>
          Pickups y Comerciales
        </button>
        <button
          onClick={(e) => {
            handleFilterSuvs(e);
          }}>
          SUVs y Crossovers
        </button>
      </div>
      <div>
        <select
          onChange={(e) => {
            handleOrder(e);
          }}>
          <option>Nada</option>
          <option value='minprice'>De menor a mayor precio</option>
          <option value='maxprice'>De mayor a menor precio</option>
          <option value='masnuevo'>Más nuevos primero</option>
          <option value='masviejo'>Más viejos primero</option>
        </select>
        {allModels?.map((el, index) => {
          return (
            <div key={index}>
              <Card
                name={el.name}
                year={el.year}
                price={el.price}
                photo={el.photo}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
