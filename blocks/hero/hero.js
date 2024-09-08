/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
    const membershipDataString = document.cookie
        .split("; ")
        .find((row) => row.startsWith("adaptToMemberData="))
        ?.split("=")[1];
    const membershipData = membershipDataString ? JSON.parse(membershipDataString) : null;
    if(membershipData.userName){
        const h1Elem = block.querySelector("h1");
        const newNode = document.createElement("h2");
        newNode.textContent = `Welcome ${membershipData.userName}`;
        h1Elem.parentNode.insertBefore(newNode, h1Elem);
    }
}
