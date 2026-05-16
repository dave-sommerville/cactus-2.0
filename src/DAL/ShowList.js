// Instances of Shows
// Show One
import Show from '../DAL/ShowModel';
import {director, leadActor, cactusCastList, cactusCrewList } from '../DAL/PersonList';
import cactusAllStaff from '../media/graphics/cast.jpg';
import sssjgPoster from '../media/graphics/poster.jpg';
import sssjgAllStaff from '../media/graphics/cast-photo.jpg';

const castList = [leadActor];
const crewList = [director];


const Cactus = new Show(
  "Cactus",
  "Daniel Gilmour",
  null,
  cactusAllStaff,
  "When they're out of minions but a mortal needs to face their past before they die, sometimes the god of death must step in. It's just Tom's luck to both find out he's dying and to be escorted through his regrets by a surly deity who's out of practice. At least his best friend Jackie (and her trusty cactus, Angie) are coming along as emotional support. Written by Daniel Gilmour, who left the world's stage too soon. Cactus is a dark comedy about life, death, love and loss that we now perform in his memory.",
  "Venue 6 - Tom Hendry Warehouse",
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


export const currentShow = Cactus;
export const pastShows = [Cactus];