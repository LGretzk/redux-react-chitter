import React, {useState, useEffect} from 'react';
import {fetchPeeps} from '../../apis/peep';
import PeepForm from '../../components/PeepForm/PeepForm';
import PeepCard from '../../components/Peep/PeepCard';

function Peeps() {
  const [peeps, setPeeps] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await fetchPeeps();
      setPeeps(response);
    }
    load();
  }, []);

  return (
    <div>
      <h1>This is the peeps page</h1>
      <div>
        <PeepForm/>
      </div>
      <div>
        {peeps.map(peep => <PeepCard data={peep} key={peep.id}/>)}
      </div>
    </div>
  );
}

export default Peeps;

// Each peep
// {
// body: "terry test"
// created_at: "2022-06-06T09:30:32.469Z"
// id: 1426
// likes: Array []
// updated_at: "2022-06-06T09:30:32.469Z"
// user: Object { id: 1091, handle: "terry" }
// handle: "terry"
// id: 1091
// }
// Peeps = array of objects