import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getModels,
  filterPickups,
  filterSuvs,
  filterAutos,
  priceAndYearOrder,
} from "../Redux/Actions";
import styles from "./styles/Home.module.css";
import Card from "./Card";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loading from './Loading';
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const allModels = useSelector((state) => state.models);
  const [, /*order*/ setOrder] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    dispatch(getModels());
    setTimeout(() => {
      setLoader(false);
  }, 1000);
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
      <NavBar />
      <div className={styles.divContainer}>
        <h1 className={styles.h1}>Descubrí todos los modelos</h1>
        <div className={styles.divButtons1}>
          <div className={styles.divButtons2}>
            <p className={styles.p}>Filtrar por</p>
            <button
              className={styles.btn}
              onClick={(e) => {
                handleAllModels(e);
              }}>
              Todos
            </button>
            <button
              className={styles.btn}
              onClick={(e) => {
                handleFilterAutos(e);
              }}>
              Autos
            </button>
            <button
              className={styles.btn}
              onClick={(e) => {
                handleFilterPickups(e);
              }}>
              Pickups y Comerciales
            </button>
            <button
              className={styles.btn}
              onClick={(e) => {
                handleFilterSuvs(e);
              }}>
              SUVs y Crossovers
            </button>
          </div>
          <select
            className={styles.sel}
            onChange={(e) => {
              handleOrder(e);
            }}>
            <option>Ordenar por</option>
            <option value='minprice'>De menor a mayor precio</option>
            <option value='maxprice'>De mayor a menor precio</option>
            <option value='masnuevo'>Más nuevos primero</option>
            <option value='masviejo'>Más viejos primero</option>
          </select>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.divCards}>
        {
        loader ? (
          <Loading />
      ) :
        allModels?.map((el, index) => {
          return (
            <>
              <div key={index}>
                <Card
                  name={el.name}
                  year={el.year}
                  price={el.price}
                  photo={el.photo}
                />
                <Link to={"/" + el.id}>
                  <button className={styles.btnmodel}>Ver Modelo</button>
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
