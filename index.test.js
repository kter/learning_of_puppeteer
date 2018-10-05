const puppeteer = require('puppeteer');

beforeAll(async () => {
  page = await browser.newPage()
  await page.goto('http://localhost')
})

  test('should display `test title` text on page', async () => {
  const browser = await puppeteer.launch()
  // const page = await browser.newPage()
  
  await page.waitForSelector('#login > #loginform > p > label > #user_login')
  await page.click('#login > #loginform > p > label > #user_login')
  
  await page.waitForSelector('#login > #loginform > p > label > #user_login')
  await page.click('#login > #loginform > p > label > #user_login')
  
  await page.type('#login > #loginform > p > label > #user_login', 'testuser')
  
  await page.waitForSelector('.login > #login > #loginform > .submit > #wp-submit')
  await page.click('.login > #login > #loginform > .submit > #wp-submit')
  
  await navigationPromise
  
  const navigationPromise = page.waitForNavigation()
  
  await page.waitForSelector('#adminmenu > #menu-posts > .wp-submenu > li:nth-child(3) > a')
  await page.click('#adminmenu > #menu-posts > .wp-submenu > li:nth-child(3) > a')
  
  await navigationPromise
  
  await page.waitForSelector('.inside > #submitpost > #major-publishing-actions > #publishing-action > #publish')
  await page.click('.inside > #submitpost > #major-publishing-actions > #publishing-action > #publish')
  
  await navigationPromise
  
  await page.waitForSelector('#wpbody-content > .wrap > #message > p > a')
  await page.click('#wpbody-content > .wrap > #message > p > a')
  
  await navigationPromise
  
  await expect(page).toMatch('test title')

  await browser.close()

})()