// Instances of Shows
// Show One
import Show from '../DAL/ShowModel';
import {director, leadActor} from '../DAL/PersonList';

const castList = [leadActor];
const crewList = [director];

export const currentShow = new Show(
  "Midnight in Winnipeg",            // title
  "Elena Rossi",                     // author
  "cover1.jpg",                      // coverPhoto 
  "staff-group.jpg",                 // allStaffPhoto 
  "A thrilling mystery set in MB.",  // synopsis
  "Royal Manitoba Theatre Centre",   // location
  "Oct 12-24, 2026",                 // dateTimes
  "https://tickets.example.com",     // ticketLink
  "https://media.example.com/kit",   // mediaKitLink
  null,                              // reviewsLink (Not yet available)
  "",                                // galleryLink (Empty string becomes null)
  castList,                          // castList (Array of Person objects)
  crewList                           // crewList (Array of Person objects)
);