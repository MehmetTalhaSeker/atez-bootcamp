# HTTP status kodları 

- HTTP protokolü üzerinden yapılan istemci taleplerine yanıt olarak web sunucusu tarafından döndürülen üç basamaklı numaralardır. Bu durum kodları, istenen kaynağın durumunu göstermek ve istemciye taleplerinin sonucu hakkında bilgi sağlamak için kullanılır.
- Kendi uygulamanızda custom olarak yenilerini yaratabilirsiniz, ama genelde standart halde kullanılması tavsiye edilir.

## Kodların beş sınıfı 
Her biri farklı bir yanıt kategorisini temsil eder:

- 1xx (Bilgilendirme): Bu durum kodları, sunucunun isteği aldığını ve işlemeye devam ettiğini gösterir. İstemci, nihai bir yanıt beklemelidir.

- 2xx (Başarılı): Bu durum kodları, isteğin başarılı olduğunu ve sunucunun istenen içeriği geri döndürdüğünü gösterir. Bunların en yaygını 200 OK durum kodudur.

- 3xx (Yönlendirme): Bu durum kodları, istenen kaynağın farklı bir URL'ye taşındığını ve istemcinin yeni konuma yönlendirilmesi gerektiğini gösterir.

- 4xx (İstemci Hatası): Bu durum kodları, istemcinin isteğinin geçersiz olduğunu veya karşılanamadığını gösterir. Bunların en yaygını 404 Not Found durum kodudur, bu durum kodu istenen kaynağın sunucuda bulunamadığını gösterir.

- 5xx (Sunucu Hatası): Bu durum kodları, sunucunun istemcinin isteğini karşılamaya çalışırken bir hata ile karşılaştığını gösterir. Bunların en yaygını 500 Internal Server Error durum kodudur.

### Ne işe yarar
Her HTTP durum kodu, isteğin durumu hakkında daha fazla bilgi sağlayan bir mesaj ile birlikte gelir. Bu mesajlar, istemci veya sunucu ile ilgili sorunları gidermede yardımcı olabilir.
HTTP durum kodlarını anlamak, web geliştiricileri için önemlidir, çünkü web siteleri ve web uygulamaları ile ilgili sorunları teşhis etmek ve çözmek için kullanılabilirler.