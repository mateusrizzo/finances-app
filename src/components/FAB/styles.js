import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: '#105D38',
    width: 55,
    height: 55,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    right: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  plusIcon: {
    fontFamily: 'Poppins-Regular',
    color: '#FFF',
    fontSize: 34,
  },
});

export default styles;
