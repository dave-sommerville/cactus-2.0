class Person {
  #personName = null;
  #title = null;
  #bio = null;
  #headShot = null;

  constructor(name, title, bio, photo) {
    // These calls trigger the setters defined below
    this.personName = name;
    this.title = title;
    this.bio = bio;
    this.headShot = photo; 
  }

  // --- Setters ---
  // Using || null ensures empty strings "" become null
  set personName(val) {
    this.#personName = val || null;
  }

  set title(val) {
    this.#title = val || null;
  }

  set bio(val) {
    this.#bio = val || null;
  }

  set headShot(val) {
    this.#headShot = val || null;
  }

  // --- Getters ---
  get personName() {
    return this.#personName;
  }

  get title() {
    return this.#title;
  }

  get bio() {
    return this.#bio;
  }

  get headShot() {
    return this.#headShot;
  }
}
export default Person;