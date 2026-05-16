import Person from '../DAL/PersonModel';
import alisonKolisnyk from '../media/staff/Alison Kolisnyk.jpg';
import bernardBoland from '../media/staff/Bernard Boland.jpg';
import connorHopper from '../media/staff/Connor Hopper.jpg';
import davePruden from '../media/staff/Dave Pruden.jpg';
import daveSommerville from '../media/staff/Dave Sommerville.JPG';
import eveRoss from '../media/staff/Eve Ross.jpg';
import heatherForgie from '../media/staff/Heather Forgie.jpg';
import hopeFigueroa from '../media/staff/Hope Figueroa.jpg';
import hopeFigueroaLowercase from '../media/staff/hope-figueroa.jpg';
import jordanPhilips from '../media/staff/Jordan Philips.jpg';
import juliaPhilips from '../media/staff/Julia Philips.jpg';
import madelynRoseX2 from '../media/staff/Madelyn Rose x2.jpg';
import natalieFitkowsky from '../media/staff/Natalie Fitkowsy.jpg';
import rickScherger from '../media/staff/Rick Scherger.jpg';
import shaneJordan from '../media/staff/Shane Jordan.jpg';
import stephJBlanchette from '../media/staff/Steph J Blanchette.jpg';
import danGilmour from '../media/memory-gallery/dan-photo.jpg';

// Example 1: Full data
export const director = new Person(
  "Sarah Jenkins",
  "Director",
  "Sarah has over 15 years of experience in Broadway productions.",
  "https://example.com/sarah-headshot.jpg"
);

// Example 2: Partial data (Bio and Photo will become null via our setters)
export const leadActor = new Person(
  "Marcus Thorne",
  "Lead Actor",
  "", // Empty string becomes null
  undefined // Undefined becomes null
);


/*
      CAST
*/

const JordanPhilips = new Person(
  "Jordan Philips",
  "While they met some years previous, Jordan first got to work with Dan on The Beggar and the Wolf with Merlyn Productions in 2019. The last show they worked on together was a radio production of Letters: War Within with Parachuting Camel Productions which Jordan directed for release in 2024, making it Dan's final, posthumous performance. It is an honour to help bring Cactus to the stage in Dan's memory.",
  jordanPhilips
);
const HopeFigueroaCactus = new Person(
  "Hope Figueroa",
  "",
  "Hope Figueroa (she/her) is an actor, improviser, and Arts Education advocate based in Winnipeg, MB. She's thrilled to help bring her friend's magnum opus, Cactus, to life with Cactus Theatre Co. Hope and Dan met after a Merlyn Productions show at Carlos & Murphy's, bonding over stories, jokes, and nachos. Since then, they collaborated on several projects, including C*A*S*H* (BS Comedy Players), a Zoom reading of Last Christmas (as Clara Oswald and The Doctor), and other script readings. She remains grateful to Dan for introducing her to Doctor Who and Sherlock—despite her initial reluctance. Select acting credits include The Savannah Sipping Society, Motherhood Out Loud, and Not Medea (R-G Productions); The Tempest (Indifferently Reformed); The Laramie Project (Meraki Theatre); and A Marriage Proposal (Merlyn Productions). A seasoned improviser, Hope performs with The Crosseyed Rascals, has guested in the IF Festival, and jams regularly at Winn-City Improv events. Offstage, she is the incoming president of the Manitoba Drama Educators' Association and works with teens as a guidance counsellor. She looks forward to directing with Cactus Theatre Co. in 2026.",
  hopeFigueroa
);
const ConnorHopper = new Person(
  "Connor Hopper",
  "",
  "Connor Hopper is a Manitoban performer, born and raised. He is a member at large for the Winnipeg Mennonite Theatre Society, but has contributed to many local plays and films with other groups. His first time working with Dan Gilmour was in \"Radio Nights\" back in late 2017. From there he had the utmost pleasure directing Dan in \"The Taming of the Shrew\" and \"You Can't Take it With You.\" Most recently Connor has been seen on stage as the grumpy grocer Bob in \"One Stoplight Town\" and as the polarized roles of Son and Tom in \"The Open House,\" both through WMT. When not working with community theatre, Connor works hard to introduce his high school students to the performing arts, South of the city. Connor would love to thank his supportive friends, family, wife Ally, and cat Samwise for all of their love, patience, and encouragement.",
  connorHopper
);
const NatalieFitkowsky = new Person(
  "Natalie Fitkowsky",
  "",
  "Natalie Fitkowsky was born and raised in Winnipeg, and currently teaches English to high school students. In addition to teaching, she enjoys singing with the O. Koshetz Ukrainian Choir and acting in a variety of community theatre productions. Natalie met Dan while rehearsing for Winnipeg Mennonite Theatre's production of \"You Can't Take It With You\" in 2022. She is honoured to be performing in Dan's show, \"Cactus,\" as Stella.",
  natalieFitkowsky
);
const ShaneJordan = new Person(
  "Shane Jordan",
  "",
  "Shane Jordan had the opportunity to work and laugh with Dan during his time with the BS Comedy players (2010-2019), making many local politicians laugh, and quite a few others grit their teeth. Shane has also been on stage with \"You Can't Beat Fun\" (University of Manitoba, 2002), \"Tales from the Funny Box (Funny Box Theatre, 2009), and most recently as Captain Mal in \"Pirates! Musical Mayhem\" (Incantatem, 2023)",
  shaneJordan
);

