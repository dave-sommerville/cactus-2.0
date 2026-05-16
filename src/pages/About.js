import danPhoto from '../media/memory-gallery/dan-photo.jpg';
function About() {
  return(
    <>
      <section class="container memory-container">
        <p>
          All the world's a stage, and all the people merely players. They have their exits and their entrances, and some exits come along too soon. Cactus Theatre Co was created in memory of one such player: Daniel Gilmour, whose exit from the world stage came far too soon indeed.
          Dan was a passionate member of Winnipeg's theatre community who loved to create and play on stage through a variety of genres, moods, and styles of theatre.
        </p>
        <p>
          In his honour, therefore, Cactus Theatre Co is committed to bringing Dan's spirit of adventure, his exuberance, his child-like wonder, and his commitment to as many shows, as many cast and crew members, and as many audiences as we can in the time that we have left on the world's stage.
        </p>
        <p>
          In Dan's play Cactus (CTC's first staged production), one character tells us that, “In many First Nations cultures, cacti are symbols of endurance and love.” May our enduring love for Dan, for this community, and for the art of theatre be the focal point of every production.
        </p>
      <figure >
        <img  class="dan-photo" src={danPhoto}></img>
      </figure>
      </section>
    </>
  );
}
export default About;