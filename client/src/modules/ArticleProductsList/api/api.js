import axios from 'axios';
import { defer } from 'react-router-dom';

export async function getData() {
  try {
    const response = await axios.get('https://fakestoreapiserver.reactbd.com/walmart');
    return response.data;
  } catch (error) {
    const errorObj = error.toJSON();
    throw new Response('', {
      statusText: errorObj.message,
    });
  }
}

export async function productsData() {
  return defer({
    data: getData(),
  });
}
