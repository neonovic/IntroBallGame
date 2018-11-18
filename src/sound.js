export default class Sound {
  constructor() {
    this.dead = ["hihi01.mp3", "hihi02.mp3", "dead03.mp3"];
    this.hit = ["hit02.mp3", "hit_kluci01.mp3", "hit_kluci02.mp3"];

    this.root = "../assets/sounds/";
    this.current = null;
  }

  randomFile(files) {
    return files[Math.floor(Math.random() * files.length)];
  }

  setCurrent(files) {
    this.current = new Audio(this.root + this.randomFile(files));
    return this.current;
  }
}
