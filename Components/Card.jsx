import {Image, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';

const Card = ({
  item,
  index,
  animatedValue,
  currentIndex,
  prevIndex,
  dataLength,
  maxVisibleItems,
}) => {
  const IMAGE_WIDTH = 350;
  const IMAGE_HEIGHT = 350;

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [-30, 0, 30],
    );
    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [-40, 0, 40],
    );
    const scale = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [0.9, 1, 0.9],
    );
    const opacity = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0],
    );

    return {
      transform: [
        {translateX},
        {translateY: index < currentIndex.value ? translateY : 0},
        {scale},
      ],
      opacity,
    };
  });

  return (
    <FlingGestureHandler
      key={'left'}
      direction={Directions.LEFT}
      onHandlerStateChange={ev => {
        if (ev.nativeEvent.state === State.END) {
          if (currentIndex.value !== 0) {
            animatedValue.value = withTiming((currentIndex.value -= 1));
            prevIndex.value = currentIndex.value - 1;
          }
        }
      }}>
      <FlingGestureHandler
        key={'right'}
        direction={Directions.RIGHT}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END) {
            if (currentIndex.value !== dataLength - 1) {
              animatedValue.value = withTiming((currentIndex.value += 1));
              prevIndex.value = currentIndex.value;
            }
          }
        }}>
        <Animated.Image
          source={item.image}
          style={[
            styles.image,
            {
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              zIndex: dataLength - index,
            },
            animatedStyle,
          ]}
        />
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    position: 'absolute',
  },
});
