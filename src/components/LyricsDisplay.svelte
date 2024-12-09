<script>
    export let songs;
    let selectedSong = null;
  
    const fetchLyrics = (song) => {
      // For simplicity, return dummy lyrics
      return `Lyrics for ${song.title} by ${song.artist}`;
    };
  </script>
  
  <div>
    <h2>Lyrics</h2>
    <select bind:value={selectedSong}>
      <option value={null}>Select a song</option>
      {#each songs as song}
        <option value={song}>{song.title}</option>
      {/each}
    </select>
    {#if selectedSong}
      <p>{fetchLyrics(selectedSong)}</p>
    {/if}
  </div>
  