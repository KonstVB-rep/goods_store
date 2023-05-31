import axios from "axios";

export async function productsData() {
  try {
    const response = await axios.get(
      "https://fakestoreapiserver.reactbd.com/walmart"
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
