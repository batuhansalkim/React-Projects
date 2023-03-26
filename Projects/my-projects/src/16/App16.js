import React,{useState,useEffect} from "react";
import "../16/App16.css";
import "../16/Scrollindicator.css";
export function App16(){
    const [scrollTop,setScrollTop] = useState(0);

    const onScroll=()=>{
        const winScroll = document.documentElement.scrollTop;

        console.log(winScroll);

        let height = document.documentElement.scrollHeight -document.documentElement.clientHeight;
        
        console.log(height);

        const scrolled = (winScroll/height)*100;

        console.log(scrolled);

        setScrollTop(scrolled);
    }
   
    useEffect(()=>{
      window.addEventListener("scroll",onScroll);  
    })
    return(
        <div className="App">
            <div className="progressMainWrapper">
                <div className="progressMainStyle" style={{width:`${scrollTop}%`}}></div>
            </div>
            <h1>Roma İmparatorluğu</h1>
            <p>Roma İmparatorluğu, Roma Cumhuriyeti döneminde Augustus'un Cumhuriyeti tek başına yönetebilecek yetkiler alması ve Cumhuriyet döneminde kimseye verilmemiş haklara sahip olmasıyla oluşan Antik Roma devletidir.[1] Augustus, M.Ö. 2 yılına kadar Cumhuriyeti kendisinden sonra da tek bir kişinin yönetebilmesini sağlayacak anayasal reformlar gerçekleştirdi ve Roma İmparatorluğu tam anlamıyla oluşmuş oldu.

                Uzun yıllar Akdeniz çevresinde hüküm süren imparatorluk, 375 yılındaki Kavimler Göçü'yle başlayan iç karışıklıklardan sonra 395 tarihinde doğu ve batı olmak üzere ikiye ayrıldı, kuruluşundan ikiye ayrılışına kadar süper güç olarak kaldı. İmparatorluğun batıdaki kısmı olan Batı Roma İmparatorluğu Kavimler Göçü'yle Avrupa'ya gelen Cermen kavimlerinin saldırıları sonucu 476 yılında yıkılmış, doğu kısmıysa varlığını Doğu Roma İmparatorluğu veya Bizans İmparatorluğu olarak 1453'te Osmanlı İmparatorluğu'nun yedinci Padişahı II. Mehmet'in İstanbul'u fethine kadar sürdürmüştür.

                "Roma İmparatorluğu" ünlü Latince Imperium Romanum'un Türkçesidir. Bu deyişte imperium sözcüğü bir bölge, vilayet anlamında kullanılmaktadır. Roma İmparatorluğu Avrupa'nın Romalıların egemenliği altında kalan kısmı için kullanılan bir isimdi, denilebilir. Aslında Roma kent sınırlarının aşılması ve yayılma politikası imparatorluk döneminden çok önce başlamıştı. Roma İmparatorluğu en geniş olduğu dönemde yaklaşık 5.900.000 km² büyüklüğündeydi. Avrupa tarihinin "klasik antikite" dönemindeki en geniş imparatorluğuydu.

                Augustus'un hükümdarlığından yüzyıllar önce Roma (Roma Krallığı ve Roma Cumhuriyeti) zaten İtalyan Yarımadası'nı aşmış, önemli rakiplerini yenilgiye uğratmıştı. Augustus'un reformları Roma Devleti'ni bir imparatorluğa çevirmiş, 3. yüzyılın sonlarındaki Diokletian reformuna kadar sistem büyük oranda değişmeden devam etmiştir. Diokletian reformu imparatorluğu tetrarşiye dönüştürmüştür. Her ne kadar Diokletian'ın sunduğu politik sistem kısa bir süre boyunca varlığını korusa da, imparatorluğun ikiye bölünmesine yol açmıştır. Bu da Roma'nın egemenliğinin iki yüzyıl boyunca daha Doğu ve Batı Roma İmparatorluğu olarak sürdürmesine olanak sağlamıştır.

                Batı Roma İmparatorluğu'nun geleneksel çöküş tarihi 4 Eylül 476'dır. Yaklaşık bin yıl sonra, 1453'te, daha çok Bizans İmparatorluğu olarak anılan Doğu Roma İmparatorluğu Osmanlıların egemenliğine geçmiştir. Augustus'tan Batı Roma imparatorluğu'nun çöküşüne kadar Roma, Batı Avrasya'da egemen olmuş, nüfusun yarısını barındırmıştır.

                Gelişimi
                Geleneksel olarak tarihçiler, imparatorluğu Principatus ve Dominatus olarak iki döneme ayırırlar. Principatus Augustus'un iktidara gelmesinden Üçüncü Yüzyıl Krizi'ne kadarki dönemi, Dominatus ise Diocletianus'tan batı imparatorluğunun yıkılışına kadarki dönemi kapsar. Bu ayrıma göre Principate (Latince "birincil vatandaş anlamına gelen princeps kelimesinden gelir) döneminde mutlakıyetin gerçekleri resmî olarak cumhuriyetçi yapının ardında saklanırken Dominate (Latince "sahip" ya da "efendi" anlamına gelen dominus kelimesinden gelir) döneminde altın taçlar ve ihtişamlı imparatorluk törenleriyle açıkça gözler önüne serilmiştir. Daha yakın dönemlerde tarihçiler aradaki farkın daha ince olduğuna karar vermişlerdir. Bazı tarihi yapılar bin yıldan uzun süre devam ederek Doğu Roma dönemine kadar sürmüş ve emperyal ihtişamın görüntüsü imparatorluğun ilk günlerinden itibaren yaygın olmuştur.

                Şehir devleti olarak ortaya çıkmış, Yunan şehir devletinden farklı olarak cumhuriyetçi örgütlenme ve yayılmacı bir politika izlemiştir. Bu politika bağlamında elde ettiği askeri zaferlerle geniş bir coğrafyaya yayılmış, kontrolü altına aldığı yerlerde idare kurmadan özerklik tanımıştır.

                Siyasi yapı
                Roma'ya göre cumhuriyet, bir araya gelmiş küçük bir soylu grubunun kralı tahttan indirmesiyle ortaya çıkmıştır. Bu cumhuriyetçi dönemde toplum iki gruba ayrılmıştır: patriciler (varlıklı olan kesim) ve plebler (halk). Bu iki gruptan biri olan patrciler siyasi boyutta yer alıp söz sahibi olabiliyorken pleblerin böyle bir hakkı bulunmamakta, plebler senatodan yer almamakta, kişinin senatoda yer alması için siyasi bir görevde çalışmış olması şartı aranmaktaydı.

                Zamanla çıkan ayaklanmalar sonucunda plebler bir meclis oluşturarak yasa çıkarma hakkına sahip oldular. Bu meclis, halktaki farklı kesimleri temsili yüz kişiden oluşmaktaydı. Mecliste zengin toprak sahipleri ve orta hâlli çiftçilerin oranı daha yüksekken, zanaatkar ve yoksul olan sınıf daha düşük bir orana sahipti.

                Diğerlerine oranla daha varlıklı olan plebler, yeni bir sınıf oluşturarak eski patrisyen ailelerle cumhuriyeti yönetmeye başladı. İlerleyen süreçte Augustus, cumhuriyet yönetemine son vererek imparatorluk yönetimini uygulamaya koydu. Bu süreçte soyluların ve seçilmişlerin katılımıyla oluşmuş danışma meclisi olan senatonun ön planda olduğu görülmektedir. Roma'nın hakimiyeti altına alınmış olan yerlere valiler, komutanlar atandı ve bu atamalar, senato tarafından gerçekleştirildi.

                İlk imparator
                Augustus çoğu tarihçi tarafından ilk imparator olarak kabul edilir. Augustus'un ilk imparator olarak kabul edilmesinin temel sebebi Cumhuriyet döneminde ilk kez gücü tek elde toplayan kişi olmasıdır. Augustus'un çıkarttığı yasalar, anayasal ve askeri reformların hepsi Roma meclisinde hiçbir redde veya tartışmaya maruz kalmadan kabul görüyordu. Ayrıca Augustus, Roma ordusunun liderlik gücünü elinde tutuyordu ve bu ordusal güç meclis üzerinde büyük bir baskı kuruyordu. Böylesine bir gücü tek elde toplama durumu Augustus öncesinde görülmediği için tarihçilerin geneli Augustus'u ilk imparator olarak kabul eder.

                İlk imparatora giden süreç Jül Sezar'a kadar dayanır. Bir Dictator perpetuo, Bu Roma Cumhuriyeti'nde resmî bir pozisyon olan diktatörlüğün kural dışı bir biçimiydi. Yasalara göre normalde bir diktatörün yönetimi asla altı aydan fazla olmazdı. Bu yüzden Sezar tarafından oluşturulan diktatörlük biçimi Roma Cumhuriyeti'nin temel ilkeleri ile oldukça çelişiyordu. Ancak ne kadar kural dışı olursa olsun resmî olarak yetkileri bu cumhuriyet unvanına dayanıyordu ve dolayısıyla da kendisi bir cumhuriyet yetkilisi olarak kabul edilir. Aralarında birçoğu kendisi tarafından merhamet göstererek bağışlanmış eski düşmanlarının da bulunduğu bir dizi senatör Sezar'ın kendisini kral ilan edip bir monarşi kurmasından giderek endişe duymaya başlamışlardı. Bu yüzden Sezar'a suikast düzenlemek için bir komplo hazırlamışlar ve MÖ 44 yılının 15 Mart günü, Sezar suikaste uğradı ve suikastçilerin bıçak darbeleriyle öldürüldü.

                Sezar'ın siyasi vârisi, ablasının torunu olan Octavianus, diktatör yetkilerine sınırsız sahip olmuş Jül Sezar'ın hatasından ders çıkarmış ve hiçbir zaman herkesin endişe ettiği diktatörlük unvanı için bir talepte bulunmayarak çok daha dikkatli bir biçimde iktidarını cumhuriyetçi yapıların ardında gizlemiştir. Bunun amacı cumhuriyetin onarıldığı hülyasını beslemekti. Octavianus kendisine Augustus (soylu, yükseltilmiş kişi) ve Princeps ("Roma Cumhuriyeti'nin birinci vatandaşı" ya da "Roma Senatosu'nun baş lideri" anlamında) gibi unvanlar edindi. Princeps devlete iyi hizmette bulunanlara verilen bir unvandı. Pompey de bu unvana sahipti.

                Bunlara ilaveten Augustus'a meşe ve defne yaprağından yapılmış çelengi giyme hakkı da verilmişti. Bu unvanların ya da çelengin hiçbiri Augustus'a resmî olarak ilave güçler ya da otorite kazandırmıyordu. Resmî olarak kendisi yalnızca fazlasıyla değer verilen Roma vatandaşı bir konsüldü. Augustus, Marcus Aemilius Lepidus'un MÖ 13'te ölmesinin ardından Pontifex Maximus da oldu. Augustus bir dizi ilave, sıra dışı gücü çok fazla unvan talebinde bulunmadan elinde topladı.</p>
        </div>
    )
}