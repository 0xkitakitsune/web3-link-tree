// Leave unwanted fields equal to undefined.
// Web3 Link Tree will handle the rest (🔗, 🌲)

// Set 'wallet' to undefined if you wish to disable the Tipping feature
export const DETAILS = {
  name: 'Eto',
  header: 'Eto.eth',
  headerlink: 'https://twitter.com/etoeth',
  wallet: '0x239b88b1be00f539c8200c571d82ca13c661faf3'
}

// Import Background Image here 👇
import bg from './images/bg.gif'
export const BG = bg;

// Import Logo Image here 👇
import logo from './images/logo.png'
export const LOGO = logo;

import btn_twitter from './images/btn_twitter.png'
import btn_medium from './images/btn_medium.png'
// Import Button Images here 👆

// Buttons are best as 1500x500px images!
// Upload your image to twitter as a header,
// then save your image and drag it in the /images/ folder.

// To include a footer icon: Give 'link' a value
// To include a button: Give 'button' your imported image value
export const TWITTER = {
  link: 'https://twitter.com/etoeth',
  button: btn_twitter
}

export const MEDIUM = {
  link: 'https://medium.com/@0xEto',
  button: btn_medium
}

export const GITHUB = {
  link: undefined,
  button: undefined
}

export const DISCORD = {
  link: undefined,
  button: undefined
}

export const SUBSTACK = {
  link: undefined,
  button: undefined
}

export const ABOUT = {
  title: 'Where is Eto?',
  text: 'In the Shadows.'
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