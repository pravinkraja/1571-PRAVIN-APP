import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Icon,
    Image,
    TouchableOpacity
} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Note extends React.Component {
  state = {
    checked: false
  };

  render() {
    const { checked } = this.state;

    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>

        <CheckBox
          containerStyle={{backgroundColor: '#ffffff', margin: 0, padding: 0, borderWidth: 0}}
          title={this.props.val.note}
          checked={checked}
          textStyle={[styles.noteText, {textDecorationLine: checked ? 'line-through' : 'none'}]}
          onPress={() => this.setState({checked: !checked})}
        />

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteTrash}>
            <Text style={styles.noteTrashText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    // marginHight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#E1E1E1',
  },
  noteText: {
      width: '70%',
 flexWrap: "wrap",

  },
  noteTrash: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF0000',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10,
      width: 50,
     
  },
  noteTrashText: {
      color: 'white',
       fontWeight: 'bold', 
  },

});
