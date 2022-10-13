
import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { gsap, Back } from 'gsap-rn';
import { useEffect, useRef } from 'react';

const { width, height } = Dimensions.get('screen')

const App = () => {

  const storyViewAnim = useRef(new Animated.Value(2500)).current

  const images = [
    {
      id: 1,
      myImages: [
        { id: 1, image: require("./assets/images/mm2.jpg") },
        { id: 2, image: require("./assets/images/mm3.jpg") },
        { id: 3, image: require("./assets/images/mm4.jpg") },
        { id: 4, image: require("./assets/images/mm6.jpg") },
      ],
      defaultImg: require("./assets/images/mm3.jpg")
    },
  ]

  return (
    <View style={styles.container}>
      <Animated.View style={{ backgroundColor: '#FFFFFF', zIndex: 999, top: storyViewAnim, left: 0, right: 0, bottom: 0, position: 'absolute' }}>
        <TouchableOpacity onPress={() => {
          Animated.timing(storyViewAnim, {
            toValue: 2500,
            duration: 350,
            useNativeDriver: false
          }).start();
          StatusBar.setBackgroundColor('#FFFFFF')
          StatusBar.setBarStyle("dark-content")
        }} activeOpacity={1.0} style={{ justifyContent: 'center', top: 30, right: 20, zIndex: 99, position: 'absolute', alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>X</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require("./assets/images/mm2.jpg")} resizeMode={"contain"} style={{ width: width, height: height }} />
        </View>
      </Animated.View>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />
      <View style={{ flex: 0.35, backgroundColor: '#FFFFFF' }} />
      <View style={{ flex: 1.35, backgroundColor: '#EAEAEA', flexDirection: 'row' }}>
        {
          images.map((item, index) => {
            return (
              <View key={index} style={{ backgroundColor: 'red', borderRadius: 50, overflow: 'hidden', margin: 5, width: 90 }}>
                <TouchableOpacity activeOpacity={1.0} onPress={() => {
                  Animated.timing(storyViewAnim, {
                    toValue: 0,
                    duration: 350,
                    useNativeDriver: false
                  }).start();
                  StatusBar.setBackgroundColor('#000000')
                  StatusBar.setBarStyle("light-content")
                }}>
                  <Image source={item.defaultImg} resizeMode={"cover"} />
                </TouchableOpacity>
              </View>
            )
          })
        }
      </View>
      <View style={{ flex: 8, backgroundColor: 'yellow' }}>
        <Text>OK</Text>
      </View>
    </View >
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
