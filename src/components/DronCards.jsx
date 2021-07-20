import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-native';

import { Card } from './Card';

export const DronCards = () => {
  const selectedDrons = useSelector((state) => state.drons.selectedDrons.drons);

  return (
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
