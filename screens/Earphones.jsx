import { ScrollView, View,  } from 'react-native'
import React from 'react'
import Text from '../components/Text/Text'
import { useSelector } from 'react-redux'
import { selectEarphones } from '../store/ProductSlice'
import ProductScreen from '../components/ProductScreen'
import Footer from '../components/Footer'
import BannerTitle from '../components/BannerTitle'
import HeaderTitle from '../components/HeaderTitle'

export default function Earphones() {
  const earphones = useSelector(selectEarphones)
  console.log('earphones====', earphones)
  return (
    <ScrollView>
    <BannerTitle/>
    <HeaderTitle title={'earphones'}/>
     <View>
     {earphones.map(earphone=>{
      return(
        <ProductScreen
          name={earphone.name}
          key={earphone.key}
          category={earphone.category}
          description={earphone.description}
          image={earphone.featuredImage.source}
        />
      )
    })
      }
     </View>
     <Footer/>
  
    </ScrollView>
)}