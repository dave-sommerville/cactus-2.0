// Instances of Shows
// Show One
import Show from '../DAL/ShowModel';
import {director, leadActor, cactusCastList, cactusCrewList } from '../DAL/PersonList';

const castList = [leadActor];
const crewList = [director];

export const currentShow = new Show(
  "Midnight in Winnipeg",            // title
  "Elena Rossi",                     // author
  "cover1.jpg",                      // coverPhoto 
  "staff-group.jpg",                 // allStaffPhoto 
  "A thrilling mystery set in MB.",  // synopsis
  "Royal Manitoba Theatre Centre",   // location
  [],                                // dateTimes
  "https://tickets.example.com",     // ticketLink
  "https://media.example.com/kit",   // mediaKitLink
  null,                              // reviewsLink (Not yet available)
  "",                                // galleryLink (Empty string becomes null)
  castList,                          // castList (Array of Person objects)
  crewList                           // crewList (Array of Person objects)
);

const Cactus = new Show(
  "Cactus",
  "Daniel Gilmour",
  "",
  "",
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
  "https://winnipegfringereviews.com/2025/07/01/cactus/",
  "",
  cactusCastList,
  cactusCrewList
);