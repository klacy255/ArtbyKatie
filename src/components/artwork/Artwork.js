import React, { Component } from 'react';
import Masonry from "react-responsive-masonry"

import './Artwork.css';
import delilah from '../../images/delilah.png';
import iris from '../../images/iris.jpeg';
import jasmine from '../../images/jasmine.png';

import rei from '../../images/rei.png';
import twins from '../../images/twins.png';
import jane from '../../images/jane.png';

import timothy from '../../images/timothy.png';
import marcus from '../../images/marcus.png';
import relaxed from '../../images/relaxed.png';

import sketch from '../../images/sketch.png';
import abstract from '../../images/abstract.png';
import nature from '../../images/nature.png';

const images = [delilah, twins, jasmine, rei,iris, jane, timothy, marcus, relaxed,sketch, abstract, nature];
class Artwork extends Component {
  render() {
    return (
      <div className="Artwork">
        <Masonry columnsCount={4} gutter="10px">
              {images.map((image, i) => (
                  <img
                      key={i}
                      src={image}
                      style={{width: "100%", display: "block"}}
                  />
              ))}
          </Masonry>
      </div>
    );
  }
}

export default Artwork;
