
     const nameoftweet = document.getElementById('nameoftweet').value;
     const content = document.getElementById('content').value;
     const author = document.getElementById('author').value;

     // Generer nåværende dato og tid
            const dateoftweet = new Date().toISOString();

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
        
   