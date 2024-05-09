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
</script>
<script>
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