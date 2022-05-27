import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import { Text, View } from 'react-native'

const CheckB = (props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={{flexDirection: 'row',justifyContent: 'space-evenly', alignItems: 'center', width: '60%'}}>
    <Text style={{color: 'white', fontFamily: 'Cormorant Garamond Bold', fontSize: 20}}>{props.label}</Text>
    <Checkbox
      uncheckedColor='white'
      color='white'
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
        props.changeValue(!checked)
      }}
    />
    </View>
  );
};

export default CheckB;