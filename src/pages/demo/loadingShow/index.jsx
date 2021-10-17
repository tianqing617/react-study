import React, { Component } from 'react'
import { Loading } from '../../../components';

export default class LoadingShow extends Component {
  render() {
    return (
      <div className="loading-show">
        <Loading />
      </div>
    )
  }
}
