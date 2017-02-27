import React, { Component } from 'react';

// div.stacked-photos contains the same photos as section 1 and 3, but I could not figure out how to 
// get them to stay on the same line after making div.collage flex-direction: column. 
// There a may be a way, but for now this was quicker, and makes no more requests than usual.
export default class PhotoCollage extends Component {
	render() {
		return (
			<div className="collage">
				<div className="photo-section photo-section-1 non-stacked">
					<div className="photo-container photo-container-1"><img src={this.props.photos[0]} className="photo photo-1" /></div>
					<div className="photo-container photo-container-2"><img src={this.props.photos[1]} className="photo photo-2" /></div>
				</div>
				<div className="photo-section photo-section-2">
					<div className="photo-container photo-container-3"><img src={this.props.photos[2]}className="photo photo-3" /></div>
				</div>
				<div className="photo-section photo-section-3 non-stacked">
					<div className="photo-container photo-container-4"><img src={this.props.photos[3]}className="photo photo-4" /></div>
					<div className="photo-container photo-container-5"><img src={this.props.photos[4]}className="photo photo-5" /></div>
				</div>
				<div className="stacked-photos">
					<div className="photo-section photo-section">
						<div className="photo-container photo-container-1"><img src={this.props.photos[0]} className="photo photo-1" /></div>
						<div className="photo-container photo-container-2"><img src={this.props.photos[1]} className="photo photo-2" /></div>
					</div>
					<div className="photo-section photo-section">
						<div className="photo-container photo-container-4"><img src={this.props.photos[3]}className="photo photo-4" /></div>
						<div className="photo-container photo-container-5"><img src={this.props.photos[4]}className="photo photo-5" /></div>
					</div>
				</div>
			</div>
		)
	}
}