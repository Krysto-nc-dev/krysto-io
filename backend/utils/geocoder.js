import NodeGeocoder from "node-geocoder";
import dotenv from "dotenv";

dotenv.config();

const options = {
  provider: process.env.GEOCODER_PROVIDER || 'mapquest',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
};

const geocoder = NodeGeocoder(options);

export default geocoder;
