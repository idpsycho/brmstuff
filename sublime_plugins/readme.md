# Remove Diacritics plugin for Sublime Text

copy "remove_diacritics.py" into: C:\Users\_USERNAME_\Application Data\Sublime Text 2\Packages\User

put this into "Default.sublime-commands":

    {
        "caption": "Remove Diacritics",
        "command": "remove_diacritics"
    },

and call with CTRL+SHIFT+P, find Remove Diacritics
