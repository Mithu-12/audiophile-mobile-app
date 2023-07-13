import { Image, ScrollView, StyleSheet, View,  } from 'react-native'
import React from 'react'
import Text from '../components/Text/Text'
import { useDispatch, useSelector } from 'react-redux'
import { selectHeadphones } from '../store/ProductSlice'
import ProductScreen from '../components/ProductScreen'
import { spacing } from '../Theme/spacing'
import Footer from '../components/Footer'
import BannerTitle from '../components/BannerTitle'
import HeaderTitle from '../components/HeaderTitle'

export default function Headphones() {
  const dispatch = useDispatch()
  const headphones = useSelector(selectHeadphones)
  console.log('headphones=', headphones)
  // const {name, category, description, image} = headphones;
  return (
    <ScrollView>
    <BannerTitle/>
    <HeaderTitle title={'headphones'}/>
        <View>
      {headphones.map((headphone) =>{
        console.log(headphone.images)
        return(
          <ProductScreen
            name={headphone?.name}
            key={headphone.key}
            description={headphone?.description}
            category={headphone?.category}
            image={headphone.featuredImage.source}
        ></ProductScreen>
        )
        
      })}
    </View>
    <Footer/>
    </ScrollView>
  )
}
