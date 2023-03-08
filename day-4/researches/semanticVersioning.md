# Semantic versioning

Yazılım için versiyonlama sistemi olarak kullanılan ve versiyon numaralarının nasıl atanacağını ve artırılacağını belirleyen bir sistemdir. Bu sistem, bir yazılım ürününde zamanla yapılan değişiklikleri net ve özlü bir şekilde iletmeyi sağlar.

## Versiyon numarası

Noktalarla ayrılmış üç bölümden oluşur: "major.minor.patch". Her bölüm, yazılımda yapılan farklı türdeki değişikliği belirtir:

- "Major" versiyon numarası, geriye dönük uyumlu olmayan önemli değişiklikler yapıldığında arttırılır. Bu, 1.x sürümünden 2.x sürümüne yükselttiğinizde, yeni sürümle çalışması için kodunuzu değiştirmeniz gerekebileceği anlamına gelir.
- "Minor" versiyon numarası, geriye dönük uyumlu yeni özellikler eklendiğinde arttırılır. Bu, 1.0 sürümünden 1.1 sürümüne yükselttiğinizde, mevcut kodunuzun değiştirilmeden hala çalışması gerektiği anlamına gelir.
- "Patch" versiyon numarası, halka açık API'yi etkilemeyen hata düzeltmeleri yapıldığında arttırılır. Bu, 1.0.1 sürümünden 1.0.2 sürümüne yükselttiğinizde, mevcut kodunuzun değiştirilmeden hala çalışması gerektiği anlamına gelir.

- Bu üç bölüme ek olarak, SemVer, versiyon numarasına ön-sürüm tanımlayıcıları (örneğin "alpha", "beta" veya "rc") ve derleme meta verileri (bir taahhüt karmaşası veya derleme numarası gibi) eklemek için kullanılabilir.

### Avantajı

Semantic Versioning kullanmak, geliştiricilerin ve kullanıcıların değişiklikler ve uyumluluk sorunları hakkında daha net ve tutarlı bir şekilde iletişim kurmasına yardımcı olur.