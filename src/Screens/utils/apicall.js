import moment from 'moment';
import axios from 'axios';

const sendCords = async coords => {
  console.log('coordinates inside api call', coords);
  const timestamp = moment().format('DD/MM/YYYY, h:mm:ss A');

  const url = `https://verticals.knestcrm.com/api/method/verticals_erp.api.create_location`;

  const {latitude, longitude} = coords;

  const params = {
    lat: latitude,
    long: longitude,
    time: timestamp,
  };

  try {
    const {data} = await axios({
      method: 'get',
      url: url,
      params,
    }).catch(function (error) {
      if (error.response) {
        console.log('error', error.response.status);
      }
      // else if (error.request) {

      //   // console.log("err req",error.request);
      // } else {
      //   // console.log('sett Error', error.message);
      // }
      // console.log("who",error.config);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default sendCords;
