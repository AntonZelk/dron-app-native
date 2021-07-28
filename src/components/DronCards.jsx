import React, { useEffect, useRef } from 'react';

import { StyleSheet, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Card } from './Card';
import Error from './Error';
import Loader from './Loader';

export const DronCards = () => {
  const selectedDrons = useSelector((state) => state.drons.selectedDrons.drons);
  const isLoading = useSelector((state) => state.drons.isLoading);
  const isError = useSelector((state) => state.drons.isError);
  const changeScroll = useRef(null);

  useEffect(() => {
    if (changeScroll && changeScroll.current) {
      changeScroll.current.scrollTo({ y: 0, x: 0, animated: false });
    }
  }, [selectedDrons]);

  return (
    <View>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          horizontal={true}
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          ref={changeScroll}
        >
          {selectedDrons.map((dron) => (
            <Card dron={dron} key={dron.id} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 28,
    flexDirection: 'row',
    marginHorizontal: -8,
  },
});
