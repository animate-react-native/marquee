import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Marquee } from '@animatereactnative/marquee';
import { Box } from './components/Box';
import { Heading } from './components/Heading';
import { StatusBar } from 'expo-status-bar';

const primary = true;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Marquee spacing={20} speed={1}>
        <Heading primary={primary}>
          @animatereactnative/marquee component
        </Heading>
      </Marquee>
      <Marquee spacing={20} speed={1}>
        <Heading primary={primary}>Powered by AnimateReactNative.com</Heading>
      </Marquee>
      <Marquee spacing={20} speed={2}>
        <Heading primary={primary}>Built with Reanimated</Heading>
      </Marquee>
      <Marquee spacing={10} speed={0.75} style={{ marginTop: 12 }}>
        <Box size={50} primary={primary} />
      </Marquee>
      <Marquee spacing={10} speed={4} style={{ marginTop: 12 }}>
        <View style={{ flexDirection: 'row' }}>
          {[...Array(5).keys()].map((i) => {
            return (
              <Box
                key={`box-${i}`}
                spacing={i === 4 ? 0 : 10}
                size={120}
                primary={primary}
              >
                <Heading primary={!primary}>{i}</Heading>
              </Box>
            );
          })}
        </View>
      </Marquee>
      <Marquee
        enableManualScroll={true}
        spacing={10}
        speed={4}
        style={{ marginTop: 12 }}
      >
        <View style={{ flexDirection: 'row' }}>
          {[...Array(5).keys()].map((i) => {
            return (
              <Box
                key={`box-${i}`}
                spacing={i === 4 ? 0 : 10}
                size={120}
                primary={primary}
              >
                <Heading primary={!primary}>{i}</Heading>
              </Box>
            );
          })}
        </View>
      </Marquee>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: !primary ? '#F0F464' : '#1F1F1F',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
