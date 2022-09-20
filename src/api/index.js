import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    console.log(sw, ne)
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "74e9024eafmsha8ed17ee4ee488bp1886ffjsnd5e8c136d888",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};
