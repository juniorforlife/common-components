import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  containerError: {
    backgroundColor: 'red',
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  containerDisable: {
    backgroundColor: '#bdbdbd',
  },
  topContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    color: 'black',
  },
  placeholder: {
    fontSize: 14,
    color: 'grey',
  },
  rightIconContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    marginRight: 4,
  },
});
