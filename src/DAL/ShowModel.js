/* 
ShowModel
- Title
- Author
- Cover Photo/Alt Text
-? All cast photo/Alt Text
- Synopsis
- Location
-? Dates and Times
- 

ShowModel.ButtonWrapper(Name/Link)
-? Ticket Link
-? Media Kit
-? Reviews
-? Photo Gallery

- Cast/Crew List

ShowModel.ExpandingDiv(Cast/Crew, PersonModel)
- Photo
- Name
- Bio

Photo Gallery(Show)
- API feed

*/
class Show {
  // Private fields
  #title = '';
  #author = '';
  #coverPhoto = [];
  #allStaffPhoto = [];
  #synopsis = '';
  #location = null;
  #dateTimes = null;
  #ticketLink = null;
  #mediaKitLink = null;
  #reviewsLink = null;
  #galleryLink = null;
  #castList = [];
  #crewList = [];

  constructor(title, author, coverPhoto, staffPhoto, synopsis, location, dateTimes, ticketLink, mediaLink, reviewsLink, galleryLink, castList, crewList) {
    // Assigning via 'this.field' triggers the setters below
    this.title = title;
    this.author = author;
    this.coverPhoto = coverPhoto;
    this.allStaffPhoto = staffPhoto;
    this.synopsis = synopsis;
    this.location = location;
    this.dateTimes = dateTimes;
    this.ticketLink = ticketLink;
    this.mediaKitLink = mediaLink;
    this.reviewsLink = reviewsLink;
    this.galleryLink = galleryLink;
    this.castList = castList;
    this.crewList = crewList;
  }

  // Setters with null-checks
  set title(val) { this.#title = val || null; }
  set author(val) { this.#author = val || null; }
  set synopsis(val) { this.#synopsis = val || null; }
  set location(val) { this.#location = val || null; }
  set dateTimes(val) { this.#dateTimes = Array.isArray(val) ? val : []; }
  set ticketLink(val) { this.#ticketLink = val || null; }
  set mediaKitLink(val) { this.#mediaKitLink = val || null; }
  set reviewsLink(val) { this.#reviewsLink = val || null; }
  set galleryLink(val) { this.#galleryLink = val || null; }

  // Array handlers: Ensure we always have an array, even if empty
  set coverPhoto(val) { this.#coverPhoto = val || null; }
  set allStaffPhoto(val) { this.#allStaffPhoto = val || null; }
  set castList(val) { this.#castList = Array.isArray(val) ? val : []; }
  set crewList(val) { this.#crewList = Array.isArray(val) ? val : []; }

  // Getters (Required to access private fields in React)
  get title() { return this.#title; }
  get author() { return this.#author; }
  get synopsis() { return this.#synopsis; }
  get location() { return this.#location; }
  get dateTimes() { return this.#dateTimes; }
  get ticketLink() { return this.#ticketLink; }
  get mediaKitLink() { return this.#mediaKitLink; }
  get reviewsLink() { return this.#reviewsLink; }
  get galleryLink() { return this.#galleryLink; }
  get coverPhoto() { return this.#coverPhoto; }
  get allStaffPhoto() { return this.#allStaffPhoto; }
  get castList() { return this.#castList; }
  get crewList() { return this.#crewList; }
}
export default Show;