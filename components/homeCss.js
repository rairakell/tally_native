import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
  	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  year: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  yearItems: {
  	justifyContent: 'flex-start',
  	flexDirection: 'row',
  },

  yearItem: {
  	flex: 1,
  },

  details: {
  	backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  dayItemsHeader: {
  	alignItems: 'center',
  	backgroundColor: '#f4511e',
  },

  dayItem: {
  	flex: 1,
  },

  chart: {
  	flex: 10,
  },

  margin: {
  	marginTop: 5,
  	marginBottom: 5,
  },

  padding: {
  	paddingLeft: 5,
  	paddingRight: 5,
  },

  inputContainer: {
  	flexDirection: 'row',
  },

  input: {
  	flex: 1,
  	borderColor: '#f4511e',
  },
});