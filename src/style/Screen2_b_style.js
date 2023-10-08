import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        width:width,
        height:height,
        justifyContent:'space-between',
        alignItems:'center',
    },
    header:{
        flexDirection:'row',
        marginVertical:50,
        marginHorizontal:30

    },
    img:{
        width:70,
        height:70,
        marginRight:10
    },
    start:{
        width:39,
        height:39,
    },
    camera:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#1511EB',
        width:293,
        height:68
    },
    comment:{
        width:293,
        height:222,
        borderWidth:1,
        borderColor:'#C4C4C4'
    },
    button:{
        width:289,
        height:41,
        backgroundColor:'#0D5DB6',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:50
    }
})
export default styles;