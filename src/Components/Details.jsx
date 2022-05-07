import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { detailModel } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import Footer from "./Footer";
//import styles from './Details.module.css'

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailsModel = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(detailModel(id));
  }, [dispatch, id]);

  return (
    <>
      <NavBar />
      <div>
        <div>
          <img src={detailsModel.photo} alt='img' />
          <h3>{detailsModel.name}</h3>
          <h1>{detailsModel.title}</h1>
        </div>
        <div>
          {detailsModel.model_features?.map((element, index) => {
            return (
              <>
                <div key={index}>
                  <img src={element.image} alt='img' />
                  <h3>{element.name}</h3>
                  <p>{element.description}</p>
                </div>
              </>
            );
          })}
        </div>
        <div>
          {detailsModel.model_highlights?.map((element, index) => {
            return (
              <>
                <div key={index}>
                  <h3>{element.title}</h3>
                  <p>{element.content}</p>
                  <img src={element.image} alt='img' />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Link to='/'>
        <button>Regresar</button>
      </Link>
      <Footer />
    </>
  );
}
