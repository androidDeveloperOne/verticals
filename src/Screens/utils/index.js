import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

const GpsEnabler = () => {
  return RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    interval: 10000,
    fastInterval: 5000,
  })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(error);
    });
};

export default GpsEnabler;
