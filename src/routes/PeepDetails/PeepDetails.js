import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { fetchPeep } from '../../apis/peep';

function PeepDetails() {
  const { peepId } = useParams();
  const [peep, setPeep] = useState({});
  const [userHandle, setUserHandle] = useState("");

  useEffect(() => {
    async function load() {
      const response = await fetchPeep(peepId);
      setPeep(response);
      setUserHandle(response.user.handle);
    }
    load();
  }, [peepId]);

  return (
    <div>
      <h1>This is the individual peep's page</h1>
      <div className="peep-container">
        <p>{peep.body}</p>
        <p>{userHandle}</p>
        <p>{peep.created_at}</p>
      </div>
    </div>
  );
}

export default PeepDetails;