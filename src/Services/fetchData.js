import axios from 'axios';
const limit = 8;

axios.defaults.baseURL = 'https://6521c105a4199548356d8c57.mockapi.io';
export async function fetchData(page) {
 try {
  const { data } = await axios.get(
   `/carRenralInfo/carRentalInfo?limit=${limit}&page=${page}`
  );
  return data;
 } catch (error) {
  console.log(error.message);
 }
}

export default fetchData;
