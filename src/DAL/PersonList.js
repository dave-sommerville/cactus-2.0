import Person from '../DAL/PersonModel';

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

