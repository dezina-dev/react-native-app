// src/components/TodoList.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/api';

const TodoList: React.FC<any> = ({ navigation }) => {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    // Fetch todos on component mount
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todosData = await getTodos();
    setTodos(todosData);
  };

  const handleAddTodo = async () => {
    await addTodo('New Todo');
    fetchTodos(); // Refresh the list after adding a new todo
  };

  const handleUpdateTodo = async (id: number) => {
    await updateTodo(id, 'Updated Todo');
    fetchTodos(); // Refresh the list after updating a todo
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    fetchTodos(); // Refresh the list after deleting a todo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <ScrollView style={styles.contentContainer}>
        {todos.map((todo) => (
          <View key={todo.id} style={styles.todoItem}>
            <Text style={styles.todoTitle} numberOfLines={2} ellipsizeMode="tail">
              {todo.title}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => handleUpdateTodo(todo.id)}>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleDeleteTodo(todo.id)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  contentContainer: {
    width: windowWidth * 0.9,
    alignSelf: 'center',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoTitle: {
    flex: 1,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 5,
    marginLeft: 5,
    width: windowWidth * 0.2,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
    width: windowWidth * 0.3,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#DC3545',
    padding: 10,
    borderRadius: 5,
    width: windowWidth * 0.3,
  },
});

export default TodoList;
