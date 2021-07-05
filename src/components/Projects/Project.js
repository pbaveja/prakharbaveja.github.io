// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Project.module.scss';

type Props = {
  edges: Edges
};

const Project = ({ edges }: Props) => (
  <div className={styles['project']}>
    {edges.map((edge) => (
      <div className={styles['project__item']} key={edge.node.id}>
        <h2 className={styles['project__item-title']}>
        	<span className={styles['project__item-title-link']}>{edge.node.title}</span>
        </h2>
        <div className={styles['feed__item-meta']}>
        	{edge.node.technologyTags.map((tag) => (
	        	<span className={styles['feed__item-meta-category']}>
		            <Link to={"/category/" + tag} className={styles['project__item-meta-category-link']}>{tag}</Link>&nbsp;&nbsp;
		        </span>
	        ))}
        </div>
        <span className={styles['project__item-meta-divider']} />
      </div>
    ))}
  </div>
);

export default Project;
