import React from 'react';

export default function AnimalEmoji(props) {
  return <span className='da'>
    {props.animal === 'whale' && '🐳'}
    {props.animal === 'peacock' && '🦚'}
    {props.animal === 'squid' && '🦑'}
    {props.animal === 'fox' && '🦊'}
  </span>;
}
