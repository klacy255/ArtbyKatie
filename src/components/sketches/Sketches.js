import React, { Component } from 'react';
import './Sketches.css';

import setup from '../../images/setup.jpeg';

class Sketches extends Component {
  render() {
    return (
      <div className="Sketches">
        <div className="row">
          <div className="col-md-6">
            <img src={setup} classname="image"/>
          </div>
          <div className="col-md-6">
            <h3> Youtube and More</h3>
            <p>
                Approximately every week I post a new video of a piece I create along with
            some tips for beginning artists learning to draw portraits. You can find my channel
              <a target="_blank" href="https://www.youtube.com/channel/UC9NSyewomOT5Yt-lMefIOgA?view_as=subscriber"> here </a>.
            I am also open to making videos on art topics that you request! If you have a portrait you want to see drawn
            or a specific technique or type of portrait(for example: cross hatching shading, portrait techniques when drawing children, or how to draw with just one pencil)
            I would gladly look into that.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sketches;
