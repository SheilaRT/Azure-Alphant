const root = document.documentElement 
const themeBtns = document.querySelectorAll('.theme > button')

themeBtns.forEach((btn) => {
  btn.addEventListener('click', handleThemeUpdate)
})

function handleThemeUpdate(e) {
  switch(e.target.value) {
    case 'alphant':
		// default	
	  root.style.setProperty('--color-basic', '#112')	  
	  root.style.setProperty('--color-active', '#224')
	  root.style.setProperty('--color-visit', '#446')	  	  
	  root.style.setProperty('--bg', '#CCC')
	  root.style.setProperty('--tile-top', '#EEE')
	  root.style.setProperty('--tile-mid', '#B8B8B8')
	  root.style.setProperty('--tile-bottom', '#BBB')	  
	  root.style.setProperty('--tile-border', 'transparent')	  
	  root.style.setProperty('--linear-edge', '#1010880C')
	  root.style.setProperty('--linear-center', '#101088')	  
	  root.style.setProperty('--baseline', '#0001')
	  root.style.setProperty('--key-text', '#CCC')
      break
    case 'white':
	  root.style.setProperty('--color-basic', '#444')	  
	  root.style.setProperty('--color-active', '#666')
	  root.style.setProperty('--color-visit', '#888')	  	  
	  root.style.setProperty('--bg', '#FFF')
	  root.style.setProperty('--tile-top', 'transparent')
	  root.style.setProperty('--tile-mid', 'transparent')
	  root.style.setProperty('--tile-bottom', 'transparent')	  
	  root.style.setProperty('--tile-border', '#111')	  
	  root.style.setProperty('--linear-edge', '#4441')
	  root.style.setProperty('--linear-center', '#444')	  
	  root.style.setProperty('--baseline', '#f9f9f9')
	  root.style.setProperty('--key-text', '#FFF')
      break
    case 'black':
	  root.style.setProperty('--color-basic', '#CCC')	  
	  root.style.setProperty('--color-active', '#AAA')
	  root.style.setProperty('--color-visit', '#888')	  	  
	  root.style.setProperty('--bg', '#000')
	  root.style.setProperty('--tile-top', 'transparent')
	  root.style.setProperty('--tile-mid', 'transparent')
	  root.style.setProperty('--tile-bottom', 'transparent')	  
	  root.style.setProperty('--tile-border', '#CCC')	  
	  root.style.setProperty('--linear-edge', '#CCC1')
	  root.style.setProperty('--linear-center', '#CCC')	  
	  root.style.setProperty('--baseline', '#181818')
	  root.style.setProperty('--key-text', '#000')
      break
	case 'custom1':
		// replace all x's with custom colors, gradients, or images to create your own, custom skin
	  root.style.setProperty('--color-basic', 'x') // the main text color, border color, and outline color for Azure Alphant
	  root.style.setProperty('--color-active', 'x') // the text color for selected or hovered over links 
	  root.style.setProperty('--color-visit', 'x') // the text color for visited links and links that have not been selected or hovered over 	  
	  root.style.setProperty('--bg', 'x') // the main background for Azure Alphant; this may be a color, gradient, or image
	  root.style.setProperty('--tile-top', 'x') // the color at the top left of each tile's radial gradient and part of the inner shading of each tile
	  root.style.setProperty('--tile-mid', 'x') // the color in the middle of each tile's radial gradient and part of the inner shading of each tile
	  root.style.setProperty('--tile-bottom', 'x') // the color at the bottom right of each tile's radial gradient and part of the inner shading of each tile	  
	  root.style.setProperty('--tile-border', 'x') // the border color of each tile	  
	  root.style.setProperty('--linear-edge', 'x') // the color of each end of the dividing lines in the menu and on the help page
	  root.style.setProperty('--linear-center', 'x') // the color in the center of the dividing lines in the menu and on the help page
	  root.style.setProperty('--baseline', 'x') // the color of the line between each character and its corresponding information and the color of the border around the theme buttons
	  root.style.setProperty('--key-text', 'x') // the color of the text on the 'keycaps' on the help page (for best visibility, choose the same color as --bg, or in the case of using a background image, choose a color that contrasts --color-basic)
      break
	case 'custom2':
		// replace all x's with custom colors, gradients, or images to create your own, custom skin
	  root.style.setProperty('--color-basic', 'x')	  
	  root.style.setProperty('--color-active', 'x')
	  root.style.setProperty('--color-visit', 'x')	  	  
	  root.style.setProperty('--bg', 'x')
	  root.style.setProperty('--tile-top', 'x')
	  root.style.setProperty('--tile-mid', 'x')
	  root.style.setProperty('--tile-bottom', 'x')	  
	  root.style.setProperty('--tile-border', 'x')	  
	  root.style.setProperty('--linear-edge', 'x')
	  root.style.setProperty('--linear-center', 'x')	  
	  root.style.setProperty('--baseline', 'x')
	  root.style.setProperty('--key-text', 'x')
      break
	case 'custom3':
		// replace all x's with custom colors, gradients, or images to create your own, custom skin
	  root.style.setProperty('--color-basic', 'x')	  
	  root.style.setProperty('--color-active', 'x')
	  root.style.setProperty('--color-visit', 'x')	  	  
	  root.style.setProperty('--bg', 'x')
	  root.style.setProperty('--tile-top', 'x')
	  root.style.setProperty('--tile-mid', 'x')
	  root.style.setProperty('--tile-bottom', 'x')	  
	  root.style.setProperty('--tile-border', 'x')	  
	  root.style.setProperty('--linear-edge', 'x')
	  root.style.setProperty('--linear-center', 'x')	  
	  root.style.setProperty('--baseline', 'x')
	  root.style.setProperty('--key-text', 'x')
      break
  }
};