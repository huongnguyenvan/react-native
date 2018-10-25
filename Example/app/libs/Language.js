
//default language is english
const en = require("../assets/languages/en.json");
let str = en;

export default class Lan {
    static initLanguage(lan) {
        if (lan == 'vi') {
            str = require("../assets/languages/vi.json");
        } else {
            str = require("../assets/languages/en.json");
        }
        for (let key in en) {
            if (!str[key]) {
                str[key] = en[key];
            }
        }
    }

    static t(title) {
        return str[title];
    }

}