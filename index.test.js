const timeout = 5000

describe('Wordpress test', () => {
  let page

  beforeAll(async () => {
    page = await browser.newPage()
    await page.goto('http://localhost/wp-login.php')
  }, timeout)

  afterAll(async () => {
    await page.close()
  })

  it('should display `Username or Email Address` text on login page', async () => {
    await expect(page).toMatch('Username or Email Address')
  })

  it('should login', async () => {
    await page.click('#login > #loginform > p > label > #user_login')
    await page.type('#login > #loginform > p > label > #user_login', 'testuser')

    await page.click('#login > #loginform > p > label > #user_pass')
    await page.type('#login > #loginform > p > label > #user_pass', 'testpass')

    await page.click('.login > #login > #loginform > .submit > #wp-submit')

    const navigationPromise = page.waitForNavigation()
    await navigationPromise

    await expect(page).toMatch('Dashboard')
  })
}, timeout)




// const puppeteer = require('puppeteer');
// (async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   const navigationPromise = page.waitForNavigation()
//   await page.setViewport({ width: 1527, height: 915 })
//   
//   await navigationPromise
//   
//   await page.type('#post-body > #post-body-content > #titlediv > #titlewrap > #title', 'title')
//   
//   await page.waitForSelector('.inside > #submitpost > #major-publishing-actions > #publishing-action > #publish')
//   await page.click('.inside > #submitpost > #major-publishing-actions > #publishing-action > #publish')
//   
//   await navigationPromise
//   
//   await page.waitForSelector('#wpbody-content > .wrap > #message > p > a')
//   await page.click('#wpbody-content > .wrap > #message > p > a')
//   
//   await navigationPromise
//   
//   await browser.close()
// })()