import React, { Component } from 'react';
import image from '../../images/profile.png';

import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <body classname="About-Body">
          <div className="row">
            <div className="col-md-7">
            <h3> About Me </h3>
              <p>
              Katie Lacy was born in 1998 and raised in the Northwest Suburbs of Chicago.
              Best Known for her portraiture in graphite and colored pencil, she
              captures her subjects in a minimalistic and contrast heavy way.
              </p>
              <p>
              Katie has been drawing for as long as she can remember and has always
              had an intense passion for art. Influencing forces in her artistic career
              have been the works of George Bellows, Toulousse Lautrec, and one of her
              teachers from Main Street Art Center, Karen Sako.
              </p>
              <p>
              Though art is her passion, she also has a love for mathematics in its many forms.
              She is a sophomore working on a bachelors of science in Mathematics and Computer Science at
              the Univeristy of Illinois in Urbana Champaign. Waiting patiently for
              graduation day, she seeks to work in the financial industry and to own a small
              art studio of her own.
              </p>
            </div>
            <div className="col-md-5">
              <img src={image} classname="image"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
            <h3>
              Say Hello!
            </h3>
            <p>
              <a href="mailto:klacy255@gmail.com" target="_top" id="email">Email Me </a>
               with questions about pieces for sale, a piece you would like me commission, or even what your favorite animal is.
              Or, message me on  <a target="_blank" href="https://www.instagram.com/kindalacy/?hl=en">
              Instagram</a>. Also check out my
              <a target="_blank" href="https://www.youtube.com/channel/UC9NSyewomOT5Yt-lMefIOgA?view_as=subscriber"> Youtube Channel </a>
              to see my drawing process.
            </p>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default About;
