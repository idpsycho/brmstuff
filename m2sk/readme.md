## m2.sk sledovac
### features
- mapa podla ulice pri kazdom inzerate
- nove inzeraty zvyraznene zelenym pasikom
- odfiltrovanie zlych ulic (stlac X a zadaj nazov ulice)
- odfiltrovanie konkretnych inzeratov (X a potom ENTER)
- back/next inzerat stlacenim B/N

### nedostatky/todo
- 'seen' sa nastavi len po stlaceni B/N
- duplicitne inzeraty to zatial nijak neriesi
- chcelo by to zobrazit vsetky inzeraty na jednej mape a tam si odfiltrovat len chcene

### priklady pouzitia - moje oblubene :]
otvorit si nejaky z tychto linkov a spustit cez konzolu (alebo bookmark) m2sk.js
- [4-5 izb, stare mesto, od najlacnejsich](http://m2.zoznam.sk/prenajom_bratislava-stare-mesto_4-izbovy-byt,5-a-viac-izbovy-byt_1__od-najlacnejsich___99)
- [3 izbove](http://m2.zoznam.sk/prenajom_bratislava-stare-mesto_3-izbovy-byt_1__od-najlacnejsich___99)
- [2 izbove](http://m2.zoznam.sk/prenajom_bratislava-stare-mesto_2-izbovy-byt_1__od-najlacnejsich_8,304,0,0,,__99)

### browser bookmark
ktory staci potom stlacit na otvorenej stranke
```
javascript: function load(src, fn) { var x=document.createElement('script'); x.type='text/javascript'; x.src=src; if (fn) { x.onreadystate=fn; x.onload=fn; } document.head.appendChild( x ); }; load('http://l/m2sk.js', function() {                  } );
```
