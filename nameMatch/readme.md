# name matching algorithm
try on [p.brm.sk/namematch]

## this is how it tests matching
when matching "František „SNiPI“ Čaník" (frantisek snipi canik)
- čáň=čáň	-> 6 (same thing)
- can=čáň	-> 5 (same thing, excuse case&diacritics)
- franti	-> 4 (starts with)
- snip		-> 3 (part starts with)
- tisek	-> 2 (contains)
- asdf ipi	-> 1 (contains one of words)
- frnti	-> 0.23 (levenshtein match + distance)