const theCactus = new Person(
  "Madelyn Rose Saguaro",
  "",
  "Madelyn Rose Saguaro is thrilled to be making her Winnipeg Fringe debut. For her, this feels like turning over a new leaf as, up until this point, she's been more of a film plant; standing in as a background player and extra in many films set in arid, North American climates. She had more prominent roles in the 2008 film Cactus and the 2022 film The House Among the Cactuses (though her preference for the plural \"cacti\" was disregarded in production of the latter), but her starring role in Crystal Fairy & the Magical Cactus (2013, starring opposite Michael Cera) is when she truly became rooted as an actress. Breaking into live theatre has given her a fabulous chance to grow. While she never had the privilege of meeting Dan herself, she feels she knows him after having spent so much time with his close friends and family in rehearsals. Plus, anyone related to a Madelyn is automatically a friend in her book. (Madelyn became a member of the cast more than a prop after a conversation that was had between the cast and crew. As her character has a name in the show, we felt that, were Dan here, it would be exactly his sense of humour to say that Angie is the character's name, but that the cactus playing Angie would need a name of its own as an actor. A few plant puns were tossed around as names, with Rose being the one settled on, but naming her after Dan's niece Madelyn also seemed the best choice. After all, Madelyn was Dan's biggest fan and one of, if not the primary inspiration for his work in children's theatre. Thus, Madelyn Rose came into being.)",
  madelynRoseX2
);

/*
      CREW
*/

const DanGilmour = new Person(
  "Daniel Gilmour",
  "Playwright",
  "Daniel Gilmour was a passionate member of Winnipeg's theatre community. A proud member of the Black Hole Theatre Company at the U of M, after graduating he went on to act in numerous plays for multiple theatre companies around the city. A few highlights include The Beggar and the Wolf and Snow White and the Seven Dwarves with Merlyn Productions and The Taming of the Shrew and You Can't Take It With You with Winnipeg Mennonite Theatre. His final, posthumous role was in the radio play Letters: War Within with Parachuting Camel productions, which released almost a year after Dan's passing. Daniel had also done some screen acting, playing Mr. Morgan in ShawTV's Millworth. Part-time actor and full-time child minder (better known as an Early Childhood Educator), Daniel described himself as an avid board game player, a sports fan, and an exceptionally gifted napper. While these are certainly not the circumstances under which anyone would have liked to add “writer” to Dan's long list of credits, we are thrilled to bring the first of his written works to the Fringe.",
  danGilmour
);

const StephBlanchetteCactus = new Person(
  "Steph Blanchette",
  "Artistic Director, Stage Manager",
  "Steph Blanchette is the founder of Cactus Theatre Co, created in memory of Daniel Gilmour and his play of the same name. Steph first worked with Dan on \"Italian American Reconciliation\" at Shanley Fest 2018. They also worked together with Merlyn Productions where Dan loved performing for children, especially his niece and biggest fan Madelyn. It is an honour to be producing Cactus and bringing his words to the stage. Steph co-produced \"Mulligan's Island\" (Winnipeg Fringe 2015), \"Once On This Island\" (Shoe In Productions 2017), and \"Audition Deficit Disorder\" (Winnipeg Fringe 2022). Other highlights are \"Weirder Thou Art\" (Winnipeg Fringe 2016, Toronto Fringe 2017), \"Your Brain On Anxiety\" (Winnipeg Fringe 2018), \"The Weight of Shame\" (An Seanchai Theatre Company 2023) and \"9 to 5 The Musical\" (RMTC Lawyers Play 2023). Steph's next big project is producing  \"The Little Theatre Festival\" with Siobhan Keely and Rob Kwade, bringing together community theatre in February 2026.",
  stephJBlanchette
);

