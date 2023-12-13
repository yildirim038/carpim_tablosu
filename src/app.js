/**
*Englisch
* When each child opens the program, they will be greeted with a list of names and total success points.
* If your name is not on the list, a new name can be entered.
* After the name is selected, a session with 25 questions will automatically start.
* The duration of each question session is 30 seconds.
* After 30 seconds or if the child completes 25 questions, the program will end and the child will return to the name list.
* The child will be able to see his score in the updated name list.
* 1) First the view is prepared in HTML
* 2)A list of players is created. There is a start button here. This button will start the game.
* 3) An area is created at the bottom for player registration, and if the player does not have their name in this area, they register themselves.
* 4) When the Add button is clicked, the person sees himself in the list. (UI is refreshed.)
* 5) When the player presses the start button above, the game starts and the music starts playing.
* 6) The game section is created and in this section, 2 numbers from one to ten are randomly selected.
* 7) A field is created to enter the result and the player enters the number into this field.
* 8) After the number is entered, the OK button is pressed and the next question appears on the screen.
* 9) Additionally, a counter counts down from 30 and if the OK button is pressed, it will return to 30 again.
* 10)The game ends if time runs out or if all questions are answered.
* 11) The music is stopped, the score taken with Alert is shown and the score taken is printed on the list.
* When each child opens the program, they will be greeted with a list of names and their total success score.
* If your name is not on the list, a new name can be entered.
* After the name is selected, a session with 25 questions will automatically start.
* The duration of each question session is 30 seconds.
* 
* Türkçe
*  Her cocuk programi actiginda bir isim listesi ve toplam basari puani ile karsilacak. 
* Eger listede kendi ismi yoksa yeni bir isim girilebilecek. 
* Isim secildikten sonra otomatik olarak 25 soruluk oturum baslayacak. 
* Her soru oturumun süresi 30 saniyedir.
* 30 saniye sonunda veya cocugun 25 soruyu bitirmesi durumunda program bitecek ve yine isim listesine geri dönecektir. 
* Cocuk güncellenmis isim listesinde puanini görebilecektir.
* 1)Önce görünüm HTML de hazirlanir
* 2)Oyuncularin bulundugu liste olusturulur. Burda bir baslangic buttonu bulunur bu buton oyunu baslatacak.
* 3)Alt kismina oyuncu kaydi icin bir alan olusturlur ve bu olanda oyuncu ismini yoksa kendini kaydeder.
* 4)Ekle buttonuna basilinca kisi kendini  listede görür.(UI yenilenir.)
* 5)Oyuncu yukardeki basla buttonuna basinca oyun baslar ve müzik çalmaya baslar.
* 6)Oyun bölümü olusturlur ve bu kisimda random olarak bir den ona kadar olan 2 sayi alinir.
* 7)Sonucun girilecegi bir alan olsurulur ve oyuncu bu alana sayiyi girer.
* 8)Sayi girildikten sonra tamam buttonuna balsilir ve bir sonraki soru ekrana gelir.
* 9)Ayrica bir sayac 10 dan geriye dogru sayar ve bu süre tamam butonuna basilirsa tekrar 10 döner.
* 10)Süre dolarsa oyun ve ya tüm sorular cevaplanirsa sona erer.
* 11)Müzik durdurulur,Alert ile alinan puan gösterilir ve listeye alinan puan yazdirilir .
* Her cocuk programi actiginda bir isim listesi ve toplam basari puani ile karsilacak. 
* Eger listede kendi ismi yoksa yeni bir isim girilebilecek. 
* Isim secildikten sonra otomatik olarak 25 soruluk oturum baslayacak. 
* Her soru oturumun süresi 30 saniyedir.
*/
let oyunSayisi = 0;
let saniye = 30;
let oyunPuani = []
let players = []
let deger = 0;
let secilenId = [];
let audio = new Audio();
const gameElement = domBaglan()

gameElement.addEventListener("click", addPlayer)
gameElement.addEventListener("click", startGame)
gameElement.addEventListener("click", listFunction)
gameElement.addEventListener("click", newFrage)
gameElement.addEventListener("click", gamePlay)
updateUI()
