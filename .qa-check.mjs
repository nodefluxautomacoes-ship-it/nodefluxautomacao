export default async function run(page, ui) {
  const desktop = await page.evaluate(() => {
    const brokenAnchors = [...document.querySelectorAll('a[href^="#"]')]
      .map(a => a.getAttribute('href'))
      .filter(h => h !== '#' && !document.querySelector(h));
    const imgs = [...document.images].map(i => ({ src: i.getAttribute('src'), ok: i.complete && i.naturalWidth > 0, alt: i.alt }));
    const emptyLinks = [...document.querySelectorAll('a[href="#"]')].map(a => a.textContent.trim() || '(logo)');
    const overflow = document.documentElement.scrollWidth > window.innerWidth;
    const hiddenSections = [...document.querySelectorAll('section.hidden')].length;
    return { brokenAnchors, imgs, emptyLinks, overflow, hiddenSections, sections: document.querySelectorAll('section').length };
  });
  await page.screenshot({ path: 'qa-desktop.png', fullPage: false });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(400);
  const mobile = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth > window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
    menuBtnVisible: getComputedStyle(document.getElementById('mobileMenuBtn')).display !== 'none',
    navHidden: getComputedStyle(document.getElementById('navContainer')).display === 'none',
  }));
  await page.screenshot({ path: 'qa-mobile.png', fullPage: false });
  await page.click('#mobileMenuBtn');
  await page.waitForTimeout(300);
  const menuOpen = await page.evaluate(() => getComputedStyle(document.getElementById('navContainer')).display);
  await page.screenshot({ path: 'qa-mobile-menu.png', fullPage: false });
  return { desktop, mobile, menuOpenDisplay: menuOpen };
}
