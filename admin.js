document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-song-form');
    const tableBody = document.getElementById('custom-songs-body');

    // Load existing custom songs
    let customSongs = JSON.parse(localStorage.getItem('customSongs') || '[]');

    function renderTable() {
        tableBody.innerHTML = '';
        if (customSongs.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="3" style="text-align: center; color: var(--text-secondary);">No custom songs added yet.</td></tr>';
            return;
        }

        customSongs.forEach((song, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td><button class="btn-delete" data-index="${index}">Remove</button></td>
            `;
            tableBody.appendChild(tr);
        });

        // Add delete event listeners
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.getAttribute('data-index');
                customSongs.splice(idx, 1);
                localStorage.setItem('customSongs', JSON.stringify(customSongs));
                renderTable();
            });
        });
    }

    renderTable();

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Adding...';

        const rawUrl = document.getElementById('songUrl').value.trim();
        let title = document.getElementById('songTitle').value.trim();
        const artist = document.getElementById('songArtist').value.trim() || 'Tamil Hits';
        let cover = document.getElementById('songCover').value.trim();

        if (!rawUrl) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Add Song';
            return;
        }

        let finalUrl = rawUrl;
        const isYoutube = rawUrl.includes('youtube.com') || rawUrl.includes('youtu.be');

        if (isYoutube) {
            try {
                // Fetch info from our backend
                const response = await fetch(`http://localhost:3000/api/info?url=${encodeURIComponent(rawUrl)}`);
                if (response.ok) {
                    const data = await response.json();
                    if (!title) title = data.title;
                    if (!cover) cover = data.cover;
                } else {
                    console.error('Failed to fetch YouTube info');
                    if(!title) title = 'YouTube Audio';
                }
                // Set the URL to our backend stream endpoint
                finalUrl = `http://localhost:3000/api/stream?url=${encodeURIComponent(rawUrl)}`;
            } catch (error) {
                console.error('Error contacting backend:', error);
                if(!title) title = 'YouTube Audio';
                finalUrl = `http://localhost:3000/api/stream?url=${encodeURIComponent(rawUrl)}`;
            }
        } else {
            // Auto-extract title if blank for regular URLs
            if (!title) {
                let filename = rawUrl.split('/').pop().split('?')[0].replace('.mp3', '');
                filename = filename.replace(/[-_]/g, ' ');
                filename = filename.replace(/\b\w/g, l => l.toUpperCase());
                title = filename || 'Unknown Title';
            }
        }

        if (!cover) {
            cover = 'default_cover.png';
        }

        const newSong = {
            id: 'custom-' + Date.now(),
            title: title,
            artist: artist,
            url: finalUrl,
            cover: cover
        };

        customSongs.push(newSong);
        localStorage.setItem('customSongs', JSON.stringify(customSongs));
        
        form.reset();
        renderTable();
        
        submitBtn.disabled = false;
        submitBtn.textContent = 'Add Song';
        
        alert('Song added successfully! Go to the home page to play it.');
    });
});
