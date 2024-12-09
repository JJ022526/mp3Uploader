<script>
    import { onMount } from "svelte";
    import SongUploader from "./SongUploader.svelte";
    import PlaylistManager from "./PlaylistManager.svelte";
    import LyricsDisplay from "./LyricsDisplay.svelte";
  
    let songs = [];
    let playlists = [];
  
    const fetchSongs = async () => {
      const res = await fetch("http://localhost:3000/songs");
      songs = await res.json();
    };
  
    const fetchPlaylists = async () => {
      const res = await fetch("http://localhost:3000/playlists");
      playlists = await res.json();
    };
  
    onMount(() => {
      fetchSongs();
      fetchPlaylists();
    });
  </script>
  
  <main>
    <h1>Spotify-like App</h1>
    <SongUploader on:uploaded={fetchSongs} />
    <LyricsDisplay {songs} />
    <PlaylistManager {songs} {playlists} on:updated={fetchPlaylists} />
  </main>
  