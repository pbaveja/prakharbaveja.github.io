// @flow strict
import React from 'react';
import styles from './TechTag.module.scss';
const TechTag = ({ tag }) => {
	const tagDetails = (tag) => {
		switch(tag) {
			case 'ReactJS':
				return <span className={styles["smalltag"]}>{tag}</span>;
			break;
			default:
				return <span className={styles["smalltag"]}>{tag}</span>;
			break;
		}
	};

	return (
	  <span>{tagDetails(tag)} &nbsp;&nbsp;</span>
	);
}

export default TechTag;