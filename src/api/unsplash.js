import axios from "axios";

const accessKey = 'SAUJXyyHyKcDdLc2rp7i3cAFCF-kqD8jpynhvHZbUqk';
const baseURL = 'https://api.unsplash.com';
export default axios.create({
  baseURL,
  headers: {
    Authorization: `Client-ID ${accessKey}`
  }
})