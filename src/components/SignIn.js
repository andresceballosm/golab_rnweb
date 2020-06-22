import React, { Component } from 'react'
import { Text, 
        View, 
        StyleSheet, 
        Dimensions, 
        Image, 
        Platform, 
        TouchableOpacity, 
        ScrollView } from 'react-native'

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

class SignIn extends Component {

  render() { 
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.userImageContainer}
                source={require('../logo.svg')}/>
            <Text style={{fontSize:30, color:'#ffffff', paddingTop:12}}> DOMIS </Text>
          </View>
          <View style={styles.body}>
            <View style={styles.viewTitle}>
              <Text style={styles.textTitle}>Hola</Text>
              <Text style={styles.textTitle}>Inicia sesión!</Text>
            </View>
            <View style={{marginHorizontal:20}}>
              {/* <SignInForm login={this.userLogin}/> */}
            </View>
          </View> 
          <View style={styles.footer}>
            <Text>No estas registrado? </Text>
            <TouchableOpacity>
              <Text style={styles.textRegister}> Registrarme</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const scaleToDimension = (size) => {
  return screenHeight * size / 1
};

const styles = StyleSheet.create({
  constainer : {
   flex:1
  },
  header: {
      flex:2, 
      backgroundColor:'black',
      marginBottom:5,
      flexDirection: 'row', 
      alignItems:'center', 
      justifyContent:'center',
      borderBottomLeftRadius: 60,
      ...Platform.select({
        ios: {
          padding: 10,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 5,
          shadowOpacity: 1.0
        },
        android: {
          elevation: 20,
        }
      })
    },
    body:{
      flex: 4,
      paddingTop:20
    },
    footer:{
      flex:1,
      paddingBottom: scaleToDimension(20),
      flexDirection:'row',
      alignItems:'flex-end',
      justifyContent:'center',
    },
    userImageContainer: {
      marginLeft: 15,
      marginTop: 5,
      height: screenWidth * 40 / 375,
      width: screenWidth * 40 / 375,
      borderRadius: (screenWidth * 50 / 375) / 2,
    },
    textTitle: {
      fontSize:30,
      marginLeft:35,
    },
    viewTitle: {
      paddingBottom:scaleToDimension(10)
    },
    textRegister:{
      color:'red'
    }
})

export default SignIn;