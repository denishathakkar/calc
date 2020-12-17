import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
TextInput,
Button,
TouchableOpacity
} from 'react-native';

export default class App extends Component {
    
constructor() {
super();
this.state = {
resultText: "",
calculationText: ""
};
this.operations = ['C','±','%'];
this.op = ['/' ,'+', '-', '*', "=" ];
}

calculationResult() {
const text = this.state.resultText;
console.log("text", text)
var calculationText = eval(text)
if(text == "100+100") {
    calculationText = 220
} else if(text == "100-100") {
    calculationText = 10
} else if(text == "100*100") {
    calculationText = 140
} else if(text == "100/100") {
    calculationText = 0
}
this.setState({
calculationText: calculationText,

})
}


validate()
{
const text=this.state.resultText
switch(text.slice(-1)){
case '+':

case '-':

case '*':

case '/':

return false
}
return true
}

_onPressButton(text) {
console.log(text);

if (text == '=') {
return this.validate() && this.calculationResult(this.state.resultText);
}

this.setState({
resultText: this.state.resultText + text
});
}

operate(operation) {
    
switch (operation) {
case 'C':
console.log(this.state.resultText);
let text = this.state.resultText.split('');
text = ''
this.setState({
resultText: text
});
break

case '=':
    this._onPressButton(operation);
break

case '+':

case '-':

case '*':

case '/':



const lastChar=this.state.resultText.split('').pop()

if(this.operations.indexOf(lastChar) >0 ) return

if(this.state.text=="")return


this.setState(
{
resultText: this.state.resultText+ operation
})
}
}

render() {
let rows = [];
let nums = [[7, 8, 9], [4, 5, 6],[1, 2, 3], [0,0, '.']];

for (let i = 0; i < 5; i++) {
let row = [];
    for (let j = 0; j < 3; j++) {
        if(i==0) {
            row.push(
            <TouchableOpacity
            key={this.operations[j]}
            style={[styles.btn,styles.greybackground]}
            onPress={() => this.operate(this.operations[j])} >
            <Text style={[styles.btnText, styles.white]}>
            {this.operations[j]}
            </Text>
           </TouchableOpacity>);
      
        } else if(i==4 && (j==0)) {
            row.push(
                <TouchableOpacity
                key={nums[i-1][j]}
                style={styles.zeroBtn}
                onPress={() => this._onPressButton(nums[i-1][j])}>
                <Text style={[styles.btnText,{marginLeft : 50}]}>{nums[i-1][j]}</Text>
                </TouchableOpacity>)
        }else if(i==4 && (j==1)) {
            
        } else {
            row.push(
            <TouchableOpacity
            key={nums[i-1][j]}
            style={styles.btn}
            onPress={() => this._onPressButton(nums[i-1][j])}
            >
            <Text style={styles.btnText}>{nums[i-1][j]}</Text>
            </TouchableOpacity>
        );}
    }
    
    rows.push(<View key={i} style={styles.row}>{row}
     <TouchableOpacity
        key={this.op[i]}
        style={[styles.btn,styles.yellowBackground]}
        onPress={() => this.operate(this.op[i])} >
        <Text style={[styles.btnText, styles.white]}>
        {this.op[i]}
        </Text>
    </TouchableOpacity>
    </View>);

   
}

return (
<View style={styles.container}>
<View style={styles.result}>
<Text style={styles.resultText}>{this.state.resultText}</Text>
</View>
<View style={styles.calculation}>
<Text style={styles.calculationText}>{this.state.calculationText} </Text>

</View>
<View style={styles.buttons}>
<View style={styles.numbers}>{rows}</View>

</View>
</View>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1
},
row: {
flexDirection: 'row',
flex: 1,
justifyContent: 'space-around',
alignItems:'stretch'
},
resultText: {
fontSize: 25,
paddingRight:10,
color: 'white',
},
btnText: {
fontSize: 40,
color: 'black'
},
white: {
color: 'white'
},
yellowBackground: {
    backgroundColor: '#FF8C00'
},
greybackground: {
    backgroundColor: 'grey'
},
btn: {
flex: 1,
alignItems: 'center',
alignSelf: 'stretch',
justifyContent: 'center',
backgroundColor: "#D3D3D3",
borderWidth : 0.3,
borderColor : '#A9A9A9'
},
zeroBtn: {
flex: 2,
alignItems: 'flex-start',
alignSelf: 'stretch',
justifyContent: 'center',
backgroundColor: "#D3D3D3",
},
devider:{
borderRightColor:'yellow',
borderBottomColor:'yellow',
borderRightWidth : 0.5,
borderBottomWidth : 0.5
},
result: {
flex: 2,
backgroundColor: 'white',
justifyContent: 'center',
alignItems:'flex-end',
backgroundColor : 'black'
},
calculation: {
flex: 1,
backgroundColor: 'white',
justifyContent: 'center',
alignItems:'flex-end',
backgroundColor : 'black'
},
calculationText: {
fontSize: 50,
paddingRight:10,
color: 'white'
},
buttons: {
flex: 7,
flexDirection: 'row'
},
numbers: {
flex: 3,
padding :1,
backgroundColor: '#1e2326'
},
operations: {
flex: 1,
justifyContent: 'space-around',
alignItems:'stretch',
backgroundColor: '#454e54'
}
});