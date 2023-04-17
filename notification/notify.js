//test!
(async () => {
    // create and show the notification
    const showNotification = () => {
        // TODO: Integrar com o calendario.
        const notification = new Notification('Prova daqui à uma semana!', {
            body: 'Clique aqui para acessar o Moodle!',
            icon: 'https://cdn.glitch.global/f9cb10ab-76aa-4d91-9c68-15589ae1640c/moodle_logo.png?v=1681734171368'
        });

        // close the notification after 15 seconds
        setTimeout(() => {
            notification.close();
        }, 15 * 1000);

        // navigate to a URL when clicked
        notification.addEventListener('click', () => {
            //link Moodle
            window.open('https://moodle.ufabc.edu.br/my/', '_blank');
        });
    }

    // show an error message
    const showError = () => {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        error.textContent = 'Notificações desabilitadas.';
    }

    // check notification permission
    let granted = false;

    //Setar permissões em notificações.
    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }

    // show notification or error
    if (granted === true) showNotification();
    else showError();

})();