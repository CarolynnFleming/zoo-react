import React from 'react';

export default function Sign(props) {
  return (<div className='chicken'>{
    props.openZoo
      ? 'Zoo Is Open'
      : 'Sorry Zoo Is Closed'
  }
  </div>);
}
