import React, { /*useState,*/ useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getModels, filterPickups, filterSuvs } from '../Redux/Actions';
import Card from './Card'

export default function Home() {
  const dispatch = useDispatch();
  const allModels = useSelector((state) => state.models);

  useEffect(() => {    
    dispatch(getModels());      
  }, [dispatch])

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



  return (
    <>
      <div>
        <h1>Descubrí todos los modelos</h1>
        <p>Filtrar por</p>
        <button onClick = {e => {handleAllModels(e)}}>Todos</button>
        <button>Autos</button>
        <button onClick = {e => {handleFilterPickups(e)}}>Pickups y Comerciales</button>
        <button onClick = {e => {handleFilterSuvs(e)}}>SUVs y Crossovers</button>
      </div>
      <div>
        <select>
          <option>Nada</option>
          <option value="menor">De menor a mayor precio</option>
          <option value="mayor">De mayor a menor precio</option>
          <option value="nuevo">Más nuevos primero</option>
          <option value="viejo">Más viejos primero</option>
        </select>      
        {
          allModels?.map((el, index) => {
            return (
              <div key= {index}>
                <Card            
                  name= {el.name}
                  year= {el.year}
                  price= {el.price}
                  photo= {el.photo}                
                />
              </div>
            ) 
          })
        }
      </div>
    </>
  )
}

