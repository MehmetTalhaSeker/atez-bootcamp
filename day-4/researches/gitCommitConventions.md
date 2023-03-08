<h1> Git commit conventions </h1>

Git çalışma hayatında azımsanamayacak öneme sahip olduğu, iş arkadaşlarımızla uyum içinde olmamız gereken bir platformdur.
Bir takımın ortak paydalarda buluşup, zamanını commit mesajı vs. düşünmek yerine logic'e odaklanması elzemdir.
Bu yüzden takımlar arasında bir standartlar belirlenip, review eden developerın da kodu yazan developerın da olayın içine kolaylıkla çekilebilmesi gereklidir.

## Commit mesajlarında Prefixler
- `feat`: yeni bir özellik
- `fix`: fix edilen bir bug
- `docs`: dokümantasyonda değişiklik
- `chore`: kod ile alakası olmayan değişiklikler
- `refactor`: refactor edilen kod
- `test`: test güncellenmesi ya da eklenmesi
- `style`: lint değişiklikleri
- `perf`: performansla ilgili değişiklikler
- `ci`: ci ile ilgili değişiklikler

## Scope
Codebase'in hangi parçasının değişikliğe uğradığını gösteren kısım. (dosya, module, component adı)

## Kısa açıklama
Kısa ve öz, genelde 50 karakteri geçmeyen kısım.

## Uzun açıklama
Daha detaylı açıklama, genelde 72 karakter ile wrap edilen kısım.

## Issuelara ya da pull requestlere atıf(reference)
Eğer değişiklikler var olan bir issue ya da pr ile ilgiliyse, bu case'in request number'ı commit mesajında verilebilir.


## Örnek
feat(authentication): add support for Google OAuth

This commit adds support for logging in with a Google account using OAuth 2.0.
It includes changes to the authentication service and the login page.
Resolves #1234.
