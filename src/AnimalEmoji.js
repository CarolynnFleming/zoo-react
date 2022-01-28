import React from 'react';

export default function AnimalEmoji(props) {
  return <span>
    {props.animal === 'whale' && '🐳'}
    {props.animal === 'peacock' && '🦚'}
    {props.animal === 'squid' && '🦑'}
    {props.animal === 'fox' && '🦊'}
  </span>;
}
