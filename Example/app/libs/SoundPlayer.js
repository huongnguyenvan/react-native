import { Platform } from "react-native";
import Sound from 'react-native-sound';
import Logger from './Logger';
import RNFetchBlob from 'react-native-fetch-blob';
import ManagerConfig from './ManagerConfig';
class PlaySound {
    loadAndPlayWordSound(audio, callback) {
        if (!audio || audio.length == 0) {
            return;
        }
        let path = '/data/' + audio;
        if (Platform.OS == 'android') {
            path = RNFetchBlob.fs.dirs.DocumentDir + path
        }
        Sound.setCategory('Playback', true);
        const sound = new Sound(path, Sound.DOCUMENT, (error) => {
            if (!error) {
                sound.play(() => {
                    sound.release();
                })
            } else {
                if (callback) callback(error);
               // Logger.log(error)
            }
        });
    }

    loadAndPlaySound(audio) {
        if (ManagerConfig.getConfig().enableSound) {
            Sound.setCategory('Playback', true);
            const sound = new Sound(audio, Sound.MAIN_BUNDLE, (error) => {
                if (!error) {
                    sound.play(() => {
                        sound.release();
                    })
                } else {
                    Logger.log(error)
                }
            });
        }
    }
}
export default SoundPlayer = new PlaySound();