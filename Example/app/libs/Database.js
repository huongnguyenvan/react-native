import Logger from './Logger';
import ManagerConfig from './ManagerConfig'
import Realm from 'realm';

const GROUP_TABLE = "group-table";
const WORD_TABLE = "word-table";

const GroupSchema = {
    name: GROUP_TABLE,
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        description_vi: 'string',
        description_en: 'string',
        image: 'string',
        amount: 'int',
        inapp: 'string',
        price: 'string',
        mycard: 'int',
        type: 'int',
        buy_group: 'string',
        note_vi: 'string',
        note_en: 'string',
        other_1: 'string',
        other_2: 'string',
        other_3: 'string',
    }
}

const WordSchema = {
    name: WORD_TABLE,
    primaryKey: 'id',
    properties: {
        id: 'int',
        word: 'string',
        group: 'int',
        spell: 'string',
        writing: 'string',
        animation: 'string',
        audio: 'string',
        vocab: 'string',
        spell_vocab: 'string',
        audio_vocab: 'string',
        image: 'string',
        mean_vi: 'string',
        mean_en: 'string',
        type: 'int',
        mshow: 'int',
        audio_status: 'int',
        other_1: 'string',
        other_2: 'string',
        other_3: 'string',
    }
}

const table = new Realm({ schema: [GroupSchema, WordSchema] });


function insertGroups(groups) {
    try {
        table.write(() => {
            for (let i = 0; i < groups.length; i++) {
                try {
                    let ori = groups[i];
                    let group = {
                        id: parseInt(ori.id),
                        name: ori.name,
                        image: ori.image,
                        description_vi: ori.description_vi,
                        description_en: ori.description_en,
                        amount: parseInt(ori.amount),
                        inapp: ori.inapp,
                        price: ori.price,
                        mycard: parseInt(ori.mycard),
                        type: parseInt(ori.type),
                        buy_group: ori.buy_group,
                        note_vi: ori.note_vi,
                        note_en: ori.note_en,
                        other_1: '',
                        other_2: '',
                        other_3: '',
                    }
                    table.create(GROUP_TABLE, group, true);
                } catch (ex) {
                    Logger.log('Insert a word error');
                    Logger.log(ex);
                }
            }
        });
    } catch (ex) {
        Logger.log('Insert list group error');
        Logger.log(ex);
    }
}

function insertWords(words) {
    try {
        table.write(() => {
            for (let i = 0; i < words.length; i++) {
                try {
                    let ori = words[i];
                    let word = {
                        id: parseInt(ori.id),
                        word: ori.word,
                        group: parseInt(ori.group),
                        spell: ori.spell,
                        writing: ori.writing,
                        animation: ori.animation,
                        audio: ori.audio,
                        vocab: ori.vocab,
                        spell_vocab: ori.spell_vocab,
                        audio_vocab: ori.audio_vocab,
                        image: ori.image,
                        mean_vi: ori.mean_vi,
                        mean_en: ori.mean_en,
                        type: parseInt(ori.type),
                        mshow: 0,
                        audio_status: 0,
                        other_1: '',
                        other_2: '',
                        other_3: '',
                    }
                    table.create(WORD_TABLE, word, true);
                } catch (ex) {
                    Logger.log('Insert a word error');
                    Logger.log(ex);
                }
            }
        });
        Logger.log("Insert multip words: ", words.length);
    } catch (ex) {
        Logger.log('Insert list word error');
        Logger.log(ex);
    }
}

function deleteDatabase() {
    try {
        table.write(() => {
            table.deleteAll();
        })
    } catch (ex) {
        Logger.log('delete Database Reaml');
        Logger.log(ex);
    }
}

function getAllGroups() {
    let isMeanEn = ManagerConfig.getConfig().languageCode == 'en'
    try {
        let query = table.objects(GROUP_TABLE)

        let array = Array.from(query);
        let response = array.map(item => {
            item.description = (isMeanEn) ? item.description_en : item.description_vi
            return Object.assign({}, item)
        })
        return response;
    } catch (ex) {
        Logger.log('Read list group error');
        Logger.log(ex);
    }
    return [];
}

function getMyGroups() {
    let isMeanEn = ManagerConfig.getConfig().languageCode == 'en'
    try {
        let query = table.objects(GROUP_TABLE).filtered('mycard = 1')
        let array = Array.from(query);
        let response = array.map(item => {
            item.description = (isMeanEn) ? item.description_en : item.description_vi
            return Object.assign({}, item)
        })
        return response;
    } catch (ex) {
        Logger.log('Read list group error');
        Logger.log(ex);
    }
    return [];
}

function getWordsOfGroup(groupId) {
    try {
        let query = table.objects(WORD_TABLE).filtered('group = $0', parseInt(groupId))
        return Array.from(query);
    } catch (ex) {
        Logger.log('Read list word error');
        Logger.log(ex);
    }
    return [];
}

function getWordsToWriting(groupId) {
    try {
        let query = table.objects(WORD_TABLE).filtered("group = $0 and writing !='' ", parseInt(groupId))
        return Array.from(query);
    } catch (ex) {
        Logger.log('Read list word error');
        Logger.log(ex);
    }
    return [];
}

function randomAnswer(groupId, wordId) {
    try {
        let query = table.objects(WORD_TABLE).filtered('group = $0 AND id != $1',
            parseInt(groupId), parseInt(wordId))
        Logger.log("current table size: ", query.length);
        return Array.from(query);
    } catch (ex) {
        Logger.log('Read list word error');
        Logger.log(ex);
    }
    return [];
}


function updateGroup(group) {
    table.write(() => {
        try {
            table.create(GROUP_TABLE, group, true);
        } catch (ex) {
            Logger.log('Update word error');
            Logger.log(ex);
        }
    });
}

function updateGroups(groups) {
    try {
        table.write(() => {
            for (let i = 0; i < groups.length; i++) {
                try {
                    table.create(GROUP_TABLE, groups[i], true);
                } catch (ex) {
                    Logger.log('Update word error', groups[i]);
                    Logger.log(ex);
                }
            }
        });
    } catch (ex) {
        Logger.log('Update word error', groups.length);
        Logger.log(ex);
    }
}

function updateWords(words) {
    try {
        table.write(() => {
            for (let i = 0; i < words.length; i++) {
                try {
                    table.create(WORD_TABLE, words[i], true);
                } catch (ex) {
                    Logger.log('Update word error', words[i]);
                    Logger.log(ex);
                }
            }
        });
    } catch (ex) {
        Logger.log('Update word error', words.length);
        Logger.log(ex);
    }
}

function updateWord(word) {
    table.write(() => {
        try {
            table.create(WORD_TABLE, word, true);
        } catch (ex) {
            Logger.log('Update word error');
            Logger.log(ex);
        }
    });
}

export default Database = {
    insertGroups,
    insertWords,
    deleteDatabase,
    getAllGroups,
    getMyGroups,
    getWordsOfGroup,
    updateGroup,
    updateGroups,
    updateWords,
    updateWord,
    randomAnswer,
    getWordsToWriting
};
