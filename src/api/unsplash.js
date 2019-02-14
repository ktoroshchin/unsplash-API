import axios from 'axios';


const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: 'Client-ID 9eb5105a9e26b94c18bde69dfea46a48fb322201c183e5faebcca22848e9839b',
    }
  })

export default unsplash;