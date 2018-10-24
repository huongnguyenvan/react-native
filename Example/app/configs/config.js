import { Dimensions } from "react-native";

const config = {
	SERVER_URL: "",
	TEST_URL: "",
	DEVELOP_MODE: true
}

export function getBaseURL() {
	if (AppConfig.DEVELOP_MODE) {
		return AppConfig.TEST_URL
	}
	return AppConfig.SERVER_URL
}

export default AppConfig = config;