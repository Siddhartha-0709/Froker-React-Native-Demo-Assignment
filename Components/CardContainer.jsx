import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from './Card';
import {useSharedValue} from 'react-native-reanimated';
const CardContainer = ({data, maxVisibleItems}) => {
  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);
  return (
    <>
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            item={item}
            index={index}
            animatedValue={animatedValue}
            currentIndex={currentIndex}
            prevIndex={prevIndex}
            dataLength={data.length}
            maxVisibleItems={maxVisibleItems}
          />
        );
      })}
    </>
  );
};

export default CardContainer;

const styles = StyleSheet.create({});
