var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var sites = [
  'http://whatcoloristheempirestatebuilding.com/',
  'http://shouldiusetablesforlayout.com/',
  'http://cat-bounce.com/',
  'http://procatinator.com/',
  'http://cant-not-tweet-this.com/',
  'http://ninjaflex.com/',
  'http://www.electricboogiewoogie.com/',
  'http://www.isitchristmas.com/',
  'http://chrismckenzie.com/',
  'http://www.hamsterdance.org/hamsterdance/',
  'http://www.pointerpointer.com/',
  'http://www.wwwdotcom.com/',
  'http://www.d-e-f-i-n-i-t-e-l-y.com/',
  'http://amiawesome.com/',
  'http://www.donothingfor2minutes.com/',
  'http://www.everydayim.com/',
  'http://www.webtender.com/db/drink/RAND',
  'http://www.rrrgggbbb.com/',
  'http://www.haneke.net/',
  'http://www.ooooiiii.com/',
  'http://pixelsfighting.com/',
  'http://www.howmanypeopleareinspacerightnow.com/',
  'http://www.sanger.dk/',
  'http://hasthelargehadroncolliderdestroyedtheworldyet.com/',
  'http://beesbeesbees.com/',
  'https://en.wikipedia.org/wiki/Special:Random',
  'http://vincemckelvie.com/gradientforest/',
  'http://heeeeeeeey.com/',
  'http://baconsizzling.com/',
  'http://nothingsgonnastopmenow.com/',
  'http://sometimesredsometimesblue.com/',
  'http://www.omfgdogs.com/',
  'http://ducksarethebest.com/',
  'http://didhanshootfirst.com/',
  'http://ihasabucket.com/',
  'http://salmonofcapistrano.com/',
  'http://www.koalastothemax.com/',
  'http://www.leduchamp.com/',
  'http://www.fallingfalling.com/',
  'http://zombo.com/'
];

var button = buttons.ActionButton({
  id: 'sr-button',
  label: 'moar sites please',
  icon: {
    '16': './icon-16.png',
    '32': './icon-32.png',
    '64': './icon-64.png'
  },
  onClick: function (state) {
    tabs.open(sites[Math.floor(Math.random() * sites.length)]);
  }
});
