import {AsyncStorage} from "react-native";

export default class Storage {

	static saveAppConfig(config) {
        return AsyncStorage.setItem("AppConfig", JSON.stringify(config));
    }

    static loadAppConfig() {
        return AsyncStorage.getItem("AppConfig");
    }
}
