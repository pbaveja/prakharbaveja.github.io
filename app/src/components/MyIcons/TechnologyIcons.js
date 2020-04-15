import React from 'react';
import Icon from '@ant-design/icons';

const LaravelSvg = () => (
  <img src='https://laravel.com/img/logomark.min.svg' width='15'/>
);
const NodeJSSvg = () => (
  <img src='/images/nodejs.png' width='15'/>
);
const JavaScriptSvg = () => (
  <img src='/images/javascript.svg' width='15'/>
);
const ReactSvg = () => (
  <img src='/images/reactjs.svg' width='15'/>
);
const NextJSSvg = () => (
  <img src='https://nextjs.org/static/favicon/favicon-32x32.png' width='15'/>
);
const MySQLSvg = () => (
  <img src='/images/mysql.png' width='15'/>
);

const LaravelIcon = props => <Icon component={LaravelSvg} {...props} />;
const NodeJSIcon = props => <Icon component={NodeJSSvg} {...props} />;
const JavaScriptIcon = props => <Icon component={JavaScriptSvg} {...props} />;
const ReactIcon = props => <Icon component={ReactSvg} {...props} />;
const NextJSIcon = props => <Icon component={NextJSSvg} {...props} />;
const MySQLIcon = props => <Icon component={MySQLSvg} {...props} />;
export {
	LaravelIcon,
	NodeJSIcon,
	JavaScriptIcon,
	NextJSIcon,
	ReactIcon,
	MySQLIcon
}