const AlisonKolisnyk = new Person(
  "Alison Kolisnyk",
  "Director",
  "Alison Kolisnyk has been part of the Winnipeg community theatre scene for over a decade with various theatre companies.  This marks Alison's first production with Cactus Theatre Co. She is thrilled to be directing this extremely talented group! Alison had the absolute pleasure of being on stage with Dan for numerous theatre productions. They first meet while working on Through the Looking Glass with Merlyn Productions in 2014 and again in The Beggar and The Wolf (18), Puss in Boots (18), and Wind of a Thousand Tales (17).  They also shared the stage for Dan's final theatrical run in You Can't Take It With You (22)with Winnipeg Mennonite Theatre as \"The Russians\". Her previous directing credits include: The Savannah Sipping Society (Fringe 24), Charming and Rose: True Love (Fringe 22), Heroine Addiction (IbsenFest 20), and Not Medea (Fringe 18) for R-G Productions. Besides directing Cactus for Fringe you will also find Alison on stage in Wherever You May Be, Venue #3, Cercle Moliere. ",
  alisonKolisnyk
);
const JuliaPhilips = new Person(
  "Julia Philips",
  "Assitant Stage Manager, Costume Designer",
  "Julia Phillips is an incorrigible collector of crafts and hobbies, and is cursed with mindset of wondering \"How hard can it really be?\" when faced with a creative challenge. This landed in her first role as costume designer for The Tempest (Winnipeg Fringe 2023), and since then she has been keeping an eye out for more shows/excuses to make historical and fantastical costumes. This is her first time in the role of Assistant Stage Manager.",
  juliaPhilips
);
const HeatherForgie = new Person(
  "Heather Forgie",
  "Set Designer, Props",
  "Heather Forgie has been the artistic director of R-G Productions since 2014, and has designed sets and built props for all of their shows since then. She is also the property mistress for Merlyn Productions, where she met Dan Gilmour. Heather is a writer, actress, middle school teacher and mother of two amazing sons. She is honoured to be a part of this production in memory of a dear friend and fellow artistic Jack-of-all-trades.",
  heatherForgie
);
const BernardBorland = new Person(
  "Bernard Borland",
  "Photographer",
  "I started acting over 70 years ago, in German at Manchester University, continued in English in the UK and Canada, and worked for several years in French with the Cercle Molière, the francophone professional equivalent to RMTC. As well as theatre work, I have also done a lot of voice work, from providing a voice for a Japanese dry cleaner, to narrating an award-winning documentary, as well as TV gigs. Of all this, my favourite has always been live theatre, in front of an appreciative audience. Live theatre needs rehearsals, which gives rise to wonderful friendships - like Dan Gilmour, a fantastic actor, who passed away at 38. This was a great loss to the local theatre community, and to me and all those were privileged to call him a friend.",
  bernardBoland
);

const DavePruden = new Person(
  "Dave Pruden",
  "Publicity Designer",
  "Graphic artist by day. Dave worked in so many Fringe Festival productions, he's lost count. Acted. Stage managed. Tech. And did the graphics for every show he was involved in. While he only worked with Dan on one show years ago, he is grateful to be part of this production that will do his memory proud. Wishes for a world filled with peace, tolerance, and plenty of parking.",
  davePruden
);

const RickSherger = new Person(
  "Rick Scherger",
  "Videographer",
  "A veteran of three community theatre groups, and appearing in three productions with Dan Gilmore, Rick is proud to have been asked to be a part of the crew for this fantastic production. Watching this group of incredible talent come together to perform Dan's words has been an amazing journey. Looking forward to the final product.",
  rickScherger
);
const DaveSommerville = new Person(
  "Dave Sommerville",
  "Website and Logo Designer",
  "Dave Sommerville is a proud Winnipegger currently working as an Instructional Assistant in the Software Development program at MITT. Although only knowing Dan briefly, Dave was touched by his passion for theatre and his kind spirit. Dave has worked on a number of web projects, both personal and commissioned, and is excited to help Cactus Theatre Co with all their web needs. ", 
  daveSommerville
);

export const cactusCastList = [
  JordanPhilips, 
  HopeFigueroaCactus,
  ConnorHopper, 
  NatalieFitkowsky, 
  ShaneJordan, 
  theCactus
];
export const cactusCrewList = [ 
  DanGilmour, 
  StephBlanchetteCactus,
  AlisonKolisnyk, 
  JuliaPhilips, 
  HeatherForgie, 
  BernardBorland, 
  DavePruden,
  RickSherger
];