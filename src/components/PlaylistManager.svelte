<script>
    import { createEventDispatcher } from "svelte";
  
    export let songs = [];
    export let playlists = [];
    const dispatch = createEventDispatcher();
  
    let newPlaylistName = "";
    let selectedSongs = [];
  
    const createPlaylist = async () => {
      if (newPlaylistName && selectedSongs.length > 0) {
        const playlist = { name: newPlaylistName, songs: selectedSongs };
        await fetch("http://localhost:3000/playlists", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(playlist),
        });
        dispatch("updated");
      }
    };
  </script>
  
  <div>
    <h2>Playlists</h2>
    <input type="text" placeholder="Playlist Name" bind:value={newPlaylistName} />
    <div>
      {#each songs as song}
        <label>
          <input type="checkbox" value={song} bind:group={selectedSongs} />
          {song.title}
        </label>
      {/each}
    </div>
    <button on:click={createPlaylist}>Create Playlist</button>
    <h3>Existing Playlists</h3>
    <ul>
      {#each playlists as playlist}
        <li>{playlist.name} ({playlist.songs.length} songs)</li>
      {/each}
    </ul>
  </div>
  