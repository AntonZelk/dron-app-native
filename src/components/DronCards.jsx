import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-native';

import { Card } from './Card';
import Error from './Error';
import Loader from './Loader';

export const DronCards = () => {
  const selectedDrons = useSelector((state) => state.drons.selectedDrons.drons);
  const isLoading = useSelector((state) => state.drons.isLoading);
  const isError = useSelector((state) => state.drons.isError);

  return (
    <View>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <ScrollView horizontal={true} style={styles.container}>
          {selectedDrons.map((dron) => (
            <Link
              component={TouchableOpacity}
              to={`/dron/${dron.id}`}
              key={dron.id}
            >
              <Card dron={dron} key={dron.id} />
            </Link>
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
