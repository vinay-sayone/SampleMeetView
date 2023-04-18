import React, {useEffect} from 'react';
import {View, requireNativeComponent, NativeModules} from 'react-native';

import styles from './Styles';

const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
const JitsiMeetModule = NativeModules.RNJitsiMeetView;

const JitsiMeet = ({
  onConferenceTerminated,
  onConferenceJoined,
  onConferenceWillJoin,
}) => {
  useEffect(() => {
    const url = 'https://meet.jit.si/exemple';
    const userInfo = {
      displayName: 'Vinay N',
      email: 'user@example.com',
      avatar: 'https:/gravatar.com/avatar/abc123',
    };
    JitsiMeetModule.call(
      url,
      userInfo,
      {},
      {
        welcomePageEnabled: false,
        addPeopleEnabled: false,
        inviteEnabled: false,
      },
    );
  }, []);

  // useEffect(() => {
  //   return () => {
  //     JitsiMeetModule.endCall();
  //   };
  // });

  return (
    <View style={styles.container}>
      <JitsiMeetView
        onConferenceTerminated={e => onConferenceTerminated(e)}
        onConferenceJoined={e => onConferenceJoined(e)}
        onConferenceWillJoin={e => onConferenceWillJoin(e)}
        style={styles.meetContainer}
      />
    </View>
  );
};

export default JitsiMeet;
