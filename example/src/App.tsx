import * as React from 'react';

import { Marquee, type MarqueeRef } from '@animatereactnative/marquee';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Box } from './components/Box';
import { Heading } from './components/Heading';

const primary = true;

function App() {
  return <Example />;
}

function Example() {
  const ref = React.useRef<MarqueeRef>(null);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Marquee speed={1}>
        <Heading primary={primary}>@animatereactnative/marquee</Heading>
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
      <Marquee
        ref={ref}
        spacing={10}
        speed={4}
        style={{ marginTop: 12 }}
        reverse
        frameRate={30}
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
      <View
        style={{
          flexDirection: 'row',
          height: 300,
          padding: 10,
          overflow: 'hidden',
        }}
      >
        {[...Array(3).keys()].map((i) => {
          return (
            <Marquee
              spacing={10}
              speed={1}
              style={{ marginTop: 12 }}
              reverse={i === 1}
              frameRate={60}
              key={`marquee-${i}`}
              direction="vertical"
            >
              <View>
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
          );
        })}
      </View>
      <View style={{ flexDirection: 'row', gap: 4, justifyContent: 'center' }}>
        <Button
          title="Start"
          onPress={() => {
            ref.current?.start();
          }}
        />
        <Button
          title="Stop"
          onPress={() => {
            ref.current?.stop();
          }}
        />
      </View>
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

export default gestureHandlerRootHOC(App);
