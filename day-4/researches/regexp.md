# RegExp

Bir dizi string'i tanımlayan bir desendir oluşturma aracıdır. RegExp programlamada sıkça kullanılır, string eşleştirme ve manipüle işlemlerinde kullanılır. 
Ve stringleri aramak, değiştirmek ve doğrulamak için kullanılabilir.

## Kullanım caseleri
- Bir string'i istenilene uygun hale getirmek. (Mesela string içerisindeki "?" karakterlerini silmek)
- İstenilen koşullara uyan string'leri bulmak. (Mesela email input alacaksınız ve validasyon işlemi yapacaksınız. bu string'in içinde `@` karakteri var mı bakmak)

## Javascript'de regexp

JavaScript'te düzenli ifadeler RegExp nesnesiyle temsil edilir. Düzenli ifadeler, düzenli karakterler (harfler ve rakamlar gibi) ve belirli davranışları temsil eden özel karakterler (örneğin ^, $ ve \*) kombinasyonu kullanılarak tanımlanır.

Aşağıdaki örnekte `the` ların hepsini `a` ile değiştiririz.
```javascript
const str = "The quick brown fox jumps over the lazy dog";
const newStr = str.replace(/the/gi, "a");
console.log(newStr); // ÇIKTISI: "a quick brown fox jumps over a lazy dog"
```

## Bazı Örnekler

- `/abc/`, "abc" dizesini eşleştirir.
- `/[abc]/`, "a", "b" veya "c" karakterlerinden herhangi birini eşleştirir.
- `/a+/`, bir veya daha fazla "a" karakterini eşleştirir.
- `/^abc/`, yalnızca dizenin başında "abc" kelimesi varsa eşleştirir.
- `/\d/`, herhangi bir rakam karakterini eşleştirir ([0-9] ile eşdeğerdir).
- Boşluk `(\s)`, boşluk olmayan `(\S)`, kelime karakterleri `(\w)`, kelime olmayan karakterler `(\W)` gibi belirli karakter türlerini temsil etmek için özel karakterler de kullanabilir.
