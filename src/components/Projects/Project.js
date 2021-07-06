// @flow strict
import React from 'react';
// import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Project.module.scss';
import Card from '../Card';

type Props = {
  edges: Edges
};

const Project = ({ edges }: Props) => (
  <div className={styles['project']}>
    {edges.map((edge) => (
        <Card data={edge.node}/>
    ))}
  </div>
);

export default Project;
