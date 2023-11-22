import * as React from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated';

const AnimatedChild = ({
  index,
  children,
  anim,
  textHeight,
  textWidth,
  spacing,
  direction = 'horizontal',
}: React.PropsWithChildren<{
  index: number;
  anim: SharedValue<number>;
  textHeight: SharedValue<number>;
  textWidth: SharedValue<number>;
  spacing: number;
  direction?: 'horizontal' | 'vertical';
}>) => {
  const stylez = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top: direction === 'vertical' ? index * (textHeight.value + spacing) : undefined,
      left: direction === 'horizontal' ? index * (textWidth.value + spacing) : undefined,
      transform: [
        {
          ...(direction === 'vertical'
            ? { translateY: -(anim.value % (textHeight.value + spacing)) }
            : { translateX: -(anim.value % (textWidth.value + spacing)) }),
        },
      ],
    };
  }, [index, spacing, textHeight, textWidth]);
  return <Animated.View style={stylez}>{children}</Animated.View>;
};

export type MarqueeProps = React.PropsWithChildren<{
  speed?: number;
  spacing?: number;
  style?: ViewStyle;
  direction?: 'horizontal' | 'vertical';
}>;

/**
 * Used to animate the given children in a horizontal manner.
 */
export const Marquee = React.memo(({ speed = 1, children, spacing = 0, style, direction = 'horizontal' }: MarqueeProps) => {
  const parentHeight = useSharedValue(0);
  const parentWidth = useSharedValue(0);
  const textHeight = useSharedValue(0);
  const textWidth = useSharedValue(0);
  const [cloneTimes, setCloneTimes] = React.useState(0);
  const anim = useSharedValue(0);

  useFrameCallback(() => {
    anim.value += speed;
  }, true);

  useAnimatedReaction(
    () => {
      if (direction === 'vertical') {
        if (textHeight.value === 0 || parentHeight.value === 0) {
          return 0;
        }
        return Math.round(parentHeight.value / textHeight.value) + 1;
      } else {
        // Horizontal
        if (textHeight.value === 0 || parentHeight.value === 0) {
          return 0;
        }
        return Math.round(parentHeight.value / textHeight.value) + 1;
      }
    },
    (v) => {
      if (v === 0) {
        return;
      }

      if (direction === 'vertical') {
        runOnJS(setCloneTimes)(v);
      } else {
        // This is going to cover the case when the text/element size
        // is greater than the actual parent size
        // Double this to cover the entire screen twice, in this way we can
        // reset the position of the first element when its going to move out
        // of the screen without any noticible glitch
        runOnJS(setCloneTimes)(v * 2);
      }
    },
    [],
  );
  return (
    <Animated.View
      style={style}
      onLayout={(ev) => {
        parentHeight.value = ev.nativeEvent.layout.height;
        parentWidth.value = ev.nativeEvent.layout.width;
      }}
      pointerEvents="box-none">
      <Animated.View style={styles.row} pointerEvents="box-none">
        {
          // We are adding the text inside a ScrollView because in this way we
          // ensure that its not going to "wrap".
        }
        <Animated.ScrollView style={styles.hidden} pointerEvents="box-none">
          <View
            onLayout={(ev) => {
              textHeight.value = ev.nativeEvent.layout.height;
              textWidth.value = ev.nativeEvent.layout.width;
            }}>
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
                textHeight={textHeight}
                textWidth={textWidth}
                spacing={spacing}
                direction={direction}>
                {children}
              </AnimatedChild>
            );
          })}
      </Animated.View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  hidden: { opacity: 0, zIndex: -9999 },
  row: { flexDirection: 'row', overflow: 'hidden' },
});
