import './style/main.scss';

import React, { Component, PropTypes } from 'react';
 
export default class Main extends Component {

    render() {
        return (
            <section className='content'>
              <section className='about'>
                <section>
                  Hello! My name is Filipa Lacerda and I am a web enthusiast.
                </section>
              </section>

              <section className='social-profiles'>
                <a href='https://github.com/Lacerda' target='_blank'>
                  <i className='fa fa-github-square'></i>
                </a>
                <a href='https://twitter.com/FilipaLacerda' target='_blank'>
                  <i className='fa fa-twitter-square'></i>
                </a>
                <a href='http://pt.linkedin.com/in/filipalacerda' target='_blank'>
                  <i className='fa fa-linkedin-square'></i>
                </a>
              </section>
            </section>
        );
    }
}
