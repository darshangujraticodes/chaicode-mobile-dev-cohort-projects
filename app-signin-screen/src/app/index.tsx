import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Fontisto from "@expo/vector-icons/Fontisto";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState("");

  const [fontsLoaded] = useFonts({
    ArtegraMedium: require("../../assets/fonts/Artegra-Soft-Medium.ttf"),
    ArtegraSemiBold: require("../../assets/fonts/Artegra-Soft-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.grayBg}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          // justifyContent: "center",
          paddingBottom: 40,
        }}
      >
        <View>
          {/* logo */}
          <View style={styles.flex}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
            />
          </View>

          {/* title */}
          <View>
            <Text style={styles.pageHead}>Sign In</Text>
            <Text style={styles.subHead}>
              Let's experience the joy of telecare AI
            </Text>
          </View>

          {/* form */}
          <View style={{ marginTop: 40 }}>
            <View>
              <Text style={styles.formLabel}>Email Address</Text>
              <View
                style={[
                  styles.inputContainer,
                  focusedInput === "email" && styles.focusedFormInput,
                ]}
              >
                <Fontisto name="email" size={24} color="black" />
                <TextInput
                  style={styles.formInput}
                  placeholder="Enter Your Email"
                  value={email}
                  onChangeText={setEmail}
                  // onFocus={() => setFocusedInput("email")}
                />
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={styles.formLabel}>Password</Text>
              <View
                style={[
                  styles.inputContainer,
                  focusedInput === "password" && styles.focusedFormInput,
                ]}
              >
                <EvilIcons name="lock" size={30} color="black" />
                <TextInput
                  style={styles.formInput}
                  placeholder="Enter Your Password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  // onFocus={() => setFocusedInput("password")}
                />
              </View>
            </View>

            <View>
              <Pressable style={styles.formSubmitBtn}>
                <Text style={styles.buttonText}>Sign In</Text>
                <FontAwesome6
                  name="arrow-right-long"
                  size={24}
                  color="white"
                />{" "}
              </Pressable>
            </View>
          </View>

          {/* social media */}
          <View style={styles.socialMediaContainer}>
            <View style={styles.mediaIcons}>
              <Fontisto name="facebook" size={24} color="black" />
            </View>

            <AntDesign
              name="google"
              size={24}
              color="black"
              style={styles.mediaIcons}
            />
            <Entypo
              name="instagram"
              size={24}
              color="black"
              style={styles.mediaIcons}
            />
          </View>

          {/* forgot password */}
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text>Don't have an account ?</Text>
              <Text style={{ color: "#84cc16", marginLeft: 5 }}>Sign Up</Text>
            </View>

            <View>
              <Text style={{ textAlign: "center", marginTop: 10 }}>
                Forgot Your Password
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  grayBg: {
    backgroundColor: "#f6f6f6",
    flex: 1,
    paddingHorizontal: 15,
  },
  flex: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  pageHead: {
    fontSize: 50,
    fontWeight: "600",
    color: "#2B2D2C",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "ArtegraSemiBold",
  },

  subHead: {
    fontSize: 18,
    textAlign: "center",
    color: "#787A77",
    marginTop: 10,
    fontFamily: "ArtegraSemiBold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    paddingHorizontal: 12,
    height: 55,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "ArtegraSemiBold",
  },
  focusedFormInput: {
    borderColor: "#84cc16",
    borderWidth: 2,
    shadowColor: "#84cc16",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,

    elevation: 5,
  },
  formInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  formSubmitBtn: {
    backgroundColor: "#84cc16",
    height: 55,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    shadowColor: "#84cc16",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "ArtegraSemiBold",
    marginRight: 10,
  },
  socialMediaContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    marginTop: 25,
    justifyContent: "center",
  },
  mediaIcons: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#BDBDBD",
    width: 50,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
  },
});
