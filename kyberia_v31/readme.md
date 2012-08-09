
## Kyberia v3.1
ked bude v3, tak do toho chcem spravit toto v3.1 extension<br>
ktory by sa snad mohol zakomponovat priamo do kybce pre vsetkych<br>
(note: chcel by som statistiky pouzivania)

### Avatars
	[ ] disable animations
	[ ] disable all avatars
	[ ] show online/offline status near each avatar

### Mail
	[x] show last mailed users
		+ click to filter by this user
		+ show online status
		+ make buttons compatible with filters: "check_all", "delete_mails"

### Nodes
	[x] make deep threads flat if possible [?]
	[x] compact node
		- mini-icon, name (on left)
		- node text (on right)
	[x]	limit node height to 1500px (eg. lots of fotos in kNew)
		- appends "more" button
		- shows hidden images as thumbnails
	[x] QUICK REPLY button
		- allows you to comment under any node
	[x] "5 minutes ago" date format
	[x] hide mood messages

### Configure Content
	[x] allow tabs
	[x] preserve indentation
		- converts spaces to &nbsp;
		- converts tabs to 4x nbsp
	[x] realtime preview
	[x] in-place editing

### Bookmarks
	[x] sort nodes by alphabet ignoring tags

### Buttons fix
	[x] K, FOOK, BOOK - happens in background
		- fooked node will disappear when in kNew
	[x] DELETE - recycles node to 123456

### Desocializer
	[x] hide user ids & avatars
	[x] except friends

### FLAG: Not Safe For Work, Insults
	[x] add FLAG buttons
	[ ] hide images in NSFW nodes (click to reveal)
	[ ] ..but only during work hours: [ 9 ] - [ 17 ]

### Keybaord Shortcuts
	[x] enable
		- N: next submission (eg. in kNew) + fixed side button "Next"
		- B: back, previous submission
		- ?: show extension settings

### other
	[ ] facebookizer
	[x] send anonymouse usage statistics (list of enabled features)

### future development
	- suggest features:		http://kyberia.sk/id/63603
	wouldnt it be nice if we were payed for what we love to do?
	- donate by paypal:		[ 5€ ]
	- donate to account:	123454989/1100


## implementation details
- chcem vediet kolko ludi to pouziva - include analytics raz za den
- alebo nech mi da freezy pristup na analytics s tym ze sa analyticsu budu posielat settingsy (nech viem kolko ludi pouziva ktoru featuru)
