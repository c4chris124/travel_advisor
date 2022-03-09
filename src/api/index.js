import axios from "axios";

export const getPlaces = async (type, bounds) => {
  try {
    const {
      data: { data }
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: bounds.sw.lat,
        bl_longitude: bounds.sw.lng,
        tr_longitude: bounds.ne.lng,
        tr_latitude: bounds.ne.lat,
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
