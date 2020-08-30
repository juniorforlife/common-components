import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    top: '5%',
    flex: 0.9,
  },
  container: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingBottom: 12,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginHorizontal: '5%',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  searchIcon: {
    marginRight: '5%',
  },
  input: {
    flex: 1,
    padding: 0,
    fontSize: 14,
  },
  option: {
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  optionTxt: {
    fontSize: 14,
  },
  noData: {
    color: 'grey',
    alignSelf: 'center',
  },
});
