import React from 'react';
import { Link } from 'react-router-dom';

import './PeepCard.css';

function PeepCard(props) {
  const {data} = props;

  return (
    <Link to={`/peeps/${data.id}`}>
      <div className="peep-container">
        <p>{data.body}</p>
        <p>{data.user.handle}</p>
        <p>{data.created_at}</p>
      </div>
    </Link>
  );
}

export default PeepCard;