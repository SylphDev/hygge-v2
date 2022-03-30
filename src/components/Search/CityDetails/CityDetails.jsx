import React from 'react'

import styles from "./CityDetails.module.css";


export default function CityCard({nombre, descripcion, urlimagen}) {
  return (
    
    <div className={styles.todo}>
        <div className={styles.body}>
      <div className={styles.Media} >
        <div className={styles.Image} >

           
            <img src={urlimagen} className={styles.Image}/>
          
    
        </div>  

        <div className={styles.Nombre}>{nombre}</div>
        <div className={styles.Descripcion}>{descripcion}</div>
       
    

      </div>
      </div>
    </div>
  )
}
