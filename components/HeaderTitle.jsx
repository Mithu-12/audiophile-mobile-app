import { StyleSheet, View,  } from 'react-native'
import React from 'react'
import Text from './Text/Text'
import { colors } from '../Theme/colors'

export default function HeaderTitle({title}) {
  return (
    <View style={styles.container}>
      <Text preset='h3' centered uppercase white>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'center',
        backgroundColor: colors.black,
        alignItems: 'center',
        borderTopWidth: .4,
        borderColor: colors.grey

    }
})