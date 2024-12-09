<script>
    import { createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
    let title = "";
    let artist = "";
    let file;
  
    const uploadSong = async () => {
      if (file) {
        const reader = new FileReader();
        reader.onload = async () => {
          const song = { title, artist, file: reader.result };
          await fetch("http://localhost:3000/songs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(song),
          });
          dispatch("uploaded");
        };
        reader.readAsDataURL(file);
      }
    };
  </script>
  
  <div>
    <h2>Upload Song</h2>
    <input type="text" placeholder="Title" bind:value={title} />
    <input type="text" placeholder="Artist" bind:value={artist} />
    <input type="file" accept=".mp3" bind:this={file} />
    <button on:click={uploadSong}>Upload</button>
  </div>
  