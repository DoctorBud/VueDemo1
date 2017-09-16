const STORAGE_KEY = 'todos-vuejs';

export default {
    fetch: function fetch() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    },
    save: function save(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    },
};
