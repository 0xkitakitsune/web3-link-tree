// Leave unwanted fields equal to undefined.
// Web3 Link Tree will handle the rest (🔗, 🌲)

// Set 'wallet' to undefined if you wish to disable the Tipping feature
export const DETAILS = {
  name: 'Scarpa',
  header: 'Scarpa',
  headerlink: 'https://twitter.com/TraderScarpa',
  wallet: '0xEC449A181486f8569c70c853abf2C8a6A5E5707F'
}

// Import Background Image here 👇
import bg from './images/bg.gif'
export const BG = bg;

// Import Logo Image here 👇
import logo from './images/logo.png'
export const LOGO = logo;

import btn_twitter from './images/btn_twitter.png'
import btn_medium from './images/btn_medium.png'
import btn_discord from './images/btn_discord.png'
// Import Button Images here 👆

// Buttons are best as 1500x500px images!
// Upload your image to twitter as a header,
// then save your image and drag it in the /images/ folder.

// To include a footer icon: Give 'link' a value
// To include a button: Give 'button' your imported image value
export const TWITTER = {
  link: 'https://twitter.com/TraderScarpa',
  button: btn_twitter
}

export const MEDIUM = {
  link: 'http://medium.com/@TraderScarpa',
  button: btn_medium
}

export const GITHUB = {
  link: undefined,
  button: undefined
}

export const DISCORD = {
  link: 'http://discord.gg/hJQ7maFbtm',
  button: btn_discord
}

export const SUBSTACK = {
  link: undefined,
  button: undefined
}

export const ABOUT = {
  title: undefined,
  text: undefined
}
export const ABOUT2 = {
  title: undefined,
  text: undefined
}
export const ABOUT3 = {
  title: undefined,
  text: undefined
}
export const ABOUT4 = {
  title: undefined,
  text: undefined
}
export const ABOUT5 = {
  title: undefined,
  text: undefined
}

export const TITLE = `${DETAILS.name}'s Web3 Link Tree`