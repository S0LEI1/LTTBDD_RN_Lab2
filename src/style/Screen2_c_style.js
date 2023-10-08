import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#23235B',
        width:width,
        height:height,
        justifyContent:'space-between',
    },
    textInput:{
        width:width/2,
        height:50,
        backgroundColor:'#151537', 
        borderWidth:1,
        borderColor:'#fff'
    },
    textInput2:{
        width:width-20,
        height:50,
        backgroundColor:'#151537', 
        borderWidth:1,
        borderColor:'#fff', 
        marginHorizontal:10
    },
    label:{
        color:'white', 
        fontFamily:'Roboto',
        fontSize:20,
        fontWeight:'700'
    },
    wrapper:{
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10
    },
    button:{
        backgroundColor:'#3B3B98',
        marginBottom:50, 
        width:269,
        height:55, 
        borderWidth:1, 
        justifyContent:'center',
        alignItems:'center'
    }
})
export default styles;
