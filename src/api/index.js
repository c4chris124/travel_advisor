import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlaces = async (bounds) => {
  try {
    const {
      data: { data }
    } = await axios.get(URL, {
      params: {
        bl_latitude: bounds.sw.lat,
        bl_longitude: bounds.sw.lng,
        tr_longitude: bounds.ne.lng,
        tr_latitude: bounds.ne.lat,
        // bl_latitude: '11.847676',
        // tr_latitude: '12.838442',
        // bl_longitude: '109.095887',
        // tr_longitude: '109.149359',
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '96a3eb31a5mshd7bc0c68fcef919p1bda4fjsnf47194a0b8a9'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
