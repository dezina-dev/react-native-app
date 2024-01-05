// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoList from './components/TodoList';
import { Button, View, Text } from 'react-native';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TodoList" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Welcome to Todo's</Text>
      <Button title="Go to Todo List" onPress={() => navigation.navigate('TodoList')} />
    </View>
  );
};

export default App;
