const STORE_KEY = 'TODOLISTKEY';

/**
 * 获取存储
 * 
 * @returns {Array}
 */
function getStore() {
    let storeStr = localStorage[STORE_KEY] || '[]';
    let store = JSON.parse(storeStr);
    return store;
}

/**
 * 保存
 * 
 * @param {Array} store 
 */
function saveStore(store) {
    localStorage[STORE_KEY] = JSON.stringify(store);
}

export default {
    getStore,
    saveStore
};