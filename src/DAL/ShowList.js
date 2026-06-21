// Instances of Shows
// Show One
import Show from '../DAL/ShowModel';
import { cactusCastList, cactusCrewList, sssjgCastList, sssjgCrewList, unresolvedCastList, unresolvedCrewList } from '../DAL/PersonList';
import cactusPoster from '../media/graphics/cactus-round-graphic.png';
import cactusAllStaff from '../media/graphics/cast.jpg';
import sssjgPoster from '../media/graphics/poster.jpg';
import sssjgAllStaff from '../media/graphics/cast-photo.jpg';
import unresolvedPoster from '../media/graphics/Unresolved Graphic.jpg';
import sssjgPosterGimli from '../media/graphics/NewGraphicSSSJG.jpg';
import unresolvedAllStaff from '../media/graphics/Unresolved Cast and Crew.jpg';

const Cactus = new Show(
  "Cactus",
  "Daniel Gilmour",
  cactusPoster,
  cactusAllStaff,
  "When they're out of minions but a mortal needs to face their past before they die, sometimes the god of death must step in. It's just Tom's luck to both find out he's dying and to be escorted through his regrets by a surly deity who's out of practice. At least his best friend Jackie (and her trusty cactus, Angie) are coming along as emotional support. Written by Daniel Gilmour, who left the world's stage too soon. Cactus is a dark comedy about life, death, love and loss that we now perform in his memory.",
  ["Venue 6", "Tom Hendry Warehouse", "140 Rupert Ave"],
  [
    "Thursday, July 17 - 2:15 PM",
    "Saturday, July 19 - 11:00 AM",
    "Monday, July 21 - 12:45 PM",
    "Tuesday, July 22 - 10:15 PM",
    "Thursday, July 24 - 3:45 PM",
    "Friday, July 25 - 8:30 PM",
    "Sunday, July 27 - 1:15 PM"
  ],
  "",
  "",
  "https://winnipegfringereviews.com/2025/07/01/cactus/",
  "",
  cactusCastList,
  cactusCrewList
);


export const Unresolved = new Show (
  "Unresolved",
  "Allan Turner",
  unresolvedPoster,
  unresolvedAllStaff,
  "No parent should outlive their child, but . . . what if you do? How do you cope? How do you grieve? How do you go on living? What if you can’t? What if someone’s to blame? What if that someone is . . . you? Jack and Melissa have lost their daughter, Jadyn, and their unspoken grief festers between them in a vicious cycle of shame and guilt, unassuaged by well-intentioned relatives and clergy. Don’t miss this haunting, bold new piece from local playwright Allan Turner.",
  ["Venue 23 One88", "188 Princess Street"],
  [
    "Thursday, July 16 - 8:15 PM", 
    "Friday, July 17 - 5:00 PM", 
    "Saturday, July 18 - 6:15 PM",
    "Sunday, July 19 - 1:45 PM",
    "Tuesday, July 21 - 5:00 PM",
    "Wednesday, July 22 - 6:00 PM",
    "Thursday, July 23 - 5:00 PM",
    "Friday, July 24 - 4:30 PM",
    "Saturday, July 25 - 8:15 PM"
  ],
  "",
  "",
  "",
  "/rehearsal-gallery",
  unresolvedCastList,
  unresolvedCrewList
);

export const sssjgIrish = new Show(
  "The Siren Song of Stephen Jay Gould",
  "Benjamin Bettenbender",
  sssjgPoster,
  sssjgAllStaff,
  "A man lands on a woman after trying to throw himself off a bridge in a botched suicide attempt. On the quiet riverbank, as he attends to her minor injury, he learns that she too was planning to end her life over a broken heart. An argument ensues over the relative seriousness of their respective losses, the nature of existence, and the harmful effects of the essays of biologist Stephen Jay Gould. Will this unexpected collision lead each of them back to the dark place where they started, or will they start anew? ",
  ["Irish Association of Manitoba - 654 Erin Street"],
  [
    "Friday, February 6, 2026 7:30 PM",
    "Saturday, February 7, 2026 2:00 PM",
    "Saturday, February 7, 2026 7:00 PM"
  ],
  "",
  "",
  "",
  "",
  sssjgCastList,
  sssjgCrewList

);

export const sssjgGimli = new Show(
  "The Siren Song of Stephen Jay Gould",
  "Benjamin Bettenbender",
  sssjgPosterGimli,
  sssjgAllStaff,
  "A man lands on a woman after trying to throw himself off a bridge in a botched suicide attempt. On the quiet riverbank, as he attends to her minor injury, he learns that she too was planning to end her life over a broken heart. An argument ensues over the relative seriousness of their respective losses, the nature of existence, and the harmful effects of the essays of biologist Stephen Jay Gould. Will this unexpected collision lead each of them back to the dark place where they started, or will they start anew?",
  ["Aspire Theatre Gimli MB"],
  [
    "Friday June 26  - 7:30",
    "Saturday June 27 - 2:00",
    "Sunday June 27 - 2:00",
    "-----",
    "Call 204-642-8079 to reserve your tickets or you can pay cash at the door or visit HP Tergesen's (82-1st Ave, Gimli) with cash 1 week prior to the performances."
  ],
  "",
  "",
  "",
  "",
  sssjgCastList,
  sssjgCrewList
);

export const currentShow = Unresolved;
export const pastShows = [Cactus, sssjgIrish];