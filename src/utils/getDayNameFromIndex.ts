/**
 * @description Returns the day name from the index generated by the date.getDay() method
 * @param index The index generated by the date.getDay() method
 * @returns The day name string
 * @example
 * const dayName = getDayNameFromIndex(0);
 * console.log(dayName); // "Sunday"
 * @example
 * const dayName = getDayNameFromIndex(6);
 * console.log(dayName); // "Saturday"
 * @example
 * const dayName = getDayNameFromIndex(7);
 * console.log(dayName); // "Invalid day index"
 */
export function getDayNameFromIndex(index:number) {
  switch (index) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day index";
  }
}
