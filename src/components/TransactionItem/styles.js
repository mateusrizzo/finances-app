import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  itemTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  itemDate: {
    fontFamily: 'Poppins-Light',
  },
  itemValue: {
    fontFamily: 'Poppins-Black',
    fontSize: 16,
  },
});

export default styles;
