import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import PhoneInput from 'react-native-phone-input';
import SocialButton from "./component/SocialButton";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.welcomeContainer}>
      <Image
        source={require("./assets/anhstarted.jpg")} 
        style={styles.welcomeImage}
      />
      
      <Text style={styles.welcomeTitle}>Welcome to our store!</Text>
      <Text style={styles.welcomeSubtitle}>Ger your groceries in as fast as one hour</Text>

      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate('PhoneInput')}
      >
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};


const PhoneInputScreen = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          <Image
            source={require("./assets/anhhome.jpg")}
            style={styles.topImage}
          />
          <Text style={styles.title}>Get your groceries with Nectar</Text>

          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="VN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.phoneTextContainer}
            codeTextStyle={styles.codeTextStyle}
            textInputStyle={styles.textInputStyle}
            withShadow
            autoFocus
            withFlag
          />

          <View style={styles.separatorLine} />

          <Text style={styles.orText}>Or connect with social media</Text>

          <SocialButton
            title="Continue with Google"
            onPress={() => {
              console.log('Google sign-in pressed');
            }}
            buttonStyle={{ backgroundColor: '#5A9BD5' }}
          />

          <SocialButton
            title="Continue with Facebook"
            onPress={() => {
              console.log('Facebook sign-in pressed');
            }}
            buttonStyle={{ backgroundColor: '#4267B2' }}
          />
        </SafeAreaView>
      </View>
    </>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneInput" component={PhoneInputScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  welcomeImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: 'absolute',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', 
    marginVertical: 10,
    marginTop: 400, 
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#fff', 
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20, 
  },
  getStartedButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 15,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", 
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginTop: -200,
  },
  topImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderBottomWidth: 2,
    borderColor: '#3498db',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2d3436",
    letterSpacing: 1,
  },
  phoneContainer: {
    width: "100%",
    height: 60,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, 
    borderBottomWidth: 2, 
    borderBottomColor: "#3498db", 
  },
  phoneTextContainer: {
    backgroundColor: "#fff",
  },
  codeTextStyle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3498db", 
  },
  textInputStyle: {
    fontSize: 16,
    color: "#2d3436", 
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, 
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 14,
    color: "#636e72",
    marginBottom: 20,
    fontStyle: "italic",
  },
  separatorLine: {
    width: '100%', 
    height: 1, 
    backgroundColor: '#ddd', 
    marginVertical: 20, 
  },
});

export default App;
