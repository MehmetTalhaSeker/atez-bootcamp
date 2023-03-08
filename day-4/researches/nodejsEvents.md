# Node.js eventlar

Nodejs ile built-in gelen bu module, `Observer pattern`'ın bir implementasyonudur. Developerlara custom eventler yaratmayı olanak sağlar.
Bu eventler emit ve listen edilebilir. Bir objedir.

Kısaca, emit eden obje bir event'i listen eden objeye gönderir. Bu aslında bir nevi kanaldır. Listener emit edilen event'ten emitter objesine cevap dönebilir.

### Nasıl kullanılır

`events` modülünden bir instance yaratılması gerekir. Sonra bu instance kullanılır.

### Örnek

```javascript
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("myEvent", (arg) => {
  console.log(`Event occurred with argument: ${arg}`);
});

myEmitter.emit("myEvent", "hello world");
```

Bu örnekte:

- Yeni bir instance yarattık.
- Bunu `.on` methoduyla dinlemeye aldık.
- Son olarak `.emit` fonksiyonuyla bu dinleyiciye kanaldan mesaj gönderdik.

Not: Burada anlamsız gelebilir fakat bu konsept daha çok gerekli olduğu caselerde kullanıma bağlı anlaşılacaktır.
