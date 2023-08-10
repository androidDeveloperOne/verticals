const {default: sendCords} = require('./apicall');

const HeadlessTask = async event => {
  let params = event.params;
  switch (event.name) {
    case 'location':
      try {
        if (params?.coords) {
          sendCords(params?.coords);
        }
      } catch (error) {
        console.log(error);
        return;
      }
      console.log(
        '[BackgroundGeolocation HeadlessTask] - :',
        params?.coords?.latitude,
        'hey',
        params?.coords?.longitude,
      );
      break;
  }
};

export default HeadlessTask;
