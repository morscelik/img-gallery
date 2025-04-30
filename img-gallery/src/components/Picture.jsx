import React, { Component } from 'react'
import data from '../helper/data.js'

const url = data.map((e) => e.src.large);
const photographer = data.map((e) => e.photographer);

export default class Picture extends Component {
  render() {
    return (
      <>
        <img src={url[0]} alt="" />
        <div className="card-body">
          <p className="card-text">
            {photographer[0]}
          </p>
        </div>
      </>
    );
  }
}
