import React  from 'react';

import { Row, Col, List, Avatar } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

function ContactInfo(props) {
	const data = [
		{
		    title: 'prakhar.baveja@gmail.com',
		    link: 'mailto:prakhar.baveja@gmail.com',
		    icon: <MailOutlined style={{verticalAlign: 'middle', fontSize: '20px'}}/>
		},
		{
		    title: 'Github',
		    link: 'https://github.com/pbaveja',
		    icon: <GithubOutlined style={{verticalAlign: 'middle', fontSize: '20px'}}/>
		},
		{
		    title: 'LinkedIn',
		    link: 'https://www.linkedin.com/in/prakhar-baveja-244907106/',
		    icon: <LinkedinOutlined style={{verticalAlign: 'middle', fontSize: '20px'}}/>
		},
		{
		    title: 'Instagram',
		    link: 'https://www.instagram.com/prakharbaveja',
		    icon: <InstagramOutlined style={{verticalAlign: 'middle', fontSize: '20px'}}/>
		},

	]
	return (
		<Row justify='center my-3'>
		<Col span={24}>
            <p className='text-md'>
            	Feel free to contact me through any of these mediums
            </p>
        </Col>
        <div className='d-flex'>
        	<List
        	className='text-left'
		    itemLayout="horizontal"
		    dataSource={data}
		    renderItem={item => (
		      <List.Item>
		        <div className='px-2'>{item.icon}</div>
		        <List.Item.Meta
		          title={<a href={item.link}>{item.title}</a>}
		        />
		      </List.Item>
		    )}
		  />
        </div>
        </Row>
	)
}
export default ContactInfo