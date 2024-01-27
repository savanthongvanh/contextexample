import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UserNameText } from './username_label';
import { AppContext } from './AppContext';
import { PackContextProvider } from './PackContextProvider';

export default function App() {
  let user = { name: 'Bob' }
  return (

    <AppContext.Provider value={user}>
      <PackContextProvider>

        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <UserNameText />
          <StatusBar style="auto" />
        </View>

      </PackContextProvider>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
