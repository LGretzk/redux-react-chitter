// API interface for loading peeps
export const fetchPeeps = async () => {
  try {
    const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
    if(response.ok) {
      const data = await response.json();
      return data;
    } throw new Error('Request failed');
  } catch (error) {
    console.log(error);
  }
};

// API interface for loading a peep by peepId
export const fetchPeep = async (peepId) => {
  try {
    const response = await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`);
    if(response.ok) {
      const data = await response.json();
      return data;
    } throw new Error ('Request failed');
  } catch (error) {
    console.log(error);
  }
};