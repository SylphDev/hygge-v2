import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setHutsAction } from '../../../redux/actions/actions';

import styles from "./HotelCard.module.css";


export default function HotelCard({ nombre, ciudad, urlimagen, popularidad, eventHandler, hut }) {
  const dispatch = useDispatch();
  const huts = useSelector(state => state.huts)

  const sendHutInfo = () => {
    dispatch(setHutsAction(hut))
  }
  return (
    <div className={styles.todo} onClick={eventHandler}>
      <div className={styles.body}>
        <div className={styles.Media} >
          <div className={styles.Image} >

            <Link onClick={sendHutInfo} to={`/search/${hut.name}`}>
              <img src={urlimagen} className={styles.Image} />
            </Link>
          </div>

          <div className={styles.Nombre}>{nombre}</div>
          <div className={styles.Ciudad}>Ciudad: {ciudad}</div>
          <div className={styles.Ciudad}>Rating:{popularidad}/10</div>



        </div>
      </div>
    </div>
  )
}
