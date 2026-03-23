/**
 * Obiect pentru gestionarea Cookies
 * Cerința 2.2 din Laborator
 */
const CookieManager = {
    // Setează un cookie: nume, valoare și număr de zile până la expirare
    set: function(name, value, days = 7) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        // Path=/ face cookie-ul disponibil în tot site-ul
        document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
    },

    // Recuperează valoarea unui cookie după nume
    get: function(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    // Șterge un cookie (îi forțează expirarea)
    delete: function(name) {
        document.cookie = name + '=; Max-Age=-99999999; path=/;';
    },

    // Returnează toate cookies sub formă de obiect (pentru pagina info)
    getAll: function() {
        let cookies = {};
        if (document.cookie && document.cookie != '') {
            let split = document.cookie.split(';');
            for (let i = 0; i < split.length; i++) {
                let nameValue = split[i].split('=');
                nameValue[0] = nameValue[0].replace(/^ /, '');
                cookies[decodeURIComponent(nameValue[0])] = decodeURIComponent(nameValue[1]);
            }
        }
        return cookies;
    },

    // Șterge absolut toate cookies
    deleteAll: function() {
        const all = this.getAll();
        for (let key in all) {
            this.delete(key);
        }
    }
};