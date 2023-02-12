import React, { Component } from 'react'
import Ex1_banner from './Ex1_banner'
import Ex1_footer from './Ex1_footer'
import Ex1_header from './Ex1_header'

export default class Ex1_react extends Component {
  render() {
    return (
      <div>
            <Ex1_header />
            <Ex1_banner />
            <Ex1_footer /> 
      </div>
    )
  }
}
