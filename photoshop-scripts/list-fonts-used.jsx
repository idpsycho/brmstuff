#target photoshop
#strict on

listFontsUsed();
function listFontsUsed()
{
	var inputFiles = File.openDialog('Select files to list fonts', '*.psd', true);
	var mapFonts = {};

	for(index in inputFiles)
	{
		// open the file
		var fileToOpen = new File(inputFiles[index]);
		open(fileToOpen);

		var doc = activeDocument;
		for (var i=0; i<doc.layers.length ; i++)
		{
			var layer = doc.layers[i];
			if (layer.kind != LayerKind.TEXT) continue;

			var fonts = getFonts(layer);
			for (q in fonts)
				mapFonts[fonts[q].font] = 1;

			break;
		}

		doc.close(SaveOptions.DONOTSAVECHANGES);
	}
	var arrFonts = [];
	for (fontName in mapFonts)
		arrFonts.push(fontName);
	var sFonts = arrFonts.join(', ');
	prompt('Used fonts, you can copy them now:', sFonts);
}


///////////////////////////////////////////////
function getColorFromDescriptor(colorDesc, keyClass) {
      var colorObject = new SolidColor();
      switch (keyClass) {
      case "Grsc":
        colorObject.grey.grey = color.getDouble(charIDToTypeID('Gry '));
        break;
      case "RGBC":
        colorObject.rgb.red = colorDesc.getDouble(charIDToTypeID('Rd  '));
        colorObject.rgb.green = colorDesc.getDouble(charIDToTypeID('Grn '));
        colorObject.rgb.blue = colorDesc.getDouble(charIDToTypeID('Bl  '));
        break;
      case "CMYC":
        colorObject.cmyk.cyan = colorDesc.getDouble(charIDToTypeID('Cyn '));
        colorObject.cmyk.magenta = colorDesc.getDouble(charIDToTypeID('Mgnt'));
        colorObject.cmyk.yellow = colorDesc.getDouble(charIDToTypeID('Ylw '));
        colorObject.cmyk.black = colorDesc.getDouble(charIDToTypeID('Blck'));
        break;
      case "LbCl":
        colorObject.lab.l = colorDesc.getDouble(charIDToTypeID('Lmnc'));
        colorObject.lab.a = colorDesc.getDouble(charIDToTypeID('A   '));
        colorObject.lab.b = colorDesc.getDouble(charIDToTypeID('B   '));
        break;
      default:
        return null;
      }
      return colorObject;
    };
    // get fonts and other parameters used in type layer
    function getFonts(textLayer) {
var font_content_detection = false;
      function markReturnedContentText(text) {
        if (font_content_detection) {
          return font_content_detection_symbols[0] + text + font_content_detection_symbols[1] + "\r";
        } else {
          return text;
        }
      }
      if (textLayer.kind == LayerKind.TEXT) {
        app.activeDocument.activeLayer = textLayer;
        var ref = new ActionReference();
        ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        var layerDesc = executeActionGet(ref);
        var textDesc = layerDesc.getObjectValue(stringIDToTypeID('textKey'));
        var rangeList = textDesc.getList(stringIDToTypeID('textStyleRange'));
        var fonts = [];
        for (var m = 0; m < rangeList.count; m++) {
          var styleDesc = rangeList.getObjectValue(m).getObjectValue(stringIDToTypeID('textStyle'));
          var aFrom = rangeList.getObjectValue(m).getInteger(stringIDToTypeID('from'));
          var aTo = rangeList.getObjectValue(m).getInteger(stringIDToTypeID('to'));
          if (m > 0) {
            if (rangeList.getObjectValue(m - 1)
              .getInteger(stringIDToTypeID('from')) == aFrom && rangeList.getObjectValue(m - 1)
              .getInteger(stringIDToTypeID('to')) == aTo) continue;
          }
          var theLetters = app.activeDocument.activeLayer.textItem.contents.substring(aFrom, aTo);
          var aFont = styleDesc.getString(stringIDToTypeID('fontPostScriptName'));
          var aSize = new UnitValue(styleDesc.getUnitDoubleValue(stringIDToTypeID('size')), "px");
          //Check if font has been transformed
            if (textDesc.hasKey(stringIDToTypeID('transform'))) {
                var mFactor = textDesc.getObjectValue(stringIDToTypeID('transform')).getUnitDoubleValue (stringIDToTypeID("yy") );
                aSize = Math.round(aSize * mFactor);
                }
          var aColor = getColorFromDescriptor(styleDesc.getObjectValue(charIDToTypeID("Clr ")), typeIDToCharID(styleDesc.getClass(charIDToTypeID("Clr "))));

          if (styleDesc.hasKey(stringIDToTypeID('leading'))) {
            var aLeading = new UnitValue(styleDesc.getUnitDoubleValue(stringIDToTypeID('leading')), "px");
          } else {
            var aLeading = "";
          }
        var txt = theLetters;
          var merged = false;
          if (txt.length > 0) {
            for (var x = 0; x < m; x++) {
              try {
                if (fonts[x].font === aFont && fonts[x].size === aSize && fonts[x].color.rgb.hexValue === aColor.rgb.hexValue && fonts[x].leading === aLeading) {
                  // It's a hack!!!
                  if (fonts[x].text !== txt) {
                    fonts[x].text += markReturnedContentText(txt);
                  }
                  merged = true;
                }
              } catch (e) {}
            }
            if (!merged) {
              fonts.push({
                text: markReturnedContentText(txt),
                font: aFont,
                size: aSize,
                color: aColor,
                leading: aLeading
              });
            }
          }
        };
        return fonts;
      }
  };
