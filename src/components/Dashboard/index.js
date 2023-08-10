import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import BackgroundGeolocation from 'react-native-background-geolocation';
import sendCords from '../../Screens/utils/apicall';
import WebDashboard from '../../Screens/WebDashboard';

const Dashboard = ({route, navigation}) => {

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', backAction);
  //   return () =>
  //     BackHandler.removeEventListener('hardwareBackPress', backAction);
  // }, []);

  // const backAction = () => {
  //   // BackHandler.exitApp();
  //   return true;
  // };

  React.useEffect(() => {
    initBackgroundGeolocation();
    return () => {
      true;
    };
  }, []);

  const initBackgroundGeolocation = async () => {
    BackgroundGeolocation.onLocation(
      location => {
        console.log('onLocation', location);
        try {
          if (location?.coords) {
            sendCords(location?.coords);
          }
        } catch (error) {
          console.log(error);
          return;
        }
      },
      error => {
        console.warn('Location Error', error);
      },
    );

    await BackgroundGeolocation.ready({
      debug: false,
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 100,
      stopOnTerminate: false,
      startOnBoot: true,
      enableHeadless: true,
    });

    BackgroundGeolocation.start();
  };

  return (
    <>
      <WebDashboard />
    </>
  );
};

export default Dashboard;
