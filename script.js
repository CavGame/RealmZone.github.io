document.getElementById('createServerBtn').addEventListener('click', function() {
    fetch('/createServer', {
        method: 'POST',
        body: JSON.stringify({ userId: 'user_id' }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => {
          console.log('Server creato:', data);
      });
});
