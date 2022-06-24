import React from 'react';

function PeepCard(props) {
  const {data} = props;

  return (
    <div cassName="peep-container">
      <p>{data.body}</p>
      <p>{data.user.handle}</p>
      <p>{data.created_at}</p>
    </div>
  );
}

export default PeepCard;