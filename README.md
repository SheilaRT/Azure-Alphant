# Azure-Alphant
Azure Alphant is an easy-to-use, highly visual Unicode Character Entity Reference Chart with font support verification for all installed fonts. Azure Alphant was formerly Blue Alphant and has been refactored to remove all dependencies and load up to 76% faster.

***

## Privacy Concerns

### What information does Azure Alphant collect and sell?
Azure Alphant does not track any information on individual users or their computers, which means your information can't be sold by Azure Alphant. Also, information not tracked can't be hacked, and that's just how Azure Alphant rolls - privacy by collection omission.

### So then how does Azure Alphant know what fonts I have?
Actually, Azure Alphant doesn't know. Typing in a font name and submitting it for testing merely tells the tiny font switching script to use the font you chose. If you don't have the font you entered installed, the script simply doesn't work and continues using your default font, as per your browser settings. All you will see is that the characters and symbols look no different than before; there isn't even a script to track whether or not you had the font or to show you a notification that the font is not installed. You know what fonts you have installed; Azure Alphant doesn't need to.

***

## Tile Format

### What information is shown on each tile?
![Each tile displays the glyph, name, codepoint, HTML entity (hex), HTML entity (decimal), and C/C++/Java source code respectively](https://github.com/SheilaRT/Azure-Alphant/blob/master/tile.png)

*The codepoint value is a minimum of 4 digits.

**Codepoints outside of Plane 0 do not display correctly using the C/C++/Java source code above. For codepoints which are 5 or 6 digits in length, use curly brackets around the digits. Example: The Unicode Codepoint for :snail: 'SNAIL' is U+1F40C, and will not display correctly unless written as `\u{1F40C}` or `\uD83D\uDC0C`. For more information, see '[Why do some of the language scripts look like they are a repeated character, but are also paired with a latin number or letter in my project?](https://github.com/SheilaRT/Azure-Alphant/wiki#why-do-some-of-the-language-scripts-look-like-they-are-a-repeated-character-but-are-also-paired-with-a-latin-number-or-letter-in-my-project)'.

### How do I change the size of the tiles?
On your desktop, use the hotkeys **CTRL** + :heavy_plus_sign: (Windows) or **⌘ Command** + :heavy_plus_sign: (Mac) to make the tiles larger. Use the hotkeys **CTRL** + :heavy_minus_sign: (Windows) or **⌘ Command** + :heavy_minus_sign: (Mac) to make the tiles smaller. Use the hotkeys **CTRL**+**0** (Windows) or **⌘ Command**+**0** (Mac) to return the tiles to their default size. Mobile and tablet users may change the size of the tiles using the same spread and pinch gestures you normally use. Keep in mind that while the tiles will still work as intended, the font field may not if the Azure Alphant header ends up covering it when at maximum zoom levels on small screens.

***

# Font Testing

### How do I choose a font to test?
Enter the name of the font you wish to test in the font field (![Font field icon](https://github.com/SheilaRT/Azure-Alphant/blob/master/fontUI.png)____) at the top right corner of the page. Azure Alphant is able to test any working font installed on your device.

### Why do I see boxes or just blank spaces instead of the characters I want?
Either the character you want is a box or a spacing character, or the font you have chosen does not support those characters. This is what is meant by 'font support verification'. If the character information is positioned higher in the otherwise blank tile than it is in tiles with characters, the tile contains a non-graphical character, and is not meant to be visible. If your installed fonts do not support the characters you want, please, try downloading and installing another font to test as a possible fallback font for your project.

This is where [Noto](https://www.google.com/get/noto/) (a Google font) and other Unicode fonts come in handy for personal use as installed fonts on your device, but due to the large file sizes Unicode fonts tend to have, using the CSS @font-face rule for full Unicode font families is not recommended. Unicode fonts tend to be used more for testing, development, and other edge-use cases.

### But I didn't even choose a font, yet.
When you first open the extension, your browser will attempt to style all tiles with the font that is set as your default sans-serif font in your browser's settings. Characters that are not supported by the default font may, depending on your OS and browser, be styled with any fonts packaged with your OS. If a character is still not supported by any of the previously mentioned fonts, it will either not show at all, leaving a blank space in the tile, or it will show up as a broken character, often displayed as an empty box, or 'tofu' according to Google.

### I already know the font I'm testing doesn't support certain characters, so why do those characters still display for me?
Your device or browser is using a default font as a fallback font to display the characters. An easy way to tell if the displayed character is using a default font instead of the font you chose, is to switch between the font you chose and no specified font at all (leave the font field (![Font field icon](https://github.com/SheilaRT/Azure-Alphant/blob/master/fontUI.png)____) blank and click test). Characters supported by your chosen font will change appearance; characters not supported by your chosen font will remain the same in appearance.

***

# Search Tool

### How do I search for a character, glyph, or symbol?
Choose the category and sub-category for that character, glyph, or symbol, then use the hotkeys **CTRL**+**F** (Windows) or **⌘ Command**+**F** (Mac) to open the browser's default search bar. You may search using the codepoint, name, simple description, encoding, or the character itself. Use the arrows by the search bar to navigate to each character that matches what you entered into the search bar. Some browsers may even highlight where matches are located on the scrollbar on the right.

***

# Troubleshooting

### Why is the extension loading slow?
The Unicode Standard contains quite a few characters. In order to make it possible for you to search through every possible character, glyph, and symbol (including emojis), every assigned codepoint must be added to the Azure Alphant database. The slow loading you are experiencing is likely due to the sheer amount of raw data your browser must process in order to display them all. Generally, the CJK and Supplementary Private Use Areas will take the longest to load, as they contain the largest number of codepoints.

### What about all those missing codepoints?
Some codepoints are omitted because they have not been assigned a character yet. As Unicode updates, some of these will be filled in with newly assigned characters.

### What about all those missing emojis and pictographs, like flags?
Some pictographs and emojis aren't actually a single character. For example, country flags are actually the two letter country code with a ZERO WIDTH JOINER connecting them and other flags, like the pirate flag are made nearly the same way. Unfortunately, not all browsers support such characters and may either show nothing, an empty box, the raw code, or even the individual characters without joining them.

For example, the Unicode Codepoints for the 'PIRATE FLAG' emoji are U+1F3F4 (WAVING BLACK FLAG) U+200D (ZERO WIDTH JOINER) U+2620 (SKULL AND CROSSBONES EMOJI) and U+FE0F (VARIATION SELECTOR-16), in that order and with no spaces between codepoints.

### Why do some of the language scripts look like they are a repeated character, but are also paired with a latin number or letter in my project?
This is due to the way the Unicode Consortium encodes those characters. Essentially, any codepoint longer than 4 digits is actually rendered as two separate characters, called a surrogate pair. This means that a character like U+10000 is actually U+D800 and U+DC00, and would be encoded as \uD800\uDC00 in C, C++, and Java. This MAY even be encoded as \u00010000 in some cases. However, it requires fewer bytes and is easier to remember when encoded as \u{10000}, which works, at least in JavaScript (but not in JSON). [It's complicated.](https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae)

### What do you mean by codepoints, blocks, and planes?
Essentially, each U+xxxx, U+xxxxx, and U+xxxxxx is a codepoint. There are 2^16 (256) possible codepoints in a block, and 2^16 blocks (65,536 possible codepoints) in a plane. There are 17 planes (most of which do not yet contain any assigned codepoints) in all, for a total of 1,114,112 codepoints.

The first plane, Plane 0 or Basic Multilingual Plane, mainly contains characters for languages in modern use. The second plane, Plane 1 or Supplementary Multilingual Plane, mainly contains characters for 'dead' or historic languages as well as characters for 'reform' languages, such as Deseret or Shavian, musical notation, emoji, and game characters. The third plane, Plane 2 or Supplementary Ideographic Plane, contains the bulk of CJK Unified Ideographs. The fourth plane, Plane 3 or Tertiary Ideographic Plane, is reserved for additional historic scripts, though as of Unicode 11, none are assigned yet. Planes 4-13 are not used as of Unicode 11. Plane 14, or Supplementary Special-Purpose Plane, only contains non-graphical characters and Planes 15-16, or Supplementary Private Use Area-A and Supplementary Private Use Area-B, are reserved for private use.

### What is a Private Use Area?
Private Use Areas are reserved for private use, allowing parties outside of The Unicode Consortium, like [Font Awesome](https://github.com/FortAwesome/Font-Awesome), to assign their own characters to those codepoints. For example, if you create a UI font that you wish to sell and you want to avoid overwriting any assigned codepoints, both currently assigned and ones that may be assigned in the future, map your font characters (in this case, UI symbols) to codepoints in any of the three Private Use Areas.

### Why can't I find English (or any other language) under the American (or whichever region your language choice is spoken in) writing systems?
The English language uses the Latin alphabet for a writing system. The Latin writing system was created in Europe by the Romans and can be found under European writing systems. This holds true for other languages as well; look for the writing system, not the language, under the region where it was first developed.

### What does CJK mean and why are there so many CJKs listed?
CJK is merely a shorter way of writing 'Chinese, Japanese, and Korean'. It is an extremely large writing system, so Azure Alphant kept it divided up into three groups instead of merging them into one group, as we did with nearly every other writing script or group of related scripts. This was done to avoid time-out errors caused by the sheer amount of load time that much data requires. Your time is valuable; Azure Alphant was created to help save it.

***

# Accessibility

### How can I make all the characters visible against the gray background, even the yellow emojis?
Assuming you know a little about code or are really good at following semi-complex instructions, this is a fairly easy fix. Azure Alphant includes three set themes, the default alphant gray skin theme, a minimalist white with black text theme, and a minimalist black with white text theme, along with three blank, customizable themes. Click on any of the round buttons at the top right to switch themes. To customise the blank themes, follow the instructions under the next question.

### So, how do I customise the blank themes?
You will need to edit both :page_facing_up: _skin.js_ and :page_facing_up: _custom.css_, both of which can be found in the root folder. 

:page_facing_up: _**skin.js**_: In the block of JavaScript just after `case 'custom1':` and up until the following `break`, are all the lines which must be edited to create your first custom theme. Replace each 'x' with a color, gradient, or image according to the comments following each line. 

For example, changing `root.style.setProperty('--color-basic', 'x')` to `root.style.setProperty('--color-basic', '#00F')` will change the main text color, border color, and outline color to blue. If you use an image for the `--bg` property, feel free to use a PNG, JPG, GIF, SVG, or any other file format, local or online, using the relative or absolute path (solid backgrounds work best). On all other properties, `currentColor`, `transparent`, `rgb`, `rgba`, named colors, `hsl`, and `hsla` are all valid values. For a flat theme (flat tiles instead of shaded) set the three values for `--tile-top`, `--tile-mid`, and `--tile-bottom` to `transparent`. 

To create your next two themes, repeat the same steps for the lines after `custom2` and `custom3`. 

:page_facing_up: _**custom.css**_: The final six lines style the buttons for each theme. The first three of those lines are already set for the default alphant theme and both the white and black themes. For the last three, change the background color from `transparent` to the same value you used for `--bg` for the corresponding custom theme in :page_facing_up: _skin.js_. 

Once you've saved your changes, open Azure Alphant and enjoy your new themes. At any time, you may change the values for your custom themes. If and only if, you absolutely know how to code in JS and CSS, you may also add additional themes, however it is not the fault of Azure Alphant if you break your themes in the process. Choose wisely. 

To make your theme of choice always be the theme selected, simply open :page_facing_up: _custom.css_ and change the values of each property in the root element to the values you used for your favorite theme in the :page_facing_up: _skin.js_ file. If you don't even want to see other theme options, set both `.theme` and `.theme button` to `display:none;` in :page_facing_up: _custom.css_. To bring the theme options back again, simply delete `display:none;` where you added it for `.theme` and `.theme button`. Of course, whether or not you've set the theme selector to display, whatever you've set the `:root` properties to in :page_facing_up: _custom.css_ will be the theme that is used by default.

:bulb: _**Protip**_: Save an updated copy of the files you customize and all associated images in a file folder outside of the Azure Alphant folder. You'll be able to copy and paste them back into the Azure Alphant folder after version changes. Otherwise, you may lose your customization settings.

### I'd really prefer setting this up on my desktop instead of bookmarking a local file. How do I do that?
Simply create a shortcut to the :page_facing_up: _menu.html_ file, located in the Azure Alphant main folder, and paste it onto your desktop. A :art: _desktop.ico_ file has also been included for you to use instead of the default file image for your OS. If :art: _desktop.ico_ is not compatible with your OS, feel free to use the :art: _48x48.png_ file instead, as it is the exact same image, just in a different format. 

***

# Feedback

### What if I have an idea for a new character?
Azure Alphant is merely an unofficial reference guide; new character requests should be sent to [The Unicode Consortium](http://www.unicode.org/).

### I can't find the answer to my question about Azure Alphant here. Where should I go to find it?
[Add an issue to the Azure-Alphant repo on GitHub.](https://github.com/SheilaRT/Azure-Alphant/issues) Chances are it will get answered there as a reply, and possibly be answered here once I've finished the next update.

### I love using Azure Alphant, but I don't think that qualifies as an issue. How do I let you know?
Give Azure Alphant a star on the [Azure-Alphant repo.](https://github.com/SheilaRT/Azure-Alphant)

### How do I get you to add the same search function that you used to have on the Blue Alphant Chrome Extension? In fact, how do I make any suggestions?
[Add an issue to the Azure-Alphant repo on GitHub](https://github.com/SheilaRT/Azure-Alphant/issue) for general suggestions. As for search, well, it would be nice, but I haven't quite found a way to make it work correctly just yet. If you're willing to contribute your expertise on the matter, I'm willing to work with you. Credit will be given for all working contributions which are added to this repo. Please read the [contributing guide](https://github.com/SheilaRT/Azure-Alphant/blob/master/docs/CONTRIBUTING.md#how-you-can-help) and the [code of conduct](https://github.com/SheilaRT/Azure-Alphant/blob/master/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct) for more information. Issue and pull request templates are provided in their respective folders in the [.github folder](https://github.com/SheilaRT/Azure-Alphant/tree/pending/.github).

***

# Share

### How do I tell others about Azure Alphant?
You may send them a link to the Azure Alphant 'About' page, either as a text link (emails, texts, comments) or as a banner (blogs, articles). Feel free to tweak the height and width of the banner down from the default maximum size in order to fit your needs. If mentioning Azure Alphant in emoji form, you may use :large_blue_diamond::elephant: (U+1F537,U+1F418).

**Text links**
```
<a href="https://sheilart.github.io/Azure-Alphant/index.html" alt="Azure Alphant" title="Azure Alphant" data-purpose="A Character Entity Reference Chart and Font Support Verification Tool">Azure Alphant, A Character Entity Reference Chart and Font Support Verification Tool</a>
```
or
```
<a href="https://sheilart.github.io/Azure-Alphant/index.html" alt="Azure Alphant" title="Azure Alphant" data-purpose="A Character Entity Reference Chart and Font Support Verification Tool">Azure Alphant</a>
```

**Banner**
```
<a href="https://sheilart.github.io/Azure-Alphant/index.html" alt="Azure Alphant" title="Azure Alphant" data-purpose="A Character Entity Reference Chart and Font Support Verification Tool">
<img src="https://repository-images.githubusercontent.com/197860181/0ae79780-b57d-11e9-8968-c6896d1199c6" style="height:588px;width:1176px;border:none;" data-size="height:width ratio is 1:2" />
</a>
```
