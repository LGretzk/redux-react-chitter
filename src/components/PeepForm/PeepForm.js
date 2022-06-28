import { postPeep } from "../../apis/peep";
import { useNavigate } from 'react-router-dom';

function PeepForm() {

  const nav = useNavigate();
  let sessionKey = sessionStorage.getItem('sessionKey');
  let userId = sessionStorage.getItem('userId');

  const handleSubmitPeep = async (event) => {
    event.preventDefault();
    const response = await postPeep(event.target);
    console.log(response);
    console.log('Peep posted');
  }

  const handleFocus = () => {
    if (!sessionKey) {
      nav("/login");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmitPeep}>
        <input type="text" name="message" placeholder="What's on your mind?" onFocus={handleFocus}></input>
        <input type="hidden" name="sessionKey" value={sessionKey || ''}></input>
        <input type="hidden" name="userId" value={userId || ''}></input>
        <button type="submit">Peep</button>
      </form>
    </div>
  );
}

export default PeepForm;