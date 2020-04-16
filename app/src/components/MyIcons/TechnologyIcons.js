import React from 'react';
import Icon from '@ant-design/icons';

const LaravelSvg = () => (
  <img alt='laravel' src='https://laravel.com/img/logomark.min.svg' width='15'/>
);
const NodeJSSvg = () => (
  <img alt='nodejs' src='/images/nodejs.png' width='15'/>
);
const JavaScriptSvg = () => (
  <img alt='js' src='/images/javascript.svg' width='15'/>
);
const ReactSvg = () => (
  <img alt='react' src='/images/reactjs.svg' width='15'/>
);
const NextJSSvg = () => (
  <img alt='next' src='https://nextjs.org/static/favicon/favicon-32x32.png' width='15'/>
);
const MySQLSvg = () => (
  <img alt='mysql' src='/images/mysql.png' width='15'/>
);
const MongoDBSvg = () => (
  <img alt='mongodb' src='/images/mongodb.png' width='20'/>
);

const LaravelIcon = props => <Icon component={LaravelSvg} {...props} />;
const NodeJSIcon = props => <Icon component={NodeJSSvg} {...props} />;
const JavaScriptIcon = props => <Icon component={JavaScriptSvg} {...props} />;
const ReactIcon = props => <Icon component={ReactSvg} {...props} />;
const NextJSIcon = props => <Icon component={NextJSSvg} {...props} />;
const MySQLIcon = props => <Icon component={MySQLSvg} {...props} />;
const MongoDBIcon = props => <Icon component={MongoDBSvg} {...props} />;
export {
	LaravelIcon,
	NodeJSIcon,
	JavaScriptIcon,
	NextJSIcon,
	ReactIcon,
	MySQLIcon,
	MongoDBIcon
}
