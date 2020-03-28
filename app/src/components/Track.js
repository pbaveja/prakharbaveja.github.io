import React from "react";

function Track(props) {
	return (
		<div className='playlist-track rounded-top'>
	        <div className='playlist-track-details d-flex justify-content-start align-items-center'>
	            <img src={props.track.track.album.images[0].url} className="card-custom-user avatar-bordered" alt={props.track.track.name}/>
				<div className='text-left flex-grow-1'>
	                <p className='my-0 ml-2 font-regular'>{props.track.track.name}</p>
	                <p className='playlist-artist text-gray my-0 px-2 pb-1 font-regular'>{props.track.track.artists[0].name}</p>
	            </div>
	            <button className='track-play-btn'><i className='fas fa-play text-gray'></i></button>
	        </div>
	    </div>
	);
}
export default Track