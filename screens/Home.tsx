import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps';

//enableLatestRenderer();

const Home = () => {
  return (
    <View style ={{flex: 1}}>
      <MapView
        style = {styles.map}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}>
        <Marker title='toilet1'
        description='toilet kmutt N5'
         coordinate={{ latitude : 13.6512574 , longitude : 100.4942541 }}>
        </Marker>
        <Marker title='toilet2'
        description='toilet kmutt N6'
        coordinate={{ latitude : 13.650303 , longitude : 100.494243 }}>
        </Marker>
      </MapView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})