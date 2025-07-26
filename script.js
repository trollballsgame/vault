function gebqs(selector) {
    return document.querySelector(selector);
}

const members = ["jason", "mrloopy", "loopy", "XO", "goban", "bot", "trump", "coolix", "baller", "frowned", "anton", "ayo", "shadow"]
const textbox = gebqs('#textbox');
const username = gebqs('#username');
const submit = gebqs('#submit');
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const attcount = gebqs('#attemptcount')
let attempts = 15;

submit.addEventListener('click', function(e) {
    if(textbox.value.trim() === '' || username.value.trim() === '') {
        alert('Please enter a value');
    } else if (textbox.value.trim() === 'codes') {
        console.log(`codes accessed at ${year} / ${month} / ${day} \n codes:\n "vault-zB3a" - show members,\n "vault-Cr0x" - trollballs logs,\n "vault-ch@r-an0m" - anomalies,\n "sector-473" - sector 473,\n`);
    } else if (textbox.value.trim() === 'vault-zB3a') {
        if (members.includes(username.value.trim()) || username.value.trim() === 'admin') {
            window.location.href = 'members.html';
        } else {
            textbox.value = '';
            username.value = '';
            alert('You are not a member of this vault. Please contact an admin if you believe this is a mistake.');
            if (attempts <= 0) {
                alert('You have exceeded the maximum number of attempts. Please try again later.');
                textbox.disabled = true;
                username.disabled = true;
                submit.disabled = true;
                setTimeout(() => {
                    textbox.disabled = false;
                    username.disabled = false;
                    submit.disabled = false;
                    attempts = 15;
                }, 30000)
                return;
            }
            textbox.value = '';
            username.value = '';
            attempts--;
            attcount.textContent = `Attempts remaining: ${attempts}`;
        }
    } else if (textbox.value.trim() === 'sector-473' || textbox.value.trim() === '§-473') {
        if (members.includes(username.value.trim()) || username.value.trim() === 'admin') {
            window.location.href = 'sector473.html';
        } else {
            textbox.value = '';
            username.value = '';
            alert('You are not a member of this vault. Please contact an admin if you believe this is a mistake.');
            if (attempts <= 0) {
                alert('You have exceeded the maximum number of attempts. Please try again later.');
                textbox.disabled = true;
                username.disabled = true;
                submit.disabled = true;
                setTimeout(() => {
                    textbox.disabled = false;
                    username.disabled = false;
                    submit.disabled = false;
                    attempts = 15;
                }, 30000)
                return;
            }
            textbox.value = '';
            username.value = '';
            attempts--;
            attcount.textContent = `Attempts remaining: ${attempts}`;
        }
    } else if (textbox.value.trim() === 'vault-ch@r-an0m') {
        if (members.includes(username.value.trim()) || username.value.trim() === 'admin') {
            window.location.href = 'anomalies.html';
        } else {
            textbox.value = '';
            username.value = '';
            alert('You are not a member of this vault. Please contact an admin if you believe this is a mistake.');
            if (attempts <= 0) {
                alert('You have exceeded the maximum number of attempts. Please try again later.');
                textbox.disabled = true;
                username.disabled = true;
                submit.disabled = true;
                setTimeout(() => {
                    textbox.disabled = false;
                    username.disabled = false;
                    submit.disabled = false;
                    attempts = 15;
                }, 30000)
                return;
            }
            textbox.value = '';
            username.value = '';
            attempts--;
            attcount.textContent = `Attempts remaining: ${attempts}`;
        }
    } else if (textbox.value.trim() === 'vault-Cr0x') {
        if (members.includes(username.value.trim()) || username.value.trim() === 'admin') {
            window.location.href = 'members.html';
        } else {
            textbox.value = '';
            username.value = '';
            alert('You are not a member of this vault. Please contact an admin if you believe this is a mistake.');
            if (attempts <= 0) {
                alert('You have exceeded the maximum number of attempts. Please try again later.');
                textbox.disabled = true;
                username.disabled = true;
                submit.disabled = true;
                setTimeout(() => {
                    textbox.disabled = false;
                    username.disabled = false;
                    submit.disabled = false;
                    attempts = 15;
                }, 30000)
                return;
            }
            textbox.value = '';
            username.value = '';
            attempts--;
            attcount.textContent = `Attempts remaining: ${attempts}`;
        }
    } else {
        if (attempts <= 0) {
            alert('You have exceeded the maximum number of attempts. Please try again later.');
            textbox.disabled = true;
            username.disabled = true;
            submit.disabled = true;
            setTimeout(() => {
                textbox.disabled = false;
                username.disabled = false;
                submit.disabled = false;
            }, 30000)
            return;
        }
        textbox.value = '';
        username.value = '';
        alert('Incorrect vault code. Please try again.');
        attempts--;
        attcount.textContent = `Attempts remaining: ${attempts}`;
    }
})