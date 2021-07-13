// @flow strict
import React, { useState } from 'react';
import styles from './Card.module.scss';
import TechTag from '../TechTag/TechTag';
import Icon from '../Icon';
import { getIcon } from '../../utils';

const Card = ({ data }) => {
	console.log(data)
	const [isDetailsOpen, toggleDetails] = useState(false);
	return (
	  <div className={styles["card"]}>
	    {
	    	data.cover && <img src={data.cover} alt="Avatar" style={{'width':'100%', borderTopRightRadius: '6px',borderTopLeftRadius: '6px'}} />
	    }
	    <div className={styles["container"]}>
	      <div className={styles["title_container"]}>
	      	<p className={styles["title"]}>{data.title}</p>
	      	<span onClick={() => toggleDetails(true)} className={styles["pointer"]}><Icon name={'info'} icon={getIcon('info')} /></span>
	      </div>
	      {data.technologyTags.map(tag => {
	        return <TechTag tag={tag}/>
	      })}
	    </div>
	    <div className={isDetailsOpen ? styles["card-reveal"] +' '+ styles["reveal"] : styles["card-reveal"]}>
	        <div className={styles["card-reveal-box"]}>
	        <div className={styles["title_container"]}>
	        	<span className={styles["pointer"]}>Details</span>
	        	<span className={styles["pointer"]} onClick={() => toggleDetails(false)}><Icon name={'close'} icon={getIcon('close')} /></span>
	        </div>
	        </div>
	    </div>
	  </div>
	)
}

export default Card;