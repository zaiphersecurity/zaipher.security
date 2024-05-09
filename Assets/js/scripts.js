// Atualiza o ano no rodapé
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Popup de política de cookies
window.onload = function() {
    var cookieConsent = document.getElementById("cookieConsent");
    if (!getCookie("acceptCookies")) {
        cookieConsent.style.display = "block";
    }
}

function acceptCookies() {
    setCookie("acceptCookies", true, 365);
    document.getElementById("cookieConsent").style.display = "none";
}

function declineCookies() {
    // Limpar cookies
    document.cookie.split(";").forEach(function(c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    document.getElementById("cookieConsent").style.display = "none";
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
// Modal de Imagens
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Alternar entre mostrar e ocultar a barra lateral ao clicar no ícone do menu
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

//Feche a barra lateral com o botão Fechar - Não utilizado na primeira versão
function w3_close() {
    mySidebar.style.display = "none";
}
// Função que será executada quando a janela for completamente carregada
window.onload = function() {
    // Obtém o elemento onde será exibido o sistema operacional
    var osSpan = document.getElementById('os');
    
    // Chama a função para detectar o sistema operacional e exibi-lo
    var osName = detectOS();
    osSpan.textContent = osName;

    // Atualiza o ano no rodapé
    document.getElementById('currentYear').textContent = new Date().getFullYear();
};

// Função para detectar o sistema operacional do usuário
function detectOS() {
    var userAgent = window.navigator.userAgent, // Obtém o user-agent do navegador
        platform = window.navigator.platform,   // Obtém a plataforma do sistema operacional
        macPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'], // Plataformas do MacOS
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],     // Plataformas do Windows
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],                     // Plataformas do iOS
        os = null;

    // Verifica se a plataforma corresponde a uma das plataformas MacOS
    if (macPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } 
    // Verifica se a plataforma corresponde a uma das plataformas iOS
    else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } 
    // Verifica se a plataforma corresponde a uma das plataformas Windows
    else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } 
    // Verifica se o user-agent contém a string "Android"
    else if (/Android/.test(userAgent)) {
        os = 'Android';
    } 
    // Verifica se a plataforma corresponde a Linux
    else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    } 
    // Se nenhuma das condições acima for satisfeita, assume-se que é outro sistema operacional
    else {
        os = 'Outro';
    }

    return os; // Retorna o nome do sistema operacional detectado
}
