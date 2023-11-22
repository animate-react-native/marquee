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

type MarqueeDirection = 'up' | 'left' | 'right' | 'down';

const AnimatedChild = ({
  index,
  children,
  anim,
  textHeight,
  textWidth,
  spacing,
  direction = 'right',
}: React.PropsWithChildren<{
  index: number;
  anim: SharedValue<number>;
  textHeight: SharedValue<number>;
  textWidth: SharedValue<number>;
  spacing: number;
  direction?: MarqueeDirection;
}>) => {
  const stylez = useAnimatedStyle(() => {
    const vertical = direction === 'up' || direction === 'down';
    const horizontal = direction === 'left' || direction === 'right';

    return {
      position: 'absolute',
      top: vertical && direction === 'up' ? index * (textHeight.value + spacing) : undefined,
      bottom: vertical && direction === 'down' ? index * (textHeight.value + spacing) : undefined,
      right: horizontal && direction === 'right' ? index * (textWidth.value + spacing) : undefined,
      left: horizontal && direction === 'left' ? index * (textWidth.value + spacing) : undefined,
      transform: [
        {
          ...(vertical
            ? { translateY: (anim.value % (textHeight.value + spacing)) * (direction === 'up' ? -1 : 1) }
            : { translateX: (anim.value % (textWidth.value + spacing)) * (direction === 'left' ? -1 : 1) }),
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
  /**
   * Direction in which the marquee should scroll
   */
  direction?: MarqueeDirection;
  /**
   * Delay in milliseconds before the marquee starts
   */
  delay?: number;
}>;

/**
 * Used to animate the given children in a horizontal manner.
 */
const Marquee = React.memo(({ speed = 1, children, spacing = 0, style, delay, direction = 'right' }: MarqueeProps) => {
  const parentHeight = useSharedValue(0);
  const parentWidth = useSharedValue(0);
  const textHeight = useSharedValue(0);
  const textWidth = useSharedValue(0);
  const [cloneTimes, setCloneTimes] = React.useState(0);
  const anim = useSharedValue(0);

  const animationCallback = useFrameCallback(
    () => {
      anim.value += speed;
    },
    delay ? false : true,
  );

  React.useEffect(() => {
    if (delay) {
      setTimeout(() => {
        animationCallback.setActive(true);
      }, delay);
    }
  }, []);

  useAnimatedReaction(
    () => {
      if (direction === 'up' || direction === 'down') {
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

      if (direction === 'up' || direction === 'down') {
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
