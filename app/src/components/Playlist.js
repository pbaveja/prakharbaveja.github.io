import React from "react";

function Card(props) {
	return (
		<div onClick={() => { props.handleClick(props.title) } } className="card-custom mt-2 mb-0 rounded pointer">
			<div className="card-custom-infos p-3 rounded">
				{/*<img src={ props.img } className='img-fluid' style={{maxWidth: '40px'}} alt={props.title} />*/}
				<div>
					<h2 className='text-left'>{props.title}</h2>
					<p className='source-code-pro text-left'>{props.description !== '' ? props.description : 'No description'}</p>
				</div>
				<button className='playlist-play-btn'><i className='fas fa-play text-blue'></i></button>
				{/*<h2 className="card-custom-pricing"></h2>
				<img src="https://kitt.lewagon.com/placeholder/users/krokrob" className="card-custom-user avatar-bordered" />*/}
			</div>
		</div>
	);
}
export default Card