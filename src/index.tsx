import * as React from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, {
  cancelAnimation,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  State,
} from 'react-native-gesture-handler';

const AnimatedChild = ({
  index,
  children,
  anim,
  textWidth,
  spacing,
}: React.PropsWithChildren<{
  index: number;
  anim: SharedValue<number>;
  textWidth: SharedValue<number>;
  spacing: number;
}>) => {
  const stylez = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: index * (textWidth.value + spacing),
      transform: [
        {
          translateX: -(anim.value % (textWidth.value + spacing)),
        },
      ],
    };
  }, [index, spacing, textWidth]);
  return <Animated.View style={stylez}>{children}</Animated.View>;
};

export type MarqueeProps = React.PropsWithChildren<{
  speed?: number;
  spacing?: number;
  style?: ViewStyle;
  enableManualScroll?: boolean;
}>;

/**
 * Used to animate the given children in a horizontal manner.
 */
export const Marquee = React.memo(
  ({
    speed = 1,
    children,
    spacing = 0,
    enableManualScroll = false,
    style,
  }: MarqueeProps) => {
    const parentWidth = useSharedValue(0);
    const textWidth = useSharedValue(0);
    const [cloneTimes, setCloneTimes] = React.useState(0);
    const anim = useSharedValue(0);
    const isManual = useSharedValue(false);
    const touchStartAnim = useSharedValue(0);

    useFrameCallback(() => {
      if (!isManual.value) {
        anim.value += speed;
      }
    }, true);

    useAnimatedReaction(
      () => {
        if (textWidth.value === 0 || parentWidth.value === 0) {
          return 0;
        }
        return Math.round(parentWidth.value / textWidth.value) + 1;
      },
      (v) => {
        if (v === 0) {
          return;
        }
        // This is going to cover the case when the text/element size
        // is greater than the actual parent size
        // Double this to cover the entire screen twice, in this way we can
        // reset the position of the first element when its going to move out
        // of the screen without any noticible glitch
        runOnJS(setCloneTimes)(v * 2);
      },
      []
    );

    const scrollPan = React.useMemo(
      () =>
        Gesture.Pan()
          .enabled(cloneTimes > 0)
          .onTouchesDown(() => {
            cancelAnimation(anim);
            isManual.value = true;
            touchStartAnim.value = anim.value;
          })
          .onUpdate((event) => {
            const scollValue = Math.max(
              0,
              touchStartAnim.value - event.translationX
            );
            anim.value = scollValue;
          })
          .onEnd((event) => {
            anim.value = withDecay(
              {
                velocity: -event.velocityX,
                clamp: [0, Infinity],
              },
              () => {
                isManual.value = false;
              }
            );
          })
          .onFinalize((event) => {
            if (
              State.FAILED === event.state ||
              State.CANCELLED === event.state
            ) {
              isManual.value = false;
            }
          }),
      [anim, cloneTimes, isManual, touchStartAnim]
    );

    const render = () => {
      return (
        <Animated.View
          style={style}
          onLayout={(ev) => {
            parentWidth.value = ev.nativeEvent.layout.width;
          }}
          pointerEvents="box-none"
        >
          <Animated.View style={styles.row} pointerEvents="box-none">
            {
              // We are adding the text inside a ScrollView because in this way we
              // ensure that its not going to "wrap".
            }
            <Animated.ScrollView
              horizontal
              style={styles.hidden}
              pointerEvents="box-none"
            >
              <View
                onLayout={(ev) => {
                  textWidth.value = ev.nativeEvent.layout.width;
                }}
              >
                {children}
              </View>
            </Animated.ScrollView>
            {cloneTimes > 0 &&
              [...Array(cloneTimes).keys()].map((index) => {
                return (
                  <AnimatedChild
                    key={`clone-${index}`}
                    index={index}
                    anim={anim}
                    textWidth={textWidth}
                    spacing={spacing}
                  >
                    {children}
                  </AnimatedChild>
                );
              })}
          </Animated.View>
        </Animated.View>
      );
    };

    if (enableManualScroll) {
      return (
        <GestureHandlerRootView>
          <GestureDetector gesture={scrollPan}>{render()}</GestureDetector>
        </GestureHandlerRootView>
      );
    }

    return render();
  }
);

const styles = StyleSheet.create({
  hidden: { opacity: 0, zIndex: -9999 },
  row: { flexDirection: 'row', overflow: 'hidden' },
});
