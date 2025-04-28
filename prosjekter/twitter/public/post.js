async function hentMeldinger() {
    try {
        const response = await fetch('/hentmeldinger');
        const meldinger = await response.json();

        const mainElement = document.querySelector('main');
        mainElement.innerHTML = ''; // Tøm eksisterende innhold

        meldinger.forEach(melding => {
            const postSection = document.createElement('section');
            postSection.classList.add('post');
            postSection.innerHTML = `
                <h2>${melding.nameoftweet}</h2>
                <p>${melding.content}</p>
                <p>Av: ${melding.author}</p>
                <p>${melding.dateoftweet}</p>
                <p>Likes: ${melding.likes || 0}</p>
                <p>Retweets: ${melding.retweets || 0}</p>
            `;
            mainElement.appendChild(postSection);
        });
    } catch (error) {
        console.error('Kunne ikke hente meldinger:', error);
    }
}

// Oppdater meldinger hvert 5. sekund
setInterval(hentMeldinger, 5000);

// Hent meldinger ved oppstart
hentMeldinger();

// legger til post's

document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameoftweet = document.getElementById('nameoftweet').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;
    const dateoftweet = document.getElementById('dateoftweet').value;

    try {
        const response = await fetch('/leggtilpost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nameoftweet, content, author, dateoftweet }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            document.getElementById('postForm').reset();
        } else {
            alert(result.error || 'Noe gikk galt!');
        }
    } catch (error) {
        console.error('Feil ved oppretting av post:', error);
        alert('Kunne ikke opprette post.');
    }
});