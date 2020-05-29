import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Image,
    ScrollView, 
    TouchableOpacity 
} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import Note from './Type';

export default class Main extends React.Component {

constructor(props){
    super(props);
    this.state = {
        noteArray: [],
        noteText: '',
    }
}

clearAll(){
  this.setState({
    noteArray: [],
  })
}

  render() {

    let notes = this.state.noteArray.map((val, key) => {
        return <Note key={key} keyval={key} val={val}
                 deleteMethod={ () => this.deleteNote(key) } 
                
                />
    });

    return (
      <View style={styles.container}>
         

        <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>

        <View style={styles.textbox}>
            <TextInput 
            style={styles.textInput} 
            placeholder='Enter Your Notes Here'
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholderTextColor='#767676'
            underlineColorAndroid='transparent'
            >
            
           </TextInput>
            
        </View>
 <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
       
 <TouchableOpacity onPress={ this.clearAll.bind(this) } style={styles.dButton}>
          <Text style={styles.clearAllText}>Trash</Text>
        </TouchableOpacity>
      
      </View>
       
    );
  }

  addNote(){
      if (this.state.noteText) {
         var d = new Date();
          this.state.noteArray.push({
              'date': d.getFullYear() +
              "-" + (d.getMonth() + 1) +
              "-" + d.getDate(),
              'note': this.state.noteText
          });
          this.setState({ noteArray: this.state.noteArray })
          this.setState({ noteText: '' });

      }
  }

  deleteNote(key){
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray })
  }

 
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
 
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  textbox: { 
  position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#404040',
    padding: 10,
    backgroundColor: '#E5E5E5',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 0,
    bottom: 0,
    backgroundColor: '#9C9C9C',
    width: '50px',
    height: '50px',
    borderRadius: 2000,
    alignItems: 'center',
    justifyContent: 'center',
  },
   dButton: {
    position: 'absolute',
    zIndex: 11,
    bottom: 50,
    backgroundColor: '#FF0000',
    width: 50,
    height: 50,
    borderRadius: 160,
    alignItems: 'center',
    justifyContent: 'center',
   shadowRadius: 7,
   shadowOpacity: 3,
  },
clearAllText: {color: '#fff',
       fontWeight: 'bold', 
      }
 
  
});
