const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.',
      ),
    ).toBeVisible()
  })
  test('clicking a pokemon redirects to its page', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    const pokemonLink = await page.$('a[href="/pokemon/ivysaur"]')
    if (pokemonLink) {
      await pokemonLink.click()
    } else {
      throw new Error('Pokemon link not found')
    }

    expect(page.getByText('chlorophyllis'))
  })
})
