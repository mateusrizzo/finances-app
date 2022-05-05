import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  unselectedButton: {
    borderColor: '#105D38',
    borderStyle: 'solid',
    borderWidth: 2.5,
    width: 120,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: '#105D38',
    width: 120,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unselectedText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#105D38',
  },
  selectedText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#FFF',
  },
});

export default styles;
