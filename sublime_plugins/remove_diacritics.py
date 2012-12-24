#!/usr/bin/env python
# -*- coding: utf8 -*-
import string, sublime, sublime_plugin

class Transformer(sublime_plugin.TextCommand):
    def run(self, edit):
        self.transform(self.transformer[0], self.view, edit)

    def transform(self, f, view, edit):
        for s in view.sel():
            if s.empty():
                s = view.word(s)

            txt = f(view.substr(s))
            view.replace(edit, s, txt)

class remove_diacriticsCommand(Transformer):
    transformer = lambda s: "".join([removeDiacritics(ch) for ch in s]),

def removeDiacritics(ch):
	accents = [
		{'a': u'àáâãäå'},
		{'c': u'çćč'},
		{'d': u'ďđð'},
		{'e': u'èéêëęě'},
		{'i': u'ìíîï'},
		{'l': u'ĺľł'},
		{'n': u'ňñ'},
		{'o': u'òóôõöőø'},
		{'r': u'ŕř'},
		{'s': u'śš'},
		{'t': u'ť'},
		{'u': u'ùúûüűů'},
		{'y': u'ýÿ'},
		{'z': u'ž'},
		{'A': u'ÀÁÂÃÄÅ'},
		{'C': u'ÇĆČ'},
		{'D': u'ĎĐÐ'},
		{'E': u'ÈÉÊËĘĚ'},
		{'I': u'ÌÍÎÏ'},
		{'L': u'ĹĽŁ'},
		{'N': u'ŇÑ'},
		{'O': u'ÒÓÔÕÖŐØ'},
		{'R': u'ŔŘ'},
		{'S': u'ŚŠ'},
		{'T': u'Ť'},
		{'U': u'ÙÚÛÜŰŮ'},
		{'Y': u'ÝŸ'},
		{'Z': u'Ž'},
	]
	for i in accents:
		x = [k for k, v in i.items() if ch in v]
		if len(x): break

	if len(x): return x[0]
	return ch
