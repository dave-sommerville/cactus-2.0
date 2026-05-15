import memory1 from '../media/memory-gallery/Memory1.jpg';
import memory2 from '../media/memory-gallery/Memory2.jpg';
import memory3 from '../media/memory-gallery/Memory3.jpg';
import memory4 from '../media/memory-gallery/Memory4.jpg';
import memory5 from '../media/memory-gallery/memory5.jpg';
import memory6  from '../media/memory-gallery/memory6.jpg';

function Memories() {
  return(
  <section className="container memory-container">
    <h2>Memories of Dan</h2>
    <figure className="memory-figure">
      <img className="memory-card" src={memory6} alt="Memory 6" />
      <figcaption>
        I had many adventures with Dan both in and out of the theatre. One of my favourites is when we took a road trip out to Pine Docks to film in the caves. It was one of many locations we ventured to in the making on Paper Bag Princess Trailer, based on Dan's favourite children's story by Robert Munsch.
        <br /> - Steph Blanchette
      </figcaption>
    </figure>
    <h3>
      Paper Bag Princess Teaser Trailer
    </h3>
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/gd-qhL-B-Hs" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
    </iframe>
    <a href="https://youtu.be/qfOCx-FKZcI?si=vdvVjnPCfL7ZZK_J" target="_blank" title="Cactus Theatre Co YouTube Channel">
      <i className="fa-brands fa-youtube"></i>
      See Full Trailer Here
      <i className="fa-brands fa-youtube"></i>
    </a>
    <figure className="memory-figure">
      <img className="memory-card" src={memory1} alt="Daniel in Dino costume" />
      <figcaption className="width">
        Daniel in Dino costume
      </figcaption>
    </figure>
    <figure className="memory-figure">
      <img className="memory-card" src={memory2} alt="Daniel and his niece Madelyn" />
      <figcaption className="width">
        Daniel and his biggest fan, his niece Madelyn. This one of the first productions Madelyn was able to attend and lasted 30 seconds into Daniel's appearance before she got too scared and needed to leave. However, she was overjoyed to meet the ogre in person after the show
      </figcaption>
    </figure>
    <figure className="memory-figure">
      <img className="memory-card" src={memory3} alt="Madelyn McCamis and Daniel Gilmour" />
      <figcaption>
        Madelyn McCamis and her uncle Daniel Gilmour posing up a storm during a family photo shoot.  Madelyn and Daniel were always making each other laugh and enjoy life to the fullest.  Madelyn wants to become a writer and actor like her uncle.
      </figcaption>
    </figure>
    <figure className="memory-figure">
      <img className="memory-card" src={memory4} alt="Rehearsing for Snow White" />
      <figcaption>
        Rehearsing for Snow White
      </figcaption>
    </figure>
    <figure className="memory-figure">
      <img className="memory-card" src={memory5} alt="Chair One - Dan Zero" />
      <figcaption className="width">
        Chair One - Dan Zero <br />
        In rehearsal for Wpg Mennonite Theatre's 2019 production of "Tempest Tost", Dan was supposed to leap, or vault, over this chair - carefree, without a worry in the world. Unfortunately, he miscalculated heights and distances, almost doing himself irreversible damage! Being a true pro, he disengaged himself from the offensive chair, grimaced, and carried on without any more errors.<br />
        - Bernard
      </figcaption>
    </figure>
  </section>
  );
}
export default Memories;