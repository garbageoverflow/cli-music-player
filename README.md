<div align="center">

# CL Music Player
A NodeJS, command line music player

</div>

### Usage
  + `node index.js add old_path new_path`
    - add new music to your collection(in the `music` folder)
    - this will remove the old file(`old_path`)
  + `node index.js list`  
    - Lists all the files in the `music` folder
    ```
      [Music Player] Listing all music
      [Music Player] 8
      -- "7-nation-army.mp3"
      -- "beds-are-burning.mp3"
      -- "bitter-sweet-symphony.mp3"
      -- "enjoy-the-silence.mp3"
      -- "house-of-the-rising-sun.mp3"
      -- "lemon-tree.mp3"
      -- "personal-jesus.mp3"
      -- "zombie-cranberries.mp3"
    ```
  + `node index.js file_name file_type`
    - plays the selected music
    ```
    [Music Player] Now Playing 7-nation-army
    [Music Player] Type: mp3
    [Music Player] Duration: 239.04s
    ```

### Dependencies
- `audic` `^2.0.0`
- `colors` `^1.4.0`
- `mp3-duration` `^1.1.0`
- `fs` is a native module

### Installing

- automatic
```sh
$ npm install
```

- manual
```sh
$ npm install audic --save
$ npm install colors --save
$ npm install mp3-duration --save
```
