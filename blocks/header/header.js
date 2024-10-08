import { readBlockConfig } from '../../scripts/lib-franklin.js';

/**
 * collapses all open nav sections
 * @param {Element} sections The container element
 */


/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  readBlockConfig(block);
  block.textContent = '';
  const membershipDataString = document.cookie
      .split("; ")
      .find((row) => row.startsWith("adaptToMemberData="))
      ?.split("=")[1];
  const membershipData = membershipDataString ? JSON.parse(membershipDataString) : null;
  if(membershipData.level) {
    const signOut = document.createElement('div');
    signOut.classList.add('nav-signout');
    signOut.innerHTML = '<a href="#">sign out</a>';
    signOut.addEventListener('click', (el) => {
      document.cookie = "adaptToMemberData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "adaptToVerification=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      el.currentTarget.remove();
      location.pathname = "/";
    });
    block.append(signOut);
  }

  // fetch nav content
  // const navPath = cfg.nav || '/nav';
  // const resp = await fetch(`${navPath}.plain.html`);
  // if (resp.ok) {
  //   const html = await resp.text();
  //
  //   // decorate nav DOM
  //   const nav = document.createElement('nav');
  //   nav.innerHTML = html;
  //   decorateIcons(nav);
  //
  //   const classes = ['brand', 'sections', 'tools'];
  //   classes.forEach((e, j) => {
  //     const section = nav.children[j];
  //     if (section) section.classList.add(`nav-${e}`);
  //   });
  //
  //   const navSections = [...nav.children][1];
  //   if (navSections) {
  //     navSections.querySelectorAll(':scope > ul > li').forEach((navSection) => {
  //       if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
  //       navSection.addEventListener('click', () => {
  //         const expanded = navSection.getAttribute('aria-expanded') === 'true';
  //         collapseAllNavSections(navSections);
  //         navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  //       });
  //     });
  //   }
  //
  //   // hamburger for mobile
  //   const hamburger = document.createElement('div');
  //   hamburger.classList.add('nav-hamburger');
  //   hamburger.innerHTML = '<div class="nav-hamburger-icon"></div>';
  //   hamburger.addEventListener('click', () => {
  //     const expanded = nav.getAttribute('aria-expanded') === 'true';
  //     document.body.style.overflowY = expanded ? '' : 'hidden';
  //     nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  //   });
  //   nav.prepend(hamburger);
  //   nav.setAttribute('aria-expanded', 'false');
  //   decorateIcons(nav);
  //   block.append(nav);
  // }
}
