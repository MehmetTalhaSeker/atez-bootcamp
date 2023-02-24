<h1>Object Oriented Programming Nedir</h1>

- Türkçesi `Nesne Yönelimli Programlama` anlamına gelen bir yazılım konseptidir.
- Daha çok fonksiyonlar/logic gibi konseptler yerine, tamamen nesne/obje/class üzerinden giden bir yaklaşımdır.
- Bu konsepte en uygun diller `C#` ve `Java`dır.

## Nesne(object) nedir?
- Aslında her şey bir nesnedir. Mesela bu dökümanı yazan ben yani `Talha` bir nesnedir :)
- Ve bu Talha nesnesi bir insan sınıfından türemiştir. İnsan aslında bir soyutlamadır. İnsan dendiğinde aklınıza spesifik bir şey mi geliyor yoksa çevrenizdeki insanların tümü mü?
- Yaş, boy, göz rengi, saç rengi vs. gibi özelliklerim aslında bir objenin properties'ı(field) denebilir. Mesela `KendiniTanıt()` diye bir method'umun olduğu varsayalım.
Ve bu method çalıştığında ismimi ve soyismimi söylemek de benim görevim olsun. Bu method çalıştırıldığında elde edilecek çıktı = `Mehmet Talha Şeker` gibi örnek verebiliriz.
- Methodlar aslında fonksiyonlar gibidir ama bir method bir class'a ait olmak zorundadır. Fonksiyon ise bağımsız olabilir.

## Sınıf(class) nedir
- Class nesnelerin soyut halidir denebilir.
- Örneğin: 
```
class Insan {
    int boy;
    int yas;
    int kilo;
    string isim;
    string soyisim;
    
    constructor(isim, soyisim) {
        this.isim = isim;
        this.soyisim = soyisim;
    }
    
    kendiniTanit() {
        return "Ben " this.isim + this.soyisim;
    }
}
```
Mesela burada yeni bir insan sınıfından bir obje yaratalım.
```
Insan Talha = new Insan("Mehmet Talha", "Seker");
```
Talha'nın doğumu gibi düşünebiliriz yukarıdaki işlemi. İnsan tipinde yeni bir obje olur kendileri.


## Avantajları
- Abstraction(soyutlama) yaklaşımı sayesinde temiz kod yazmak hayli kolaylaşır. Bence yazılımdaki en önemli konsept soyutlamadır.
- Encapsulation(gizleme) de bir nevi bir abstraction'dur. Bir class'ın kullanmamamız gereken kısımlarını saklamak; her zaman kafa karışıklığını azaltacak, kod güvenliği arttıracaktır.
- Inheritance(torun/çocuk ilişkisi gibi düşünülebilir) Üst sınıflardan alt sınıflara özellikler vs. aktarılabilir.  
- Polymorphism(çok biçimlilik) Birbiriyle bağlantı olan sınıfların bazı kısımlarda farklılaşmasını sağlar.