/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import JitsiMeet from './JitsiMeet';

const App = () => {
  const onConferenceTerminated = nativeEvent => {
    /* Conference terminated event */
    console.log('onConferenceTerminated', nativeEvent);
  };

  const onConferenceJoined = nativeEvent => {
    /* Conference joined event */
    console.log('onConferenceJoined', nativeEvent);
  };

  const onConferenceWillJoin = nativeEvent => {
    /* Conference will join event */
    console.log('onConferenceWillJoin', nativeEvent);
  };

  return (
    <SafeAreaView style={styles.container}>
      <JitsiMeet
        onConferenceJoined={onConferenceJoined}
        onConferenceTerminated={onConferenceTerminated}
        onConferenceWillJoin={onConferenceWillJoin}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
