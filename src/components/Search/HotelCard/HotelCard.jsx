import React from 'react'

import styles from "./HotelCard.module.css";


export default function HotelCard({ nombre, ciudad, urlimagen, popularidad, eventHandler }) {
  return (
    <div className={styles.todo} onClick={eventHandler}>
      <div className={styles.body}>
        <div className={styles.Media} >
          <div className={styles.Image} >

            <a href="./reserve">
              <img src={urlimagen} className={styles.Image} />
            </a>

          </div>

          <div className={styles.Nombre}>{nombre}</div>
          <div className={styles.Ciudad}>Ciudad: {ciudad}</div>
          <div className={styles.Ciudad}>Rating:{popularidad}/10</div>



        </div>
      </div>
    </div>
  )
}
