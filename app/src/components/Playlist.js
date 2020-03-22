import React from "react";

function Card(props) {
	return (
		<div class="card-custom my-2 rounded">
			<div class="card-custom-infos p-3 rounded">
				{/*<img src={ props.img } className='img-fluid' style={{maxWidth: '40px'}} alt={props.title} />*/}
				<div>
					<h2>{props.title}</h2>
					<p className='source-code-pro'>{props.description !== '' ? props.description : 'No description'}</p>
				</div>
				<button className='playlist-play-btn'><i className='fas fa-play text-blue'></i></button>
				{/*<h2 class="card-custom-pricing"></h2>
				<img src="https://kitt.lewagon.com/placeholder/users/krokrob" class="card-custom-user avatar-bordered" />*/}
			</div>
		</div>
	);
}
export default Card