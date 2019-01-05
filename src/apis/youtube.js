import axios from "axios";

const KEY = "AIzaSyD_ffTT8P1iOsmZEIeEXpMg8O5dDEezqYs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
