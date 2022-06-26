import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import './PeepCard.css';

function PeepCard(props) {
  const {data} = props;

  const handleClick = () => {
    console.log('button clicked')
  }

  return (
    <div>
    <Link to={`/peeps/${data.id}`}>
      <div className="peep-container">
        <p>{data.body}</p>
        <p>{data.user.handle}</p>
        <p>{data.created_at}</p>
      </div>
    </Link>
    <Button onClick={handleClick} />
    </div>
  );
}

export default PeepCard;