import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { detailModel } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from './styles/Details.module.css'

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
      <div className= {styles.divContainer}>
        <div className= {styles.div1}>
          <div>
            <img src={detailsModel.photo} alt='img' />
          </div>
          <div>
            <p className= {styles.p1}>{detailsModel.name}</p>
            <p className= {styles.p2}>{detailsModel.title}</p>
            <p className= {styles.p3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum repellat laudantium nulla nemo? Itaque, provident quibusdam dolor enim, dicta perferendis doloribus inventore veniam consectetur, ut reiciendis corrupti qui temporibus.</p>
          </div>
        </div>
        <div className= {styles.div2}>
          {detailsModel.model_features?.map((element, index) => {
            return (
              <>
                <div key={index}>
                  <img className= {styles.image} src={element.image} alt='img' />
                  <p className= {styles.pName}>{element.name}</p>
                  <p className= {styles.pDescription}>{element.description}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className= {styles.div3}>
          {detailsModel.model_highlights?.map((element, index) => {
            return (            
              <>
                <div key={index} className={index % 2 === 0? styles.leftHighlights: styles.rightHighlights}>
                  <div className={styles.divContainerHighlights}>
                    <p className= {styles.pTitle}>{element.title}</p>
                    <p className= {styles.pContent}>{element.content}</p>
                  </div>
                  <div>
                    <img className= {styles.image2} src={element.image} alt='img' />
                  </div>
                </div>            
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
