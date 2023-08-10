import React, {useEffect, useRef, useState} from 'react';
import {BackHandler, Platform, useWindowDimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const WebDashboard = () => {
  const webViewRef = useRef(null);
  const {width, height} = useWindowDimensions();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
      // return () => {
      //   BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
      // };
    }
  }, [canGoBack]);
  
  const onAndroidBackPress = () => {
    if (canGoBack) {
      webViewRef.current.goBack();
      return true; 
    }else{
      BackHandler.exitApp()
      return false
    }
  };

  const onNavigationStateChange = (navState) => {
    setCanGoBack(navState.canGoBack);
  };

  return (
    <WebView
      ref={webViewRef}
      allowsBackForwardNavigationGestures 
      geolocationEnabled={true}
      javaScriptEnabled={true}
      sharedCookiesEnabled={true}
      startInLoadingState={true}
      cacheEnabled={true}
      source={{uri: 'https://verticals.knestcrm.com'}}
      onNavigationStateChange={onNavigationStateChange}
      style={{width: width, height: height, borderWidth: 1}}
    />
  );
};

export default WebDashboard;
