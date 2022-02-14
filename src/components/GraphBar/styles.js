import {StyleSheet} from 'react-native';

const styles = props =>
  StyleSheet.create({
    bar: {
      backgroundColor: props.color,
      width: 60,
      height: props.height,
      alignSelf: 'flex-end',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      justifyContent: 'flex-end',
    },
    graphValueText: {
      transform: [{rotate: '270deg'}],
      fontFamily: 'Poppins-Medium',
      alignSelf: 'baseline',
      width: 75,
      marginBottom: 30,
      marginLeft: -15,
    },
    categoryContainer: {
      width: 50,
      height: 180,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
    },
    category: {
      transform: [{rotate: '270deg'}],
      fontFamily: 'Poppins-Medium',
      color: '#FFF',
      alignSelf: 'baseline',
      width: 125,
      marginBottom: 53,
      marginLeft: -25,
    },
  });

export default styles;
