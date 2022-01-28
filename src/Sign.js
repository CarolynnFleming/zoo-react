import React from 'react';

export default function Sign(props) {
  return (<div>{
      props.openZoo
      ? 'Zoo Is Open'
      : 'Sorry Zoo Is Closed'
      }
      <div>
          {props.zooOpen && 'this only shows when props.zooOpen is truthy'}
          {props.zooOpen && 'this only shows when props.zooOpen is falsey'}
      </div>
  </div>);
}
