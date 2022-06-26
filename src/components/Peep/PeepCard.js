import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { deletePeep } from "../../apis/peep"

import './PeepCard.css';

function PeepCard(props) {
  const {data} = props;
  let sessionKey = sessionStorage.getItem('sessionKey');
  let sessionUserId = parseInt(sessionStorage.getItem('userId'));

  const handleClick = async () => {
    await deletePeep(sessionKey, data.id);
    console.log("Peep deleted");
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
      { sessionUserId === data.user.id && <Button onClick={handleClick}/> }
    </div>
  );
}

export default PeepCard;