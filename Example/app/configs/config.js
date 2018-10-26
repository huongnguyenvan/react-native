import { Dimensions } from "react-native";

const config = {
	SERVER_URL: "https://api.ice5.skyx.app/",
	TEST_URL: "https://api.ice5.skyx.app/",
	DEVELOP_MODE: true
}

export function getBaseURL() {
	if (AppConfig.DEVELOP_MODE) {
		return AppConfig.TEST_URL
	}
	return AppConfig.SERVER_URL
}

export function getImageURL(filename) {
	return getBaseURL() + "public/data/language/" + filename;
}

export default AppConfig = config;