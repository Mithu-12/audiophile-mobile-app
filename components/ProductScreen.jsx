import { Image, StyleSheet, View,  } from 'react-native'
import React from 'react'
import { colors } from '../Theme/colors'
import { spacing } from '../Theme/spacing'
import Text from './Text/Text'
import Button from './Button'

export default function ProductScreen({image, name, category, description, }) {
    console.log(image);
  return (
    <View style={styles.productContainer}>
      <View style={styles.image}>
        <Image style={styles.image1} source={image}/>
      </View>
      <View>
        <Text style={{textAlign: 'center', marginTop: spacing[4]}} preset='h3'>{name}</Text>
        <Text style={{textAlign: 'center', textTransform: 'capitalize'}} preset='h3'>{category}</Text>
      </View>
      <View>
        <Text style={{textAlign: 'center', marginTop: spacing[2]}}>{description}</Text>
      </View>
      <Button title={'SELECT PRODUCT'} style={{backgroundColor: colors.orange, marginTop: spacing[4], alignSelf: 'center'}} centered></Button>
    </View>
  )
}
const styles = StyleSheet.create({
    productContainer:{
        paddingHorizontal: spacing[4],
        paddingVertical: spacing[10],
        // marginHorizontal: spacing[2],
        marginVertical: spacing[8],
        backgroundColor: 'white',
        borderRadius: spacing[4]
    },
    image:{
        backgroundColor: colors.grey,
        paddingHorizontal: spacing[4],
        paddingVertical: spacing[10],
        borderRadius: spacing[2]
        // marginHorizontal: spacing[4],
        // marginVertical: spacing[8]
    },
    image1:{
        // backgroundColor: colors.grey,
        paddingHorizontal: spacing[12],
        paddingVertical: spacing[12],
        height: 172, width:180,
         resizeMode:'contain',
         alignSelf: 'center',
        // marginHorizontal: spacing[4],
        // marginVertical: spacing[8]
    },

})