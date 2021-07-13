// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Projects from '../components/Projects';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { AllProjectsJson } from '../types';

type Props = {
  data: AllProjectsJson
};

const IndexTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const { edges } = data.allProjectsJson;

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <Projects edges={edges} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate {
    allProjectsJson(sort: {fields: order}) {
      totalCount
      edges {
        node {
          id
          link
          logo
          technologyTags
          title
          cover
        }
      }
    }
  }
`;

export default IndexTemplate;
