import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  greenHeader: {
    height: 320,
    backgroundColor: '#105D38',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    paddingLeft: 20,
    marginBottom: 10,
  },
  headerText: {
    fontFamily: 'Poppins-Regular',
    color: '#FFF',
    fontSize: 22,
    marginLeft: 30,
    marginTop: 15,
  },
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
