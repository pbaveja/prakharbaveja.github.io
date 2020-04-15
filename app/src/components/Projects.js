import React from 'react';
import { Col, Card, Avatar, Tag } from 'antd';
import { LaravelIcon, NodeJSIcon, JavaScriptIcon, ReactIcon, NextJSIcon, MySQLIcon } from './MyIcons/TechnologyIcons';
import { laravelColor, reactJSColor, nextJSColor, mySQLColor, javascriptColor, nodeJSColor } from './MyIcons/technologyColors';
import { MailOutlined, RocketOutlined, DownSquareOutlined } from '@ant-design/icons';

const { Meta } = Card;

function Projects(props) {
	const projects = [
		{
			title: 'Hubhopper Studio',
			description: 'A podcast hosting platform catered for the Indian creators, handling creation, RSS generation, distribution and anlytics all under one roof.',
			cover: '/images/hh-studio.png',
			logo: 'https://files.hubhopper.com/podcast/12854/hubhopper-studio.jpg',
			link: 'https://studio.hubhopper.com',
			technologyTags: [
				<Tag style={{color: laravelColor }} className='rounded-tag'>
			    	<LaravelIcon style={{verticalAlign: 'middle'}}/> Laravel
			    </Tag>,
			    <Tag style={{color: reactJSColor }} className='rounded-tag'>
			    	<ReactIcon style={{verticalAlign: 'middle'}}/> ReactJS
			    </Tag>,
			    <Tag style={{color: mySQLColor }} className='rounded-tag'>
			    	<MySQLIcon style={{verticalAlign: 'middle'}}/> MySQL
			    </Tag>
			]
		},
		{
			title: 'Hubhopper Editor',
			description: 'Feature rich browser based audio editor where you can import, record, trim, split, fade in/out and a lot more. Inspired by the demand for easy audio manipulation.',
			cover: '/images/hh-audio-editor.png',
			logo: '/images/hh-editor-logo.png',
			link: 'https://studio.hubhopper.com/editor',
			technologyTags: [
			    <Tag style={{color: javascriptColor }} className='rounded-tag'>
			    	<JavaScriptIcon style={{verticalAlign: 'middle'}} /> JavaScript
			    </Tag>
			]
		},
		{
			title: 'Boilerplate MERN stack app for SAAS products.',
			description: 'Contributed to the open source project used for SAAS platforms having the need for ACL permissions with teams/users. Using the MERN stack with NextJS.',
			link: 'https://saas-app.builderbook.org/login',
			logo: 'https://storage.googleapis.com/async-await/async-favicon32.png', 
			cover: 'https://user-images.githubusercontent.com/26158226/61417515-2891dd00-a8ac-11e9-9c08-0d1adef43c5b.png',
			technologyTags: [
			    <Tag style={{color: nodeJSColor }} className='rounded-tag'>
			    	<NodeJSIcon style={{verticalAlign: 'middle'}} /> NodeJS
			    </Tag>
			]
		},
		{
			title: 'Hubhopper Web',
			description: 'A podcast consumption web app catered for India. Showcasing featured, popular and upcoming podcasts. Hubhopper is india\'s largest podcast directory with over 50 milion hours of content.',
			cover: '/images/hh-web.png',
			logo: 'https://hubhopper.com/static/favicon.ico',
			link: 'https://hubhopper.com',
			technologyTags: [
				<Tag style={{color: nodeJSColor }} className='rounded-tag'>
			    	<NodeJSIcon style={{verticalAlign: 'middle'}} /> NodeJS
			    </Tag>,
			    <Tag style={{color: reactJSColor }} className='rounded-tag'>
			    	<ReactIcon style={{verticalAlign: 'middle'}}/> ReactJS
			    </Tag>
			]
		},
		{
			title: 'Enhans',
			description: 'Made the porfolio website for the Enhans project that is a collaboration between 8 students from Srishti School of Art, Design and Technology and NIMHANS, dealing with doctor patient communication',
			cover: '/images/enhans-cover.png',
			logo: '/images/enhans.jpg',
			link: 'https://enhans.co.in/',
			technologyTags: [
			    <Tag style={{color: nodeJSColor }} className='rounded-tag'>
			    	<NodeJSIcon style={{verticalAlign: 'middle'}} /> NodeJS
			    </Tag>,
			    <Tag style={{color: reactJSColor }} className='rounded-tag'>
			    	<ReactIcon style={{verticalAlign: 'middle'}}/> ReactJS
			    </Tag>,
			    <Tag style={{color: nextJSColor }} className='rounded-tag'>
			    	<NextJSIcon style={{verticalAlign: 'middle'}}/> NextJS
			    </Tag>
			]
		},
		{
			title: 'HTML5 Asteroid Game',
			description: 'Recreating the retro Asteroid game in HTML5 and JS. Intially developed by Atari.',
			link: 'https://pbaveja.github.io/HTML5-Asteroid-Game/',
			cover: '/images/asteroids.png',
			logo: '',
			technologyTags: [
			    <Tag style={{color: javascriptColor }} className='rounded-tag'>
			    	<JavaScriptIcon style={{verticalAlign: 'middle'}} /> JavaScript
			    </Tag>
			]	
		},
		{
			title: 'Node Gmail',
			description: 'NodeJS script for all things email. Drafting, sending, listing. Integrated with the googleapis. And mail templating with nodemailer',
			link: 'https://github.com/pbaveja/node-gmail',
			technologyTags: [
			    <Tag style={{color: nodeJSColor }} className='rounded-tag'>
			    	<NodeJSIcon style={{verticalAlign: 'middle'}} /> NodeJS
			    </Tag>
			]
		},
		{
			title: 'XML Parser and Podcast Episode Downloader',
			description: 'NodeJS script for parsing an RSS into JSON and downloading all it\'s episodes into a folder. Displays progress and uses promises to avoid concurrent HTTP connections errors.',
			link: 'https://github.com/pbaveja/node-rss-parse-download',
			technologyTags: [
			    <Tag style={{color: nodeJSColor }} className='rounded-tag'>
			    	<NodeJSIcon style={{verticalAlign: 'middle'}} /> NodeJS
			    </Tag>
			]
		},
	];

	return projects.map(project => {
			let avatar = '';
			if (project.title === 'HTML5 Asteroid Game') {
				avatar = <RocketOutlined style={{ fontSize: '25px'}}/>;
			} else if (project.title === 'XML Parser and Podcast Episode Downloader') {
				avatar = <DownSquareOutlined style={{ fontSize: '25px'}}/>;
			} else if (project.logo) {
				avatar = <Avatar src={project.logo} />;
			} else {
				avatar = <MailOutlined style={{ fontSize: '25px'}}/>;
			}
			return (
				<Col xs={24} md={8} className='d-flex justify-content-center'>
					<Card
					className='m-3'
					onClick={()=> window.open(project.link, "_blank")}
					hoverable={true}
					style={{ width: 300, borderRadius: '5px' }}
					cover={ project.cover &&
						<img alt="Hubhopper Studio" src={project.cover}/>
					}
					>
					    <Meta
						className='text-left'
						avatar={ avatar }
						title={project.title}
						description={project.description}
					    />
					    <br/>

					    <div className='text-left'>
					    { project.technologyTags.map(tag => {
					    	return tag
					    }) }
					    </div>
					</Card>
				</Col>
			)
		})
}
export default Projects