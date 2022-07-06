import { ActivityIndicator, Image, Pressable, ScrollView, ScrollViewBase, StyleSheet, useWindowDimensions, View,  } from 'react-native'
import React, { useEffect } from 'react'
import Text from '../components/Text/Text'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectStatus, selectFuturesProduct } from '../store/ProductSlice'
import BannerTitle from '../components/BannerTitle'
import { colors } from '../Theme/colors'
import { spacing } from '../Theme/spacing'
import { AntDesign } from '@expo/vector-icons'
import Button from '../components/Button'



const CategoryBox = ({title, onPress, image}) =>{
  return(
    <Pressable
    onPress={onPress}
    style={{
      marginVertical: spacing[8],
      marginHorizontal: spacing[5],
      borderRadius: spacing[4],
      backgroundColor: colors.grey,
      alignItems: 'center',
      padding: spacing[5]
    }}>
      <Image source={image} style={{top: -50}}/>
      <View style={{alignItems: 'center', justifyContent: 'center', top: -30}}>
        <Text preset='h6'>{title}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: spacing[4]}}>
      <Text preset='subtitle' textColor='#7c7c7c' style={{marginRight: spacing[4]}}>SHOP</Text>
      <AntDesign name="right" color={colors.orange} size={14}></AntDesign>
      </View>
    </Pressable>
  )
}

const FeaturedProduct = ({name, category, image}) =>{
  const {width, height} = useWindowDimensions();
  return(
      <View 
      style={{
        marginVertical: spacing[4],
        marginHorizontal: spacing[5],
        borderRadius: spacing[4],
        backgroundColor: colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: spacing[0]
      }}
      >
      <View style={{
        borderWidth: 1,
        borderColor: '#d8d8d8',
        borderRadius: 400,
        height: 320,
        width: width -40,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{
        borderWidth: 1,
        borderColor: '#d8d8d8',
        borderRadius: 400,
        height: 290,
        width: width -80,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image style={{height: 172, width:180}} resizeMode='contain' source={image.source}/>
      </View>
      </View>
      <View style={{paddingBottom: spacing[8], marginTop: -spacing[7]}}>
        <Text preset='h3' centered uppercase white>{name}</Text>
        <Text preset='h3' centered uppercase white>{category}</Text>
        <Text centered style={{width: 250, marginTop: spacing[4]}} white>
            Upgrade to premium speakers that are phenomenally build to deliver truly remarkable sound.
        </Text>
        <Button title={'SEE PRODUCT'} style={{backgroundColor: colors.black, marginTop: spacing[4], alignSelf: 'center'}} centered></Button>
      </View>
      </View>
  )

}

export default function Home({navigation}) {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  const featuredProduct  = useSelector(selectFuturesProduct)
  const {width, height} = useWindowDimensions();
  console.log('status====', status)
  console.log('featured========', featuredProduct)

  useEffect(()=>{
      if(status === 'idle'){
        dispatch(fetchProducts())
      }
  },[])
  if(status === 'loading'){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator></ActivityIndicator>
      </View>
    )
  }
  return (
    <View>
    <ScrollView>
      <BannerTitle></BannerTitle>
      <View style={{backgroundColor: colors.black}}>
        <Image style={{alignSelf: 'center', width: '100%'}} resizeMode='cover' source={require('../assets/images/home-banner.png')}></Image>
      </View>
      <View style={styles.bannerTitle}>
        <Text white preset='h2' centered>WELCOME</Text>
        <Text centered style={[styles.bannerSubtitle, {width: width -9}]}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</Text>
      </View>
      <View style={{paddingVertical: spacing[8]}}>
          <CategoryBox 
          onPress={()=>{
            navigation.navigate('HeadphonesTab')
          }}
           title='HEADPHONES' image={require('../assets/images/home-headphone.png')}/>
          <CategoryBox
          onPress={()=>{
            navigation.navigate('SpeakersTab')
          }}
           title='SPEAKERS' image={require('../assets/images/home-speaker.png')}/>
          <CategoryBox
          onPress={()=>{
            navigation.navigate('EarphonesTab')
          }}
           title='EARPHONES' image={require('../assets/images/home-earphone.png')}/>
      </View>
      <View style={{paddingVertical: spacing[8]}}>
        {featuredProduct.map((product) =>(
          <FeaturedProduct
           key={product.id}
           name={product.name}
           category={product.category}
           image={product.featuredImage}></FeaturedProduct>
        ))}
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  bannerTitle:{
    position: 'absolute',
    width: '100%', 
    top: 200
  },
  bannerSubtitle:{
    color: colors.grey,
    alignSelf: 'center',
    marginTop: 5
  }
})