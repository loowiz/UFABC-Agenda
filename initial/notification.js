/*function event_check () {
    //console.log(document);
    const event_type = document.getElementById("BCC24");
}*/

(async () => {
  // TODO: Integrar com o calendario.

  const showNotification = () => {
    const notification = new Notification("Prova daqui à uma semana!", {
      body: "Clique aqui para acessar o Moodle!",
      icon: "https://cdn.glitch.global/f9cb10ab-76aa-4d91-9c68-15589ae1640c/moodle_logo.png?v=1681734171368",
    });

    setTimeout(() => {
      notification.close();
    }, 20 * 1000);

    // navigate to a URL when clicked
    notification.addEventListener("click", () => {
      //link Moodle
      window.open("https://moodle.ufabc.edu.br/my/", "_blank");
    });
  };

  let granted = false;

  //Setar permissões em notificações.
  if (Notification.permission === "granted") {
    granted = true;
  } else if (Notification.permission !== "denied") {
    let permission = await Notification.requestPermission();
    granted = permission === "granted" ? true : false;
  }

  if (granted === true) showNotification();
})();
