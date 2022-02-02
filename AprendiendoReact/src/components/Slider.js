import React from 'react';

class Slider extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div id="slider" className="slider-big">
                <h1>{this.props.tittle}</h1>
                <a href="blog.html" className="btn-white">{this.props.btn}</a>
            </div>
        );
    }
}

export default Slider;