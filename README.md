[![npm version](https://badge.fury.io/js/jqmin.svg)](https://badge.fury.io/js/jqmin)
[![](https://img.shields.io/npm/dm/jqmin.svg)](https://www.npmjs.com/package/jqmin)

# Tiny jQuery for AX6UI
jQuery 3.2.2 (-ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-attributes/prop,-attributes/support,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-wrap,-deferred,-deferred/exceptionHook,-queue,-queue/delay,-core/ready,-event/focusin,-event/alias,-css/showHide,-css/hiddenVisibleSelectors)


### extract option
```
grunt --gruntfile jquery/Gruntfile.js custom:-ajax,-attributes/prop,-attributes/support,-deprecated,-effects,-wrap,-deferred,-event/focusin,-event/alias,-css/showHide,-sizzle,-core/ready,-queue 
```

### npm install
```
npm install jqmin -S
```

### example
```js
import $ from "jqmin"

$(document).ready(function() {
      
});
```