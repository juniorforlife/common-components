import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
    marginVertical: 16,
  },
  addBtn: {
    borderWidth: 1,
    borderRadius: 4,
    width: 50,
    padding: 8,
    alignItems: 'center',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  deleteBtn: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
