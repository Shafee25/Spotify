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

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const url = document.getElementById('songUrl').value.trim();
        let title = document.getElementById('songTitle').value.trim();
        const artist = document.getElementById('songArtist').value.trim() || 'Tamil Hits';
        let cover = document.getElementById('songCover').value.trim();

        if (!url) return;

        // Auto-extract title if blank
        if (!title) {
            let filename = url.split('/').pop().split('?')[0].replace('.mp3', '');
            // Basic cleanup
            filename = filename.replace(/[-_]/g, ' ');
            filename = filename.replace(/\b\w/g, l => l.toUpperCase());
            title = filename || 'Unknown Title';
        }

        if (!cover) {
            cover = 'default_cover.png';
        }

        const newSong = {
            id: 'custom-' + Date.now(), // Generate a unique ID for custom songs
            title: title,
            artist: artist,
            url: url,
            cover: cover
        };

        customSongs.push(newSong);
        localStorage.setItem('customSongs', JSON.stringify(customSongs));
        
        // Reset form
        form.reset();
        
        // Update table
        renderTable();
        
        alert('Song added successfully! Go to the home page to play it.');
    });
});
