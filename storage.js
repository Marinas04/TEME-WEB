/**
 * Obiect pentru gestionarea Web Storage
 * Cerința 3.2 și 3.4 din Laborator
 */
const StorageManager = {
    // --- LOCAL STORAGE (Permanent - pentru Utilizatori) ---
    setLocal: function(key, value) {
        // Convertim obiectul/array-ul în string JSON înainte de salvare
        localStorage.setItem(key, JSON.stringify(value));
    },

    getLocal: function(key) {
        const item = localStorage.getItem(key);
        // Convertim string-ul înapoi în obiect JavaScript la citire
        return item ? JSON.parse(item) : null;
    },

    removeLocal: function(key) {
        localStorage.removeItem(key);
    },

    clearLocal: function() {
        localStorage.clear();
    },

    getAllLocal: function() {
        return { ...localStorage };
    },

    // --- SESSION STORAGE (Temporar - pentru Login și Coș) ---
    setSession: function(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },

    getSession: function(key) {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },

    removeSession: function(key) {
        sessionStorage.removeItem(key);
    },

    clearSession: function() {
        sessionStorage.clear();
    },

    getAllSession: function() {
        return { ...sessionStorage };
    }
};