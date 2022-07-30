function songList(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type
            this.name = name
            this.time = time
        }
    }
    let songs = [];
    let numberOfSongs = input.shift();
    let typeOfSong = input.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input.split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeOfSong === 'all') {
        Song.forEach((i) => i.type === typeOfSong);
        filtred.forEach((i) => console.log(i.name));
    }
}
songList([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
