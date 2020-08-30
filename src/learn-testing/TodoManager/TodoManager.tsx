import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

interface Todo {
  id: number;
  content: string;
}

interface TodoManagerProps {
  data: Todo[];
}

const TodoManager: React.FC<TodoManagerProps> = ({data}) => {
  const [todoList, setTodoList] = useState<Todo[]>(data);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleChangeTodoContent = (text: string) => {
    setNewTodo(text.replace('  ', ''));
  };

  const handleAddTodo = () => {
    if (newTodo) {
      const date = new Date();
      setTodoList([
        ...todoList,
        {id: date.getMilliseconds(), content: newTodo},
      ]);
      setNewTodo('');
    }
  };

  const deleteTodo = (todoId: number) => {
    const newSelectedTodos = [...todoList];
    const index = newSelectedTodos.findIndex(
      (selectedTodo) => selectedTodo.id === todoId
    );
    newSelectedTodos.splice(index, 1);
    setTodoList(newSelectedTodos);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {todoList.map((todo: Todo) => {
          return (
            <View key={todo.id} style={styles.todoItem}>
              <Text accessibilityLabel="todoText">{todo.content}</Text>
              <TouchableOpacity
                onPress={() => deleteTodo(todo.id)}
                accessibilityLabel="deleteTodoBtn"
                style={styles.deleteBtn}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <TextInput
        placeholder="Input new todo"
        onChangeText={handleChangeTodoContent}
        value={newTodo}
        style={styles.textInput}
        accessibilityLabel="newTodoInput"
      />
      <TouchableOpacity
        onPress={handleAddTodo}
        style={styles.addBtn}
        accessibilityLabel="addTodo">
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

TodoManager.defaultProps = {
  data: [],
};

export default TodoManager;
