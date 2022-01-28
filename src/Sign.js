import React from 'react';

export default function Sign(props) {
  return (<div>{
    props.openZoo
      ? 'Zoo Is Open'
      : 'Sorry Zoo Is Closed'
  }
  <div>
    {props.openZoo && 'this only shows when props.openZoo is truthy'}
    {props.openZoo || 'this only shows when props.openZoo is falsey'}
  </div>
  </div>);
}
