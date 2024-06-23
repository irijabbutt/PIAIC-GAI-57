// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
//     invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: string[] = ["Maryam", "Danish", "Nadia"];
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I would be honored if you could join me for dinner.
        I am excited to discuss your work and ideas with you. Please let me know if you are
        available. Best regards.`
    );
});
export {guestList}
