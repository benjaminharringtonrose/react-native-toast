import * as React from 'react';

import { Button, StyleSheet, View, Text, NativeModules } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Show Toast"
        onPress={() => NativeModules.ToastModule.show('Yip yip')}
      />
      <Text>{'Hello world'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
