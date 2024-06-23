// 15. Changing Guest List: You just heard that one of your guests can’t make the
//     dinner, so you need to send out a new set of invitations. You’ll have to think of
//     someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.
import { log } from "console";
import { guestList } from "./q14";
console.log("Original Guest List: ", guestList);
// Remove the guest who can't make it
let removedGuest = "Maryam";
const newguestList = guestList.filter((guest) => guest !== removedGuest);
console.log(
	`Removed ${removedGuest} from the guest list.` + ` New Guest List: `,
	newguestList
);
// Add a new guest
let newGuest = "Azka";
guestList.push(newGuest);
console.log(
	`Added ${newGuest} to the guest list.` + ` New Guest List: `,
	newguestList
);
// Send out new invitations
let print=console.log(newguestList);

for (let i = 0; i < newguestList.length; i++) {
	console.log(`Dear ${newguestList[i]}, you are invited to dinner!`);
	
}

console.log(`Unfortunately, ${removedGuest} can't make it to the dinner.`);

export {newguestList,print}