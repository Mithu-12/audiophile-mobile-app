import { ScrollView, View,  } from 'react-native'
import React from 'react'
import Text from '../components/Text/Text'
import ProductScreen from '../components/ProductScreen'
import { useSelector } from 'react-redux'
import { selectSpeakers } from '../store/ProductSlice'
import Footer from '../components/Footer'
import BannerTitle from '../components/BannerTitle'
import HeaderTitle from '../components/HeaderTitle'

export default function Speakers() {
  const speakers = useSelector(selectSpeakers)
  return (
    <ScrollView>
    <BannerTitle/>
    <HeaderTitle title={'Speakers'}/>
      <View>
      {speakers.map(speaker =>{
        return(
          <ProductScreen 
          name={speaker.name}
          key={speaker.key}
          category={speaker.category}
          image={speaker.featuredImage.source}
          description={speaker.description}

      ></ProductScreen>
        )
      })}
      </View>
      <Footer/>
    </ScrollView>
  )
   
}