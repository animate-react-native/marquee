import * as React from 'react';
import type { LayoutRectangle, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated';

type MarqueeDirection = 'horizontal' | 'vertical';
export type MarqueeProps = React.PropsWithChildren<{
  speed?: number;
  spacing?: number;
  style?: ViewStyle;
  reverse?: boolean;
  frameRate?: number;
  direction?: MarqueeDirection;
  position?: SharedValue<number>;
}>;

const AnimatedChild = ({
  index,
  children,
  anim,
  textMeasurement,
  spacing,
  direction,
}: React.PropsWithChildren<{
  index: number;
  anim: SharedValue<number>;
  textMeasurement: SharedValue<LayoutRectangle>;
  spacing: number;
  direction: MarqueeDirection;
}>) => {
  const stylez = useAnimatedStyle(() => {
    if (direction === 'vertical') {
      return {
        position: 'absolute',
        top: (index - 1) * (textMeasurement.value.height + spacing),
        transform: [
          {
            translateY: -(
              anim.value %
              (textMeasurement.value.height + spacing)
            ),
          },
        ],
      };
    }
    return {
      position: 'absolute',
      left: (index - 1) * (textMeasurement.value.width + spacing),
      transform: [
        {
          translateX: -(anim.value % (textMeasurement.value.width + spacing)),
        },
      ],
    };
  }, [index, spacing, textMeasurement]);
  return <Animated.View style={stylez}>{children}</Animated.View>;
};

/**
 * Used to animate the given children in a horizontal manner.
 */
export const Marquee = React.memo(
  ({
    speed = 1,
    children,
    spacing = 0,
    style,
    reverse,
    frameRate,
    direction = 'horizontal',
    position,
  }: MarqueeProps) => {
    const parentMeasurement = useSharedValue<LayoutRectangle>({
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    });
    const textMeasurement = useSharedValue<LayoutRectangle>({
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    });
    const [cloneTimes, setCloneTimes] = React.useState(0);
    const anim = useSharedValue(0);

    const frameRateMs = frameRate ? 1000 / frameRate : null;

    useFrameCallback((frameInfo) => {
      if (frameInfo.timeSincePreviousFrame === null) return;

      const frameDelta = frameRateMs
        ? frameInfo.timeSincePreviousFrame / frameRateMs
        : 1;

      if (reverse) {
        anim.value -= speed * frameDelta;
      } else {
        anim.value += speed * frameDelta;
      }
      if (position) {
        position.value = anim.value;
      }
    }, true);

    useAnimatedReaction(
      () => {
        if (
          textMeasurement.value.width === 0 ||
          parentMeasurement.value.width === 0 ||
          textMeasurement.value.height === 0 ||
          parentMeasurement.value.height === 0
        ) {
          return 0;
        }
        return (
          Math.round(
            direction === 'horizontal'
              ? parentMeasurement.value.width / textMeasurement.value.width
              : parentMeasurement.value.height / textMeasurement.value.height
          ) + 1
        );
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
        runOnJS(setCloneTimes)(v + 2);
      },
      [direction]
    );
    return (
      <Animated.View
        key={direction}
        style={style}
        onLayout={(ev) => {
          parentMeasurement.value = ev.nativeEvent.layout;
        }}
        pointerEvents="box-none"
      >
        <Animated.View style={styles.row} pointerEvents="box-none">
          {
            // We are adding the text inside a ScrollView because in this way we
            // ensure that its not going to "wrap".
          }
          <Animated.ScrollView
            horizontal={direction === 'horizontal'}
            style={styles.hidden}
            pointerEvents="box-none"
          >
            <View
              onLayout={(ev) => {
                textMeasurement.value = ev.nativeEvent.layout;
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
                  textMeasurement={textMeasurement}
                  spacing={spacing}
                  direction={direction}
                >
                  {children}
                </AnimatedChild>
              );
            })}
        </Animated.View>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  hidden: { opacity: 0, zIndex: -9999 },
  row: { flexDirection: 'row', overflow: 'hidden' },
});
