beforeAll(async () => {
  const page = await browser.newPage()
  await page.goto('https://google.com')
})

test('should display `google` text on page', async () => {
  await expect(page).toMatch('google')
})


const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const navigationPromise = page.waitForNavigation()
  
  await page.setViewport({ width: 1527, height: 915 })
  
  await page.goto('http://localhost/wp-login.php')
  
  await page.waitForSelector('#login > #loginform > p > label > #user_login')
  await page.click('#login > #loginform > p > label > #user_login')
  
  await page.waitForSelector('#login > #loginform > p > label > #user_login')
  await page.click('#login > #loginform > p > label > #user_login')
  
  await page.type('#login > #loginform > p > label > #user_login', 'testuser')
  
  await navigationPromise
  
  
  await page.waitForSelector('#adminmenu > #menu-posts > .wp-submenu > li:nth-child(3) > a')
  await page.click('#adminmenu > #menu-posts > .wp-submenu > li:nth-child(3) > a')
  
  await navigationPromise
  
  await page.type('#post-body > #post-body-content > #titlediv > #titlewrap > #title', 'title')
  
  await page.waitForSelector('.inside > #submitpost > #major-publishing-actions > #publishing-action > #publish')
  await page.click('.inside > #submitpost > #major-publishing-actions > #publishing-action > #publish')
  
  await navigationPromise
  
  await page.waitForSelector('#wpbody-content > .wrap > #message > p > a')
  await page.click('#wpbody-content > .wrap > #message > p > a')
  
  await navigationPromise
  
  await browser.close()
})()
