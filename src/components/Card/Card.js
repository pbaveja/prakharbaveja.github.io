// @flow strict
import React from 'react';
import styles from './Card.module.scss';

const Card = ({ data }) => (
  <div class={styles["card"]}>
    <img src={data.cover} alt="Avatar" style={{'width':'100%', borderTopRightRadius: '6px',borderTopLeftRadius: '6px'}} />
    <div class={styles["container"]}>
      <h4><b>{data.title}</b></h4> 
      {data.technologyTags.map(tag => {
        return <span>{tag} &nbsp;&nbsp;</span>
      })}
    </div>
  </div>
);

export default Card;