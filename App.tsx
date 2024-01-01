import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

function App () {
  return( 
    <SafeAreaView>
      <ScrollView>
       <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({})

export default App