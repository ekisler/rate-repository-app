// authStorage.js
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(`@${this.namespace}:token`);
    return token ? JSON.parse(token) : null;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `@${this.namespace}:token`,
      JSON.stringify(accessToken)
    );
  }

  async setUserName(username) {
    await AsyncStorage.setItem(`@${this.namespace}:username`, username);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`@${this.namespace}:token`);
  }
}

export default AuthStorage;
