/* ===================================================================
   SURAH AN-NISA INTERACTIVE TOOL
   - Guna: #surah-an-nisa-container + #toast (toast di luar container)
   - Data ayat: AN_NISA_VERSES (isi dari surah_an_nisa_verses.json)
   =================================================================== */
const AN_NISA_VERSES = [
  {
    "number": 1,
    "arabic": "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ يَٰٓأَيُّهَا ٱلنَّاسُ ٱتَّقُوا۟ رَبَّكُمُ ٱلَّذِى خَلَقَكُم مِّن نَّفْسٍۢ وَٰحِدَةٍۢ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًۭا كَثِيرًۭا وَنِسَآءًۭ ۚ وَٱتَّقُوا۟ ٱللَّهَ ٱلَّذِى تَسَآءَلُونَ بِهِۦ وَٱلْأَرْحَامَ ۚ إِنَّ ٱللَّهَ كَانَ عَلَيْكُمْ رَقِيبًۭا",
    "transliteration": "Yaaa aiyuhan naasut taqoo Rabbakumul lazee khalaqakum min nafsinw waahidatinw wa khalaqa minhaa zawjahaa wa bas sa minhumaa rijaalan kaseeranw wa nisaaa'aa; wattaqul laahallazee tasaaa 'aloona bihee wal arhaam; innal laaha kaana 'alaikum Raqeeba",
    "translation": "Wahai sekalian manusia! Bertaqwalah kepada Tuhan kamu yang telah menjadikan kamu (bermula) dari diri yang satu (Adam), dan yang menjadikan daripada (Adam) itu pasangannya (isterinya - Hawa), dan juga yang membiakkan dari keduanya - zuriat keturunan - lelaki dan perempuan yang ramai. Dan bertaqwalah kepada Allah yang kamu selalu meminta dengan menyebut-yebut namaNya, serta peliharalah hubungan (silaturrahim) kaum kerabat; kerana sesungguhnya Allah sentiasa memerhati (mengawas) kamu."
  },
  {
    "number": 2,
    "arabic": "وَءَاتُوا۟ ٱلْيَتَٰمَىٰٓ أَمْوَٰلَهُمْ ۖ وَلَا تَتَبَدَّلُوا۟ ٱلْخَبِيثَ بِٱلطَّيِّبِ ۖ وَلَا تَأْكُلُوٓا۟ أَمْوَٰلَهُمْ إِلَىٰٓ أَمْوَٰلِكُمْ ۚ إِنَّهُۥ كَانَ حُوبًۭا كَبِيرًۭا",
    "transliteration": "Wa aatul yataamaaa amwaalahum wa laa tatabad dalul khabeesa bittaiyibi wa laa taakulooo amwaalahum ilaaa amwaalikum; innahoo kaana hooban kabeeraa",
    "translation": "Dan berikanlah kepada anak-anak yatim (yang telah baligh) itu harta mereka, dan janganlah kamu tukar-gantikan yang baik dengan yang buruk; dan janganlah kamu makan harta mereka (dengan menghimpunkannya) dengan harta kamu; kerana sesungguhnya (yang demikian) itu adalah dosa yang besar."
  },
  {
    "number": 3,
    "arabic": "وَإِنْ خِفْتُمْ أَلَّا تُقْسِطُوا۟ فِى ٱلْيَتَٰمَىٰ فَٱنكِحُوا۟ مَا طَابَ لَكُم مِّنَ ٱلنِّسَآءِ مَثْنَىٰ وَثُلَٰثَ وَرُبَٰعَ ۖ فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا۟ فَوَٰحِدَةً أَوْ مَا مَلَكَتْ أَيْمَٰنُكُمْ ۚ ذَٰلِكَ أَدْنَىٰٓ أَلَّا تَعُولُوا۟",
    "transliteration": "Wa in khiftum allaa tuqsitoo fil yataamaa fankihoo maa taaba lakum minan nisaaa'i masnaa wa sulaasa wa rubaa'a fa'in khiftum allaa ta'diloo fawaahidatan aw maa malakat aimaanukum; zaalika adnaaa allaa ta'ooloo",
    "translation": "Dan jika kamu takut tidak berlaku adil terhadap perempuan-perempuan yatim (apabila kamu berkahwin dengan mereka), maka berkahwinlah dengan sesiapa yang kamu berkenan dari perempuan-perempuan (lain): dua, tiga atau empat. Kemudian jika kamu bimbang tidak akan berlaku adil (di antara isteri-isteri kamu) maka (berkahwinlah dengan) seorang sahaja, atau (pakailah) hamba-hamba perempuan yang kamu miliki. Yang demikian itu adalah lebih dekat (untuk mencegah) supaya kamu tidak melakukan kezaliman."
  },
  {
    "number": 4,
    "arabic": "وَءَاتُوا۟ ٱلنِّسَآءَ صَدُقَٰتِهِنَّ نِحْلَةًۭ ۚ فَإِن طِبْنَ لَكُمْ عَن شَىْءٍۢ مِّنْهُ نَفْسًۭا فَكُلُوهُ هَنِيٓـًۭٔا مَّرِيٓـًۭٔا",
    "transliteration": "Wa aatun nisaaa'a sadu qaatihinna nihlah; fa in tibna lakum 'an shai'im minhu nafsan fakuloohu hanee'am mareee'aa",
    "translation": "Dan berikanlah kepada perempuan-perempuan itu maskahwin-maskahwin mereka sebagai pemberian yang wajib. Kemudian jika mereka dengan suka hatinya memberikan kepada kamu sebahagian dari maskahwinnya maka makanlah (gunakanlah) pemberian (yang halal) itu sebagai nikmat yang lazat, lagi baik kesudahannya."
  },
  {
    "number": 5,
    "arabic": "وَلَا تُؤْتُوا۟ ٱلسُّفَهَآءَ أَمْوَٰلَكُمُ ٱلَّتِى جَعَلَ ٱللَّهُ لَكُمْ قِيَٰمًۭا وَٱرْزُقُوهُمْ فِيهَا وَٱكْسُوهُمْ وَقُولُوا۟ لَهُمْ قَوْلًۭا مَّعْرُوفًۭا",
    "transliteration": "Wa laa tu'tus sufahaaa'a amwaalakumul latee ja'alal laahu lakum qiyaamanw-warzuqoohum feehaa waksoohum wa qooloo lahum qawlam ma'roofaa",
    "translation": "Dan janganlah kamu berikan (serahkan) kepada orang-orang yang belum sempurna akalnya akan harta (mereka yang ada dalam jagaan) kamu, (harta) yang Allah telah menjadikannya untuk kamu semua sebagai asas pembangunan kehidupan kamu; dan berilah mereka belanja dan pakaian dari pendapatan hartanya (yang kamu niagakan), dan juga berkatalah kepada mereka dengan kata-kata yang baik."
  },
  {
    "number": 6,
    "arabic": "وَٱبْتَلُوا۟ ٱلْيَتَٰمَىٰ حَتَّىٰٓ إِذَا بَلَغُوا۟ ٱلنِّكَاحَ فَإِنْ ءَانَسْتُم مِّنْهُمْ رُشْدًۭا فَٱدْفَعُوٓا۟ إِلَيْهِمْ أَمْوَٰلَهُمْ ۖ وَلَا تَأْكُلُوهَآ إِسْرَافًۭا وَبِدَارًا أَن يَكْبَرُوا۟ ۚ وَمَن كَانَ غَنِيًّۭا فَلْيَسْتَعْفِفْ ۖ وَمَن كَانَ فَقِيرًۭا فَلْيَأْكُلْ بِٱلْمَعْرُوفِ ۚ فَإِذَا دَفَعْتُمْ إِلَيْهِمْ أَمْوَٰلَهُمْ فَأَشْهِدُوا۟ عَلَيْهِمْ ۚ وَكَفَىٰ بِٱللَّهِ حَسِيبًۭا",
    "transliteration": "Wabtalul yataamaa hattaaa izaa balaghun nikaaha fa in aanastum minhum rushdan fad fa'ooo ilaihim amwaalahum wa laa taa kuloohaaa israafanw wa bidaaran ai yakbaroo; wa mai kaana ghaniyyan falyasta' fif wa mai kaana faqeeran falyaakul bilma'roof; fa izaa dafa'tum ilaihim amwaalahum fa'ashhidoo 'alaihim; wa kafaa billaahi Haseeba",
    "translation": "Dan ujilah anak-anak yatim itu (sebelum baligh) sehingga mereka cukup umur (dewasa). Kemudian jika kamu nampak dari keadaan mereka (tanda-tanda yang menunjukkan bahawa mereka) telah cerdik dan berkebolehan menjaga hartanya, maka serahkanlah kepada mereka hartanya; dan janganlah kamu makan harta anak-anak yatim itu secara yang melampaui batas dan secara terburu-buru (merebut peluang) sebelum mereka dewasa. Dan sesiapa (di antara penjaga harta anak-anak yatim itu) yang kaya maka hendaklah ia menahan diri (dari memakannya); dan sesiapa yang miskin maka bolehlah ia memakannya dengan cara yang sepatutnya. Kemudian apabila kamu menyerahkan kepada mereka hartanya, maka hendaklah kamu adakan saksi-saksi (yang menyaksikan penerimaan) mereka. Dan cukuplah Allah sebagai Pengawas (akan segala yang kamu lakukan)."
  },
  {
    "number": 7,
    "arabic": "لِّلرِّجَالِ نَصِيبٌۭ مِّمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ وَلِلنِّسَآءِ نَصِيبٌۭ مِّمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ مِمَّا قَلَّ مِنْهُ أَوْ كَثُرَ ۚ نَصِيبًۭا مَّفْرُوضًۭا",
    "transliteration": "Lirrijaali naseebum mimmaa tarakal waalidaani wal aqraboona wa lin nisaaa'i naseebum mimmaa tarakal waalidaani wal aqraboona mimmaa qalla minhu aw kasur; naseebam mafroodaa",
    "translation": "Orang-orang lelaki ada bahagian pusaka dari peninggalan ibu bapa dan kerabat, dan orang-orang perempuan pula ada bahagian pusaka dari peninggalan ibu bapa dan kerabat, sama ada sedikit atau banyak dari harta yang ditinggalkan itu; iaitu bahagian yang telah diwajibkan (dan ditentukan oleh Allah)."
  },
  {
    "number": 8,
    "arabic": "وَإِذَا حَضَرَ ٱلْقِسْمَةَ أُو۟لُوا۟ ٱلْقُرْبَىٰ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينُ فَٱرْزُقُوهُم مِّنْهُ وَقُولُوا۟ لَهُمْ قَوْلًۭا مَّعْرُوفًۭا",
    "transliteration": "Wa izaa hadaral qismata ulul qurbaa walyataamaa walmasaakeenu farzuqoohum minhu wa qooloo lahum qawlam ma'roofaa",
    "translation": "Dan apabila kerabat (yang tidak berhak mendapat pusaka), dan anak-anak yatim serta orang-orang miskin hadir ketika pembahagian (harta pusaka) itu, maka berikanlah kepada mereka sedikit daripadanya, dan berkatalah kepada mereka dengan kata-kata yang baik."
  },
  {
    "number": 9,
    "arabic": "وَلْيَخْشَ ٱلَّذِينَ لَوْ تَرَكُوا۟ مِنْ خَلْفِهِمْ ذُرِّيَّةًۭ ضِعَٰفًا خَافُوا۟ عَلَيْهِمْ فَلْيَتَّقُوا۟ ٱللَّهَ وَلْيَقُولُوا۟ قَوْلًۭا سَدِيدًا",
    "transliteration": "Walyakhshal lazeena law tarakoo min khalfihim zurriyyatan di'aafan khaafoo 'alaihim falyattaqul laaha walyaqooloo qawlan sadeedaa",
    "translation": "Dan hendaklah takut (kepada Allah daripada melakukan aniaya kepada anak-anak yatim oleh) orang-orang (yang menjadi penjaganya), yang jika ditakdirkan mereka pula meninggalkan anak-anak yang daif (yatim) di belakang mereka, (tentulah) mereka akan merasa bimbang terhadap (masa depan dan keselamatan) anak-anak mereka; oleh itu hendaklah mereka bertaqwa kepada Allah, dan hendaklah mereka mengatakan perkataan yang betul (menepati kebenaran)."
  },
  {
    "number": 10,
    "arabic": "إِنَّ ٱلَّذِينَ يَأْكُلُونَ أَمْوَٰلَ ٱلْيَتَٰمَىٰ ظُلْمًا إِنَّمَا يَأْكُلُونَ فِى بُطُونِهِمْ نَارًۭا ۖ وَسَيَصْلَوْنَ سَعِيرًۭا",
    "transliteration": "Innal lazeena yaakuloona amwaalal yataamaa zulman innamaa yaakuloona fee butoonihim Naaranw-wa sayaslawna sa'eeraa",
    "translation": "Sesungguhnya orang-orang yang memakan harta anak-anak yatim secara zalim, sebenarnya mereka itu hanyalah menelan api ke dalam perut mereka; dan mereka pula akan masuk ke dalam api neraka yang menyala-nyala."
  },
  {
    "number": 11,
    "arabic": "يُوصِيكُمُ ٱللَّهُ فِىٓ أَوْلَٰدِكُمْ ۖ لِلذَّكَرِ مِثْلُ حَظِّ ٱلْأُنثَيَيْنِ ۚ فَإِن كُنَّ نِسَآءًۭ فَوْقَ ٱثْنَتَيْنِ فَلَهُنَّ ثُلُثَا مَا تَرَكَ ۖ وَإِن كَانَتْ وَٰحِدَةًۭ فَلَهَا ٱلنِّصْفُ ۚ وَلِأَبَوَيْهِ لِكُلِّ وَٰحِدٍۢ مِّنْهُمَا ٱلسُّدُسُ مِمَّا تَرَكَ إِن كَانَ لَهُۥ وَلَدٌۭ ۚ فَإِن لَّمْ يَكُن لَّهُۥ وَلَدٌۭ وَوَرِثَهُۥٓ أَبَوَاهُ فَلِأُمِّهِ ٱلثُّلُثُ ۚ فَإِن كَانَ لَهُۥٓ إِخْوَةٌۭ فَلِأُمِّهِ ٱلسُّدُسُ ۚ مِنۢ بَعْدِ وَصِيَّةٍۢ يُوصِى بِهَآ أَوْ دَيْنٍ ۗ ءَابَآؤُكُمْ وَأَبْنَآؤُكُمْ لَا تَدْرُونَ أَيُّهُمْ أَقْرَبُ لَكُمْ نَفْعًۭا ۚ فَرِيضَةًۭ مِّنَ ٱللَّهِ ۗ إِنَّ ٱللَّهَ كَانَ عَلِيمًا حَكِيمًۭا",
    "transliteration": "Yooseekumul laahu feee awlaadikum liz zakari mislu hazzil unsayayn; fa in kunna nisaaa'an fawqas nataini falahunna suhusaa maa taraka wa in kaanat waahidatan falahan nisf; wa li abawaihi likulli waahidim minhumas sudusu mimmma taraka in kaana lahoo walad; fa il lam yakul lahowaladunw wa warisahooo abawaahu fali ummihis sulus; fa in kaana lahoo ikhwatun fali ummihis sudus; mim ba'di wasiyyatiny yoosee bihaaa aw dayn; aabaaa'ukum wa abnaaa'ukum laa tadroona aiyuhum aqrabu lakum naf'aa; fareedatam minallaah; innal laaha kaana 'Aleeman Hakeemaa",
    "translation": "Allah perintahkan kamu mengenai (pembahagian harta pusaka untuk) anak-anak kamu, iaitu bahagian seorang anak lelaki menyamai bahagian dua orang anak perempuan. Tetapi jika anak-anak perempuan itu lebih dari dua, maka bahagian mereka ialah dua pertiga dari harta yang ditinggalkan oleh si mati. Dan jika anak perempuan itu seorang sahaja, maka bahagiannya ialah satu perdua (separuh) harta itu. Dan bagi ibu bapa (si mati), tiap-tiap seorang dari keduanya: satu perenam dari harta yang ditinggalkan oleh si mati, jika si mati itu mempunyai anak. Tetapi jika si mati tidak mempunyai anak, sedang yang mewarisinya hanyalah kedua ibu bapanya, maka bahagian ibunya ialah satu pertiga. Kalau pula si mati itu mempunyai beberapa orang saudara (adik-beradik), maka bahagian ibunya ialah satu perenam. (Pembahagian itu) ialah sesudah diselesaikan wasiat yang telah diwasiatkan oleh si mati, dan sesudah dibayarkan hutangnya. lbu-bapa kamu dan anak-anak kamu, kamu tidak mengetahui siapa di antaranya yang lebih dekat serta banyak manfaatnya kepada kamu (Pembahagian harta pusaka dan penentuan bahagian masing-masing seperti yang diterangkan itu ialah) ketetapan dari Allah; sesungguhnya Allah adalah Maha Mengetahui, lagi Maha Bijaksana."
  },
  {
    "number": 12,
    "arabic": "۞ وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَٰجُكُمْ إِن لَّمْ يَكُن لَّهُنَّ وَلَدٌۭ ۚ فَإِن كَانَ لَهُنَّ وَلَدٌۭ فَلَكُمُ ٱلرُّبُعُ مِمَّا تَرَكْنَ ۚ مِنۢ بَعْدِ وَصِيَّةٍۢ يُوصِينَ بِهَآ أَوْ دَيْنٍۢ ۚ وَلَهُنَّ ٱلرُّبُعُ مِمَّا تَرَكْتُمْ إِن لَّمْ يَكُن لَّكُمْ وَلَدٌۭ ۚ فَإِن كَانَ لَكُمْ وَلَدٌۭ فَلَهُنَّ ٱلثُّمُنُ مِمَّا تَرَكْتُم ۚ مِّنۢ بَعْدِ وَصِيَّةٍۢ تُوصُونَ بِهَآ أَوْ دَيْنٍۢ ۗ وَإِن كَانَ رَجُلٌۭ يُورَثُ كَلَٰلَةً أَوِ ٱمْرَأَةٌۭ وَلَهُۥٓ أَخٌ أَوْ أُخْتٌۭ فَلِكُلِّ وَٰحِدٍۢ مِّنْهُمَا ٱلسُّدُسُ ۚ فَإِن كَانُوٓا۟ أَكْثَرَ مِن ذَٰلِكَ فَهُمْ شُرَكَآءُ فِى ٱلثُّلُثِ ۚ مِنۢ بَعْدِ وَصِيَّةٍۢ يُوصَىٰ بِهَآ أَوْ دَيْنٍ غَيْرَ مُضَآرٍّۢ ۚ وَصِيَّةًۭ مِّنَ ٱللَّهِ ۗ وَٱللَّهُ عَلِيمٌ حَلِيمٌۭ",
    "transliteration": "Wa lakum nisfu maa taraka azwaajukum il lam yakul lahunna walad; fa in kaana lahunna waladun falakumur rub'u mimmaa tarakna mim ba'di wasiyyatiny yooseena bihaaa aw dayn; wa lahunnar rubu'u mimmaa tarakum il lam yakul lakum walad; fa in kaana lakum waladun falahunnas sumunu mimmaa taraktum; mim ba'di wasiyyatin toosoona bihaaa aw dayn; wa in kaana rajuluny yoorasu kalaalatan awim ra atunw wa lahooo akhun aw ukhtun falikulli waahidim minhumas sudus; fa in kaanooo aksara min zaalika fahum shurakaaa'u fissulusi mim ba'di wasiyyatiny yoosaa bihaaa aw dainin ghaira mudaaarr; wasiyyatam minal laah; wallaahu 'Aleemun Haleem",
    "translation": "Dan bagi kamu satu perdua dari harta yang ditinggalkan oleh isteri-isteri kamu jika mereka tidak mempunyai anak. Tetapi jika mereka mempunyai anak maka kamu beroleh satu perempat dari harta yang mereka tinggalkan, sesudah ditunaikan wasiat yang mereka wasiatkan dan sesudah dibayarkan hutangnya. Dan bagi mereka (isteri-isteri) pula satu perempat dari harta yang kamu tinggalkan, jika kamu tidak mempunyai anak. Tetapi kalau kamu mempunyai anak maka bahagian mereka (isteri-isteri kamu) ialah satu perlapan dari harta yang kamu tinggalkan, sesudah ditunaikan wasiat yang kamu wasiatkan, dan sesudah dibayarkan hutang kamu. Dan jika si mati yang diwarisi itu, lelaki atau perempuan, yang tidak meninggalkan anak atau bapa, dan ada meninggalkan seorang saudara lelaki (seibu) atau saudara perempuan (seibu) maka bagi tiap-tiap seorang dari keduanya ialah satu perenam. Kalau pula mereka (saudara-saudara yang seibu itu) lebih dari seorang, maka mereka bersekutu pada satu pertiga (dengan mendapat sama banyak lelaki dengan perempuan), sesudah ditunaikan wasiat yang diwasiatkan oleh si mati, dan sesudah dibayarkan hutangnya; wasiat-wasiat yang tersebut hendaknya tidak mendatangkan mudarat (kepada waris-waris). (Tiap-tiap satu hukum itu) ialah ketetapan dari Allah. Dan (ingatlah) Allah Maha Mengetahui, lagi Maha Penyabar."
  },
  {
    "number": 13,
    "arabic": "تِلْكَ حُدُودُ ٱللَّهِ ۚ وَمَن يُطِعِ ٱللَّهَ وَرَسُولَهُۥ يُدْخِلْهُ جَنَّٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَا ۚ وَذَٰلِكَ ٱلْفَوْزُ ٱلْعَظِيمُ",
    "transliteration": "Tilka hudoodul laah; wa mai yuti'il laaha wa Rasoolahoo yudkhilhu Jannaatin tajree min tahtihal anhaaru khaalideena feehaa; wa zaalikal fawzul 'azeem",
    "translation": "Segala hukum yang tersebut adalah batas-batas (Syariat) Allah. Dan sesiapa yang taat kepada Allah dan RasulNya, akan dimasukkan oleh Allah ke dalam Syurga yang mengalir dari bawahnya beberapa sungai, mereka kekal di dalamnya; dan itulah kejayaan yang amat besar."
  },
  {
    "number": 14,
    "arabic": "وَمَن يَعْصِ ٱللَّهَ وَرَسُولَهُۥ وَيَتَعَدَّ حُدُودَهُۥ يُدْخِلْهُ نَارًا خَٰلِدًۭا فِيهَا وَلَهُۥ عَذَابٌۭ مُّهِينٌۭ",
    "transliteration": "Wa mai ya'sil laaha wa Rasoolahoo wa yata'adda hudoodahoo yudkhilhu Naaran khaalidan feehaa wa lahoo 'azaabum muheen",
    "translation": "Dan sesiapa yang derhaka kepada Allah dan RasulNya, dan melampaui batas-batas SyariatNya, akan dimasukkan oleh Allah ke dalam api neraka, kekalah dia di dalamnya, dan baginya azab seksa yang amat menghina."
  },
  {
    "number": 15,
    "arabic": "وَٱلَّٰتِى يَأْتِينَ ٱلْفَٰحِشَةَ مِن نِّسَآئِكُمْ فَٱسْتَشْهِدُوا۟ عَلَيْهِنَّ أَرْبَعَةًۭ مِّنكُمْ ۖ فَإِن شَهِدُوا۟ فَأَمْسِكُوهُنَّ فِى ٱلْبُيُوتِ حَتَّىٰ يَتَوَفَّىٰهُنَّ ٱلْمَوْتُ أَوْ يَجْعَلَ ٱللَّهُ لَهُنَّ سَبِيلًۭا",
    "transliteration": "Wallaatee yaateenal faahishata min nisaaa'ikum fastashhidoo 'alaihinna arba'atam minkum fa in shahidoo fa amsikoohunna fil buyooti hatta yatawaffaa hunnal mawtu aw yaj'alal laahu lahunna sabeelaa",
    "translation": "Dan sesiapa yang melakukan perbuatan keji (zina) di antara perempuan-perempuan kamu, maka carilah empat orang lelaki di antara kamu yang menjadi saksi terhadap perbuatan mereka. Kemudian kalau keterangan-keterangan saksi itu mengesahkan perbuatan tersebut, maka kurunglah mereka (perempuan yang berzina itu) dalam rumah hingga mereka sampai ajal matinya, atau hingga Allah mengadakan untuk mereka jalan keluar (dari hukuman itu)."
  },
  {
    "number": 16,
    "arabic": "وَٱلَّذَانِ يَأْتِيَٰنِهَا مِنكُمْ فَـَٔاذُوهُمَا ۖ فَإِن تَابَا وَأَصْلَحَا فَأَعْرِضُوا۟ عَنْهُمَآ ۗ إِنَّ ٱللَّهَ كَانَ تَوَّابًۭا رَّحِيمًا",
    "transliteration": "Wallazaani yaatiyaanihaa minkum fa aazoohumaa fa in taabaa wa aslahaa fa a'ridoo 'anhumaaa; innal laaha kaana Tawwaabar Raheema",
    "translation": "Dan (mana-mana) dua orang di antara kamu yang melakukan perbuatan yang keji itu, (setelah sabit kesalahannya) maka hendaklah kamu menyakiti keduanya; kemudian jika mereka bertaubat dan memperbaiki keadaan diri mereka (yang buruk itu), maka biarkanlah mereka; kerana sesungguhnya Allah adalah sentiasa Menerima taubat, lagi Maha Luas rahmatNya."
  },
  {
    "number": 17,
    "arabic": "إِنَّمَا ٱلتَّوْبَةُ عَلَى ٱللَّهِ لِلَّذِينَ يَعْمَلُونَ ٱلسُّوٓءَ بِجَهَٰلَةٍۢ ثُمَّ يَتُوبُونَ مِن قَرِيبٍۢ فَأُو۟لَٰٓئِكَ يَتُوبُ ٱللَّهُ عَلَيْهِمْ ۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًۭا",
    "transliteration": "Innamat tawbatu 'alallaahi lillazeena ya'maloonas sooo'a bijahaalatin summa yatooboona min qareebin faulaaika yatoobul laahu 'alaihim; wa kaanal laahu 'Aleeman Hakeemaa",
    "translation": "Sesungguhnya penerimaan taubat itu disanggup oleh Allah hanya bagi orang-orang yang melakukan kejahatan disebabkan (sifat) kejahilan kemudian mereka segera bertaubat, maka (dengan adanya dua sebab itu) mereka diterima Allah taubatnya; dan (ingatlah) Allah Maha Mengetahui, lagi Maha Bijaksana."
  },
  {
    "number": 18,
    "arabic": "وَلَيْسَتِ ٱلتَّوْبَةُ لِلَّذِينَ يَعْمَلُونَ ٱلسَّيِّـَٔاتِ حَتَّىٰٓ إِذَا حَضَرَ أَحَدَهُمُ ٱلْمَوْتُ قَالَ إِنِّى تُبْتُ ٱلْـَٰٔنَ وَلَا ٱلَّذِينَ يَمُوتُونَ وَهُمْ كُفَّارٌ ۚ أُو۟لَٰٓئِكَ أَعْتَدْنَا لَهُمْ عَذَابًا أَلِيمًۭا",
    "transliteration": "Wa laisatit tawbatu lillazeena ya'maloonas saiyiaati hattaaa izaa hadara ahadahumul mawtu qaala innee tubtul 'aana wa lallazeena yamootoona wa hum kuffaar; ulaaa'ika a'tadnaa lahum 'azaaban aleemaa",
    "translation": "Dan tidak ada gunanya taubat itu kepada orang-orang yang selalu melakukan kejahatan, hingga apabila salah seorang dari mereka hampir mati, berkatalah ia: \"Sesungguhnya aku bertaubat sekarang ini,\" (sedang taubatnya itu sudah terlambat), dan (demikian juga halnya) orang-orang yang mati sedang mereka tetap kafir. Orang-orang yang demikian, Kami telah sediakan bagi mereka azab seksa yang tidak terperi sakitnya."
  },
  {
    "number": 19,
    "arabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا يَحِلُّ لَكُمْ أَن تَرِثُوا۟ ٱلنِّسَآءَ كَرْهًۭا ۖ وَلَا تَعْضُلُوهُنَّ لِتَذْهَبُوا۟ بِبَعْضِ مَآ ءَاتَيْتُمُوهُنَّ إِلَّآ أَن يَأْتِينَ بِفَٰحِشَةٍۢ مُّبَيِّنَةٍۢ ۚ وَعَاشِرُوهُنَّ بِٱلْمَعْرُوفِ ۚ فَإِن كَرِهْتُمُوهُنَّ فَعَسَىٰٓ أَن تَكْرَهُوا۟ شَيْـًۭٔا وَيَجْعَلَ ٱللَّهُ فِيهِ خَيْرًۭا كَثِيرًۭا",
    "transliteration": "Yaaa aiyuhal lazeena aamanoo laa yahillu lakum an tarisun nisaaa'a karhan wa laa ta'duloohunna litazhaboo biba'di maaa aataitumoohunna illaaa ai yaateena bifaahishatim bubaiyinah; wa 'aashiroo hunna bilma'roof; fa in karihtumoohunna fa'asaaa an takrahoo shai'anw wa yaj'alal laahu feehi khairan kaseeraa",
    "translation": "Wahai orang-orang yang beriman, tidak halal bagi kamu mewarisi perempuan-perempuan dengan jalan paksaan, dan janganlah kamu menyakiti mereka (dengan menahan dan menyusahkan mereka) kerana kamu hendak mengambil balik sebahagian dari apa yang kamu telah berikan kepadanya, kecuali (apabila) mereka melakukan perbuatan keji yang nyata. Dan bergaulah kamu dengan mereka (isteri-isteri kamu itu) dengan cara yang baik. Kemudian jika kamu (merasai) benci kepada mereka (disebabkan tingkah-lakunya, janganlah kamu terburu-buru menceraikannya), kerana boleh jadi kamu bencikan sesuatu, sedang Allah hendak menjadikan pada apa yang kamu benci itu kebaikan yang banyak (untuk kamu)."
  },
  {
    "number": 20,
    "arabic": "وَإِنْ أَرَدتُّمُ ٱسْتِبْدَالَ زَوْجٍۢ مَّكَانَ زَوْجٍۢ وَءَاتَيْتُمْ إِحْدَىٰهُنَّ قِنطَارًۭا فَلَا تَأْخُذُوا۟ مِنْهُ شَيْـًٔا ۚ أَتَأْخُذُونَهُۥ بُهْتَٰنًۭا وَإِثْمًۭا مُّبِينًۭا",
    "transliteration": "Wa in arattumustib daala zawjim makaana zawjin wa aataitum ihdaahunna qintaaran falaa taakhuzoo minhu shai'aa; ataakhuzoonahoo buhtaannanw wa ismam mubeenaa",
    "translation": "Dan jika kamu hendak mengambil isteri (baharu) menggantikan isteri (lama yang kamu ceraikan) sedang kamu telahpun memberikan kepada seseorang di antaranya (isteri yang diceraikan itu) harta yang banyak, maka janganlah kamu mengambil sedikitpun dari harta itu. Patutkah kamu mengambilnya dengan cara yang tidak benar dan (yang menyebabkan) dosa yang nyata?"
  },
  {
    "number": 21,
    "arabic": "وَكَيْفَ تَأْخُذُونَهُۥ وَقَدْ أَفْضَىٰ بَعْضُكُمْ إِلَىٰ بَعْضٍۢ وَأَخَذْنَ مِنكُم مِّيثَٰقًا غَلِيظًۭا",
    "transliteration": "Wa kaifa taakhuzoonahoo wa qad afdaa ba'dukum ilaa ba'dinw wa akhazna minkum meesaaqan ghaleezaa",
    "translation": "Dan bagaimana kamu tergamak mengambil balik pemberian itu padahal kasih mesra kamu telah terjalin antara satu dengan yang lain, dan mereka pula (isteri-isteri kamu itu) telahpun mengambil perjanjian yang kuat daripada kamu?"
  },
  {
    "number": 22,
    "arabic": "وَلَا تَنكِحُوا۟ مَا نَكَحَ ءَابَآؤُكُم مِّنَ ٱلنِّسَآءِ إِلَّا مَا قَدْ سَلَفَ ۚ إِنَّهُۥ كَانَ فَٰحِشَةًۭ وَمَقْتًۭا وَسَآءَ سَبِيلًا",
    "transliteration": "Wa laa tankihoo maa nakaha aabaaa'ukum minan nisaaa'i illaa maa qad salaf; inahoo kaana faahishatanw wa maqtanw wa saaa'a sabeelaa",
    "translation": "Dan janganlah kamu berkahwin (dengan perempuan-perempuan) yang telah diperisterikan oleh bapa kamu kecuali apa yang telah berlaku pada masa yang lalu. Sesungguhnya perbuatan itu adalah satu perkara yang keji, dan dibenci (oleh Allah), serta menjadi seburuk-buruk jalan (yang dilalui dalam perkahwinan)."
  },
  {
    "number": 23,
    "arabic": "حُرِّمَتْ عَلَيْكُمْ أُمَّهَٰتُكُمْ وَبَنَاتُكُمْ وَأَخَوَٰتُكُمْ وَعَمَّٰتُكُمْ وَخَٰلَٰتُكُمْ وَبَنَاتُ ٱلْأَخِ وَبَنَاتُ ٱلْأُخْتِ وَأُمَّهَٰتُكُمُ ٱلَّٰتِىٓ أَرْضَعْنَكُمْ وَأَخَوَٰتُكُم مِّنَ ٱلرَّضَٰعَةِ وَأُمَّهَٰتُ نِسَآئِكُمْ وَرَبَٰٓئِبُكُمُ ٱلَّٰتِى فِى حُجُورِكُم مِّن نِّسَآئِكُمُ ٱلَّٰتِى دَخَلْتُم بِهِنَّ فَإِن لَّمْ تَكُونُوا۟ دَخَلْتُم بِهِنَّ فَلَا جُنَاحَ عَلَيْكُمْ وَحَلَٰٓئِلُ أَبْنَآئِكُمُ ٱلَّذِينَ مِنْ أَصْلَٰبِكُمْ وَأَن تَجْمَعُوا۟ بَيْنَ ٱلْأُخْتَيْنِ إِلَّا مَا قَدْ سَلَفَ ۗ إِنَّ ٱللَّهَ كَانَ غَفُورًۭا رَّحِيمًۭا",
    "transliteration": "Hurrimat 'alaikum umma haatukum wa bannaatukum wa akhawaatukum wa 'ammaatukum wa khaalaatukum wa banaatul akhi wa banaatul ukhti wa ummahaatu kumul laateee arda' nakum wa akhawaatukum minarradaa'ati wa ummahaatu nisaaa'ikum wa rabaaa'i bukumul laatee fee hujoorikum min nisaaa'ikumul laatee dakhaltum bihinna Fa il lam takoonoo dakhaltum bihina falaa junaaha 'alaikum wa halaaa'ilu abnaaa'ikumul lazeena min aslaabikum wa an tajma'oo bainal ukhtaini illaa maa qad salaf; innallaaha kaana Ghafoorar Raheema",
    "translation": "Diharamkan kepada kamu berkahwin dengan (perempuan-perempuan yang berikut): ibu-ibu kamu, dan anak-anak kamu, dan saudara-saudara kamu, dan saudara-saudara bapa kamu, dan saudara-saudara ibu kamu dan anak-anak saudara kamu yang lelaki, dan anak-anak saudara kamu yang perempuan, dan ibu-ibu kamu yang telah menyusukan kamu, dan saudara-saudara susuan kamu, dan ibu-ibu isteri kamu, dan anak-anak tiri yang dalam pemuliharaan kamu dari isteri-isteri yang kamu telah campuri; tetapi kalau kamu belum campuri mereka (isteri kamu) itu (dan kamu telahpun menceraikan mereka), maka tiadalah salah kamu (berkahwin dengannya). Dan (haram juga kamu berkahwin dengan) bekas isteri anak-anak kamu sendiri yang berasal dari benih kamu. Dan diharamkan kamu menghimpunkan dua beradik sekali (untuk menjadi isteri-isteri kamu), kecuali yang telah berlaku pada masa yang lalu. Sesungguhnya Allah adalah Maha Pengampun, lagi Maha Mengasihani."
  },
  {
    "number": 24,
    "arabic": "۞ وَٱلْمُحْصَنَٰتُ مِنَ ٱلنِّسَآءِ إِلَّا مَا مَلَكَتْ أَيْمَٰنُكُمْ ۖ كِتَٰبَ ٱللَّهِ عَلَيْكُمْ ۚ وَأُحِلَّ لَكُم مَّا وَرَآءَ ذَٰلِكُمْ أَن تَبْتَغُوا۟ بِأَمْوَٰلِكُم مُّحْصِنِينَ غَيْرَ مُسَٰفِحِينَ ۚ فَمَا ٱسْتَمْتَعْتُم بِهِۦ مِنْهُنَّ فَـَٔاتُوهُنَّ أُجُورَهُنَّ فَرِيضَةًۭ ۚ وَلَا جُنَاحَ عَلَيْكُمْ فِيمَا تَرَٰضَيْتُم بِهِۦ مِنۢ بَعْدِ ٱلْفَرِيضَةِ ۚ إِنَّ ٱللَّهَ كَانَ عَلِيمًا حَكِيمًۭا",
    "transliteration": "Walmuhsanaatu minan nisaaa'i illaa maa malakat aimaanukum kitaabal laahi 'alaikum; wa uhilla lakum maa waraaa'a zaalikum an tabtaghoo bi amwaali kum muhsineena ghaira musaa fiheen; famastamta'tum bihee minhunna fa aatoohunna ujoorahunna fareedah; wa laa junaaha 'alaikum feemaa taraadaitum bihee mim ba'dil fareedah; innal laaha kaana 'Aleeman Hakeemaa",
    "translation": "Dan (diharamkan juga kamu berkahwin dengan) perempuan-perempuan isteri orang, kecuali hamba sahaya yang kamu miliki. (Haramnya segala yang tersebut itu) ialah suatu ketetapan hukum Allah (yang diwajibkan) atas kamu. Dan (sebaliknya) dihalalkan bagi kamu perempuan-perempuan yang lain daripada yang tersebut itu, untuk kamu mencari (isteri) dengan harta kamu secara bernikah, bukan secara berzina. Kemudian mana-mana perempuan yang kamu nikmati percampuran dengannya (setelah ia menjadi isteri kamu), maka berikanlah kepada mereka maskahwinnya (dengan sempurna), sebagai suatu ketetapan (yang diwajibkan oleh Allah). Dan tiadalah kamu berdosa mengenai sesuatu persetujuan yang telah dicapai bersama oleh kamu (suami isteri), sesudah ditetapkan maskahwin itu (tentang cara dan kadar pembayarannya). Sesungguhnya Allah Maha Mengetahui, lagi Maha Bijaksana."
  },
  {
    "number": 25,
    "arabic": "وَمَن لَّمْ يَسْتَطِعْ مِنكُمْ طَوْلًا أَن يَنكِحَ ٱلْمُحْصَنَٰتِ ٱلْمُؤْمِنَٰتِ فَمِن مَّا مَلَكَتْ أَيْمَٰنُكُم مِّن فَتَيَٰتِكُمُ ٱلْمُؤْمِنَٰتِ ۚ وَٱللَّهُ أَعْلَمُ بِإِيمَٰنِكُم ۚ بَعْضُكُم مِّنۢ بَعْضٍۢ ۚ فَٱنكِحُوهُنَّ بِإِذْنِ أَهْلِهِنَّ وَءَاتُوهُنَّ أُجُورَهُنَّ بِٱلْمَعْرُوفِ مُحْصَنَٰتٍ غَيْرَ مُسَٰفِحَٰتٍۢ وَلَا مُتَّخِذَٰتِ أَخْدَانٍۢ ۚ فَإِذَآ أُحْصِنَّ فَإِنْ أَتَيْنَ بِفَٰحِشَةٍۢ فَعَلَيْهِنَّ نِصْفُ مَا عَلَى ٱلْمُحْصَنَٰتِ مِنَ ٱلْعَذَابِ ۚ ذَٰلِكَ لِمَنْ خَشِىَ ٱلْعَنَتَ مِنكُمْ ۚ وَأَن تَصْبِرُوا۟ خَيْرٌۭ لَّكُمْ ۗ وَٱللَّهُ غَفُورٌۭ رَّحِيمٌۭ",
    "transliteration": "Wa mal lam yastati' minkum tawlan ai yankihal muhsanaatil mu'minaati famimmaa malakat aimaanukum min fatayaatikumul mu'minaat; wallaahu a'lamu bi eemaanikum; ba'dukum mim ba'd; fankihoohunna bi izni ahlihinna wa aatoohunna ujoorahunna bilma'roofi muhsanaatin ghaira musaa fihaatinw wa laa muttakhizaati akhdaan; fa izaaa uhsinna fa in ataina bifaahi shatin fa'alaihinnna nisfu maa 'alal muhsanaati minal 'azaab; zaalika liman khashiyal 'anata minkum; wa an tasbiroo khairul lakum; wallaahu Ghafoorur Raheem",
    "translation": "Dan sesiapa di antara kamu yang tidak mempunyai kemampuan yang cukup untuk berkahwin dengan perempuan-perempuan yang baik-baik (yang merdeka, yang terpelihara kehormatannya) lagi beriman, maka bolehlah kamu berkahwin dengan hamba-hamba perempuan yang beriman yang kamu miliki. Dan Allah lebih mengetahui akan iman kamu; kamu masing-masing (suami yang merdeka dan isteri dari hamba - abdi itu) adalah berasal sama (dari Adam, dan seugama pula). Oleh itu berkahwinlah dengan mereka dengan izin walinya serta berikanlah maskahwinnya menurut yang patut. Mereka (hamba-hamba perempuan yang akan dijadikan isteri, hendaklah) yang sopan bukan perempuan-perempuan lacur, dan bukan pula yang mengambil lelaki sebagai teman simpanan. Kemudian setelah mereka (hamba-hamba perempuan itu) berkahwin, lalu mereka melakukan perbuatan keji (zina), maka mereka dikenakan separuh dari (hukuman) seksa yang ditetapkan ke atas perempuan-perempuan yang merdeka. (Hukum perkahwinan) yang demikian (yang membolehkan seseorang berkahwin dengan hamba-hamba perempuan) itu ialah bagi orang-orang yang bimbang melakukan zina di antara kamu; dan sabarnya kamu (tidak berkahwin dengan hamba-hamba perempuan) itu adalah lebih baik bagi kamu. Dan (ingatlah), Allah Maha Pengampun, lagi Maha Mengasihani."
  },
  {
    "number": 26,
    "arabic": "يُرِيدُ ٱللَّهُ لِيُبَيِّنَ لَكُمْ وَيَهْدِيَكُمْ سُنَنَ ٱلَّذِينَ مِن قَبْلِكُمْ وَيَتُوبَ عَلَيْكُمْ ۗ وَٱللَّهُ عَلِيمٌ حَكِيمٌۭ",
    "transliteration": "Yureedul laahu liyubai yina lakum wa yahdiyakum sunanal lazeena min qablikum wa yatooba 'alaikum; wallaahu 'Aleemun Hakeem",
    "translation": "Allah menghendaki (dengan apa yang telah diharamkan dan dihalalkan dari kaum perempuan itu) ialah untuk menerangkan (SyariatNya) dan untuk menunjukkan kepada kamu jalan-jalan aturan orang-orang yang dahulu daripada kamu (Nabi-nabi dan orang-orang yang soleh, supaya kamu mengikutinya), dan juga untuk menerima taubat kamu. Dan (ingatlah) Allah Maha Mengetahui, lagi Maha Bijaksana."
  },
  {
    "number": 27,
    "arabic": "وَٱللَّهُ يُرِيدُ أَن يَتُوبَ عَلَيْكُمْ وَيُرِيدُ ٱلَّذِينَ يَتَّبِعُونَ ٱلشَّهَوَٰتِ أَن تَمِيلُوا۟ مَيْلًا عَظِيمًۭا",
    "transliteration": "Wallaahu yureedu ai yatooba 'alaikum wa yureedul lazeena yattabi 'oonash shahawaati an tameeloo mailan 'azeemaa",
    "translation": "Dan Allah hendak (membersihkan kamu dari dosa dengan) menerima taubat kamu, sedang orang-orang (yang fasik) yang menurut keinginan hawa nafsu (yang diharamkan oleh Allah itu) hendak mendorong kamu supaya kamu menyeleweng (dari kebenaran) dengan penyelewengan yang besar bahayanya."
  },
  {
    "number": 28,
    "arabic": "يُرِيدُ ٱللَّهُ أَن يُخَفِّفَ عَنكُمْ ۚ وَخُلِقَ ٱلْإِنسَٰنُ ضَعِيفًۭا",
    "transliteration": "Yureedul laahu ai yukhaffifa 'ankum; wa khuliqal insaanu da'eefaa",
    "translation": "Allah (sentiasa) hendak meringankan (beban hukumnya) daripada kamu, kerana manusia itu dijadikan berkeadaan lemah."
  },
  {
    "number": 29,
    "arabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَأْكُلُوٓا۟ أَمْوَٰلَكُم بَيْنَكُم بِٱلْبَٰطِلِ إِلَّآ أَن تَكُونَ تِجَٰرَةً عَن تَرَاضٍۢ مِّنكُمْ ۚ وَلَا تَقْتُلُوٓا۟ أَنفُسَكُمْ ۚ إِنَّ ٱللَّهَ كَانَ بِكُمْ رَحِيمًۭا",
    "transliteration": "Yaaa aiyuhal lazeena aamanoo laa taakulooo amwaalakum bainakum bilbaatili 'illaaa an takoona tijaaratan 'an taraadim minkum; wa laa taqtulooo anfusakum; innal laaha kaana bikum Raheemaa",
    "translation": "Wahai orang-orang yang beriman, janganlah kamu makan (gunakan) harta-harta kamu sesama kamu dengan jalan yang salah (tipu, judi dan sebagainya), kecuali dengan jalan perniagaan yang dilakukan secara suka sama suka di antara kamu, dan janganlah kamu berbunuh-bunuhan sesama sendiri. Sesungguhnya Allah sentiasa Mengasihani kamu."
  },
  {
    "number": 30,
    "arabic": "وَمَن يَفْعَلْ ذَٰلِكَ عُدْوَٰنًۭا وَظُلْمًۭا فَسَوْفَ نُصْلِيهِ نَارًۭا ۚ وَكَانَ ذَٰلِكَ عَلَى ٱللَّهِ يَسِيرًا",
    "transliteration": "Wa mai yaf'al zaalika 'udwaananw wa zulman fasawfa nusleehi Naaraa; wa kaana zaalika 'alal laahi yaseeraa",
    "translation": "Dan sesiapa berbuat demikian dengan menceroboh dan aniaya, maka kami akan masukkan dia ke dalam api neraka, dan balasan yang sedemikian itu adalah mudah bagi Allah, (tidak ada sesiapapun yang dapat menghalangnya)."
  },
  {
    "number": 31,
    "arabic": "إِن تَجْتَنِبُوا۟ كَبَآئِرَ مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنكُمْ سَيِّـَٔاتِكُمْ وَنُدْخِلْكُم مُّدْخَلًۭا كَرِيمًۭا",
    "transliteration": "In tajtaniboo kabaaa'ira maa tunhawna 'anhu nukaffir 'ankum saiyiaatikum wa nudkhilkum mudkhalan kareemaa",
    "translation": "Jika kamu menjauhkan dosa-dosa besar yang dilarang kamu melakukannya, Kami akan ampunkan kesalahan-kesalahan (dosa kecil) kamu, dan kami akan masukkan kamu ke tempat yang mulia (syurga)."
  },
  {
    "number": 32,
    "arabic": "وَلَا تَتَمَنَّوْا۟ مَا فَضَّلَ ٱللَّهُ بِهِۦ بَعْضَكُمْ عَلَىٰ بَعْضٍۢ ۚ لِّلرِّجَالِ نَصِيبٌۭ مِّمَّا ٱكْتَسَبُوا۟ ۖ وَلِلنِّسَآءِ نَصِيبٌۭ مِّمَّا ٱكْتَسَبْنَ ۚ وَسْـَٔلُوا۟ ٱللَّهَ مِن فَضْلِهِۦٓ ۗ إِنَّ ٱللَّهَ كَانَ بِكُلِّ شَىْءٍ عَلِيمًۭا",
    "transliteration": "Wa laa tatamannaw maa faddalal laahu bihee ba'dakum 'alaa ba'd; lirrijaali naseebum mimak tasaboo wa linnisaaa'i naseebum mimmak tasabna; was'alullaaha min fadlih; innal laaha kaana bikulli shai'in 'Aleemaa",
    "translation": "Dan janganlah kamu terlalu mengharapkan (ingin mendapat) limpah kurnia yang Allah telah berikan kepada sebahagian dari kamu (untuk menjadikan mereka) melebihi sebahagian yang lain (tentang harta benda, ilmu pengetahuan atau pangkat kebesaran). (Kerana telah tetap) orang-orang lelaki ada bahagian dari apa yang mereka usahakan, dan orang-orang perempuan pula ada bahagian dari apa yang mereka usahakan; (maka berusahalah kamu) dan pohonkanlah kepada Allah akan limpah kurnianya. Sesungguhnya Allah sentiasa Mengetahui akan tiap-tiap sesuatu."
  },
  {
    "number": 33,
    "arabic": "وَلِكُلٍّۢ جَعَلْنَا مَوَٰلِىَ مِمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ ۚ وَٱلَّذِينَ عَقَدَتْ أَيْمَٰنُكُمْ فَـَٔاتُوهُمْ نَصِيبَهُمْ ۚ إِنَّ ٱللَّهَ كَانَ عَلَىٰ كُلِّ شَىْءٍۢ شَهِيدًا",
    "transliteration": "Wa likullin ja'alnaa ma waaliya mimmaa tarakal waalidaani wal aqraboon; wallazeena 'aqadat aimaanukum fa aatoohum naseebahum; innal laaha kaana 'alaa kulli shai'in Shaheedaa",
    "translation": "Dan bagi tiap-tiap (lelaki dan perempuan yang telah mati), kami telah tetapkan orang-orang yang berhak mewarisi peninggalannya iaitu ibu bapa dan kerabat yang dekat. Dan mana-mana orang yang kamu telah membuat ikatan setia dengan mereka (untuk bantu-membantu dalam masa kecemasan dan kesusahan) maka berikanlah kepada mereka bahagiannya. Sesungguhnya Allah sentiasa Menyaksikan tiap-tiap sesuatu."
  },
  {
    "number": 34,
    "arabic": "ٱلرِّجَالُ قَوَّٰمُونَ عَلَى ٱلنِّسَآءِ بِمَا فَضَّلَ ٱللَّهُ بَعْضَهُمْ عَلَىٰ بَعْضٍۢ وَبِمَآ أَنفَقُوا۟ مِنْ أَمْوَٰلِهِمْ ۚ فَٱلصَّٰلِحَٰتُ قَٰنِتَٰتٌ حَٰفِظَٰتٌۭ لِّلْغَيْبِ بِمَا حَفِظَ ٱللَّهُ ۚ وَٱلَّٰتِى تَخَافُونَ نُشُوزَهُنَّ فَعِظُوهُنَّ وَٱهْجُرُوهُنَّ فِى ٱلْمَضَاجِعِ وَٱضْرِبُوهُنَّ ۖ فَإِنْ أَطَعْنَكُمْ فَلَا تَبْغُوا۟ عَلَيْهِنَّ سَبِيلًا ۗ إِنَّ ٱللَّهَ كَانَ عَلِيًّۭا كَبِيرًۭا",
    "transliteration": "Arrijaalu qawwaamoona 'alan nisaaa'i bimaa fad dalallaahu ba'dahum 'alaa ba'dinw wa bimaaa anfoqoo min amwaalihim; fassaalihaatu qaanitaatun haafizaatul lil ghaibi bimaa hafizal laah; wallaatee takhaafoona nushoo zahunna fa 'izoohunna wahjuroohunna fil madaaji'i wadriboohunna fa in ata'nakum falaa tabghoo 'alaihinna sabeelaa; innallaaha kaana 'Aliyyan Kabeeraa",
    "translation": "Kaum lelaki itu adalah pemimpin dan pengawal yang bertanggungjawab terhadap kaum perempuan, oleh kerana Allah telah melebihkan orang-orang lelaki (dengan beberapa keistimewaan) atas orang-orang perempuan, dan juga kerana orang-orang lelaki telah membelanjakan (memberi nafkah) sebahagian dari harta mereka. Maka perempuan-perempuan yang soleh itu ialah yang taat (kepada Allah dan suaminya), dan yang memelihara (kehormatan dirinya dan apa jua yang wajib dipelihara) ketika suami tidak hadir bersama, dengan pemuliharaan Allah dan pertolonganNya. Dan perempuan-perempuan yang kamu bimbang melakukan perbuatan derhaka (nusyuz) hendaklah kamu menasihati mereka, dan (jika mereka berdegil) pulaukanlah mereka di tempat tidur, dan (kalau juga mereka masih degil) pukulah mereka (dengan pukulan ringan yang bertujuan mengajarnya). Kemudian jika mereka taat kepada kamu, maka janganlah kamu mencari-cari jalan untuk menyusahkan mereka. Sesungguhnya Allah Maha Tinggi, lagi Maha Besar."
  },
  {
    "number": 35,
    "arabic": "وَإِنْ خِفْتُمْ شِقَاقَ بَيْنِهِمَا فَٱبْعَثُوا۟ حَكَمًۭا مِّنْ أَهْلِهِۦ وَحَكَمًۭا مِّنْ أَهْلِهَآ إِن يُرِيدَآ إِصْلَٰحًۭا يُوَفِّقِ ٱللَّهُ بَيْنَهُمَآ ۗ إِنَّ ٱللَّهَ كَانَ عَلِيمًا خَبِيرًۭا",
    "transliteration": "Wa in khiftum shiqaaqa baini himaa fab'asoo haka mam min ahlihee wa hakamam min ahlihaa; iny-yureedaaa islaah ai-yuwaffiqil laahu bainahumaa; innal laaha kaana 'Aleeman Khabeeraa",
    "translation": "Dan jika kamu bimbangkan perpecahan di antara mereka berdua (suami isteri) maka lantiklah \"orang tengah\" (untuk mendamaikan mereka, iaitu), seorang dari keluarga lelaki dan seorang dari keluarga perempuan. Jika kedua-dua \"orang tengah\" itu (dengan ikhlas) bertujuan hendak mendamaikan, nescaya Allah akan menjadikan kedua (suami isteri itu) berpakat baik. Sesungguhnya Allah sentiasa Mengetahui, lagi Amat mendalam pengetahuanNya."
  },
  {
    "number": 36,
    "arabic": "۞ وَٱعْبُدُوا۟ ٱللَّهَ وَلَا تُشْرِكُوا۟ بِهِۦ شَيْـًۭٔا ۖ وَبِٱلْوَٰلِدَيْنِ إِحْسَٰنًۭا وَبِذِى ٱلْقُرْبَىٰ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينِ وَٱلْجَارِ ذِى ٱلْقُرْبَىٰ وَٱلْجَارِ ٱلْجُنُبِ وَٱلصَّاحِبِ بِٱلْجَنۢبِ وَٱبْنِ ٱلسَّبِيلِ وَمَا مَلَكَتْ أَيْمَٰنُكُمْ ۗ إِنَّ ٱللَّهَ لَا يُحِبُّ مَن كَانَ مُخْتَالًۭا فَخُورًا",
    "transliteration": "Wa'budul laaha wa laa tushrikoo bihee shai'anw wa bilwaalidaini ihsaananw wa bizil qurbaa walyataamaa walmasaakeeni waljaari zilqurbaa waljaaril junubi wassaahibi biljambi wabnis sabeeli wa maa malakat aimaanukum; innal laaha laa yuhibbu man kaana mukhtaalan fakhooraa",
    "translation": "Dan hendaklah kamu beribadat kepada Allah dan janganlah kamu sekutukan Dia dengan sesuatu apa jua; dan hendaklah kamu berbuat baik kepada kedua ibu bapa, dan kaum kerabat, dan anak-anak yatim, dan orang-orang miskin, dan jiran tetangga yang dekat, dan jiran tetangga yang jauh, dan rakan sejawat, dan orang musafir yang terlantar, dan juga hamba yang kamu miliki. Sesungguhnya Allah tidak suka kepada orang-orang yang sombong takbur dan membangga-banggakan diri;"
  },
  {
    "number": 37,
    "arabic": "ٱلَّذِينَ يَبْخَلُونَ وَيَأْمُرُونَ ٱلنَّاسَ بِٱلْبُخْلِ وَيَكْتُمُونَ مَآ ءَاتَىٰهُمُ ٱللَّهُ مِن فَضْلِهِۦ ۗ وَأَعْتَدْنَا لِلْكَٰفِرِينَ عَذَابًۭا مُّهِينًۭا",
    "transliteration": "Allazeena yabkhaloona wa yaamuroonan naasa bilbukhli wa yaktumoona maaa aataahu mullaahu min fadlih; wa a'tadnaa lilkaafireena 'azaabam muheenaa",
    "translation": "Iaitu orang-orang yang bakhil dan menyuruh manusia supaya bakhil serta menyembunyikan apa-apa jua yang Allah berikan kepada mereka dari limpah kurnianya. Dan (sebenarnya) Kami telah sediakan bagi orang-orang kafir itu azab seksa yang amat menghina;"
  },
  {
    "number": 38,
    "arabic": "وَٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ رِئَآءَ ٱلنَّاسِ وَلَا يُؤْمِنُونَ بِٱللَّهِ وَلَا بِٱلْيَوْمِ ٱلْءَاخِرِ ۗ وَمَن يَكُنِ ٱلشَّيْطَٰنُ لَهُۥ قَرِينًۭا فَسَآءَ قَرِينًۭا",
    "transliteration": "Wallazeena yunfiqoona amwaalahum ri'aaa'an naasi wa laa yu'minoona billaahi wa laa bil Yawmil Aakhir; wa mai yakunish shaitaanu lahoo qareenan fasaaa'a qareenaa",
    "translation": "Dan juga orang-orang yang membelanjakan hartanya dengan menunjuk-nunjuk kepada manusia (riak), dan mereka tidak pula beriman kepada Allah dan tidak juga beriman kepada hari akhirat. Dan sesiapa yang (mengambil) Syaitan itu menjadi kawannya, maka seburuk-buruk kawan ialah syaitan."
  },
  {
    "number": 39,
    "arabic": "وَمَاذَا عَلَيْهِمْ لَوْ ءَامَنُوا۟ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَأَنفَقُوا۟ مِمَّا رَزَقَهُمُ ٱللَّهُ ۚ وَكَانَ ٱللَّهُ بِهِمْ عَلِيمًا",
    "transliteration": "Wa maazaa 'alaihim law aamanoo billaahi wal Yawmil Aakhiri wa anfaqoo mimmaa razaqahumul laah; wa kaanallaahu bihim Aaleemaa",
    "translation": "Dan apakah (kerugian) yang akan menimpa mereka jika mereka beriman kepada Allah dan hari akhirat, serta mereka mendermakan sebahagian dari apa yang telah dikurniakan Allah kepada mereka? Dan (ingatlah) Allah sentiasa Mengetahui akan keadaan mereka."
  },
  {
    "number": 40,
    "arabic": "إِنَّ ٱللَّهَ لَا يَظْلِمُ مِثْقَالَ ذَرَّةٍۢ ۖ وَإِن تَكُ حَسَنَةًۭ يُضَٰعِفْهَا وَيُؤْتِ مِن لَّدُنْهُ أَجْرًا عَظِيمًۭا",
    "transliteration": "Innal laaha laa yazlimu misqaala zarratinw wa in taku hasanatany yudaa'ifhaa wa yu'ti mil ladunhu ajran 'azeemaa",
    "translation": "Sesungguhnya Allah tidak sekali-kali menganiaya (seseorang) sekalipun seberat zarah (debu). Dan kalaulah (amal yang seberat zarrah) itu amal kebajikan, nescaya akan menggandakannya dan akan memberi, dari sisiNya, pahala yang amat besar."
  },
  {
    "number": 41,
    "arabic": "فَكَيْفَ إِذَا جِئْنَا مِن كُلِّ أُمَّةٍۭ بِشَهِيدٍۢ وَجِئْنَا بِكَ عَلَىٰ هَٰٓؤُلَآءِ شَهِيدًۭا",
    "transliteration": "Fakaifa izaa ji'naa min kulli ummatim bishaheedinw wa ji'naabika 'alaa haaa'ulaaa 'i Shaheedan",
    "translation": "Maka bagaimanakah (keadaan orang-orang kafir pada hari akhirat kelak), apabila Kami datangkan dari tiap-tiap umat seorang saksi (iaitu Rasul mereka sendiri menjadi saksi terhadap perbuatan mereka), dan Kami juga datangkan engkau (wahai Muhammad) sebagai saksi terhadap umatmu ini?"
  },
  {
    "number": 42,
    "arabic": "يَوْمَئِذٍۢ يَوَدُّ ٱلَّذِينَ كَفَرُوا۟ وَعَصَوُا۟ ٱلرَّسُولَ لَوْ تُسَوَّىٰ بِهِمُ ٱلْأَرْضُ وَلَا يَكْتُمُونَ ٱللَّهَ حَدِيثًۭا",
    "transliteration": "Yawma'iziny yawad dullazeena kafaroo wa'asawur Rasoola law tusawwaa bihimul ardu wa laa yaktumoonal laaha hadeesaa",
    "translation": "Pada hari itu orang-orang yang kafir dan menderhaka kepada Rasulullah, suka jika mereka disama ratakan dengan tanah (ditelan bumi), dan (ketika itu) mereka tidak dapat menyembunyikan sepatah kata pun dari pengetahuan Allah."
  },
  {
    "number": 43,
    "arabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَقْرَبُوا۟ ٱلصَّلَوٰةَ وَأَنتُمْ سُكَٰرَىٰ حَتَّىٰ تَعْلَمُوا۟ مَا تَقُولُونَ وَلَا جُنُبًا إِلَّا عَابِرِى سَبِيلٍ حَتَّىٰ تَغْتَسِلُوا۟ ۚ وَإِن كُنتُم مَّرْضَىٰٓ أَوْ عَلَىٰ سَفَرٍ أَوْ جَآءَ أَحَدٌۭ مِّنكُم مِّنَ ٱلْغَآئِطِ أَوْ لَٰمَسْتُمُ ٱلنِّسَآءَ فَلَمْ تَجِدُوا۟ مَآءًۭ فَتَيَمَّمُوا۟ صَعِيدًۭا طَيِّبًۭا فَٱمْسَحُوا۟ بِوُجُوهِكُمْ وَأَيْدِيكُمْ ۗ إِنَّ ٱللَّهَ كَانَ عَفُوًّا غَفُورًا",
    "transliteration": "yaaa aiyuhal lazeena aamanoo laa taqrabus Salaata wa antum sukaaraa hatta ta'lamoo ma taqooloona wa la junuban illaa 'aabiree sabeelin hatta taghtasiloo; wa in kuntum mardaaa aw 'alaa safarin aw jaaa'a ahadum minkum minal ghaaa'iti aw laamastumun nisaaa'a falam tajidoo maaa'an fatayam mamoo sa'eedan taiyiban famsahoo biwujoohikum wa aideekum; innal laaha kaana 'Afuwwan Ghafooraa",
    "translation": "Wahai orang-orang yang beriman, janganlah kamu hampiri sembahyang (mengerjakannya) sedang kamu dalam keadaan mabuk, hingga kamu sedar dan mengetahui akan apa yang kamu katakan. Dan janganlah pula (hampiri masjid) sedang kamu dalam keadaan Junub (berhadas besar) - kecuali kamu hendak melintas sahaja - hingga kamu mandi bersuci. Dan jika kamu sakit, atau sedang dalam musafir, atau salah seorang di antara kamu datang dari tempat buang air, atau kamu bersentuh dengan perempuan, kemudian kamu tidak mendapat air (untuk mandi atau berwuduk), maka hendaklah kamu bertayamum dengan tanah - debu, yang suci, iaitu sapukanlah ke muka kamu dan kedua tangan kamu. Sesungguhnya Allah Maha Pemaaf, lagi Maha Pengampun."
  },
  {
    "number": 44,
    "arabic": "أَلَمْ تَرَ إِلَى ٱلَّذِينَ أُوتُوا۟ نَصِيبًۭا مِّنَ ٱلْكِتَٰبِ يَشْتَرُونَ ٱلضَّلَٰلَةَ وَيُرِيدُونَ أَن تَضِلُّوا۟ ٱلسَّبِيلَ",
    "transliteration": "Alam tara ilal lazeena ootoo naseebam minal Kitaabi yashtaroonad dalaalata wa yureedoona an tadillus sabeel",
    "translation": "Tidakkah engkau memerhatikan (wahai Muhammad) orang-orang yang telah diberikan sebahagian dari Kitab, mereka memilih kesesatan (dengan meninggalkan pertunjuk Tuhan), dan mereka pula berkehendak supaya kamu juga sesat jalan."
  },
  {
    "number": 45,
    "arabic": "وَٱللَّهُ أَعْلَمُ بِأَعْدَآئِكُمْ ۚ وَكَفَىٰ بِٱللَّهِ وَلِيًّۭا وَكَفَىٰ بِٱللَّهِ نَصِيرًۭا",
    "transliteration": "Wallaahu a'lamu bi a'daaa'i-kum; wa kafaa billaahi waliyyanw wa kafaa billaahi naseera",
    "translation": "Dan Allah lebih mengetahui berkenaan dengan musuh-musuh kamu, (oleh itu awasilah angkara musuh kamu itu). Dan cukuplah Allah sebagai Pengawal yang melindungi, dan cukuplah Allah sebagai Penolong (yang menyelamatkan kamu dari angkara mereka)."
  },
  {
    "number": 46,
    "arabic": "مِّنَ ٱلَّذِينَ هَادُوا۟ يُحَرِّفُونَ ٱلْكَلِمَ عَن مَّوَاضِعِهِۦ وَيَقُولُونَ سَمِعْنَا وَعَصَيْنَا وَٱسْمَعْ غَيْرَ مُسْمَعٍۢ وَرَٰعِنَا لَيًّۢا بِأَلْسِنَتِهِمْ وَطَعْنًۭا فِى ٱلدِّينِ ۚ وَلَوْ أَنَّهُمْ قَالُوا۟ سَمِعْنَا وَأَطَعْنَا وَٱسْمَعْ وَٱنظُرْنَا لَكَانَ خَيْرًۭا لَّهُمْ وَأَقْوَمَ وَلَٰكِن لَّعَنَهُمُ ٱللَّهُ بِكُفْرِهِمْ فَلَا يُؤْمِنُونَ إِلَّا قَلِيلًۭا",
    "transliteration": "Minal lazeena haadoo yuharrifoonal Kalima 'am mawaadi'ihee wa yaqooloona sami'naa wa 'asainaa wasma' ghaira musma'inw wa raa'inaa laiyam bi alsinatihim wa ta'nan fiddeen; wa law annahum qaaloo sami'naa wa ata'naa wasma' wanzurnaa lakaana khairal lahum wa aqwama wa laakil la ''anahumul laahu bikufrihim falaa yu'minoona illaa qaleela",
    "translation": "Di antara orang-orang Yahudi ada yang mengubah (atau menukar ganti) Kalamullah (isi Kitab Taurat), dari tempat dan maksudnya yang sebenar, dan berkata (kepada Nabi Muhammad): \"Kami dengar\", (sedang mereka berkata dalam hati): \"Kami tidak akan menurut\". (Mereka juga berkata): \"Tolonglah dengar, tuan tidak diperdengarkan sesuatu yang buruk\", serta (mereka mengatakan): \"Raaeina\"; (Tujuan kata-kata mereka yang tersebut) hanya memutar belitkan perkataan mereka dan mencela ugama Islam. Dan kalaulah mereka berkata: \"Kami dengar dan kami taat, dan dengarlah serta berilah perhatian kepada kami\", tentulah yang demikian itu lebih baik bagi mereka dan lebih betul. Akan tetapi Allah melaknat mereka dengan sebab kekufuran mereka. Oleh itu, mereka tidak beriman kecuali sedikit sahaja (di antara mereka)."
  },
  {
    "number": 47,
    "arabic": "يَٰٓأَيُّهَا ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ ءَامِنُوا۟ بِمَا نَزَّلْنَا مُصَدِّقًۭا لِّمَا مَعَكُم مِّن قَبْلِ أَن نَّطْمِسَ وُجُوهًۭا فَنَرُدَّهَا عَلَىٰٓ أَدْبَارِهَآ أَوْ نَلْعَنَهُمْ كَمَا لَعَنَّآ أَصْحَٰبَ ٱلسَّبْتِ ۚ وَكَانَ أَمْرُ ٱللَّهِ مَفْعُولًا",
    "transliteration": "yaaa aiyuha lazeena ootu Kitaaba aaminoo bimaa nazzalnaa musadiqallimaa ma'akum min qabli an natmisa wujoohan fanaruddahaa 'alaaa adbaarihaaa aw nal'anahum kamaa la'annaaa Ashaabas Sabt; wa kaana amrul laahi maf'oolaa",
    "translation": "Wahai orang-orang yang telah diberikan Kitab, berimanlah kamu dengan apa yang telah Kami turunkan (Al-Quran), yang mengesahkan Kitab-Kitab yang ada pada kamu, sebelum Kami menyeksa dengan menghapuskan bentuk muka kamu (sehingga berubah menjadi rata - tidak bermulut, berhidung dan bermata), lalu Kami menjadikannya sama seperti rupa sebelah belakangnya, atau Kami melaknatkan mereka sebagaimana Kami telah melaknatkan orang-orang (dari kaum mereka - Yahudi) yang melanggar larangan bekerja pada hari Sabtu. Dan (ingatlah) perintah Allah itu tetap berlaku."
  },
  {
    "number": 48,
    "arabic": "إِنَّ ٱللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِۦ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَآءُ ۚ وَمَن يُشْرِكْ بِٱللَّهِ فَقَدِ ٱفْتَرَىٰٓ إِثْمًا عَظِيمًا",
    "transliteration": "Innal laaha laa yaghfiru ai yushraka bihee wa yaghfiru maa doona zaalika limai yashaaa'; wa mai yushrik billaahi faqadif taraaa isman 'azeemaa",
    "translation": "Sesungguhnya Allah tidak akan mengampunkan dosa syirik mempersekutukanNya (dengan sesuatu apajua), dan akan mengampunkan dosa yang lain dari itu bagi sesiapa yang dikehendakiNya (menurut aturan SyariatNya). Dan sesiapa yang mempersekutukan Allah (dengan sesuatu yang lain), maka sesungguhnya ia telah melakukan dosa yang besar."
  },
  {
    "number": 49,
    "arabic": "أَلَمْ تَرَ إِلَى ٱلَّذِينَ يُزَكُّونَ أَنفُسَهُم ۚ بَلِ ٱللَّهُ يُزَكِّى مَن يَشَآءُ وَلَا يُظْلَمُونَ فَتِيلًا",
    "transliteration": "Alam tara ilal lazeena yuzakkoona anfusahum; balil laahu yuzakkee mai yashaaa'u wa laa yuzlamoona fateelaa",
    "translation": "Tidakkah engkau perhatikan (dan merasa pelik wahai Muhammad) kepada orang-orang yang membersihkan (memuji) diri sendiri? (Padahal perkara itu bukan hak manusia) bahkan Allah jualah yang berhak membersihkan (memuji) sesiapa yang dikehendakiNya (menurut aturan SyariatNya); dan mereka pula tidak akan dianiaya (atau dikurangkan balasan mereka) sedikitpun."
  },
  {
    "number": 50,
    "arabic": "ٱنظُرْ كَيْفَ يَفْتَرُونَ عَلَى ٱللَّهِ ٱلْكَذِبَ ۖ وَكَفَىٰ بِهِۦٓ إِثْمًۭا مُّبِينًا",
    "transliteration": "Unzur kaifa yaftaroona 'alal laahil kazib, wakafaa biheee ismamm mubeenaa",
    "translation": "Lihatlah (wahai Muhammad) betapa beraninya mereka mengada-adakan perkara-perkara dusta terhadap Allah? Dan cukuplah perbuatan itu menjadi dosa yang terang nyata."
  },
  {
    "number": 51,
    "arabic": "أَلَمْ تَرَ إِلَى ٱلَّذِينَ أُوتُوا۟ نَصِيبًۭا مِّنَ ٱلْكِتَٰبِ يُؤْمِنُونَ بِٱلْجِبْتِ وَٱلطَّٰغُوتِ وَيَقُولُونَ لِلَّذِينَ كَفَرُوا۟ هَٰٓؤُلَآءِ أَهْدَىٰ مِنَ ٱلَّذِينَ ءَامَنُوا۟ سَبِيلًا",
    "transliteration": "Alam tara ilal lazeena 'ootoo naseebam minal kitaabi yu'minoona bil Jibti wat Taaghooti wa yaqooloona lillazeena kafaroo haaa ulaaa'i ahdaa minal lazeena aamanoo sabeelaa",
    "translation": "Tidakkah engkau perhatikan (dan merasa pelik wahai Muhammad) kepada orang-orang yang telah diberikan sebahagian dari Kitab (Taurat)? Mereka percaya kepada benda-benda yang disembah yang lain dari Allah, dan kepada Taghut, dan mereka pula berkata kepada orang-orang kafir (kaum musyrik di Makkah) bahawa mereka (kaum musyrik itu) lebih betul jalan ugamanya daripada orang-orang yang beriman (kepada Nabi Muhammad s.a.w)."
  },
  {
    "number": 52,
    "arabic": "أُو۟لَٰٓئِكَ ٱلَّذِينَ لَعَنَهُمُ ٱللَّهُ ۖ وَمَن يَلْعَنِ ٱللَّهُ فَلَن تَجِدَ لَهُۥ نَصِيرًا",
    "transliteration": "Ulaaa'ikal lazeena la'ana humul laahu wa mai yal'anil laahu falan tajida lahoo naseeraa",
    "translation": "(Kaum Yahudi yang demikian sikapnya) mereka itulah orang-orang yang dilaknat oleh Allah; dan sesiapa yang dilaknat oleh Allah, maka engkau tidak sekali-kali akan mendapati sesiapa pun yang boleh menolongnya."
  },
  {
    "number": 53,
    "arabic": "أَمْ لَهُمْ نَصِيبٌۭ مِّنَ ٱلْمُلْكِ فَإِذًۭا لَّا يُؤْتُونَ ٱلنَّاسَ نَقِيرًا",
    "transliteration": "Am lahum naseebum minal mulki fa izal laa yu'toonan naasa naqeeraa",
    "translation": "Patutkah ada bagi mereka (kaum Yahudi itu) sesuatu bahagian dari kekuasaan memerintah? (Tidak, bahkan kalau ada) maka sudah tentu mereka tidak akan memberikan sedikitpun kebaikan kepada manusia."
  },
  {
    "number": 54,
    "arabic": "أَمْ يَحْسُدُونَ ٱلنَّاسَ عَلَىٰ مَآ ءَاتَىٰهُمُ ٱللَّهُ مِن فَضْلِهِۦ ۖ فَقَدْ ءَاتَيْنَآ ءَالَ إِبْرَٰهِيمَ ٱلْكِتَٰبَ وَٱلْحِكْمَةَ وَءَاتَيْنَٰهُم مُّلْكًا عَظِيمًۭا",
    "transliteration": "Am yahsudoonan naasa 'alaa maaa aataahumul laahu min fadlihee faqad aatainaaa Aala Ibraaheemal Kitaaba wal Hikmata wa aatainaahum mulkan 'azeemaa",
    "translation": "Atau patutkah mereka dengki kepada manusia (Nabi Muhammad dan umatnya) disebabkan nikmat (pangkat Nabi dan ugama Islam) yang telah diberikan oleh Allah kepada mereka dari limpah kurniaNya? Kerana sesungguhnya Kami telahpun memberi kepada keluarga Ibrahim: Kitab (ugama) dan hikmat (pangkat Nabi), dan kami telah memberi kepada mereka kerajaan yang besar."
  },
  {
    "number": 55,
    "arabic": "فَمِنْهُم مَّنْ ءَامَنَ بِهِۦ وَمِنْهُم مَّن صَدَّ عَنْهُ ۚ وَكَفَىٰ بِجَهَنَّمَ سَعِيرًا",
    "transliteration": "Faminhum man aamana bihee wa minhum man sadda 'anh; wa kafaa bi Jahannama sa'eeraa",
    "translation": "Maka di antara mereka (kaum Yahudi yang dengki itu) ada yang beriman kepada (apa yang telah di kurniakan oleh Allah kepada keluarga Nabi Ibrahim) itu, dan ada pula di antara mereka yang berpaling daripadanya (tidak beriman). Dan cukuplah dengan neraka jahanam yang sentiasa menyala-nyala itu (menjadi tempat seksa mereka)."
  },
  {
    "number": 56,
    "arabic": "إِنَّ ٱلَّذِينَ كَفَرُوا۟ بِـَٔايَٰتِنَا سَوْفَ نُصْلِيهِمْ نَارًۭا كُلَّمَا نَضِجَتْ جُلُودُهُم بَدَّلْنَٰهُمْ جُلُودًا غَيْرَهَا لِيَذُوقُوا۟ ٱلْعَذَابَ ۗ إِنَّ ٱللَّهَ كَانَ عَزِيزًا حَكِيمًۭا",
    "transliteration": "Innal lazeena kafaroo bi Aayaatinaa sawfa nusleehim Naaran kullamaa nadijat julooduhum baddalnaahum juloodan ghairahaa liyazooqul 'azaab; innallaaha kaana 'Azeezan Hakeemaa",
    "translation": "Sesungguhnya orang-orang yang kufur ingkar kepada ayat-ayat keterangan Kami, Kami akan membakar mereka dalam api neraka. Tiap-tiap kali kulit mereka masak hangus, Kami gantikan untuk mereka kulit yang lain supaya mereka dapat merasa azab sengsara itu. Dan (ingatlah) sesungguhnya Allah adalah Maha Kuasa, lagi Maha Bijaksana."
  },
  {
    "number": 57,
    "arabic": "وَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ سَنُدْخِلُهُمْ جَنَّٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَآ أَبَدًۭا ۖ لَّهُمْ فِيهَآ أَزْوَٰجٌۭ مُّطَهَّرَةٌۭ ۖ وَنُدْخِلُهُمْ ظِلًّۭا ظَلِيلًا",
    "transliteration": "Wallazeena aamanoo wa 'amilus saalihaati sanud khiluum jannaatin tajree min tahtihal anhaaru khaalideena feehaaa abadaa, lahum feehaaa azwaajum mutahharatun wa nudkhiluhum zillan zaleelaa",
    "translation": "Dan orang-orang yang beriman serta beramal soleh, Kami akan masukkan mereka ke dalam syurga yang mengalir di bawahnya beberapa sungai, mereka kekal di dalamnya selama-lamanya. Mereka beroleh dalam syurga itu pasangan-pasangan, isteri-isteri yang suci bersih, serta Kami masukkan mereka ke tempat yang teduh yang sentiasa dinaungi."
  },
  {
    "number": 58,
    "arabic": "۞ إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا۟ ٱلْأَمَٰنَٰتِ إِلَىٰٓ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ ٱلنَّاسِ أَن تَحْكُمُوا۟ بِٱلْعَدْلِ ۚ إِنَّ ٱللَّهَ نِعِمَّا يَعِظُكُم بِهِۦٓ ۗ إِنَّ ٱللَّهَ كَانَ سَمِيعًۢا بَصِيرًۭا",
    "transliteration": "Innal laaha yaamurukum an tu'addul amaanaati ilaaa ahlihaa wa izaa hakamtum bainan naasi an tahkumoo bil 'adl; innal laaha yaamurukum an tu'addul amaanaati ilaaa ahlihaa wa izaa hakamtum bainan naasi an tahkumoo bil 'adl; innal laaha ni'immaa ya'izukum bih; innal laaha kaana Samee'am Baseera",
    "translation": "Sesungguhnya Allah menyuruh kamu supaya menyerahkan segala jenis amanah kepada ahlinya (yang berhak menerimanya), dan apabila kamu menjalankan hukum di antara manusia, (Allah menyuruh) kamu menghukum dengan adil. Sesungguhnya Allah dengan (suruhanNya) itu memberi pengajaran yang sebaik-baiknya kepada kamu. Sesungguhnya Allah sentiasa Mendengar, lagi sentiasa Melihat."
  },
  {
    "number": 59,
    "arabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَطِيعُوا۟ ٱللَّهَ وَأَطِيعُوا۟ ٱلرَّسُولَ وَأُو۟لِى ٱلْأَمْرِ مِنكُمْ ۖ فَإِن تَنَٰزَعْتُمْ فِى شَىْءٍۢ فَرُدُّوهُ إِلَى ٱللَّهِ وَٱلرَّسُولِ إِن كُنتُمْ تُؤْمِنُونَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ ۚ ذَٰلِكَ خَيْرٌۭ وَأَحْسَنُ تَأْوِيلًا",
    "transliteration": "Yaaa aiyuhal lazeena aamanooo atee'ul laaha wa atee'ur Rasoola wa ulil amri minkum fa in tanaaza'tum fee shai'in faruddoohu ilal laahi war Rasooli in kuntum tu'minoona billaahi wal yawmil Aakhir; zaalika khairunw wa ahsanu taaweelaa",
    "translation": "Wahai orang-orang yang beriman, taatlah kamu kepada Allah dan taatlah kamu kepada Rasulullah dan kepada \"Ulil-Amri\" (orang-orang yang berkuasa) dari kalangan kamu. Kemudian jika kamu berbantah-bantah (berselisihan) dalam sesuatu perkara, maka hendaklah kamu mengembalikannya kepada (Kitab) Allah (Al-Quran) dan (Sunnah) RasulNya - jika kamu benar beriman kepada Allah dan hari akhirat. Yang demikian adalah lebih baik (bagi kamu), dan lebih elok pula kesudahannya."
  },
  {
    "number": 60,
    "arabic": "أَلَمْ تَرَ إِلَى ٱلَّذِينَ يَزْعُمُونَ أَنَّهُمْ ءَامَنُوا۟ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ يُرِيدُونَ أَن يَتَحَاكَمُوٓا۟ إِلَى ٱلطَّٰغُوتِ وَقَدْ أُمِرُوٓا۟ أَن يَكْفُرُوا۟ بِهِۦ وَيُرِيدُ ٱلشَّيْطَٰنُ أَن يُضِلَّهُمْ ضَلَٰلًۢا بَعِيدًۭا",
    "transliteration": "Alam tara ilal lazeena yaz'umoona annahum aarmanoo bimaa unzilaa ilaika wa maaa unzila min qablika yureedoona ai yatahaakamooo ilat Taaghooti wa qad umirooo ai yakfuroo bih, wa yureedush Shaitaanu ai yudillahum dalaalam ba'eedaa",
    "translation": "Tidakkah engkau (hairan) melihat (wahai Muhammad) orang-orang (munafik) yang mendakwa bahawa mereka telah beriman kepada Al-Quran yang telah diturunkan kepadamu dan kepada (Kitab-kitab) yang telah diturunkan dahulu daripadamu? Mereka suka hendak berhakim kepada Taghut, padahal mereka telah diperintahkan supaya kufur ingkar kepada Taghut itu. Dan Syaitan pula sentiasa hendak menyesatkan mereka dengan kesesatan yang amat jauh."
  },
  {
    "number": 61,
    "arabic": "وَإِذَا قِيلَ لَهُمْ تَعَالَوْا۟ إِلَىٰ مَآ أَنزَلَ ٱللَّهُ وَإِلَى ٱلرَّسُولِ رَأَيْتَ ٱلْمُنَٰفِقِينَ يَصُدُّونَ عَنكَ صُدُودًۭا",
    "transliteration": "Wa izaa qeela lahum ta'aalaw ilaa maaa anzalallaahu wa ilar Rasooli ra aital munaafiqeena yasuddoona 'anka sudoodaa",
    "translation": "Dan apabila dikatakan kepada mereka: \"Marilah berhakim kepada hukum Al-Quran yang telah diturunkan oleh Allah dan kepada hukum Rasulullah,\" nescaya engkau melihat orang-orang munafik itu berpaling serta menghalang (manusia) dengan bersungguh-sungguh daripada menghampirimu."
  },
  {
    "number": 62,
    "arabic": "فَكَيْفَ إِذَآ أَصَٰبَتْهُم مُّصِيبَةٌۢ بِمَا قَدَّمَتْ أَيْدِيهِمْ ثُمَّ جَآءُوكَ يَحْلِفُونَ بِٱللَّهِ إِنْ أَرَدْنَآ إِلَّآ إِحْسَٰنًۭا وَتَوْفِيقًا",
    "transliteration": "Fakaifa izaaa asaabathum museebatum summa jaaa'ooka yahlifoona billaahi in aradnaaa illaaa ihsaananw wa tawfeeqaa",
    "translation": "Maka bagaimana halnya apabila mereka ditimpa sesuatu kemalangan disebabkan (kesalahan) yang telah dibuat oleh tangan mereka sendiri, kemudian mereka datang kepadamu sambil bersumpah: \"Demi Allah, kami tidak sekali-kali menghendaki melainkan kebaikan dan perdamaian (bagi kedua pihak yang berbalah)\"."
  },
  {
    "number": 63,
    "arabic": "أُو۟لَٰٓئِكَ ٱلَّذِينَ يَعْلَمُ ٱللَّهُ مَا فِى قُلُوبِهِمْ فَأَعْرِضْ عَنْهُمْ وَعِظْهُمْ وَقُل لَّهُمْ فِىٓ أَنفُسِهِمْ قَوْلًۢا بَلِيغًۭا",
    "transliteration": "Ulaaa'ikal lazeena ya'la mullaahu maa fee quloobihim fa a'rid 'anhum wa 'izhum wa qul lahum feee anfusihim qawlam baleeghaa",
    "translation": "Mereka itulah orang-orang yang diketahui oleh Allah akan apa yang ada dalam hati mereka, oleh itu berpalinglah engkau daripada mereka, dan nasihatilah mereka, serta katakanlah kepada mereka kata-kata yang boleh memberi kesan pada hati mereka."
  },
  {
    "number": 64,
    "arabic": "وَمَآ أَرْسَلْنَا مِن رَّسُولٍ إِلَّا لِيُطَاعَ بِإِذْنِ ٱللَّهِ ۚ وَلَوْ أَنَّهُمْ إِذ ظَّلَمُوٓا۟ أَنفُسَهُمْ جَآءُوكَ فَٱسْتَغْفَرُوا۟ ٱللَّهَ وَٱسْتَغْفَرَ لَهُمُ ٱلرَّسُولُ لَوَجَدُوا۟ ٱللَّهَ تَوَّابًۭا رَّحِيمًۭا",
    "transliteration": "Wa maa arsalnaa mir Rasoolin illaa liyutaa'a bi iznil laah; wa law annahum 'iz zalamooo anfusahum jaaa'ooka fastaghfarul laaha wastaghfara lahumur Rasoolu la wajadul laaha Tawwaabar Raheemaa",
    "translation": "Dan Kami tidak mengutus seseorang Rasul pun melainkan supaya ia ditaati dengan izin Allah. Dan kalaulah mereka ketika menganiaya diri mereka sendiri datang kepadamu (wahai Muhammad) lalu memohon ampun kepada Allah, dan Rasulullah juga memohon ampun untuk mereka, tentulah mereka mendapati Allah Maha Penerima taubat, lagi Maha Mengasihani."
  },
  {
    "number": 65,
    "arabic": "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ ثُمَّ لَا يَجِدُوا۟ فِىٓ أَنفُسِهِمْ حَرَجًۭا مِّمَّا قَضَيْتَ وَيُسَلِّمُوا۟ تَسْلِيمًۭا",
    "transliteration": "Falaa wa Rabbika laa yu'minoona hattaa yuhakkimooka fe emaa shajara bainahum summa laa yajidoo fee anfusihim harajam mimmaa qadaita wa yusal limoo tasleemaa",
    "translation": "Maka demi Tuhanmu (wahai Muhammad)! Mereka tidak disifatkan beriman sehingga mereka menjadikan engkau hakim dalam mana-mana perselisihan yang timbul di antara mereka, kemudian mereka pula tidak merasa di hati mereka sesuatu keberatan dari apa yang telah engkau hukumkan, dan mereka menerima keputusan itu dengan sepenuhnya."
  },
  {
    "number": 66,
    "arabic": "وَلَوْ أَنَّا كَتَبْنَا عَلَيْهِمْ أَنِ ٱقْتُلُوٓا۟ أَنفُسَكُمْ أَوِ ٱخْرُجُوا۟ مِن دِيَٰرِكُم مَّا فَعَلُوهُ إِلَّا قَلِيلٌۭ مِّنْهُمْ ۖ وَلَوْ أَنَّهُمْ فَعَلُوا۟ مَا يُوعَظُونَ بِهِۦ لَكَانَ خَيْرًۭا لَّهُمْ وَأَشَدَّ تَثْبِيتًۭا",
    "transliteration": "Wa law annaa katabnaa 'alaihim aniq tulooo anfusakum awikh rujoo min diyaarikum maa fa'aloohu illaa qaleelum minhum wa law annahum fa'aloo maa yoo'azoona bihee lakaana khairal lahum wa ashadda tasbeetaa",
    "translation": "Dan sesungguhnya kalau Kami wajibkan kepada mereka (dengan perintah): \"Bunuhlah diri kamu sendiri, atau keluarlah dari tempat kediaman kamu\", nescaya mereka tidak akan melakukannya, kecuali sedikit di antara mereka. Dan sesungguhnya kalau mereka amalkan nasihat pengajaran (meliputi suruh dan tegah) yang telah diberikan kepada mereka, tentulah yang demikian itu lebih baik bagi mereka dan lebih meneguhkan (iman mereka)."
  },
  {
    "number": 67,
    "arabic": "وَإِذًۭا لَّءَاتَيْنَٰهُم مِّن لَّدُنَّآ أَجْرًا عَظِيمًۭا",
    "transliteration": "Wa izal la aatainaahum mil ladunnaaa ajran 'azeemaa",
    "translation": "Dan (setelah mereka berkeadaan demikian), tentulah Kami akan berikan kepada mereka - dari sisi Kami - pahala balasan yang amat besar;"
  },
  {
    "number": 68,
    "arabic": "وَلَهَدَيْنَٰهُمْ صِرَٰطًۭا مُّسْتَقِيمًۭا",
    "transliteration": "Wa lahadainaahum Siraatam mustaqeemaa",
    "translation": "Dan tentulah Kami pimpin mereka ke jalan yang lurus."
  },
  {
    "number": 69,
    "arabic": "وَمَن يُطِعِ ٱللَّهَ وَٱلرَّسُولَ فَأُو۟لَٰٓئِكَ مَعَ ٱلَّذِينَ أَنْعَمَ ٱللَّهُ عَلَيْهِم مِّنَ ٱلنَّبِيِّۦنَ وَٱلصِّدِّيقِينَ وَٱلشُّهَدَآءِ وَٱلصَّٰلِحِينَ ۚ وَحَسُنَ أُو۟لَٰٓئِكَ رَفِيقًۭا",
    "transliteration": "Wa many-yuti'il laaha war Rasoola fa ulaaa'ika ma'al lazeena an'amal laahu 'alaihim minan nabiyyeena wassiddeeqeena washshuhadaaa'i wassaaliheen; wa hasuna ulaaa'ika rafeeqaa",
    "translation": "Dan sesiapa yang taat kepada Allah dan RasulNya, maka mereka akan (ditempatkan di syurga) bersama-sama orang-orang yang telah dikurniakan nikmat oleh Allah kepada mereka, iaitu Nabi-nabi, dan orang-orang Siddiqiin, dan orang-orang yang Syahid, serta orang-orang yang soleh. Dan amatlah eloknya mereka itu menjadi teman rakan (kepada orang-orang yang taat)."
  },
  {
    "number": 70,
    "arabic": "ذَٰلِكَ ٱلْفَضْلُ مِنَ ٱللَّهِ ۚ وَكَفَىٰ بِٱللَّهِ عَلِيمًۭا",
    "transliteration": "Zaalikal fadlu minal laah; wa kafaa billaahi 'Aleemaa",
    "translation": "Yang demikian itu adalah limpah kurnia dari Allah; dan cukuplah Allah Yang Maha Mengetahui (akan balasan pahalanya)."
  },
  {
    "number": 71,
    "arabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ خُذُوا۟ حِذْرَكُمْ فَٱنفِرُوا۟ ثُبَاتٍ أَوِ ٱنفِرُوا۟ جَمِيعًۭا",
    "transliteration": "Yaaa aiyuhal lazeena aamanoo khuzoo hizrakum fanfiroo subaain awin firoo jamee'aa",
    "translation": "Wahai orang-orang yang beriman, bersedialah dan berjaga-jagalah (sebelum kamu menghadapi musuh), kemudian (bila dikehendaki) maralah (ke medan perang) sepuak demi sepuak, atau (jika perlu) maralah serentak beramai-ramai."
  },
  {
    "number": 72,
    "arabic": "وَإِنَّ مِنكُمْ لَمَن لَّيُبَطِّئَنَّ فَإِنْ أَصَٰبَتْكُم مُّصِيبَةٌۭ قَالَ قَدْ أَنْعَمَ ٱللَّهُ عَلَىَّ إِذْ لَمْ أَكُن مَّعَهُمْ شَهِيدًۭا",
    "transliteration": "Wa inna minkum lamal la yubatti'anna fa in asaabatkum museebatun qaala qad an'amal laahu 'alaiya iz lam akum ma'ahum shaheeda",
    "translation": "Dan sesungguhnya ada di antara kamu: orang-orang yang sengaja memberat-beratkan dirinya (juga orang lain, daripada turut mara ke medan perang). Kemudian kalau kamu ditimpa kemalangan (tercedera atau terbunuh) ia berkata: \"Sesungguhnya Allah telah mengurniakan nikmat kepadaku, kerana aku tidak turut berperang bersama-sama mereka\"."
  },
  {
    "number": 73,
    "arabic": "وَلَئِنْ أَصَٰبَكُمْ فَضْلٌۭ مِّنَ ٱللَّهِ لَيَقُولَنَّ كَأَن لَّمْ تَكُنۢ بَيْنَكُمْ وَبَيْنَهُۥ مَوَدَّةٌۭ يَٰلَيْتَنِى كُنتُ مَعَهُمْ فَأَفُوزَ فَوْزًا عَظِيمًۭا",
    "transliteration": "Wa la'in asaabakum fadlum minal laahi la yaqoolanna ka al lam takum bainakum wa bainahoo mawaddatuny yaa laitanee kuntu ma'ahum fa afooza fawzan 'azeemaa",
    "translation": "Dan demi sesungguhnya kalau kamu beroleh limpah kurnia (kemenangan) dari Allah, sudah tentu ia mengatakan (dengan sesalnya), seolah-olah tidak ada hubungan kasih mesra antara kamu dengannya: \"Alangkah baiknya kalau aku turut serta bersama-sama mereka, supaya aku juga beroleh kemenangan yang amat besar?\""
  },
  {
    "number": 74,
    "arabic": "۞ فَلْيُقَٰتِلْ فِى سَبِيلِ ٱللَّهِ ٱلَّذِينَ يَشْرُونَ ٱلْحَيَوٰةَ ٱلدُّنْيَا بِٱلْءَاخِرَةِ ۚ وَمَن يُقَٰتِلْ فِى سَبِيلِ ٱللَّهِ فَيُقْتَلْ أَوْ يَغْلِبْ فَسَوْفَ نُؤْتِيهِ أَجْرًا عَظِيمًۭا",
    "transliteration": "Falyuqaatil fee sabeelil laahil lazeena yashroonal hayaatad dunyaa bil Aakhirah; wa many-uqaatil fee sabeelil laahi fa yuqtal aw yaghlib fasawfa nu'teehi ajran 'azeemaa",
    "translation": "Oleh itu, orang-orang (yang beriman) yang mengutamakan kebahagiaan akhirat daripada (kesenangan) kehidupan dunia, hendaklah mereka berperang pada jalan Allah (untuk membela Islam). Dan sesiapa yang berperang pada jalan Allah lalu ia mati (gugur Syahid) atau beroleh kemenangan, maka Kami akan memberi kepadanya pahala yang besar."
  },
  {
    "number": 75,
    "arabic": "وَمَا لَكُمْ لَا تُقَٰتِلُونَ فِى سَبِيلِ ٱللَّهِ وَٱلْمُسْتَضْعَفِينَ مِنَ ٱلرِّجَالِ وَٱلنِّسَآءِ وَٱلْوِلْدَٰنِ ٱلَّذِينَ يَقُولُونَ رَبَّنَآ أَخْرِجْنَا مِنْ هَٰذِهِ ٱلْقَرْيَةِ ٱلظَّالِمِ أَهْلُهَا وَٱجْعَل لَّنَا مِن لَّدُنكَ وَلِيًّۭا وَٱجْعَل لَّنَا مِن لَّدُنكَ نَصِيرًا",
    "transliteration": "Wa maa lakum laa tuqaatiloona fee sabeelil laahi walmustad'afeena minar rijaali wannisaaa'i walwildaanil lazeena yaqooloona Rabbanaaa akhrijnaa min haazihil qaryatiz zaalimi ahluhaa waj'al lanaa mil ladunka waliyanw waj'al lanaa mil ladunka naseeraa",
    "translation": "Dan apakah yang menghalang kamu (maka kamu) tidak mahu berperang pada jalan Allah (untuk menegakkan ugama Islam) dan (untuk menyelamatkan) orang-orang yang tertindas dari kaum lelaki, perempuan dan kanak-kanak, iaitu mereka yang selalu (berdoa dengan) berkata: \"Wahai Tuhan kami! Keluarkanlah kami dari negeri (Makkah) ini, yang penduduknya (kaum kafir musyrik) yang zalim, dan jadikanlah bagi kami dari pihakMu seorang pemimpin yang mengawal (keselamatan ugama kami), dan jadikanlah bagi kami dari pihakMu seorang pemimpin yang membela kami (dari ancaman musuh)\"."
  },
  {
    "number": 76,
    "arabic": "ٱلَّذِينَ ءَامَنُوا۟ يُقَٰتِلُونَ فِى سَبِيلِ ٱللَّهِ ۖ وَٱلَّذِينَ كَفَرُوا۟ يُقَٰتِلُونَ فِى سَبِيلِ ٱلطَّٰغُوتِ فَقَٰتِلُوٓا۟ أَوْلِيَآءَ ٱلشَّيْطَٰنِ ۖ إِنَّ كَيْدَ ٱلشَّيْطَٰنِ كَانَ ضَعِيفًا",
    "transliteration": "Allazeena aamanoo yuqaatiloona fee sabeelil laahi wallazeena kafaroo yuqaatiloona fee sabeelit Taaghoot faqaatiloo awliyaaa'ash Shaitaan; inna kaidash Shairaani kaana da'eefa",
    "translation": "Orang-orang yang beriman, berperang pada jalan Allah; dan orang-orang yang kafir pula berperang pada jalan Taghut (Syaitan). Oleh sebab itu, perangilah kamu akan pengikut-pengikut Syaitan itu, kerana sesungguhnya tipu daya Syaitan itu adalah lemah."
  },
  {
    "number": 77,
    "arabic": "أَلَمْ تَرَ إِلَى ٱلَّذِينَ قِيلَ لَهُمْ كُفُّوٓا۟ أَيْدِيَكُمْ وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ فَلَمَّا كُتِبَ عَلَيْهِمُ ٱلْقِتَالُ إِذَا فَرِيقٌۭ مِّنْهُمْ يَخْشَوْنَ ٱلنَّاسَ كَخَشْيَةِ ٱللَّهِ أَوْ أَشَدَّ خَشْيَةًۭ ۚ وَقَالُوا۟ رَبَّنَا لِمَ كَتَبْتَ عَلَيْنَا ٱلْقِتَالَ لَوْلَآ أَخَّرْتَنَآ إِلَىٰٓ أَجَلٍۢ قَرِيبٍۢ ۗ قُلْ مَتَٰعُ ٱلدُّنْيَا قَلِيلٌۭ وَٱلْءَاخِرَةُ خَيْرٌۭ لِّمَنِ ٱتَّقَىٰ وَلَا تُظْلَمُونَ فَتِيلًا",
    "transliteration": "Alam tara ilal lazeena qeela lahum kuffooo aidiyakum wa aqeemus Salaata w aaatuz Zakaata falammaa kutiba 'alaihimul qitaalu izaa fareequm minhum yakhshawnnan naasa kakhashyatil laahi aw ashadda khashyah; wa qaaloo Rabbanaa lima katabta 'alainal qitaala law laaa akhkhartanaa ilaaa ajalin qareeb; qul mataa'ud dunyaa qaleelunw wal Aakhiratu khairul limanit taqaa wa laa tuzlamoona fateelaa",
    "translation": "Tidakkah engkau (hairan) melihat (wahai Muhammad), akan orang-orang yang (pernah) dikatakan kepada mereka: \"Tahanlah tangan kamu (daripada bertindak melancarkan perang yang belum diizinkan), dan dirikanlah sembahyang serta berikanlah zakat\". (Mereka meminta juga hendak berperang), kemudian apabila mereka diperintahkan berperang, tiba-tiba sepuak di antara mereka merasa gerun kepada manusia sama seperti mereka merasa gerun kepada (azab) Allah atau lebih gerun lagi. Lalu mereka (merayu kepada Allah dengan) berkata: \"Wahai Tuhan kami, mengapa Engkau wajibkan kami berperang (pada saat ini)? Mengapa Engkau tidak biarkan kami hingga ke tempoh yang singkat (iaitu akhir hayat kami)?\" Katakanlah (wahai Muhammad): \"Harba benda yang menjadi kesenangan di dunia ini adalah sedikit sahaja, (dan akhirnya akan lenyap), dan (balasan) hari akhirat itu lebih baik lagi bagi orang-orang yang bertaqwa (kerana ia lebih mewah dan kekal selama-lamanya), dan kamu pula tidak akan dianiaya sedikit pun\"."
  },
  {
    "number": 78,
    "arabic": "أَيْنَمَا تَكُونُوا۟ يُدْرِككُّمُ ٱلْمَوْتُ وَلَوْ كُنتُمْ فِى بُرُوجٍۢ مُّشَيَّدَةٍۢ ۗ وَإِن تُصِبْهُمْ حَسَنَةٌۭ يَقُولُوا۟ هَٰذِهِۦ مِنْ عِندِ ٱللَّهِ ۖ وَإِن تُصِبْهُمْ سَيِّئَةٌۭ يَقُولُوا۟ هَٰذِهِۦ مِنْ عِندِكَ ۚ قُلْ كُلٌّۭ مِّنْ عِندِ ٱللَّهِ ۖ فَمَالِ هَٰٓؤُلَآءِ ٱلْقَوْمِ لَا يَكَادُونَ يَفْقَهُونَ حَدِيثًۭا",
    "transliteration": "Ainamaa takoonoo yudrikkumul mawtu wa law kuntum fee buroojim mushai yadah; wa in tusibhum hasanatuny yaqooloo haazihee min indil laahi wa in tusibhum saiyi'atuny yaqooloo haazihee min 'indik; qul kullum min 'indillaahi famaa lihaaa 'ulaaa'il qawmi laa yakkaadoona yafqahoona hadeesaa",
    "translation": "Di mana jua kamu berada, maut akan mendapatkan kamu (bila sampai ajal), sekalipun kamu berada dalam benteng-benteng yang tinggi lagi kukuh. Dan kalau mereka beroleh kebaikan (kemewahan hidup), mereka berkata: \"Ini adalah dari sisi Allah\", dan kalau pula mereka ditimpa bencana, mereka berkata:\" Ini adalah dari (sesuatu nahas) yang ada padamu\". Katakanlah (wahai Muhammad): \"Semuanya itu (kebaikan dan bencana) adalah (berpunca) dari sisi Allah\". Maka apakah yang menyebabkan kaum itu hampir-hampir tidak memahami perkataan (nasihat dan pengajaran)?"
  },
  {
    "number": 79,
    "arabic": "مَّآ أَصَابَكَ مِنْ حَسَنَةٍۢ فَمِنَ ٱللَّهِ ۖ وَمَآ أَصَابَكَ مِن سَيِّئَةٍۢ فَمِن نَّفْسِكَ ۚ وَأَرْسَلْنَٰكَ لِلنَّاسِ رَسُولًۭا ۚ وَكَفَىٰ بِٱللَّهِ شَهِيدًۭا",
    "transliteration": "Maaa asaabaka min hasanatin faminal laahi wa maaa asaaabaka min saiyi'atin famin nafsik; wa arsalnaaka linnaasi Rasoolaa; wa kafaa billaahi Shaheedaa",
    "translation": "Apa jua kebaikan (nikmat kesenangan) yang engkau dapati maka ia adalah dari Allah; dan apa jua bencana yang menimpamu maka ia adalah dari (kesalahan) dirimu sendiri. Dan Kami telah mengutus engkau (wahai Muhammad) kepada seluruh umat manusia sebagai seorang Rasul (yang membawa rahmat). Dan cukuplah Allah menjadi saksi (yang membuktikan kebenaran hakikat ini)."
  },
  {
    "number": 80,
    "arabic": "مَّن يُطِعِ ٱلرَّسُولَ فَقَدْ أَطَاعَ ٱللَّهَ ۖ وَمَن تَوَلَّىٰ فَمَآ أَرْسَلْنَٰكَ عَلَيْهِمْ حَفِيظًۭا",
    "transliteration": "Man yuti'ir Rasoola faqad ataa'al laaha wa man tawallaa famaaa arsalnaaka 'alaihim hafeezaa",
    "translation": "Sesiapa yang taat kepada Rasulullah, maka sesungguhnya ia telah taat kepada Allah; dan sesiapa yang berpaling ingkar, maka (janganlah engkau berdukacita wahai Muhammad), kerana Kami tidak mengutusmu untuk menjadi pengawal (yang memelihara mereka dari melakukan kesalahan)."
  },
  {
    "number": 81,
    "arabic": "وَيَقُولُونَ طَاعَةٌۭ فَإِذَا بَرَزُوا۟ مِنْ عِندِكَ بَيَّتَ طَآئِفَةٌۭ مِّنْهُمْ غَيْرَ ٱلَّذِى تَقُولُ ۖ وَٱللَّهُ يَكْتُبُ مَا يُبَيِّتُونَ ۖ فَأَعْرِضْ عَنْهُمْ وَتَوَكَّلْ عَلَى ٱللَّهِ ۚ وَكَفَىٰ بِٱللَّهِ وَكِيلًا",
    "transliteration": "Wa yaqooloona taa'antun fa izaa barazoo min 'indika baiyata taaa'ifatum minhum ghairal lazee taqoolu wallaahu yaktubu maa yubaiyitoona faa'rid 'anhum wa tawakkal 'alal laah; wa kafaa billaahi Wakeelaa",
    "translation": "Dan mereka (golongan munafik) berkata: \"(Kami) taat\", kemudian apabila mereka keluar dari majlismu, segolongan dari mereka memutuskan pada malam hari satu rancangan yang lain daripada (pengakuan taat) yang mereka katakan (kepadamu). Sedang Allah (perintahkan malaikat) menulis apa yang mereka rancangkan itu; maka berpalinglah (wahai Muhammad) daripada mereka, (janganlah dihiraukan apa yang mereka rancangkan), serta berserahlah kepada Allah; kerana cukuplah Allah menjadi Pembela (yang memeliharamu dari angkara mereka)."
  },
  {
    "number": 82,
    "arabic": "أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْءَانَ ۚ وَلَوْ كَانَ مِنْ عِندِ غَيْرِ ٱللَّهِ لَوَجَدُوا۟ فِيهِ ٱخْتِلَٰفًۭا كَثِيرًۭا",
    "transliteration": "Afalaa yatadabbaroonal Qur'aan; wa law kaana min 'indi ghairil laahi la wajadoo fee hikh tilaafan kaseeraa",
    "translation": "Patutkah mereka (bersikap demikian), tidak mahu memikirkan isi Al-Quran? Kalaulah Al-Quran itu (datangnya) bukan dari sisi Allah, nescaya mereka akan dapati perselisihan yang banyak di dalamnya."
  },
  {
    "number": 83,
    "arabic": "وَإِذَا جَآءَهُمْ أَمْرٌۭ مِّنَ ٱلْأَمْنِ أَوِ ٱلْخَوْفِ أَذَاعُوا۟ بِهِۦ ۖ وَلَوْ رَدُّوهُ إِلَى ٱلرَّسُولِ وَإِلَىٰٓ أُو۟لِى ٱلْأَمْرِ مِنْهُمْ لَعَلِمَهُ ٱلَّذِينَ يَسْتَنۢبِطُونَهُۥ مِنْهُمْ ۗ وَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكُمْ وَرَحْمَتُهُۥ لَٱتَّبَعْتُمُ ٱلشَّيْطَٰنَ إِلَّا قَلِيلًۭا",
    "transliteration": "Wa izaa jaaa'ahum amrum minal amni awil kkhawfi azaa'oo bihee wa law raddoohu ilar Rasooli wa ilaaa ulil amri minhum la'alimahul lazeena yastambitoonahoo minhum; wa law laa fadlul laahi 'alaikum wa rahmatuhoo lattaba'tumush Shaitaana illaa qaleelaa",
    "translation": "Dan apabila datang kepada mereka sesuatu berita mengenai keamanan atau kecemasan, mereka terus menghebahkannya; padahal kalau mereka kembalikan sahaja hal itu kepada Rasulullah dan kepada - \"Ulil-Amri\" (orang-orang yang berkuasa) di antara mereka, tentulah hal itu dapat diketahui oleh orang-orang yang layak mengambil keputusan mengenainya di antara mereka; dan jika tidaklah kerana limpah kurnia Allah dan belas kasihanNya kepada kamu, tentulah kamu (terbabas) menurut Syaitan kecuali sedikit sahaja (iaitu orang-orang yang teguh imannya dan luas ilmunya di antara kamu)."
  },
  {
    "number": 84,
    "arabic": "فَقَٰتِلْ فِى سَبِيلِ ٱللَّهِ لَا تُكَلَّفُ إِلَّا نَفْسَكَ ۚ وَحَرِّضِ ٱلْمُؤْمِنِينَ ۖ عَسَى ٱللَّهُ أَن يَكُفَّ بَأْسَ ٱلَّذِينَ كَفَرُوا۟ ۚ وَٱللَّهُ أَشَدُّ بَأْسًۭا وَأَشَدُّ تَنكِيلًۭا",
    "transliteration": "Faqaatil fee sabeelil laahi laa tukallafu illa nafsaka wa harridil mu'mineena 'asallaahu ai yakuffa baasallazeena kafaroo; wallaahu ashaddu baasanw wa ashaaddu tanakeelaa",
    "translation": "Oleh itu, berperanglah (wahai Muhammad) pada jalan Allah (untuk membela Islam dari pencerobohan musuh); engkau tidak diberati selain daripada kewajipanmu sendiri. Dan berilah peransang kepada orang-orang yang beriman (supaya turut berjuang dengan gagah berani). Mudah-mudahan Allah menahan bahaya serangan orang-orang yang kafir itu. Dan (ingatlah) Allah Amatlah besar kekuatanNya dan Amatlah berat azab seksaNya."
  },
  {
    "number": 85,
    "arabic": "مَّن يَشْفَعْ شَفَٰعَةً حَسَنَةًۭ يَكُن لَّهُۥ نَصِيبٌۭ مِّنْهَا ۖ وَمَن يَشْفَعْ شَفَٰعَةًۭ سَيِّئَةًۭ يَكُن لَّهُۥ كِفْلٌۭ مِّنْهَا ۗ وَكَانَ ٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ مُّقِيتًۭا",
    "transliteration": "Mai yashfa' shafaa'atan hasanatay yakul lahoo naseebum minhaa wa mai yashfa' shafaa'tan saiyi'atanny-yakul lahoo kiflum minhaa; wa kaanal laahu 'alaa kulli shai'im Muqeetaa",
    "translation": "Sesiapa yang memberikan syafaat yang baik nescaya ia akan memperoleh bahagian (pahala) daripadanya; dan sesiapa yang memberikan syafaat yang buruk, nescaya ia akan mendapat bahagian (dosa) daripadanya. Dan (ingatlah) Allah Maha Kuasa atas tiap-tiap sesuatu."
  },
  {
    "number": 86,
    "arabic": "وَإِذَا حُيِّيتُم بِتَحِيَّةٍۢ فَحَيُّوا۟ بِأَحْسَنَ مِنْهَآ أَوْ رُدُّوهَآ ۗ إِنَّ ٱللَّهَ كَانَ عَلَىٰ كُلِّ شَىْءٍ حَسِيبًا",
    "transliteration": "Wa izaa huyyeetum bitahiy yatin fahaiyoo bi ahsana minhaaa aw ruddoohaa; innal laaha kaana 'alaa kulli shai'in Haseeba",
    "translation": "Dan apabila kamu diberikan penghormatan dengan sesuatu ucapan hormat (seperti memberi salam), maka balaslah penghormatan itu dengan yang lebih baik daripadanya, atau balaslah dia (dengan cara yang sama). Sesungguhnya Allah sentiasa menghitung tiap-tiap sesuatu."
  },
  {
    "number": 87,
    "arabic": "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ۚ لَيَجْمَعَنَّكُمْ إِلَىٰ يَوْمِ ٱلْقِيَٰمَةِ لَا رَيْبَ فِيهِ ۗ وَمَنْ أَصْدَقُ مِنَ ٱللَّهِ حَدِيثًۭا",
    "transliteration": "Allaahu laaa ilaaha illaa huwa la yajma'annakum ilaa Yawmil Qiyaamati laa raiba feeh; wa man asdaqu mminallaahi hadeesaa",
    "translation": "Allah, tiada Tuhan (yang berhak disembah) melainkan Dia. Sesungguhnya Ia akan menghimpunkan kamu pada hari kiamat, (hari) yang tidak ada syak padanya. Dan siapakah pula yang lebih benar perkataannya daripada Allah?"
  },
  {
    "number": 88,
    "arabic": "۞ فَمَا لَكُمْ فِى ٱلْمُنَٰفِقِينَ فِئَتَيْنِ وَٱللَّهُ أَرْكَسَهُم بِمَا كَسَبُوٓا۟ ۚ أَتُرِيدُونَ أَن تَهْدُوا۟ مَنْ أَضَلَّ ٱللَّهُ ۖ وَمَن يُضْلِلِ ٱللَّهُ فَلَن تَجِدَ لَهُۥ سَبِيلًۭا",
    "transliteration": "Famaa lakum filmuna afiqeena fi'ataini wallaahu arkasahum bimaa kasaboo; atureedoona an tahdoo man adallal laahu wa mmai yudlilil laahu falan tajida lahoo sabeelaa",
    "translation": "Maka apakah yang menyebabkan kamu (berpecah) menjadi dua golongan terhadap kaum munafik itu, padahal Allah telah menjerumuskan mereka (ke dalam kekufuran) disebabkan apa yang telah mereka usahakan? Adakah kamu pula hendak memberi pertunjuk kepada orang-orang yang telah disesatkan oleh Allah? Padahal sesiapa yang telah disesatkan oleh Allah, maka engkau tidak sekali-kali akan mendapat jalan untuk menyelamatkannya."
  },
  {
    "number": 89,
    "arabic": "وَدُّوا۟ لَوْ تَكْفُرُونَ كَمَا كَفَرُوا۟ فَتَكُونُونَ سَوَآءًۭ ۖ فَلَا تَتَّخِذُوا۟ مِنْهُمْ أَوْلِيَآءَ حَتَّىٰ يُهَاجِرُوا۟ فِى سَبِيلِ ٱللَّهِ ۚ فَإِن تَوَلَّوْا۟ فَخُذُوهُمْ وَٱقْتُلُوهُمْ حَيْثُ وَجَدتُّمُوهُمْ ۖ وَلَا تَتَّخِذُوا۟ مِنْهُمْ وَلِيًّۭا وَلَا نَصِيرًا",
    "transliteration": "Wadoo law takfuroona kamaa kafaroo fatakoonoona sawaaa'an falaa tattakhizoo minhum awliyaaa'a hattaa yuhaajiroo fee sabeelil laah; fa in tawallaw fa khuzoohum waqtuloohum haisu wajat tumoohum wa laa tattakhizoo minhum waliyyanw wa laa naseeraa",
    "translation": ". Mereka suka kalau kamu pula menjadi kafir sebagaimana mereka telah menjadi kafir, maka (dengan yang demikian) menjadilah kamu sama seperti mereka. Oleh itu janganlah kamu mengambil (seorang pun) di antara mereka menjadi teman rapat kamu, sehingga mereka berhijrah pada jalan Allah (untuk menegakkan Islam). Kemudian kalau mereka sengaja berpaling ingkar, maka tawanlah mereka dan bunuhlah mereka di mana sahaja kamu menemuinya; dan jangan sekali-kali kamu mengambil (seorang pun) di antara mereka menjadi teman rapat atau penolong;"
  },
  {
    "number": 90,
    "arabic": "إِلَّا ٱلَّذِينَ يَصِلُونَ إِلَىٰ قَوْمٍۭ بَيْنَكُمْ وَبَيْنَهُم مِّيثَٰقٌ أَوْ جَآءُوكُمْ حَصِرَتْ صُدُورُهُمْ أَن يُقَٰتِلُوكُمْ أَوْ يُقَٰتِلُوا۟ قَوْمَهُمْ ۚ وَلَوْ شَآءَ ٱللَّهُ لَسَلَّطَهُمْ عَلَيْكُمْ فَلَقَٰتَلُوكُمْ ۚ فَإِنِ ٱعْتَزَلُوكُمْ فَلَمْ يُقَٰتِلُوكُمْ وَأَلْقَوْا۟ إِلَيْكُمُ ٱلسَّلَمَ فَمَا جَعَلَ ٱللَّهُ لَكُمْ عَلَيْهِمْ سَبِيلًۭا",
    "transliteration": "Illal lazeena yasiloona ilaa qawmim binakum wa bainahum meesaaqun aw jaaa'ookum hasirat sudooruhum ai yuqaatilookum aw yuqaatiloo qawmahum, wa law shaaa'al laahu lasallatahum 'alaikum falaqaatalookum; fa ini' tazalookum falam yuqaatilookum wa alqaw ilaikumus salama famaa ja'alal laahu lakum 'alaihim sabeelaa",
    "translation": "Kecuali orang-orang yang pergi (meminta perlindungan) kepada suatu kaum yang ada ikatan perjanjian setia antara kamu dengan mereka, atau orang-orang yang datang kepada kamu sedang hati mereka merasa berat hendak memerangi kamu atau memerangi kaumnya. Dan jika Allah menghendaki, nescaya Ia menjadikan mereka berkuasa melawan kamu, kemudian tentulah mereka memerangi kamu. Dalam pada itu, jika mereka membiarkan kamu (dengan tidak mengancam atau mengganggu), serta mereka tidak memerangi kamu dan mereka menawarkan perdamaian kepada kamu, maka Allah tidak menjadikan bagi kamu sesuatu jalan (yang membolehkan kamu memerangi atau menawan) mereka."
  },
  {
    "number": 91,
    "arabic": "سَتَجِدُونَ ءَاخَرِينَ يُرِيدُونَ أَن يَأْمَنُوكُمْ وَيَأْمَنُوا۟ قَوْمَهُمْ كُلَّ مَا رُدُّوٓا۟ إِلَى ٱلْفِتْنَةِ أُرْكِسُوا۟ فِيهَا ۚ فَإِن لَّمْ يَعْتَزِلُوكُمْ وَيُلْقُوٓا۟ إِلَيْكُمُ ٱلسَّلَمَ وَيَكُفُّوٓا۟ أَيْدِيَهُمْ فَخُذُوهُمْ وَٱقْتُلُوهُمْ حَيْثُ ثَقِفْتُمُوهُمْ ۚ وَأُو۟لَٰٓئِكُمْ جَعَلْنَا لَكُمْ عَلَيْهِمْ سُلْطَٰنًۭا مُّبِينًۭا",
    "transliteration": "Satajidoona aakhareena yureedoona ai yaamanookum wa yaamanoo qawmahum kullamaa ruddooo ilal itnati urkisoo feehaa; fa il lam ya'tazilookum wa yulqooo ilai kumus salama wa yakuffooo aidiyahum fakhuzoohum waqtuloohum haisu saqif tumoohum; wa ulaaa'ikum ja'alnaa lakum 'alaihim sultaanam mubeenaa",
    "translation": "Kamu juga akan dapati golongan-golongan yang lain (yang pura-pura Islam) supaya mereka beroleh aman dari pihak kamu, dan (sebaliknya mereka melahirkan kekufurannya) supaya mereka beroleh aman dari pihak kaumnya (yang masih kafir). Tiap-tiap kali mereka diajak kepada fitnah (pencerobohan), mereka segera terjerumus ke dalamnya. Oleh itu, jika mereka tidak membiarkan kamu (dan terus mengganggu atau berpihak kepada musuh), dan (tidak pula) menawarkan perdamaian kepada kamu dan juga (tidak) menahan tangan mereka (daripada memerangi kamu), maka hendaklah kamu bertindak menawan mereka dan membunuh mereka di mana sahaja kamu menemuinya; kerana merekalah orang-orang yang Kami jadikan bagi kamu alasan yang terang nyata untuk bertindak terhadapnya."
  },
  {
    "number": 92,
    "arabic": "وَمَا كَانَ لِمُؤْمِنٍ أَن يَقْتُلَ مُؤْمِنًا إِلَّا خَطَـًۭٔا ۚ وَمَن قَتَلَ مُؤْمِنًا خَطَـًۭٔا فَتَحْرِيرُ رَقَبَةٍۢ مُّؤْمِنَةٍۢ وَدِيَةٌۭ مُّسَلَّمَةٌ إِلَىٰٓ أَهْلِهِۦٓ إِلَّآ أَن يَصَّدَّقُوا۟ ۚ فَإِن كَانَ مِن قَوْمٍ عَدُوٍّۢ لَّكُمْ وَهُوَ مُؤْمِنٌۭ فَتَحْرِيرُ رَقَبَةٍۢ مُّؤْمِنَةٍۢ ۖ وَإِن كَانَ مِن قَوْمٍۭ بَيْنَكُمْ وَبَيْنَهُم مِّيثَٰقٌۭ فَدِيَةٌۭ مُّسَلَّمَةٌ إِلَىٰٓ أَهْلِهِۦ وَتَحْرِيرُ رَقَبَةٍۢ مُّؤْمِنَةٍۢ ۖ فَمَن لَّمْ يَجِدْ فَصِيَامُ شَهْرَيْنِ مُتَتَابِعَيْنِ تَوْبَةًۭ مِّنَ ٱللَّهِ ۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًۭا",
    "transliteration": "Wa maa kaana limu'minin ai yaqtula mu'minan illaa khata'aa; waman qatala mu'minan khata'an fatabreeru raqabatim mu'minatinw wa diyatum mmusallamatun ilaaa ahliheee illaaa ai yassaddaqoo; fa in kaana min qawmin 'aduwwil lakum wa huwa mu'minun fatabreeru raqabatim mu'minah; wa in kaana min qawmim bainakum wa bainahum meesaaqun fadiyatum mmusallamatun ilaaa ahlihee wa tahreeru raqabatim mu'minatin famal lam yajid fa Siyaamu shahraini mutataabi'aini tawhatam minal laah; wa kaanal laahu 'Aleeman hakeemaa",
    "translation": "Dan tidak harus sama sekali bagi seseorang mukmin membunuh seorang mukmin yang lain, kecuali dengan tidak sengaja. Dan sesiapa yang membunuh seorang mukmin dengan tidak sengaja, maka (wajiblah ia membayar kaffarah) dengan memerdekakan seorang hamba yang beriman serta membayar \"diah\" (denda ganti nyawa) yang diserahkan kepada ahlinya (keluarga si mati), kecuali jika mereka sedekahkan (memaafkannya). Tetapi jika ia (yang terbunuh dengan tidak sengaja) dari kaum (kafir) yang memusuhi kamu, sedang ia sendiri beriman, maka (wajiblah si pembunuh membayar kaffarah sahaja dengan) memerdekakan seorang hamba yang beriman. Dan jika ia (orang yang terbunuh dengan tidak sengaja itu) dari kaum (kafir) yang ada ikatan perjanjian setia di antara kamu dengan mereka, maka wajiblah membayar \"diah\" (denda ganti nyawa) kepada keluarganya serta memerdekakan seorang hamba yang beriman. Dalam pada itu, sesiapa yang tidak dapat (mencari hamba yang akan dimerdekakannya), maka hendaklah ia berpuasa dua bulan berturut-turut; (hukum yang tersebut) datangnya dari Allah untuk menerima taubat (membersihkan diri kamu). Dan (ingatlah) Allah Maha Mengetahui, lagi Maha Bijaksana."
  },
  {
    "number": 93,
    "arabic": "وَمَن يَقْتُلْ مُؤْمِنًۭا مُّتَعَمِّدًۭا فَجَزَآؤُهُۥ جَهَنَّمُ خَٰلِدًۭا فِيهَا وَغَضِبَ ٱللَّهُ عَلَيْهِ وَلَعَنَهُۥ وَأَعَدَّ لَهُۥ عَذَابًا عَظِيمًۭا",
    "transliteration": "Wa mai yaqtul mu'minammuta 'ammidan fajazaaa'uhoo Jahannamu khaalidan feehaa wa ghadibal laahu' alaihi wa la'anahoo wa a'adda lahoo 'azaaban 'azeemaa",
    "translation": "Dan sesiapa yang membunuh seorang mukmin dengan sengaja, maka balasannya ialah neraka jahanam, kekal ia di dalamnya, dan Allah murka kepadanya, dan melakanatkannya serta menyediakan baginya azab seksa yang besar."
  },
  {
    "number": 94,
    "arabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا ضَرَبْتُمْ فِى سَبِيلِ ٱللَّهِ فَتَبَيَّنُوا۟ وَلَا تَقُولُوا۟ لِمَنْ أَلْقَىٰٓ إِلَيْكُمُ ٱلسَّلَٰمَ لَسْتَ مُؤْمِنًۭا تَبْتَغُونَ عَرَضَ ٱلْحَيَوٰةِ ٱلدُّنْيَا فَعِندَ ٱللَّهِ مَغَانِمُ كَثِيرَةٌۭ ۚ كَذَٰلِكَ كُنتُم مِّن قَبْلُ فَمَنَّ ٱللَّهُ عَلَيْكُمْ فَتَبَيَّنُوٓا۟ ۚ إِنَّ ٱللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًۭا",
    "transliteration": "Yaaa aiyuhal lazeena aamanoo izaa darabtum fee sabeelil laahi fatabaiyanoo wa laa taqooloo liman alqaaa ilaikumus salaama lasta mu'minan tabtaghoona 'aradal hayaatid dunyaa fa'indal laahi maghaanimu kaseerah; kazaalika kuntum min qablu famannnal laahu 'alaikum fatabaiyanoo; innallaaha kaana bimaa ta'maloona Khabeeraa",
    "translation": "Wahai orang-orang yang beriman, apabila kamu pergi (berperang) pada jalan Allah (untuk membela Islam), maka hendaklah kamu menyelidik (apa jua perkara dengan sebaik-baiknya), dan janganlah kamu (terburu-buru) mengatakan kepada orang yang menunjukkan kepada kamu sikap damai (dengan memberi salam atau mengucap dua Kalimah Syahadat): \"Engkau bukan orang yang beriman\" (lalu kamu membunuhnya) dengan tujuan hendak (mendapat harta bendanya yang merupakan) harta benda kehidupan dunia (yang tidak kekal). (Janganlah kamu gelap mata kepada daki dunia itu) kerana di sisi Allah ada disediakan limpah kurnia yang banyak. Demikianlah juga keadaan kamu dahulu (dapat diketahui oleh orang lain akan keIslaman kamu dengan memberi salam atau mengucap kalimah Syahadat), lalu Allah mengurniakan nikmatNya kepada kamu. Oleh itu selidikilah (apa-apa jua lebih dahulu, dan janganlah bertindak dengan terburu-buru). Sesungguhnya Allah sentiasa memerhati dengan mendalam akan segala yang kamu lakukan."
  },
  {
    "number": 95,
    "arabic": "لَّا يَسْتَوِى ٱلْقَٰعِدُونَ مِنَ ٱلْمُؤْمِنِينَ غَيْرُ أُو۟لِى ٱلضَّرَرِ وَٱلْمُجَٰهِدُونَ فِى سَبِيلِ ٱللَّهِ بِأَمْوَٰلِهِمْ وَأَنفُسِهِمْ ۚ فَضَّلَ ٱللَّهُ ٱلْمُجَٰهِدِينَ بِأَمْوَٰلِهِمْ وَأَنفُسِهِمْ عَلَى ٱلْقَٰعِدِينَ دَرَجَةًۭ ۚ وَكُلًّۭا وَعَدَ ٱللَّهُ ٱلْحُسْنَىٰ ۚ وَفَضَّلَ ٱللَّهُ ٱلْمُجَٰهِدِينَ عَلَى ٱلْقَٰعِدِينَ أَجْرًا عَظِيمًۭا",
    "transliteration": "Laa yastawil qaa'idoona Minal mu'mineena ghairu ulid darari walmujaahidoona fee sabeelil laahi bi amwaalihim wa anfusihim; faddalal laahul mujaahideena bi amwaalihim wa anfusihim; faddalal laahul mujaahideena bi am waalihim wa anfusihim 'alalqaa'ideena darajab; wa kullanw wa'adal laahul husnaa; wa faddalal laahul mujaahideena 'alal qaa'ideena ajran 'azeemaa",
    "translation": "Tidaklah sama keadaan orang-orang yang duduk (tidak turut berperang) dari kalangan orang-orang yang beriman - selain daripada orang-orang yang ada keuzuran - dengan orang-orang yang berjihad (berjuang) pada jalan Allah (untuk membela Islam) dengan harta dan jiwanya. Allah melebihkan orang-orang yang berjuang dengan harta benda dan jiwa mereka atas orang-orang yang tinggal duduk (tidak turut berperang kerana uzur) dengan kelebihan satu darjat. Dan tiap-tiap satu (dari dua golongan itu) Allah menjanjikan dengan balasan yang baik (Syurga), dan Allah melebihkan orang-orang yang berjuang atas orang-orang yang tinggal duduk (tidak turut berperang dan tidak ada sesuatu uzur) dengan pahala yang amat besar;"
  },
  {
    "number": 96,
    "arabic": "دَرَجَٰتٍۢ مِّنْهُ وَمَغْفِرَةًۭ وَرَحْمَةًۭ ۚ وَكَانَ ٱللَّهُ غَفُورًۭا رَّحِيمًا",
    "transliteration": "Darajaatim minhu wa maghfiratanw wa rahmah; wa kaanal laahu Ghafoorar Raheema",
    "translation": "Iaitu beberapa darjat kelebihan daripadaNya, dan keampunan serta rahmat belas kasihan. Dan (ingatlah) adalah Allah Maha Pengampun, lagi Maha Mengasihani."
  },
  {
    "number": 97,
    "arabic": "إِنَّ ٱلَّذِينَ تَوَفَّىٰهُمُ ٱلْمَلَٰٓئِكَةُ ظَالِمِىٓ أَنفُسِهِمْ قَالُوا۟ فِيمَ كُنتُمْ ۖ قَالُوا۟ كُنَّا مُسْتَضْعَفِينَ فِى ٱلْأَرْضِ ۚ قَالُوٓا۟ أَلَمْ تَكُنْ أَرْضُ ٱللَّهِ وَٰسِعَةًۭ فَتُهَاجِرُوا۟ فِيهَا ۚ فَأُو۟لَٰٓئِكَ مَأْوَىٰهُمْ جَهَنَّمُ ۖ وَسَآءَتْ مَصِيرًا",
    "transliteration": "Innal lazeena tawaffaa humul malaaa'ikatu zaalimeee anfusihim qaaloo feema kuntum qaaloo kunnaa mustad'afeena fil-ard; qaalooo alam takun ardul laahi waasi'atan fatuhaajiroo feehaa; fa ulaaa'ika maawaahum Jahannamu wa saaa'at maseeraa",
    "translation": "Sesungguhnya orang-orang yang diambil nyawanya oleh malaikat semasa mereka sedang menganiaya diri sendiri (kerana enggan berhijrah untuk membela Islam dan rela ditindas oleh kaum kafir musyrik), mereka ditanya oleh malaikat dengan berkata: \"Apakah yang kamu telah lakukan mengenai ugama kamu?\" Mereka menjawab: \"Kami dahulu adalah orang-orang yang tertindas di bumi\". Malaikat bertanya lagi: \"Tidakkah bumi Allah itu luas, yang membolehkan kamu berhijrah dengan bebas padanya?\" Maka orang-orang yang sedemikian itu keadaannya, tempat akhir mereka ialah neraka jahanam, dan neraka jahanam itu adalah seburuk-buruk tempat kembali."
  },
  {
    "number": 98,
    "arabic": "إِلَّا ٱلْمُسْتَضْعَفِينَ مِنَ ٱلرِّجَالِ وَٱلنِّسَآءِ وَٱلْوِلْدَٰنِ لَا يَسْتَطِيعُونَ حِيلَةًۭ وَلَا يَهْتَدُونَ سَبِيلًۭا",
    "transliteration": "Illal mustad 'afeena minar rijaali wannisaaa'i walwildaani laa yastatee'oona heelatanw wa laa yahtadoona sabeela",
    "translation": "Kecuali orang-orang yang lemah (lagi uzur) dari kaum lelaki dan perempuan serta kanak-kanak, yang tidak berdaya upaya mencari helah (untuk melepaskan diri) dan tidak pula mengetahui sesuatu jalan (untuk berhijrah)."
  },
  {
    "number": 99,
    "arabic": "فَأُو۟لَٰٓئِكَ عَسَى ٱللَّهُ أَن يَعْفُوَ عَنْهُمْ ۚ وَكَانَ ٱللَّهُ عَفُوًّا غَفُورًۭا",
    "transliteration": "Fa ulaaa'ika 'asal laahu ai ya'fuwa 'anhum; wa kaanal laahu 'Afuwwan Ghafooraa",
    "translation": "Maka mereka (yang demikian sifatnya), mudah-mudahan Allah maafkan mereka. Dan (ingatlah), Allah Maha Pemaaf, lagi Maha Pengampun."
  },
  {
    "number": 100,
    "arabic": "۞ وَمَن يُهَاجِرْ فِى سَبِيلِ ٱللَّهِ يَجِدْ فِى ٱلْأَرْضِ مُرَٰغَمًۭا كَثِيرًۭا وَسَعَةًۭ ۚ وَمَن يَخْرُجْ مِنۢ بَيْتِهِۦ مُهَاجِرًا إِلَى ٱللَّهِ وَرَسُولِهِۦ ثُمَّ يُدْرِكْهُ ٱلْمَوْتُ فَقَدْ وَقَعَ أَجْرُهُۥ عَلَى ٱللَّهِ ۗ وَكَانَ ٱللَّهُ غَفُورًۭا رَّحِيمًۭا",
    "transliteration": "Wa mai yuhaajir fee sabeelil laahi yajid fil ardi mmuraaghaman kaseeranw wa sa'ah; wa mai yakhruj mim baitihee muhaajiran ilal laahi wa Rasoolihee summa yudrikhul mawtu faqad waqa'a ajruhoo 'alal laah; wa kaanal laahu Ghafoorar Raheemaa",
    "translation": "Dan sesiapa yang berhijrah pada jalan Allah (untuk membela dan menegakkan Islam), nescaya ia akan dapati di muka bumi ini tempat berhijrah yang banyak dan rezeki yang makmur; dan sesiapa yang keluar dari rumahnya dengan tujuan berhijrah kepada Allah dan RasulNya, kemudian ia mati (dalam perjalanan), maka sesungguhnya telah tetap pahala hijrahnya di sisi Allah. Dan (ingatlah) Allah Maha Pengampun, lagi Maha Mengasihani."
  },
  {
    "number": 101,
    "arabic": "وَإِذَا ضَرَبْتُمْ فِى ٱلْأَرْضِ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَقْصُرُوا۟ مِنَ ٱلصَّلَوٰةِ إِنْ خِفْتُمْ أَن يَفْتِنَكُمُ ٱلَّذِينَ كَفَرُوٓا۟ ۚ إِنَّ ٱلْكَٰفِرِينَ كَانُوا۟ لَكُمْ عَدُوًّۭا مُّبِينًۭا",
    "transliteration": "Wa izaa darabtum fil ardi falaisa 'alaikum junaahun an taqsuroo minas Salaati in khiftum ai yaftinakumul lazeena kafarooo; innal kaafireena kaanoo lakum aduwwam mubeenaa",
    "translation": "Dan apabila kamu musafir di muka bumi, maka kamu tidaklah berdosa \"mengqasarkan\" (memendekkan) sembahyang jika kamu takut diserang oleh orang-orang kafir. Sesungguhnya orang-orang kafir itu adalah musuh yang amat nyata bagi kamu."
  },
  {
    "number": 102,
    "arabic": "وَإِذَا كُنتَ فِيهِمْ فَأَقَمْتَ لَهُمُ ٱلصَّلَوٰةَ فَلْتَقُمْ طَآئِفَةٌۭ مِّنْهُم مَّعَكَ وَلْيَأْخُذُوٓا۟ أَسْلِحَتَهُمْ فَإِذَا سَجَدُوا۟ فَلْيَكُونُوا۟ مِن وَرَآئِكُمْ وَلْتَأْتِ طَآئِفَةٌ أُخْرَىٰ لَمْ يُصَلُّوا۟ فَلْيُصَلُّوا۟ مَعَكَ وَلْيَأْخُذُوا۟ حِذْرَهُمْ وَأَسْلِحَتَهُمْ ۗ وَدَّ ٱلَّذِينَ كَفَرُوا۟ لَوْ تَغْفُلُونَ عَنْ أَسْلِحَتِكُمْ وَأَمْتِعَتِكُمْ فَيَمِيلُونَ عَلَيْكُم مَّيْلَةًۭ وَٰحِدَةًۭ ۚ وَلَا جُنَاحَ عَلَيْكُمْ إِن كَانَ بِكُمْ أَذًۭى مِّن مَّطَرٍ أَوْ كُنتُم مَّرْضَىٰٓ أَن تَضَعُوٓا۟ أَسْلِحَتَكُمْ ۖ وَخُذُوا۟ حِذْرَكُمْ ۗ إِنَّ ٱللَّهَ أَعَدَّ لِلْكَٰفِرِينَ عَذَابًۭا مُّهِينًۭا",
    "transliteration": "Wa izaa kunta feehim fa aqamta lahumus Salaata faltaqum taaa'ifatum minhum ma'aka walyaakhuzooo aslihatahum fa izaa sajadoo fal yakoonoo minw waraaa'ikum waltaati taaa'ifatun ukhraa lam yusalloo falyusallo ma'aka walyaakhuzoo hizrahum wa aslihatahum; waddal lazeena kafaroo law taghfuloona 'anaslihatikum wa amti'atikum fa yameeloona 'alaikum mailatanw waahidah; wa laa junaaha 'alaikum in kaana bikum azam mimmatarin aw kuntum mmardaaa an tada'ooo aslihatakum wa khuzoo hizrakum; innal laaha a'adda lilkaafireena 'azaabam muheenaa",
    "translation": "Dan apabila engkau (wahai Muhammad) berada dalam kalangan mereka (semasa perang), lalu engkau mendirikan sembahyang dengan (menjadi imam) mereka, maka hendaklah sepuak dari mereka berdiri (mengerjakan sembahyang) bersama-samamu, dan hendaklah mereka menyandang senjata masing-masing; kemudian apabila mereka telah sujud, maka hendaklah mereka berundur ke belakang (untuk menjaga serbuan musuh); dan hendaklah datang pula puak yang lain (yang kedua) yang belum sembahyang (kerana menjaga serbuan musuh), maka hendaklah mereka bersembahyang (berjamaah) bersama-samamu, dan hendakah mereka mengambil langkah berjaga-jaga serta menyandang senjata masing-masing. Orang-orang kafir memang suka kalau kamu cuai lalai akan senjata dan harta benda kamu, supaya dengan jalan itu mereka dapat menyerbu kamu beramai-ramai dengan serentak. Dan tidaklah kamu berdosa meletakkan senjata masing-masing, jika kamu dihalangi sesuatu yang menyusahkan disebabkan hujan atau kamu sakit. Dan hendaklah kamu mengambil langkah berjaga-jaga. Sesungguhnya Allah telah menyediakan bagi orang-orang kafir itu azab seksa yang amat menghina."
  },
  {
    "number": 103,
    "arabic": "فَإِذَا قَضَيْتُمُ ٱلصَّلَوٰةَ فَٱذْكُرُوا۟ ٱللَّهَ قِيَٰمًۭا وَقُعُودًۭا وَعَلَىٰ جُنُوبِكُمْ ۚ فَإِذَا ٱطْمَأْنَنتُمْ فَأَقِيمُوا۟ ٱلصَّلَوٰةَ ۚ إِنَّ ٱلصَّلَوٰةَ كَانَتْ عَلَى ٱلْمُؤْمِنِينَ كِتَٰبًۭا مَّوْقُوتًۭا",
    "transliteration": "Fa izaa qadaitumus Salaata fazkurul laaha qiyaamanw wa qu'oodanw wa 'alaa junoobikum; fa izat maanantum fa aqeemus Salaah; innas Salaata kaanat 'alal mu'mineena kitaabam mawqootaa",
    "translation": "Kemudian apabila kamu telah selesai mengerjakan sembahyang, maka hendaklah kamu menyebut dan mengingati Allah semasa kamu berdiri atau duduk, dan semasa kamu berbaring. Kemudian apabila kamu telah merasa tenteram (berada dalam keadaan aman) maka dirikanlah sembahyang itu (dengan sempurna sebagaimana biasa). Sesungguhnya sembahyang itu adalah satu ketetapan yang diwajibkan atas orang-orang yang beriman, yang tertentu waktunya."
  },
  {
    "number": 104,
    "arabic": "وَلَا تَهِنُوا۟ فِى ٱبْتِغَآءِ ٱلْقَوْمِ ۖ إِن تَكُونُوا۟ تَأْلَمُونَ فَإِنَّهُمْ يَأْلَمُونَ كَمَا تَأْلَمُونَ ۖ وَتَرْجُونَ مِنَ ٱللَّهِ مَا لَا يَرْجُونَ ۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًا",
    "transliteration": "Wa laa tahinoo fibtighaaa'il qawmi in takoonoo taalamoona fa innahum yaalamoona kamaa taalamoona wa tarjoona minal laahi maa laa yarjoon; wa kaanal laahu 'Aleeman Hakeemaa",
    "translation": "Dan janganlah kamu lemah (hilang semangat) dalam memburu musuh (yang menceroboh) itu; kerana kalau kamu menderita sakit (luka atau mati) maka sesungguhnya mereka pun menderita sakitnya seperti penderitaan kamu; sedang kamu mengharapkan dari Allah apa yang mereka tidak harapkan (iaitu balasan yang baik pada hari akhirat kelak). Dan (ingatlah) Allah Maha Mengetahui, lagi Maha Bijaksana."
  },
  {
    "number": 105,
    "arabic": "إِنَّآ أَنزَلْنَآ إِلَيْكَ ٱلْكِتَٰبَ بِٱلْحَقِّ لِتَحْكُمَ بَيْنَ ٱلنَّاسِ بِمَآ أَرَىٰكَ ٱللَّهُ ۚ وَلَا تَكُن لِّلْخَآئِنِينَ خَصِيمًۭا",
    "transliteration": "Innaaa anzalnaaa ilaikal Kitaaba bilhaqqi litahkuma bainan naasi bimaaa araakal laah; wa laa takul lilkhaaa'ineena khaseemaa",
    "translation": "Sesungguhnya Kami menurunkan kepadamu (wahai Muhammad) Kitab (Al-Quran) dengan membawa kebenaran, supaya engkau menghukum di antara manusia menurut apa yang Allah telah tunjukkan kepadamu (melalui wahyuNya); dan janganlah engkau menjadi pembela bagi orang-orang yang khianat."
  },
  {
    "number": 106,
    "arabic": "وَٱسْتَغْفِرِ ٱللَّهَ ۖ إِنَّ ٱللَّهَ كَانَ غَفُورًۭا رَّحِيمًۭا",
    "transliteration": "Wastaghfiril laaha innal laaha kaana Ghafoorar Raheema",
    "translation": "Dan hendaklah engkau memohon ampun kepada Allah; kerana sesungguhnya Allah adalah Maha Pengampun, lagi Maha Mengasihani."
  },
  {
    "number": 107,
    "arabic": "وَلَا تُجَٰدِلْ عَنِ ٱلَّذِينَ يَخْتَانُونَ أَنفُسَهُمْ ۚ إِنَّ ٱللَّهَ لَا يُحِبُّ مَن كَانَ خَوَّانًا أَثِيمًۭا",
    "transliteration": "Wa laa tujaadil 'anil lazeena yakhtaanoona anfusahum; innal laaha laa yuhibbuman kaana khawwaanan aseemaa",
    "translation": "Dan janganlah engkau berbahas untuk membela orang-orang yang mengkhianati diri mereka sendiri. Sesungguhnya Allah tidak suka kepada orang-orang yang selalu melakukan khianat, lagi sentiasa berdosa."
  },
  {
    "number": 108,
    "arabic": "يَسْتَخْفُونَ مِنَ ٱلنَّاسِ وَلَا يَسْتَخْفُونَ مِنَ ٱللَّهِ وَهُوَ مَعَهُمْ إِذْ يُبَيِّتُونَ مَا لَا يَرْضَىٰ مِنَ ٱلْقَوْلِ ۚ وَكَانَ ٱللَّهُ بِمَا يَعْمَلُونَ مُحِيطًا",
    "transliteration": "Yastakhfoona minannaasi wa laa yastakh foona minal laahi wa huwa ma'ahum iz yubaiyitoona maa laa yardaa minal qawl; wa kaanal laahu bimaa ya'maloona muheetaa",
    "translation": "Mereka menyembunyikan (kejahatan mereka) daripada manusia, dalam pada itu mereka tidak menyembunyikan (kejahatan mereka) daripada Allah. Padahal Allah ada bersama-sama mereka, ketika mereka merancangkan pada malam hari, kata-kata yang tidak diredhai oleh Allah. Dan (ingatlah) Allah sentiasa Meliputi PengetahuanNya akan apa yang mereka lakukan."
  },
  {
    "number": 109,
    "arabic": "هَٰٓأَنتُمْ هَٰٓؤُلَآءِ جَٰدَلْتُمْ عَنْهُمْ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا فَمَن يُجَٰدِلُ ٱللَّهَ عَنْهُمْ يَوْمَ ٱلْقِيَٰمَةِ أَم مَّن يَكُونُ عَلَيْهِمْ وَكِيلًۭا",
    "transliteration": "haaa antum haaa'ulaaa'i jaadaltum 'anhum fil hayaatid dunyaa famai yujaadilul laaha 'anhum Yawmal Qiyaamati am mai yakoonu 'alaihim wakeelaa",
    "translation": "Sedarlah! Kamu ini adalah orang-orang (yang telah menyimpang dari kebenaran), kamu telah berhujah membela mereka (yang bersalah) dalam kehidupan dunia ini, maka siapakah yang akan berhujah kepada Allah untuk membela mereka itu pada hari kiamat kelak? Atau siapakah yang akan menjadi pelindung mereka (dari azab seksa yang disediakan oleh Allah)?"
  },
  {
    "number": 110,
    "arabic": "وَمَن يَعْمَلْ سُوٓءًا أَوْ يَظْلِمْ نَفْسَهُۥ ثُمَّ يَسْتَغْفِرِ ٱللَّهَ يَجِدِ ٱللَّهَ غَفُورًۭا رَّحِيمًۭا",
    "transliteration": "Wa mai ya'mal sooo'an aw yazlim nafsahoo summa yastaghfiril laaha yajidil laaha Ghafoorar Raheemaa",
    "translation": "Dan sesiapa yang melakukan kejahatan atau menganiaya dirinya sendiri (dengan melakukan maksiat) kemudian ia memohon ampun kepada Allah, nescaya ia akan mendapati Allah Maha Pengampun, lagi Maha Mengasihani."
  },
  {
    "number": 111,
    "arabic": "وَمَن يَكْسِبْ إِثْمًۭا فَإِنَّمَا يَكْسِبُهُۥ عَلَىٰ نَفْسِهِۦ ۚ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًۭا",
    "transliteration": "Wa mai yaksib isman fa innamaa yaksibuhoo 'alaa nafsih; wa kaanal laahu 'Aleeman hakeemaa",
    "translation": "Dan sesiapa yang mengerjakan sesuatu dosa maka sesungguhnya ia hanya mengerjakannya untuk (menjadi bala bencana yang) menimpa dirinya sendiri. Dan (ingatlah) Allah Maha Mengetahui, lagi Maha Bijaksana."
  },
  {
    "number": 112,
    "arabic": "وَمَن يَكْسِبْ خَطِيٓـَٔةً أَوْ إِثْمًۭا ثُمَّ يَرْمِ بِهِۦ بَرِيٓـًۭٔا فَقَدِ ٱحْتَمَلَ بُهْتَٰنًۭا وَإِثْمًۭا مُّبِينًۭا",
    "transliteration": "Wa mai yaksib khateee'atan aw isman summa yarmi bihee bareee'an faqadih tamala buhtaananw wa ismam mubeenaa",
    "translation": "Dan sesiapa yang melakukan suatu kesalahan atau suatu dosa, kemudian ia menuduhnya kepada orang yang tidak bersalah, maka sesungguhnya ia telah memikul kesalahan berbuat dusta, dan melakukan dosa yang amat nyata."
  },
  {
    "number": 113,
    "arabic": "وَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكَ وَرَحْمَتُهُۥ لَهَمَّت طَّآئِفَةٌۭ مِّنْهُمْ أَن يُضِلُّوكَ وَمَا يُضِلُّونَ إِلَّآ أَنفُسَهُمْ ۖ وَمَا يَضُرُّونَكَ مِن شَىْءٍۢ ۚ وَأَنزَلَ ٱللَّهُ عَلَيْكَ ٱلْكِتَٰبَ وَٱلْحِكْمَةَ وَعَلَّمَكَ مَا لَمْ تَكُن تَعْلَمُ ۚ وَكَانَ فَضْلُ ٱللَّهِ عَلَيْكَ عَظِيمًۭا",
    "transliteration": "Wa law laa fadlul laahi 'alaika wa rahmatuhoo lahammat taaa'ifatum minhum ai yudillooka wa maa yudilloona illaaa anfusahum wa maa yadurroonaka min shai'; wa anzalal laahu 'alaikal Kitaaba wal Hikmata wa 'allamaka maa lam takun ta'lam; wa kaana fadlul laahi 'alaika 'azeemaa",
    "translation": "Dan kalaulah tidak kerana limpah kurnia Allah dan rahmatNya kepadamu (wahai Muhammad), nescaya berhasilah cita-cita segolongan dari mereka yang bertujuan hendak menyesatkanmu, padahal mereka tidak akan menyesatkan melainkan dirinya sendiri; dan juga mereka tidak akan dapat mendatangkan mudarat kepadamu sedikitpun; dan (selain itu) Allah telah menurunkan kepadamu Kitab (Al-Quran) serta Hikmah (pengetahuan yang mendalam), dan telah mengajarkanmu apa yang engkau tidak mengetahuinya. Dan adalah kurnia Allah yang dilimpahkanNya kepada mu amatlah besar."
  },
  {
    "number": 114,
    "arabic": "۞ لَّا خَيْرَ فِى كَثِيرٍۢ مِّن نَّجْوَىٰهُمْ إِلَّا مَنْ أَمَرَ بِصَدَقَةٍ أَوْ مَعْرُوفٍ أَوْ إِصْلَٰحٍۭ بَيْنَ ٱلنَّاسِ ۚ وَمَن يَفْعَلْ ذَٰلِكَ ٱبْتِغَآءَ مَرْضَاتِ ٱللَّهِ فَسَوْفَ نُؤْتِيهِ أَجْرًا عَظِيمًۭا",
    "transliteration": "laa khaira fee kaseerim min najwaahum illaa man amara bisadaqatin aw ma'roofin aw islaahim bainan naas; wa mai yaf'al zaalikab tighaaa'a mardaatil laahi fa sawfa nu'teehi ajran 'azeemaa",
    "translation": "Tidak ada kebaikan pada kebanyakan bisik-bisikan mereka, kecuali (bisik-bisikan) orang yang menyuruh bersedekah, atau berbuat kebaikan, atau mendamaikan di antara manusia. Dan sesiapa yang berbuat demikian dengan maksud mencari keredaan Allah, tentulah Kami akan memberi kepadanya pahala yang amat besar."
  },
  {
    "number": 115,
    "arabic": "وَمَن يُشَاقِقِ ٱلرَّسُولَ مِنۢ بَعْدِ مَا تَبَيَّنَ لَهُ ٱلْهُدَىٰ وَيَتَّبِعْ غَيْرَ سَبِيلِ ٱلْمُؤْمِنِينَ نُوَلِّهِۦ مَا تَوَلَّىٰ وَنُصْلِهِۦ جَهَنَّمَ ۖ وَسَآءَتْ مَصِيرًا",
    "transliteration": "Wa mai yushaaqiqir Rasoola mim ba'di maa tabaiyana lahul hudaa wa tattabi' ghaira sabeelil mu'mineena nuwallihee ma tawallaa wa nuslihee Jahannama wa saaa'at maseeraa",
    "translation": "Dan sesiapa yang menentang (ajaran) Rasulullah sesudah terang nyata kepadanya kebenaran pertunjuk (yang dibawanya), dan ia pula mengikut jalan yang lain dari jalan orang-orang yang beriman, Kami akan memberikannya kuasa untuk melakukan (kesesatan) yang dipilihnya, dan (pada hari akhirat kelak) Kami akan memasukkannya ke dalam neraka jahanam; dan neraka jahanam itu adalah seburuk-buruk tempat kembali."
  },
  {
    "number": 116,
    "arabic": "إِنَّ ٱللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِۦ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَآءُ ۚ وَمَن يُشْرِكْ بِٱللَّهِ فَقَدْ ضَلَّ ضَلَٰلًۢا بَعِيدًا",
    "transliteration": "Innal laaha laa yaghfiru ai yushraka bihee wayaghfiru maa doona zaalika limai yashaaa'; wa mai yushrik billaahi faqad dalla dalaalam ba'eedaa",
    "translation": "Sesungguhnya Allah tidak akan mengampunkan dosa orang yang mempersekutukanNya dengan sesuatu (apa jua), dan akan mengampunkan yang lain daripada kesalahan (syirik) itu bagi sesiapa yang dikehendakiNya (menurut peraturan hukum-hukumNya); dan sesiapa yang mempersekutukan Allah dengan sesuatu (apa jua), maka sesungguhnya ia telah sesat dengan kesesatan yang amat jauh."
  },
  {
    "number": 117,
    "arabic": "إِن يَدْعُونَ مِن دُونِهِۦٓ إِلَّآ إِنَٰثًۭا وَإِن يَدْعُونَ إِلَّا شَيْطَٰنًۭا مَّرِيدًۭا",
    "transliteration": "iny yad'oona min dooniheee illaaa inaasanw wa iny yad'oona illaa Shaitaanam mareedaa",
    "translation": "Apa yang mereka sembah yang lain dari Allah itu, hanyalah berhala-berhala (makhluk-makhluk yang lemah), dan mereka (dengan yang demikian) tidak menyembah melainkan Syaitan yang derhaka;"
  },
  {
    "number": 118,
    "arabic": "لَّعَنَهُ ٱللَّهُ ۘ وَقَالَ لَأَتَّخِذَنَّ مِنْ عِبَادِكَ نَصِيبًۭا مَّفْرُوضًۭا",
    "transliteration": "La'anahul laah; wa qaala la attakhizanna min 'ibaadika naseebam mafroodaa",
    "translation": "Yang telah dilaknat oleh Allah, dan yang telah mengatakan: \"Demi sesungguhnya, aku akan mengambil dari kalangan hamba-hambaMu, bahagian yang tertentu (untuk menjadi pengikutku);"
  },
  {
    "number": 119,
    "arabic": "وَلَأُضِلَّنَّهُمْ وَلَأُمَنِّيَنَّهُمْ وَلَءَامُرَنَّهُمْ فَلَيُبَتِّكُنَّ ءَاذَانَ ٱلْأَنْعَٰمِ وَلَءَامُرَنَّهُمْ فَلَيُغَيِّرُنَّ خَلْقَ ٱللَّهِ ۚ وَمَن يَتَّخِذِ ٱلشَّيْطَٰنَ وَلِيًّۭا مِّن دُونِ ٱللَّهِ فَقَدْ خَسِرَ خُسْرَانًۭا مُّبِينًۭا",
    "transliteration": "Wa la udillannahum wa la umanni yannnahum wa la aamurannahum fala yubat tikunna aazaanal lan'aami wa la aamurannahum fala yughai yirunna khalqal laah; wa mai yattakhizish Shaitaana waliyyam mmin doonil laahi faqad khasira khusraanam mubeena",
    "translation": "\"Dan demi sesungguhnya, aku akan menyesatkan mereka (dari kebenaran), dan demi sesungguhnya aku akan memperdayakan mereka dengan angan-angan kosong, dan demi sesungguhnya aku akan menyuruh mereka (mencacatkan binatang-binatang ternak), lalu mereka membelah telinga binatang-binatang itu; dan aku akan menyuruh mereka mengubah ciptaan Allah\". Dan (ingatlah) sesiapa yang mengambil Syaitan menjadi pemimpin yang ditaati selain dari Allah, maka sesungguhnya rugilah ia dengan kerugian yang terang nyata."
  },
  {
    "number": 120,
    "arabic": "يَعِدُهُمْ وَيُمَنِّيهِمْ ۖ وَمَا يَعِدُهُمُ ٱلشَّيْطَٰنُ إِلَّا غُرُورًا",
    "transliteration": "Ya'iduhum wa yuman neehim wa maa ya'iduhumush Shaitaanu illaa ghurooraa",
    "translation": "Syaitan sentiasa menjanjikan mereka (dengan janji-janji indah) serta memperdayakan mereka dengan angan-angan kosong; dan apa yang dijanjikan oleh Syaitan itu tidak lain hanyalah tipu daya semata-mata."
  },
  {
    "number": 121,
    "arabic": "أُو۟لَٰٓئِكَ مَأْوَىٰهُمْ جَهَنَّمُ وَلَا يَجِدُونَ عَنْهَا مَحِيصًۭا",
    "transliteration": "Ulaaa'ika maawaahum Jahannamu wa laa yajidoona 'anhaa maheesaa",
    "translation": "Mereka itu, tempat akhirnya ialah neraka jahanam, dan mereka pula tidak akan dapat melarikan diri daripadanya."
  },
  {
    "number": 122,
    "arabic": "وَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ سَنُدْخِلُهُمْ جَنَّٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَآ أَبَدًۭا ۖ وَعْدَ ٱللَّهِ حَقًّۭا ۚ وَمَنْ أَصْدَقُ مِنَ ٱللَّهِ قِيلًۭا",
    "transliteration": "Wallazeena aamanoo wa 'amilus saalihaati sanud khiluhum Jannaatin tajree min tahtihal anhaaru khaalideena feehaaa abadaa; wa'dal laahi haqqaa; wa man asdaqu minal laahi qeelaa",
    "translation": "Dan orang-orang yang beriman serta beramal soleh, Kami akan masukkan mereka ke dalam Syurga yang mengalir di bawahnya beberapa sungai, mereka kekal di dalamnya selama-lamanya, sebagai janji Allah yang benar. Dan siapakah yang lebih benar perkataannya daripada Allah?"
  },
  {
    "number": 123,
    "arabic": "لَّيْسَ بِأَمَانِيِّكُمْ وَلَآ أَمَانِىِّ أَهْلِ ٱلْكِتَٰبِ ۗ مَن يَعْمَلْ سُوٓءًۭا يُجْزَ بِهِۦ وَلَا يَجِدْ لَهُۥ مِن دُونِ ٱللَّهِ وَلِيًّۭا وَلَا نَصِيرًۭا",
    "transliteration": "Laisa bi amaaniyyikum wa laaa amaaniyyi Ahlil Kitaab; mai ya'mal sooo'ai yujza bihee wa laa yajid lahoo min doonil laahi waliyanw wa laa naseeraa",
    "translation": "(Balasan yang baik yang dijanjikan oleh Allah itu) tidak akan didapati hanya dengan angan-angan kamu semata-mata, dan tidak pula dengan angan-angan ahli Kitab (Yahudi dan Nasrani). Sesiapa yang melakukan kejahatan, ia akan dibalas dengan kejahatan itu, dan ia pula tidak akan mendapat - selain dari Allah - seorang pun yang akan melindunginya, dan tidak ada juga yang dapat menolongnya."
  },
  {
    "number": 124,
    "arabic": "وَمَن يَعْمَلْ مِنَ ٱلصَّٰلِحَٰتِ مِن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌۭ فَأُو۟لَٰٓئِكَ يَدْخُلُونَ ٱلْجَنَّةَ وَلَا يُظْلَمُونَ نَقِيرًۭا",
    "transliteration": "Wa mai ya'mal minas saalihaati min zakarin aw unsaa wa huwa mu'minun fa ulaaa'ika yadkhuloonal Jannata wa laa yuzlamoona naqeeraa",
    "translation": "Dan sesiapa yang mengerjakan amal soleh, dari lelaki atau perempuan, sedang ia beriman, maka mereka itu akan masuk Syurga, dan mereka pula tidak akan dianiaya (atau dikurangkan balasannya) sedikitpun."
  },
  {
    "number": 125,
    "arabic": "وَمَنْ أَحْسَنُ دِينًۭا مِّمَّنْ أَسْلَمَ وَجْهَهُۥ لِلَّهِ وَهُوَ مُحْسِنٌۭ وَٱتَّبَعَ مِلَّةَ إِبْرَٰهِيمَ حَنِيفًۭا ۗ وَٱتَّخَذَ ٱللَّهُ إِبْرَٰهِيمَ خَلِيلًۭا",
    "transliteration": "Wa man ahsanu deenam mimmman aslama wajhahoo lillaahi wa huwa muhsinunw wattaba'a Millata Ibraaheema haneefaa; wattakhazal laahu Ibraaheema khaleelaa",
    "translation": "Dan tidak ada yang lebih baik ugamanya daripada orang yang menyerahkan dirinya kepada Allah (dengan ikhlas), sedang ia berusaha mengerjakan kebaikan, dan ia pula mengikut ugama Nabi Ibrahim yang lurus (yang tetap di atas dasar tauhid); dan (kerana itulah) Allah menjadikan Nabi Ibrahim kesayanganNya."
  },
  {
    "number": 126,
    "arabic": "وَلِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۚ وَكَانَ ٱللَّهُ بِكُلِّ شَىْءٍۢ مُّحِيطًۭا",
    "transliteration": "Wa lillaahi maa fis samaawaati wa maa fil ard; wa kaanal laahu bikulli shai'im muheetaa",
    "translation": "Dan bagi Allah jualah segala yang ada di langit dan yang ada di bumi; dan Allah sentiasa Meliputi (pengetahuanNya dan kekuasaanNya) akan tiap-tiap sesuatu."
  },
  {
    "number": 127,
    "arabic": "وَيَسْتَفْتُونَكَ فِى ٱلنِّسَآءِ ۖ قُلِ ٱللَّهُ يُفْتِيكُمْ فِيهِنَّ وَمَا يُتْلَىٰ عَلَيْكُمْ فِى ٱلْكِتَٰبِ فِى يَتَٰمَى ٱلنِّسَآءِ ٱلَّٰتِى لَا تُؤْتُونَهُنَّ مَا كُتِبَ لَهُنَّ وَتَرْغَبُونَ أَن تَنكِحُوهُنَّ وَٱلْمُسْتَضْعَفِينَ مِنَ ٱلْوِلْدَٰنِ وَأَن تَقُومُوا۟ لِلْيَتَٰمَىٰ بِٱلْقِسْطِ ۚ وَمَا تَفْعَلُوا۟ مِنْ خَيْرٍۢ فَإِنَّ ٱللَّهَ كَانَ بِهِۦ عَلِيمًۭا",
    "transliteration": "Wa yastaftoonaka finnisaaa'i qulil laahu yufteekum feehinna wa maa yutlaa 'alaikum fil Kitaabi fee yataaman nisaaa'il laatee laa tu'toonahunna mmaa kutiba lahunnna wa targhaboona an tankihoohunna wal mustad'a feena minal wildaani wa an taqoomoo lilyataamaa bilqist; wa maa taf'aloo min khairin fa innal laaha kaana bihee 'Aleemaa",
    "translation": "Dan mereka meminta fatwa kepadamu (wahai Muhammad), mengenai (hak dan kewajipan) kaum perempuan. Katakanlah olehmu: \"Allah akan memberi keterangan (fatwa) kepada kamu mengenai mereka dan juga (ada difatwakan dalam) apa yang selalu dibacakan kepada kamu dalam Kitab (Al-Quran) ini mengenai perempuan-perempuan yatim yang kamu tidak memberi kepadanya apa yang telah ditetapkan menjadi hak mereka, dan yang kamu suka berkahwin dengan mereka; dan juga mengenai anak-anak yang lemah (yang masih kecil lagi). Dan (kamu juga diwajibkan) supaya menguruskan (hak dan keperluan) anak-anak yatim dengan adil. Dan (ingatlah) apa jua kebaikan yang kamu lakukan (kepada mereka), maka sesungguhnya Allah sentiasa Mengetahuinya.\""
  },
  {
    "number": 128,
    "arabic": "وَإِنِ ٱمْرَأَةٌ خَافَتْ مِنۢ بَعْلِهَا نُشُوزًا أَوْ إِعْرَاضًۭا فَلَا جُنَاحَ عَلَيْهِمَآ أَن يُصْلِحَا بَيْنَهُمَا صُلْحًۭا ۚ وَٱلصُّلْحُ خَيْرٌۭ ۗ وَأُحْضِرَتِ ٱلْأَنفُسُ ٱلشُّحَّ ۚ وَإِن تُحْسِنُوا۟ وَتَتَّقُوا۟ فَإِنَّ ٱللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًۭا",
    "transliteration": "Wa inimra atun khaafat mim ba'lihaa nushoozan aw i'raadan falaa junaaha 'alaihi maaa ai yuslihaa bainahumaa sulhaa; wassulhu khair; wa uhdiratil anfusush shuhh; wa in tuhsinoo wa tattaqoo fa innal laaha kaana bimaa ta'maloona Khabeeraa",
    "translation": "Dan jika seorang perempuan bimbang akan timbul dari suaminya \"nusyuz\" (kebencian), atau tidak melayaninya, maka tiadalah salah bagi mereka (suami isteri) membuat perdamaian di antara mereka berdua (secara yang sebaik-baiknya), kerana perdamaian itu lebih baik (bagi mereka daripada bercerai-berai); sedang sifat bakhil kedekut (tidak suka memberi atau bertolak ansur) itu memang tabiat semula jadi yang ada pada manusia. Dan jika kamu berlaku baik (dalam pergaulan), dan mencegah diri (daripada melakukan kezaliman), maka sesungguhnya Allah Maha Mendalam PengetahuanNya akan apa yang kamu lakukan."
  },
  {
    "number": 129,
    "arabic": "وَلَن تَسْتَطِيعُوٓا۟ أَن تَعْدِلُوا۟ بَيْنَ ٱلنِّسَآءِ وَلَوْ حَرَصْتُمْ ۖ فَلَا تَمِيلُوا۟ كُلَّ ٱلْمَيْلِ فَتَذَرُوهَا كَٱلْمُعَلَّقَةِ ۚ وَإِن تُصْلِحُوا۟ وَتَتَّقُوا۟ فَإِنَّ ٱللَّهَ كَانَ غَفُورًۭا رَّحِيمًۭا",
    "transliteration": "Wa lan tastatee'ooo an ta'diloo bainan nisaaa'i wa law harastum falaa tameeloo kullal maili fatazaroohaa kalmu'al laqah; wa in tuslihoo wa tattaqoo fa innal laaha kaana Ghafoorar Raheema",
    "translation": "Dan kamu tidak akan dapat berlaku adil di antara isteri-isteri kamu sekalipun kamu bersungguh-sungguh (hendak melakukannya); oleh itu janganlah kamu cenderung dengan melampau (berat sebelah kepada isteri yang kamu sayangi) sehingga kamu biarkan isteri yang lain seperti benda yang tergantung (di awan-awan); dan jika kamu memperbaiki (keadaan yang pincang itu), dan memelihara diri (daripada perbuatan yang zalim), maka sesungguhnya Allah Maha Pengampun, lagi Maha Mengasihani."
  },
  {
    "number": 130,
    "arabic": "وَإِن يَتَفَرَّقَا يُغْنِ ٱللَّهُ كُلًّۭا مِّن سَعَتِهِۦ ۚ وَكَانَ ٱللَّهُ وَٰسِعًا حَكِيمًۭا",
    "transliteration": "Wa iny-yatafarraqaa yughnil laahu kullam min sa'atih; wa kaanal laahu Waasi'an Hakeemaa",
    "translation": "Dan jika keduanya bercerai, maka Allah akan cukupkan (keperluan) masing-masing dari limpah kurniaNya. Dan (ingatlah) Allah Maha Luas limpah kurniaNya, lagi Maha Bijaksana."
  },
  {
    "number": 131,
    "arabic": "وَلِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ وَلَقَدْ وَصَّيْنَا ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ مِن قَبْلِكُمْ وَإِيَّاكُمْ أَنِ ٱتَّقُوا۟ ٱللَّهَ ۚ وَإِن تَكْفُرُوا۟ فَإِنَّ لِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۚ وَكَانَ ٱللَّهُ غَنِيًّا حَمِيدًۭا",
    "transliteration": "Wa lillaahi maafis samaawaati wa maa fil ard; wa laqad wassainal lazeena ootul Kitaaba min qablikum wa iyyaakum anit taqul laah; wa intakfuroo fa inna lillaahi maa fis samaawaati wa maa fil ard; wa kaanal laahu Ghaniyyan hameedaa",
    "translation": "Dan bagi Allah jualah segala yang ada di langit dan yang ada di bumi; dan demi sesungguhnya, Kami telah perintahkan orang-orang yang diberi Kitab dahulu daripada kamu, dan juga (perintahkan) kamu, iaitu hendaklah bertaqwa kepada Allah; dan jika kamu kufur ingkar, maka (ketahuilah) sesungguhnya Allah jualah yang memiliki segala yang ada di langit dan yang ada di bumi; dan (ingatlah) adalah Allah Maha Kaya, lagi Maha Terpuji."
  },
  {
    "number": 132,
    "arabic": "وَلِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۚ وَكَفَىٰ بِٱللَّهِ وَكِيلًا",
    "transliteration": "Wa lillaahi maa fis samaawaati wa maa fil ard; wa kafaa billaahi Wakeelaa",
    "translation": "Dan bagi Allah jualah apa yang ada di langit dan yang ada di bumi; dan cukuplah Allah sebagai Pengawal (yang mentadbirkan dan menguasai segala-galanya)."
  },
  {
    "number": 133,
    "arabic": "إِن يَشَأْ يُذْهِبْكُمْ أَيُّهَا ٱلنَّاسُ وَيَأْتِ بِـَٔاخَرِينَ ۚ وَكَانَ ٱللَّهُ عَلَىٰ ذَٰلِكَ قَدِيرًۭا",
    "transliteration": "Iny-yashaa yuzhibkum aiyuhan naasu wa yaati bi aakhareen; wa kaanal laahu 'alaa zaalika Qadeeraa",
    "translation": "Jika Allah menghendaki, nescaya Ia musnahkan kamu wahai umat manusia dan Ia datangkan gantinya dengan umat-umat yang lain. Dan adalah Allah Maha Kuasa melakukan yang demikian itu."
  },
  {
    "number": 134,
    "arabic": "مَّن كَانَ يُرِيدُ ثَوَابَ ٱلدُّنْيَا فَعِندَ ٱللَّهِ ثَوَابُ ٱلدُّنْيَا وَٱلْءَاخِرَةِ ۚ وَكَانَ ٱللَّهُ سَمِيعًۢا بَصِيرًۭا",
    "transliteration": "man kaana yureedu sawaabad dunyaa fa'indallaahi sawaabud dunyaa wal Aakhirah; wa kaanal laahu Samee'am Baseeraa",
    "translation": "Sesiapa yang mahukan pahala (balasan) dunia sahaja (maka rugilah ia), kerana di sisi Allah disediakan pahala (balasan) dunia dan akhirat. Dan (ingatlah) Allah sentiasa Mendengar, lagi sentiasa Melihat."
  },
  {
    "number": 135,
    "arabic": "۞ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُونُوا۟ قَوَّٰمِينَ بِٱلْقِسْطِ شُهَدَآءَ لِلَّهِ وَلَوْ عَلَىٰٓ أَنفُسِكُمْ أَوِ ٱلْوَٰلِدَيْنِ وَٱلْأَقْرَبِينَ ۚ إِن يَكُنْ غَنِيًّا أَوْ فَقِيرًۭا فَٱللَّهُ أَوْلَىٰ بِهِمَا ۖ فَلَا تَتَّبِعُوا۟ ٱلْهَوَىٰٓ أَن تَعْدِلُوا۟ ۚ وَإِن تَلْوُۥٓا۟ أَوْ تُعْرِضُوا۟ فَإِنَّ ٱللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًۭا",
    "transliteration": "Yaa aiyuhal lazeena aamanoo koonoo qawwa ameena bilqisti shuhadaaa'a lillaahi wa law 'alaa anfusikum awil waalidaini wal aqrabeen iny yakun ghaniyyan aw faqeeran fallaahu awlaa bihimaa falaaa tattabi'ul hawaaa an ta'diloo; wa in talwooo aw tu'ridoo fa innal laaha kaana bimaa ta'maloona Khabeera",
    "translation": "Wahai orang-orang yang beriman! Hendaklah kamu menjadi orang-orang yang sentiasa menegakkan keadilan, lagi menjadi saksi (yang menerangkan kebenaran) kerana Allah, sekalipun terhadap diri kamu sendiri, atau ibu bapa dan kaum kerabat kamu. Kalaulah orang (yang didakwa) itu kaya atau miskin (maka janganlah kamu terhalang daripada menjadi saksi yang memperkatakan kebenaran disebabkan kamu bertimbang rasa), kerana Allah lebih bertimbang rasa kepada keduanya. Oleh itu, janganlah kamu turutkan hawa nafsu supaya kamu tidak menyeleweng dari keadilan. Dan jika kamu memutar-balikkan keterangan ataupun enggan (daripada menjadi saksi), maka sesungguhnya Allah sentiasa Mengetahui dengan mendalam akan apa yang kamu lakukan."
  },
  {
    "number": 136,
    "arabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ ءَامِنُوا۟ بِٱللَّهِ وَرَسُولِهِۦ وَٱلْكِتَٰبِ ٱلَّذِى نَزَّلَ عَلَىٰ رَسُولِهِۦ وَٱلْكِتَٰبِ ٱلَّذِىٓ أَنزَلَ مِن قَبْلُ ۚ وَمَن يَكْفُرْ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ وَٱلْيَوْمِ ٱلْءَاخِرِ فَقَدْ ضَلَّ ضَلَٰلًۢا بَعِيدًا",
    "transliteration": "Yaaa aiyuhal lazeena aamanooo aaminoo billaahi wa Rasoolihee wal Kitaabil lazee nazzala 'alaa Rasoolihee wal Kitaabil lazeee anzala min qabl; wa mai yakfur billaahi wa Malaaa'ikatihee wa Kutubihee wa Rusulihee wal Yawmil Aakhiri faqad dalla dalaalam ba'eedaa",
    "translation": "Wahai orang-orang yang beriman! Tetapkanlah iman kamu kepada Allah dan RasulNya, dan kepada Kitab Al-Quran yang telah diturunkan kepada RasulNya (Muhammad, s.a.w), dan juga kepada Kitab-kitab Suci yang telah diturunkan dahulu daripada itu. Dan sesiapa yang kufur ingkar kepada Allah, dan Malaikat-malaikatNya, dan Kitab-kitabNya, dan Rasul-rasulNya dan juga Hari Akhirat, maka sesungguhnya ia telah sesat dengan kesesatan yang amat jauh."
  },
  {
    "number": 137,
    "arabic": "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ ثُمَّ كَفَرُوا۟ ثُمَّ ءَامَنُوا۟ ثُمَّ كَفَرُوا۟ ثُمَّ ٱزْدَادُوا۟ كُفْرًۭا لَّمْ يَكُنِ ٱللَّهُ لِيَغْفِرَ لَهُمْ وَلَا لِيَهْدِيَهُمْ سَبِيلًۢا",
    "transliteration": "Innal lazeena aamanoo summa kafaroo summa aamanoo summa kafaroo summaz daado kufral lam yakunil laahu liyaghfira lahum wa laa liyahdiyahum sabeelaa",
    "translation": "Sesungguhnya orang-orang yang beriman, kemudian mereka kafir, kemudian mereka beriman semula, kemudian mereka kafir sekali lagi, kemudian mereka bertambah-tambah lagi dengan kekufuran, Allah tidak sekali-kali akan memberi ampun kepada mereka, dan tidak akan memberi pertunjuk hidayah kepada mereka ke jalan yang benar."
  },
  {
    "number": 138,
    "arabic": "بَشِّرِ ٱلْمُنَٰفِقِينَ بِأَنَّ لَهُمْ عَذَابًا أَلِيمًا",
    "transliteration": "Bashshiril munaafiqeena bi anna lahum 'azaaban aleemaa",
    "translation": "Sampaikanlah khabar berita kepada orang-orang munafik: bahawa sesungguhnya disediakan untuk mereka azab seksa yang tidak terperi sakitnya;"
  },
  {
    "number": 139,
    "arabic": "ٱلَّذِينَ يَتَّخِذُونَ ٱلْكَٰفِرِينَ أَوْلِيَآءَ مِن دُونِ ٱلْمُؤْمِنِينَ ۚ أَيَبْتَغُونَ عِندَهُمُ ٱلْعِزَّةَ فَإِنَّ ٱلْعِزَّةَ لِلَّهِ جَمِيعًۭا",
    "transliteration": "Allazeena yattakhizoo nal kaafireena awliyaaa'a min doonil mu'mineen; a-yabta ghoona 'indahumul 'izzata fainnnal 'izzata lillaahi jamee'aa",
    "translation": "(Iaitu) orang-orang yang mengambil orang-orang kafir menjadi teman rapat dengan meninggalkan orang-orang yang beriman. Tidaklah patut mereka (orang-orang munafik) mencari kekuatan dan kemuliaan di sisi orang-orang kafir itu, kerana sesungguhnya kekuatan dan kemuliaan itu semuanya ialah milik Allah, (diberikannya kepada sesiapa yang dikehendakiNya)."
  },
  {
    "number": 140,
    "arabic": "وَقَدْ نَزَّلَ عَلَيْكُمْ فِى ٱلْكِتَٰبِ أَنْ إِذَا سَمِعْتُمْ ءَايَٰتِ ٱللَّهِ يُكْفَرُ بِهَا وَيُسْتَهْزَأُ بِهَا فَلَا تَقْعُدُوا۟ مَعَهُمْ حَتَّىٰ يَخُوضُوا۟ فِى حَدِيثٍ غَيْرِهِۦٓ ۚ إِنَّكُمْ إِذًۭا مِّثْلُهُمْ ۗ إِنَّ ٱللَّهَ جَامِعُ ٱلْمُنَٰفِقِينَ وَٱلْكَٰفِرِينَ فِى جَهَنَّمَ جَمِيعًا",
    "transliteration": "Wa qad nazzala 'alaikum fil Kitaabi an izaa sami'tum Aayaatil laahi yukfaru bihaa wa yustahza u bihaa falaa taq'udoo ma'ahum hattaa yakhoodoo fee hadeesin ghairih; innakum izam misluhum; innal laaha jaami'ul munaafiqeena wal kaafireena fee jahannama jamee'aa",
    "translation": "Dan sesungguhnya Allah telahpun menurunkan kepada kamu (perintahNya) di dalam Kitab (Al-Quran), iaitu: apabila kamu mendengar ayat-ayat keterangan Allah diingkari dan diejek-ejek (oleh kaum kafir dan munafik), maka janganlah kamu duduk (bergaul) dengan mereka sehingga mereka masuk kepada memperkatakan soal yang lain; kerana sesungguhnya (jika kamu melakukan yang demikian), tentulah kamu sama seperti mereka. Sesungguhnya Allah akan menghimpunkan sekalian orang manufik dan orang kafir di dalam neraka jahannam."
  },
  {
    "number": 141,
    "arabic": "ٱلَّذِينَ يَتَرَبَّصُونَ بِكُمْ فَإِن كَانَ لَكُمْ فَتْحٌۭ مِّنَ ٱللَّهِ قَالُوٓا۟ أَلَمْ نَكُن مَّعَكُمْ وَإِن كَانَ لِلْكَٰفِرِينَ نَصِيبٌۭ قَالُوٓا۟ أَلَمْ نَسْتَحْوِذْ عَلَيْكُمْ وَنَمْنَعْكُم مِّنَ ٱلْمُؤْمِنِينَ ۚ فَٱللَّهُ يَحْكُمُ بَيْنَكُمْ يَوْمَ ٱلْقِيَٰمَةِ ۗ وَلَن يَجْعَلَ ٱللَّهُ لِلْكَٰفِرِينَ عَلَى ٱلْمُؤْمِنِينَ سَبِيلًا",
    "transliteration": "Allazeena yatarab basoona bikum fa in kaana lakum fathum minal laahi qaalooo alam nakum ma'akum wa in kaana lilkaafireena naseebun qaalooo alam nastah wiz 'alaikum wa nammna'kum minal mu'mineen; fallaahu yahkumu bainakum Yawmal Qiyaamah; wa lai yaj'alal laahu lilkaafireena 'alal mu'mineena sabeelaa",
    "translation": "(Mereka yang munafik itu ialah) orang-orang yang sentiasa menunggu-nunggu (berlakunya sesuatu) kepada kamu; maka kalau kamu mendapat kemenangan dari Allah (dalam sesuatu peperangan), berkatalah mereka (kepada kamu): \"Bukankah kami turut berjuang bersama-sama kamu? (Oleh itu kami juga berhak menerima bahagian dari harta rampasan perang)\". Dan jika orang-orang kafir pula mendapat bahagian (yang menguntungkan dalam peperangan), berkatalah mereka (kepada orang-orang kafir itu): \"Bukankah kami turut membantu kamu dan mempertahankan kamu dari (serang balas) orang-orang yang beriman (dengan mendedahkan rahsia perpaduannya)?\" Maka Allah akan menghakimi di antara kamu semua pada hari kiamat; dan Allah tidak sekali-kali akan memberi jalan kepada orang-orang kafir untuk membinasakan orang-orang yang beriman."
  },
  {
    "number": 142,
    "arabic": "إِنَّ ٱلْمُنَٰفِقِينَ يُخَٰدِعُونَ ٱللَّهَ وَهُوَ خَٰدِعُهُمْ وَإِذَا قَامُوٓا۟ إِلَى ٱلصَّلَوٰةِ قَامُوا۟ كُسَالَىٰ يُرَآءُونَ ٱلنَّاسَ وَلَا يَذْكُرُونَ ٱللَّهَ إِلَّا قَلِيلًۭا",
    "transliteration": "Innal munaafiqeena yukhaadi'oonal laaha wa huwa khaadi'uhum wa izaa qaamooo ilas Salaati qaamoo kusaalaa yuraaa'oonan naasa wa laa yazkuroonal laaha illaa qaleelaa",
    "translation": "Sesungguhnya orang-orang munafik itu melakukan tipu daya (terhadap ugama) Allah (dengan perbuatan pura-pura beriman sedang mereka kafir pada batinnya), dan Allah pula tetap membalas tipu daya mereka (dengan membiarkan mereka dalam keadaan munafik). Mereka pula apabila berdiri hendak sembahyang, mereka berdiri dengan malas. Mereka (hanya bertujuan) riak (memperlihatkan sembahyangnya) kepada manusia (supaya disangka bahawa mereka orang yang beriman), dan mereka pula tidak mengingati Allah (dengan mengerjakan sembahyang) melainkan sedikit sekali (jarang-jarang)."
  },
  {
    "number": 143,
    "arabic": "مُّذَبْذَبِينَ بَيْنَ ذَٰلِكَ لَآ إِلَىٰ هَٰٓؤُلَآءِ وَلَآ إِلَىٰ هَٰٓؤُلَآءِ ۚ وَمَن يُضْلِلِ ٱللَّهُ فَلَن تَجِدَ لَهُۥ سَبِيلًۭا",
    "transliteration": "Muzabzabeena baina zaalika laaa ilaa haaa' ulaaa'i wa laaa ilaa haaa'ulaaa'; wa mai yudlilil laahu falan tajida lahoo sabeela",
    "translation": "Mereka berkeadaan \"muzabzab\" (tidak mempunyai pendirian yang tetap) antara (iman dan kufur) itu; mereka tidak berpihak terus kepada golongan (kafir) dan tidak pula berpihak kepada golongan (yang beriman). Dan sesiapa yang disesatkan oleh Allah, maka engkau (wahai Muhammad) tidak sekali-kali akan mendapat jalan untuk menyelamatkannya."
  },
  {
    "number": 144,
    "arabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَتَّخِذُوا۟ ٱلْكَٰفِرِينَ أَوْلِيَآءَ مِن دُونِ ٱلْمُؤْمِنِينَ ۚ أَتُرِيدُونَ أَن تَجْعَلُوا۟ لِلَّهِ عَلَيْكُمْ سُلْطَٰنًۭا مُّبِينًا",
    "transliteration": "Yaaa aiyuhal lazeena aamanoo laa tattakhizul kaafireena awliyaaa'a min doonil mu'mineen; aturee doona an taj'aloo lillaahi 'alaikum sultaanam mubeenaa",
    "translation": "Wahai orang-orang yang beriman, janganlah kamu mengambil orang-orang kafir menjadi teman rapat dengan meninggalkan orang-orang yang beriman. Adakah kamu hendak mengadakan alasan yang terang nyata bagi Allah untuk (menyeksa) kamu?"
  },
  {
    "number": 145,
    "arabic": "إِنَّ ٱلْمُنَٰفِقِينَ فِى ٱلدَّرْكِ ٱلْأَسْفَلِ مِنَ ٱلنَّارِ وَلَن تَجِدَ لَهُمْ نَصِيرًا",
    "transliteration": "Innal munaafiqeena fiddarkil asfali minan Naari wa lan tajjida lahum naseeraa",
    "translation": "Sesungguhnya orang-orang munafik itu ditempatkan pada tingkatan yang terkebawah sekali dari (lapisan-lapisan dalam) neraka. Dan engkau tidak sekali-kali akan mendapat sesiapa pun yang boleh menolong mereka."
  },
  {
    "number": 146,
    "arabic": "إِلَّا ٱلَّذِينَ تَابُوا۟ وَأَصْلَحُوا۟ وَٱعْتَصَمُوا۟ بِٱللَّهِ وَأَخْلَصُوا۟ دِينَهُمْ لِلَّهِ فَأُو۟لَٰٓئِكَ مَعَ ٱلْمُؤْمِنِينَ ۖ وَسَوْفَ يُؤْتِ ٱللَّهُ ٱلْمُؤْمِنِينَ أَجْرًا عَظِيمًۭا",
    "transliteration": "Illal lazeena taaboo wa aslahoo wa'tasamoo billaahi wa akhlasoo deenahum lillaahi faulaaa'ika ma'al mu'mineena wa sawfa yu'til laahul mu'mineena ajran 'azeemaa",
    "translation": "Kecuali orang-orang yang bertaubat (dari perbuatan munafik itu) dan memperbaiki amalan mereka (yang salah), dan mereka pula berpegang teguh kepada (ugama) Allah, serta mengerjakan ugama mereka dengan ikhlas kerana Allah, maka mereka yang demikian itu ditempatkan bersama-sama orang-orang yang beriman (di dalam Syurga); dan Allah akan memberikan orang-orang yang beriman itu pahala yang amat besar."
  },
  {
    "number": 147,
    "arabic": "مَّا يَفْعَلُ ٱللَّهُ بِعَذَابِكُمْ إِن شَكَرْتُمْ وَءَامَنتُمْ ۚ وَكَانَ ٱللَّهُ شَاكِرًا عَلِيمًۭا",
    "transliteration": "maa yafa'lul laahu bi 'azaabikum in shakartum wa aamantum; wa kaanal laahu Shaakiran 'Aleema",
    "translation": "Apa gunanya Allah menyeksa kamu sekiranya kamu bersyukur (akan nikmatNya) serta kamu beriman (kepadaNya)? Dan (ingatlah) Allah sentiasa Membalas dengan sebaik-baiknya (akan orang-orang yang bersyukur kepadaNya), lagi Maha Mengetahui (akan hal keadaan mereka)."
  },
  {
    "number": 148,
    "arabic": "۞ لَّا يُحِبُّ ٱللَّهُ ٱلْجَهْرَ بِٱلسُّوٓءِ مِنَ ٱلْقَوْلِ إِلَّا مَن ظُلِمَ ۚ وَكَانَ ٱللَّهُ سَمِيعًا عَلِيمًا",
    "transliteration": "Laa yuhibbullaahul jahra bis sooo'i minal qawli illaa man zulim; wa kaanallaahu Samee'an 'Aleeman",
    "translation": "Allah tidak suka kepada perkataan-perkataan buruk yang dikatakan dengan berterus-terang (untuk mendedahkan kejahatan orang); kecuali oleh orang yang dianiayakan. Dan (ingatlah) Allah sentiasa Mendengar, lagi Maha Mengetahui."
  },
  {
    "number": 149,
    "arabic": "إِن تُبْدُوا۟ خَيْرًا أَوْ تُخْفُوهُ أَوْ تَعْفُوا۟ عَن سُوٓءٍۢ فَإِنَّ ٱللَّهَ كَانَ عَفُوًّۭا قَدِيرًا",
    "transliteration": "in tubdoo khairann aw tukhfoohu aw ta'foo 'an sooo'in fa innal laaha kaana 'afuwwan Qadeeraa",
    "translation": "Jika kamu melahirkan sesuatu kebaikan, atau menyembunyikannya, atau kamu memaafkan kesalahan (yang dilakukan terhadap kamu), maka sesungguhnya Allah adalah Maha Pemaaf lagi Maha Kuasa."
  },
  {
    "number": 150,
    "arabic": "إِنَّ ٱلَّذِينَ يَكْفُرُونَ بِٱللَّهِ وَرُسُلِهِۦ وَيُرِيدُونَ أَن يُفَرِّقُوا۟ بَيْنَ ٱللَّهِ وَرُسُلِهِۦ وَيَقُولُونَ نُؤْمِنُ بِبَعْضٍۢ وَنَكْفُرُ بِبَعْضٍۢ وَيُرِيدُونَ أَن يَتَّخِذُوا۟ بَيْنَ ذَٰلِكَ سَبِيلًا",
    "transliteration": "Innal lazeena yakkfuroona billaahi wa Rusulihee wa yureedoona ai yufarriqoo bainal laahi wa Rusulihee wa yaqooloona nu'minu biba'dinw wa nakfuru biba' dinw wa yureedoona ai yattakhizoo baina zaalika sabeelaa",
    "translation": "Sesungguhnya orang-orang yang kufur ingkar kepada Allah dan Rasul-rasulNya, dan (orang-orang yang) hendak membeza-bezakan iman mereka di antara Allah dan Rasul-rasulNya, dan (orang-orang yang) berkata: \"Kami beriman kepada setengah Rasul-rasul itu dan kufur ingkar kepada setengahnya yang lain\", serta bertujuan hendak mengambil jalan lain antara iman dan kufur itu:"
  },
  {
    "number": 151,
    "arabic": "أُو۟لَٰٓئِكَ هُمُ ٱلْكَٰفِرُونَ حَقًّۭا ۚ وَأَعْتَدْنَا لِلْكَٰفِرِينَ عَذَابًۭا مُّهِينًۭا",
    "transliteration": "Ulaaa'ika humul kaafiroona haqqaa; wa a'tadnaa lilkaafireena 'azaabam muheenaa",
    "translation": "Mereka itulah orang-orang yang kafir dengan sebenar-benarnya. Dan Kami telah menyediakan bagi orang-orang kafir itu azab seksa yang menghina."
  },
  {
    "number": 152,
    "arabic": "وَٱلَّذِينَ ءَامَنُوا۟ بِٱللَّهِ وَرُسُلِهِۦ وَلَمْ يُفَرِّقُوا۟ بَيْنَ أَحَدٍۢ مِّنْهُمْ أُو۟لَٰٓئِكَ سَوْفَ يُؤْتِيهِمْ أُجُورَهُمْ ۗ وَكَانَ ٱللَّهُ غَفُورًۭا رَّحِيمًۭا",
    "transliteration": "Wallazeena aamanoo billaahi wa Rusulihee wa lam yufarriqoo baina ahadim minhum ulaaa'ika sawfa yu'teehim ujoorahum; wa kaanal laahu Ghafoorar Raheema",
    "translation": "Dan orang-orang yang beriman kepada Allah dan Rasul-rasulNya dan mereka pula tidak membeza-bezakan (imannya terhadap) seseorang pun di antara Rasul-rasul itu, (maka) mereka yang demikian, Allah akan memberi mereka pahala mereka. Dan (ingatlah) adalah Allah Maha Pengampun, lagi Maha Mengasihani."
  },
  {
    "number": 153,
    "arabic": "يَسْـَٔلُكَ أَهْلُ ٱلْكِتَٰبِ أَن تُنَزِّلَ عَلَيْهِمْ كِتَٰبًۭا مِّنَ ٱلسَّمَآءِ ۚ فَقَدْ سَأَلُوا۟ مُوسَىٰٓ أَكْبَرَ مِن ذَٰلِكَ فَقَالُوٓا۟ أَرِنَا ٱللَّهَ جَهْرَةًۭ فَأَخَذَتْهُمُ ٱلصَّٰعِقَةُ بِظُلْمِهِمْ ۚ ثُمَّ ٱتَّخَذُوا۟ ٱلْعِجْلَ مِنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَٰتُ فَعَفَوْنَا عَن ذَٰلِكَ ۚ وَءَاتَيْنَا مُوسَىٰ سُلْطَٰنًۭا مُّبِينًۭا",
    "transliteration": "yas'aluka Ahlul Kitaabi an tunazzila 'alaihim Kitaabam minas samaaa'i faqad sa aloo Moosaa akbara min zaalika faqaaloo arinal laaha jahratan fa akhazat humus saa'iqatu bizulmihim; summat takhazul 'ijla mim ba'di maa jaa'at humul baiyinaatu fa'afawnaa 'ann zaalik; wa aatainaa Moosaa sultaanam mubeenaa",
    "translation": "Ahli Kitab (kaum Yahudi) meminta kepadamu (wahai Muhammad) supaya engkau menurunkan kepada mereka sebuah Kitab dari langit. (Janganlah engkau merasa pelik), kerana sesungguhnya mereka telah meminta kepada Nabi Musa lebih besar dari itu. Mereka berkata: \"(Wahai Musa) perlihatkanlah Allah kepada kami dengan nyata (supaya kami dapat melihatNya dan percaya kepadaNya)\". Lalu mereka disambar oleh petir dengan sebab kezaliman mereka (menderhaka kepada Allah); kemudian mereka pula menyembah (patung) anak lembu sesudah datang kepada mereka keterangan-keterangan (mukjizat), lalu Kami maafkan mereka dari perbuatan yang sedemikian itu (ketika mereka bertaubat). Dan Kami telah memberi kepada Nabi Musa kekuasaan yang nyata (untuk mengalahkan kaum yang kafir itu)."
  },
  {
    "number": 154,
    "arabic": "وَرَفَعْنَا فَوْقَهُمُ ٱلطُّورَ بِمِيثَٰقِهِمْ وَقُلْنَا لَهُمُ ٱدْخُلُوا۟ ٱلْبَابَ سُجَّدًۭا وَقُلْنَا لَهُمْ لَا تَعْدُوا۟ فِى ٱلسَّبْتِ وَأَخَذْنَا مِنْهُم مِّيثَٰقًا غَلِيظًۭا",
    "transliteration": "Wa rafa'naa fawqahumut Toora bimeesaaqihim wa qulnaa lahumud khulul baaba sujjadanw wa qulnaa lahum laa ta'doo fis Sabti wa akhaznaa minhum meesaaqan ghaleezaa",
    "translation": "Dan Kami telah mengangkat \"Gunung Tursina\" ke atas mereka disebabkan (mereka ingkar akan) perjanjian setia mereka (mematuhi hukum-hukum Taurat), dan Kami perintahkan mereka: \"Masuklah kamu melalui pintu (negeri) itu dengan merendah diri\" dan Kami juga perintahkan mereka: \"Janganlah kamu melanggar perintah larangan yang ditentukan pada hari Sabtu\", dan Kami telah mengambil daripada mereka perjanjian setia yang teguh (yang mewajibkan mereka mengerjakan suruhan Allah dan meninggalkan laranganNya)."
  },
  {
    "number": 155,
    "arabic": "فَبِمَا نَقْضِهِم مِّيثَٰقَهُمْ وَكُفْرِهِم بِـَٔايَٰتِ ٱللَّهِ وَقَتْلِهِمُ ٱلْأَنۢبِيَآءَ بِغَيْرِ حَقٍّۢ وَقَوْلِهِمْ قُلُوبُنَا غُلْفٌۢ ۚ بَلْ طَبَعَ ٱللَّهُ عَلَيْهَا بِكُفْرِهِمْ فَلَا يُؤْمِنُونَ إِلَّا قَلِيلًۭا",
    "transliteration": "Fabimaa naqdihim meesaaqahum wa kufrihim bi Aayaatil laahi wa qatlihimul Ambiyaaa'a bighairi haqqinw wa qawlihim quloobunna ghulf; bal taba'al laahu 'alaihaa bikufrihim falaa yu'minoona illaa qaleelaa",
    "translation": "Maka (Kami laknatkan mereka) dengan sebab mereka mencabuli perjanjian setia mereka, dan mereka kufur ingkar akan ayat-ayat keterangan Allah, dan mereka pula membunuh Nabi-nabi dengan tiada sesuatu alasan yang benar, dan mereka juga mengatakan: \"Hati kami tertutup (tidak dapat menerima ajaran Islam yang dibawa oleh Nabi Muhammad)\". (Sebenarnya hati mereka tidak tertutup), bahkan Allah telah memeteraikan hati mereka disebabkan kekufuran mereka. Oleh itu mereka tidak beriman kecuali sedikit sahaja (di antaranya)."
  },
  {
    "number": 156,
    "arabic": "وَبِكُفْرِهِمْ وَقَوْلِهِمْ عَلَىٰ مَرْيَمَ بُهْتَٰنًا عَظِيمًۭا",
    "transliteration": "Wa bikufrihim wa qawlihim 'alaa Maryama buh taanan 'azeema",
    "translation": "Demikian juga (Kami laknatkan mereka) dangan sebab kekufuran mereka dan tuduhan mereka terhadap Maryam (dengan tuduhan yang amat dustanya."
  },
  {
    "number": 157,
    "arabic": "وَقَوْلِهِمْ إِنَّا قَتَلْنَا ٱلْمَسِيحَ عِيسَى ٱبْنَ مَرْيَمَ رَسُولَ ٱللَّهِ وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمْ ۚ وَإِنَّ ٱلَّذِينَ ٱخْتَلَفُوا۟ فِيهِ لَفِى شَكٍّۢ مِّنْهُ ۚ مَا لَهُم بِهِۦ مِنْ عِلْمٍ إِلَّا ٱتِّبَاعَ ٱلظَّنِّ ۚ وَمَا قَتَلُوهُ يَقِينًۢا",
    "transliteration": "Wa qawlihim innaa qatal nal maseeha 'Eesab-na-Maryama Rasoolal laahi wa maa qataloohu wa maa salaboohu wa laakin shubbiha lahum; wa innal lazeenakh talafoo fee lafee shakkim minh; maa lahum bihee min 'ilmin illat tibaa'az zann; wa maa qataloohu yaqeenaa",
    "translation": "Dan juga (disebabkan) dakwaan mereka dengan mengatakan: \"Sesungguhnya kami telah membunuh Al-Masih Isa Ibni Maryam, Rasul Allah\". Padahal mereka tidak membunuhnya dan tidak memalangnya (di kayu palang - salib), tetapi diserupakan bagi mereka (orang yang mereka bunuh itu seperti Nabi Isa). Dan Sesungguhnya orang-orang yang telah berselisih faham, mengenai Nabi Isa, sebenarnya mereka berada dalam keadaan syak (ragu-ragu) tentang menentukan (pembunuhannya). Tiada sesuatu pengetahuan pun bagi mereka mengenainya selain daripada mengikut sangkaan semata-mata; dan mereka tidak membunuhnya dengan yakin."
  },
  {
    "number": 158,
    "arabic": "بَل رَّفَعَهُ ٱللَّهُ إِلَيْهِ ۚ وَكَانَ ٱللَّهُ عَزِيزًا حَكِيمًۭا",
    "transliteration": "Bar rafa'ahul laahu ilayh; wa kaanal laahu 'Azeezan Hakeemaa",
    "translation": "Bahkan Allah telah mengangkat Nabi Isa kepadaNya; dan adalah Allah Maha Kuasa, lagi Maha Bijaksana."
  },
  {
    "number": 159,
    "arabic": "وَإِن مِّنْ أَهْلِ ٱلْكِتَٰبِ إِلَّا لَيُؤْمِنَنَّ بِهِۦ قَبْلَ مَوْتِهِۦ ۖ وَيَوْمَ ٱلْقِيَٰمَةِ يَكُونُ عَلَيْهِمْ شَهِيدًۭا",
    "transliteration": "Wa im min Ahlil Kitaabi illaa layu'minanna bihee qabla mawtihee wa Yawmal Qiyaamati yakoonu 'alaihim shaheedaa",
    "translation": "Dan tidak ada seorang pun dari kalangan ahli Kitab melainkan ia akan beriman kepada Nabi Isa sebelum matinya dan pada hari kiamat kelak Nabi Isa akan menjadi saksi terhadap mereka."
  },
  {
    "number": 160,
    "arabic": "فَبِظُلْمٍۢ مِّنَ ٱلَّذِينَ هَادُوا۟ حَرَّمْنَا عَلَيْهِمْ طَيِّبَٰتٍ أُحِلَّتْ لَهُمْ وَبِصَدِّهِمْ عَن سَبِيلِ ٱللَّهِ كَثِيرًۭا",
    "transliteration": "Fabizulmin minal lazeena haadoo harramnaa 'alaihim taiyibaatin uhillat lahum wa bisadihim 'an sabeelil laahi kaseeraa",
    "translation": "Maka disebabkan kezaliman yang amat besar dari perbuatan orang-orang Yahudi, Kami haramkan atas mereka makanan yang baik-baik yang pernah dihalalkan bagi mereka, dan disebabkan mereka banyak menghalang manusia dari jalan Allah."
  },
  {
    "number": 161,
    "arabic": "وَأَخْذِهِمُ ٱلرِّبَوٰا۟ وَقَدْ نُهُوا۟ عَنْهُ وَأَكْلِهِمْ أَمْوَٰلَ ٱلنَّاسِ بِٱلْبَٰطِلِ ۚ وَأَعْتَدْنَا لِلْكَٰفِرِينَ مِنْهُمْ عَذَابًا أَلِيمًۭا",
    "transliteration": "Wa akhzihimur ribaa wa qad nuhoo 'anhu wa aklihim amwaalan naasi bilbaatil; wa a'tadnaa lilkaafireena minhum 'azaaban aleema",
    "translation": "Dan juga (disebabkan) mereka mengambil riba padahal mereka telah dilarang melakukannya, dan (disebabkan) mereka memakan harta orang dengan jalan yang salah (tipu, judi dan sebagainya). Dan (ingatlah) Kami telah menyediakan bagi orang-orang yang kafir di antara mereka, azab seksa yang tidak terperi sakitnya."
  },
  {
    "number": 162,
    "arabic": "لَّٰكِنِ ٱلرَّٰسِخُونَ فِى ٱلْعِلْمِ مِنْهُمْ وَٱلْمُؤْمِنُونَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ ۚ وَٱلْمُقِيمِينَ ٱلصَّلَوٰةَ ۚ وَٱلْمُؤْتُونَ ٱلزَّكَوٰةَ وَٱلْمُؤْمِنُونَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ أُو۟لَٰٓئِكَ سَنُؤْتِيهِمْ أَجْرًا عَظِيمًا",
    "transliteration": "Laakinir raasikhoona fil'ilmi minhum walmu'minoona yu'minoona bimaaa unzila ilaika wa maaa unzila min qablika walmuqeemeenas Salaata walmu'toonaz Zakaata walmu 'minoona billaahi wal yawmil Aakhir; ulaaa'ika sanu'teehim ajran 'azeemaa",
    "translation": "Tetapi orang-orang yang teguh serta mendalam ilmu pengetahuannya di antara mereka dan orang-orang yang beriman, sekaliannya beriman dengan apa yang telah diturunkan kepadamu (Al-Quran), dan kepada apa yang telah diturunkan dahulu daripadamu, - khasnya orang-orang yang mendirikan sembahyang, dan orang-orang yang menunaikan zakat, serta yang beriman kepada Allah dan hari akhirat; mereka itulah yang Kami akan berikan kepadanya pahala (balasan) yang amat besar."
  },
  {
    "number": 163,
    "arabic": "۞ إِنَّآ أَوْحَيْنَآ إِلَيْكَ كَمَآ أَوْحَيْنَآ إِلَىٰ نُوحٍۢ وَٱلنَّبِيِّۦنَ مِنۢ بَعْدِهِۦ ۚ وَأَوْحَيْنَآ إِلَىٰٓ إِبْرَٰهِيمَ وَإِسْمَٰعِيلَ وَإِسْحَٰقَ وَيَعْقُوبَ وَٱلْأَسْبَاطِ وَعِيسَىٰ وَأَيُّوبَ وَيُونُسَ وَهَٰرُونَ وَسُلَيْمَٰنَ ۚ وَءَاتَيْنَا دَاوُۥدَ زَبُورًۭا",
    "transliteration": "innaaa awhainaaa ilaika kamaaa awhainaaa ilaa Noohinw wan nabiyyeena mim ba'dih; wa awhainaaa ilaaa ibraaheema wa Ismaaa'eela wa Ishaaqa wa Ya'qooba wal Asbaati wa 'Eesaa wa Ayyooba wa Yoonusa wa haaroona wa Sulaimaan; wa aatainaa Daawooda Zabooraa",
    "translation": "Sungguhnya Kami telah memberikan wahyu kepadamu (wahai Muhammad), sebagaimana Kami telah memberikan wahyu kepada Nabi Nuh, dan Nabi-nabi yang diutus kemudian daripadanya; dan Kami juga telah memberikan wahyu kepada Nabi Ibrahim, dan Nabi Ismail, dan Nabi Ishak, dan Nabi Yaakub, serta Nabi-nabi keturunannya, dan Nabi Isa, dan Nabi Ayub, dan Nabi Yunus, dan Nabi Harun, dan Nabi Sulaiman; dan juga Kami telah memberikan kepada Nabi Daud: Kitab Zabur."
  },
  {
    "number": 164,
    "arabic": "وَرُسُلًۭا قَدْ قَصَصْنَٰهُمْ عَلَيْكَ مِن قَبْلُ وَرُسُلًۭا لَّمْ نَقْصُصْهُمْ عَلَيْكَ ۚ وَكَلَّمَ ٱللَّهُ مُوسَىٰ تَكْلِيمًۭا",
    "transliteration": "Wa Rusulan qad qasas naahum 'alaika min qablu wa Rusulal lam naqsushum 'alaik; wa kallamallaahu Moosaa takleemaa",
    "translation": "Dan (Kami telah mengutuskan) beberapa orang Rasul yang telah Kami ceritakan kepadamu dahulu sebelum ini, dan Rasul-rasul yang tidak Kami ceritakan hal mereka kepadamu. Dan Allah telah berkata-kata kepada Nabi Musa dengan kata-kata (secara langsung, tidak ada perantaraan)."
  },
  {
    "number": 165,
    "arabic": "رُّسُلًۭا مُّبَشِّرِينَ وَمُنذِرِينَ لِئَلَّا يَكُونَ لِلنَّاسِ عَلَى ٱللَّهِ حُجَّةٌۢ بَعْدَ ٱلرُّسُلِ ۚ وَكَانَ ٱللَّهُ عَزِيزًا حَكِيمًۭا",
    "transliteration": "Rusulam mubashshireena wa munzireena li'allaa yakoona linnaasi 'alal laahi hujjatum ba'dar Rusul; wa kaanallaahu 'Azeezan Hakeema",
    "translation": "Rasul-rasul (yang Kami telah utuskan itu semuanya) pembawa khabar gembira (kepada orang-orang yang beriman), dan pembawa amaran (kepada orang-orang yang kafir dan yang berbuat maksiat), supaya tidak ada bagi manusia sesuatu hujah (atau sebarang alasan untuk berdalih pada hari kiamat kelak) terhadap Allah sesudah mengutuskan Rasul-rasul itu. Dan (ingatlah) Allah Maha Kuasa, lagi Maha Bijaksana."
  },
  {
    "number": 166,
    "arabic": "لَّٰكِنِ ٱللَّهُ يَشْهَدُ بِمَآ أَنزَلَ إِلَيْكَ ۖ أَنزَلَهُۥ بِعِلْمِهِۦ ۖ وَٱلْمَلَٰٓئِكَةُ يَشْهَدُونَ ۚ وَكَفَىٰ بِٱللَّهِ شَهِيدًا",
    "transliteration": "Laakinil laahu yashhadu bimaaa anzala ilaika anzalahoo bi'ilmihee wal malaaa'ikatu yashhadoon; wa kafaa billaahi Shaheeda",
    "translation": "(Orang-orang kafir itu tidak mahu mengakui apa yang telah diturunkan Allah kepadamu wahai Muhammad), tetapi Allah sentiasa menjadi saksi akan kebenaran Al-Quran yang telah diturunkanNya kepadamu. Allah menurunkannya dengan ilmuNya, dan malaikat juga turut menjadi saksi. Dan cukuplah Allah menjadi saksi (akan kebenaran Al-Quran ini)."
  },
  {
    "number": 167,
    "arabic": "إِنَّ ٱلَّذِينَ كَفَرُوا۟ وَصَدُّوا۟ عَن سَبِيلِ ٱللَّهِ قَدْ ضَلُّوا۟ ضَلَٰلًۢا بَعِيدًا",
    "transliteration": "Innal lazeena kafaroo wa saddoo 'an sabeelil laahi qad dalloo dalaalam ba'eedaa",
    "translation": "Sesungguhnya orang-orang yang kafir serta menghalang orang-orang lain dari jalan Allah (ugama Islam), sebenarnya mereka telah sesat dengan kesesatan yang amat jauh."
  },
  {
    "number": 168,
    "arabic": "إِنَّ ٱلَّذِينَ كَفَرُوا۟ وَظَلَمُوا۟ لَمْ يَكُنِ ٱللَّهُ لِيَغْفِرَ لَهُمْ وَلَا لِيَهْدِيَهُمْ طَرِيقًا",
    "transliteration": "Innal lazeenakafaroo wa zalamoo lam yakkunillaahu liyaghfira lahum wa laa liyahdiyahum tareeqaa",
    "translation": "Sesungguhnya orang-orang yang kafir serta berlaku zalim, Allah tidak sekali-kali akan mengampunkan mereka dan tidak akan menunjukkan jalan kepada mereka:"
  },
  {
    "number": 169,
    "arabic": "إِلَّا طَرِيقَ جَهَنَّمَ خَٰلِدِينَ فِيهَآ أَبَدًۭا ۚ وَكَانَ ذَٰلِكَ عَلَى ٱللَّهِ يَسِيرًۭا",
    "transliteration": "Illaa tareeqa jahannamma khaalideena feehaa abadaa; wa kaana zaalika 'alal laahi yaseeraa",
    "translation": "Selain dari jalan neraka jahanam, yang mereka akan kekal di dalamnya selama-lamanya; dan balasan yang demikian itu adalah mudah bagi Allah."
  },
  {
    "number": 170,
    "arabic": "يَٰٓأَيُّهَا ٱلنَّاسُ قَدْ جَآءَكُمُ ٱلرَّسُولُ بِٱلْحَقِّ مِن رَّبِّكُمْ فَـَٔامِنُوا۟ خَيْرًۭا لَّكُمْ ۚ وَإِن تَكْفُرُوا۟ فَإِنَّ لِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۚ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًۭا",
    "transliteration": "Yaaa aiyuhan naasu qad jaaa'akumur Rasoolu bilhaqqi mir Rabbikum fa ammminoo khairal lakum; wa in takfuroo fainnna lillaahi maa fis samaawaati wal ard; wa kaanal laahu 'Aleemann hakeemaa",
    "translation": "Wahai sekalian umat manusia! Sesungguhnya telah datang kepada kamu Rasul Allah (Muhammad s.a.w) dengan membawa kebenaran dari Tuhan kamu, maka berimanlah kamu (kerana yang demikian itu) amatlah baiknya bagi kamu. Dan jika kamu kufur ingkar (maka kekufuran kamu itu tidak mendatangkan kerugian apa-apa kepada Allah), kerana sesungguhnya bagi Allah jualah segala yang ada di langit dan di bumi; dan Allah sentiasa Mengetahui lagi Maha Bijaksana."
  },
  {
    "number": 171,
    "arabic": "يَٰٓأَهْلَ ٱلْكِتَٰبِ لَا تَغْلُوا۟ فِى دِينِكُمْ وَلَا تَقُولُوا۟ عَلَى ٱللَّهِ إِلَّا ٱلْحَقَّ ۚ إِنَّمَا ٱلْمَسِيحُ عِيسَى ٱبْنُ مَرْيَمَ رَسُولُ ٱللَّهِ وَكَلِمَتُهُۥٓ أَلْقَىٰهَآ إِلَىٰ مَرْيَمَ وَرُوحٌۭ مِّنْهُ ۖ فَـَٔامِنُوا۟ بِٱللَّهِ وَرُسُلِهِۦ ۖ وَلَا تَقُولُوا۟ ثَلَٰثَةٌ ۚ ٱنتَهُوا۟ خَيْرًۭا لَّكُمْ ۚ إِنَّمَا ٱللَّهُ إِلَٰهٌۭ وَٰحِدٌۭ ۖ سُبْحَٰنَهُۥٓ أَن يَكُونَ لَهُۥ وَلَدٌۭ ۘ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ وَكَفَىٰ بِٱللَّهِ وَكِيلًۭا",
    "transliteration": "Yaaa Ahlal Kitaabi laa taghloo fee deenikum wa laa taqooloo 'alal laahi illalhaqq; innamal Maseehu 'Eesab-nu-Maryamma Rasoolul laahi wa Kalimatuhooo alqaahaaa ilaa Maryamma wa roohum minhum fa aaminoo billaahi wa Rusulihee wa laa taqooloo salaasah; intahoo khairallakum; innamal laahu Ilaahunw Waahid, Subhaanahooo ani yakoona lahoo walad; lahoo maa fissamaawaati wa maa fil ard; wa kafaa billaahi Wakeelaa",
    "translation": "Wahai Ahli kitab (Yahudi dan Nasrani)! Janganlah kamu melampaui batas dalam perkara ugama kamu, dan janganlah kamu mengatakan sesuatu terhadap Allah melainkan yang benar; sesungguhnya Al Masih Isa ibni Maryam itu hanya seorang pesuruh Allah dan Kalimah Allah yang telah disampaikanNya kepada Maryam, dan (ia juga tiupan) roh daripadaNya. Maka berimanlah kamu kepada Allah dan Rasul-rasulNya, dan janganlah kamu mengatakan: \"(Tuhan itu) tiga\". Berhentilah (daripada mengatakan yang demikian), supaya menjadi kebaikan bagi kamu. Hanyasanya Allah ialah Tuhan Yang Maha Esa, Maha Suci Allah daripada mempunyai anak. Bagi Allah jualah segala yang ada di langit dan yang ada di bumi. Dan cukuplah menjadi Pengawal (Yang Mentadbirkan sekalian makhlukNya)."
  },
  {
    "number": 172,
    "arabic": "لَّن يَسْتَنكِفَ ٱلْمَسِيحُ أَن يَكُونَ عَبْدًۭا لِّلَّهِ وَلَا ٱلْمَلَٰٓئِكَةُ ٱلْمُقَرَّبُونَ ۚ وَمَن يَسْتَنكِفْ عَنْ عِبَادَتِهِۦ وَيَسْتَكْبِرْ فَسَيَحْشُرُهُمْ إِلَيْهِ جَمِيعًۭا",
    "transliteration": "Lanny yastankifal Maseehu ai yakoona 'abdal lillaahi wa lal malaaa'ikatul muqarraboon; wa mai yastankif 'an ibaadatihee wa yastakbir fasa yahshuruhum ilaihi jamee'aa",
    "translation": "(Nabi Isa) Al-Masih tidak sekali-kali enggan dan angkuh daripada menjadi hamba bagi Allah, demikian juga (sikap) malaikat yang sentiasa berdamping (dengan Allah). Dan sesiapa yang enggan dan angkuh daripada beribadat (menyembah dan memperhambakan diri) kepada Allah, serta ia berlaku sombong takbur, maka Allah akan menghimpunkan mereka semua kepadaNya."
  },
  {
    "number": 173,
    "arabic": "فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ فَيُوَفِّيهِمْ أُجُورَهُمْ وَيَزِيدُهُم مِّن فَضْلِهِۦ ۖ وَأَمَّا ٱلَّذِينَ ٱسْتَنكَفُوا۟ وَٱسْتَكْبَرُوا۟ فَيُعَذِّبُهُمْ عَذَابًا أَلِيمًۭا وَلَا يَجِدُونَ لَهُم مِّن دُونِ ٱللَّهِ وَلِيًّۭا وَلَا نَصِيرًۭا",
    "transliteration": "Fa ammal lazeena aamanoo wa 'amilus saalihaati fa yuwaffeehim ujoorahum wa yazeeduhum min fadlihee wa ammal lazeenas tankafoo wastakbaroo fa yu'azzibuhum 'azaaban aleemanw wa laa yajidoona lahum min doonil laahi waliyyanw wa laa naseeraa",
    "translation": "Sesudah itu, orang-orang yang beriman beramal soleh, Allah akan menyempurnakan bagi mereka pahala (balasan) mereka, dan Ia akan menambahkan lagi limpah kurniaNya kepada mereka. Sebaliknya orang-orang yang enggan beribadat kepada Allah dan berlaku sombong takbur, maka Allah akan menyeksa mereka dengan azab seksa yang tidak terperi sakitnya, dan mereka pula tidak akan memperoleh sesiapa pun - yang lain dari Allah - yang akan menjadi pelindung atau penolong bagi mereka."
  },
  {
    "number": 174,
    "arabic": "يَٰٓأَيُّهَا ٱلنَّاسُ قَدْ جَآءَكُم بُرْهَٰنٌۭ مِّن رَّبِّكُمْ وَأَنزَلْنَآ إِلَيْكُمْ نُورًۭا مُّبِينًۭا",
    "transliteration": "yaa aiyuhan naasu qad jaaa'akum burhaanum mir Rabbikum wa anzalnaaa ilaikum Nooram Mubeena",
    "translation": "Wahai sekalian umat manusia! Sesungguhnya telah datang kepada kamu: Bukti dari Tuhan kamu, dan Kami pula telah menurunkan kepada kamu (Al-Quran sebagai) Nur (cahaya) yang menerangi (segala apa jua yang membawa kejayaan di dunia ini dan kebahagiaan yang kekal di akhirat kelak)."
  },
  {
    "number": 175,
    "arabic": "فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ بِٱللَّهِ وَٱعْتَصَمُوا۟ بِهِۦ فَسَيُدْخِلُهُمْ فِى رَحْمَةٍۢ مِّنْهُ وَفَضْلٍۢ وَيَهْدِيهِمْ إِلَيْهِ صِرَٰطًۭا مُّسْتَقِيمًۭا",
    "transliteration": "Fa ammal lazeena aamanoo billaahi wa'tasamoo bihee fasa yudkhiluhum fee rah matim minhu wa fadlinw wa yahdeehim ilaihi Siraatam Mustaqeema",
    "translation": "Oleh itu, orang-orang yang beriman kepada Allah dan berpegang teguh kepada (ajaran Al-Quran) ini, maka Allah akan memasukkan mereka ke dalam rahmatNya (yang khas iaitu Syurga) dan limpah kurniaNya (yang tidak terkira), dan Allah akan menunjukkan mereka ke jalan yang lurus (jalan ugama Islam), yang membawa kepadaNya."
  },
  {
    "number": 176,
    "arabic": "يَسْتَفْتُونَكَ قُلِ ٱللَّهُ يُفْتِيكُمْ فِى ٱلْكَلَٰلَةِ ۚ إِنِ ٱمْرُؤٌا۟ هَلَكَ لَيْسَ لَهُۥ وَلَدٌۭ وَلَهُۥٓ أُخْتٌۭ فَلَهَا نِصْفُ مَا تَرَكَ ۚ وَهُوَ يَرِثُهَآ إِن لَّمْ يَكُن لَّهَا وَلَدٌۭ ۚ فَإِن كَانَتَا ٱثْنَتَيْنِ فَلَهُمَا ٱلثُّلُثَانِ مِمَّا تَرَكَ ۚ وَإِن كَانُوٓا۟ إِخْوَةًۭ رِّجَالًۭا وَنِسَآءًۭ فَلِلذَّكَرِ مِثْلُ حَظِّ ٱلْأُنثَيَيْنِ ۗ يُبَيِّنُ ٱللَّهُ لَكُمْ أَن تَضِلُّوا۟ ۗ وَٱللَّهُ بِكُلِّ شَىْءٍ عَلِيمٌۢ",
    "transliteration": "Yastaftoonaka qulillaahu yafteekum fil kalaalah; inimru'un halaka laisa lahoo waladunw wa lahoo ukhtun falahaa nisfu maa tarak; wa huwa yarisuhaaa il lam yakkul lahaa walad; fa in kaanatas nataini falahumas sulusaani mimmmaa tarak; wa in kaanooo ikhwatar rijaalanw wa nisaaa'an faliz zakari mislu hazzil unsayayn; yubaiyinullaahu lakum an tadilloo; wallaahu bikulli shai'in Aleem",
    "translation": "Mereka (orang-orang Islam umatmu) meminta fatwa kepadamu (Wahai Muhammad mengenai masalah Kalaalah). Katakanlah: \"Allah memberi fatwa kepada kamu di dalam perkara Kalaalah itu, iaitu jika seseorang mati yang tidak mempunyai anak dan ia mempunyai seorang saudara perempuan, maka bagi saudara perempuan itu satu perdua dari harta yang ditinggalkan oleh si mati; dan ia pula (saudara lelaki itu) mewarisi (semua harta) saudara perempuannya, jika saudara perempuannya tidak mempunyai anak. Kalau pula saudara perempuannya itu dua orang, maka keduanya mendapat dua pertiga dari harta yang di tinggalkan oleh si mati. Dan sekiranya mereka (saudara-saudaranya itu) ramai, lelaki dan perempuan, maka bahagian seorang lelaki menyamai bahagian dua orang perempuan\". Allah menerangkan (hukum ini) kepada kamu supaya kamu tidak sesat. Dan (ingatlah) Allah Maha Mengetahui akan tiap-tiap sesuatu."
  }
];

// ================================================
(function () {
  function initAnNisaTool() {
    const container = document.getElementById("surah-an-nisa-container");
    if (!container || !Array.isArray(AN_NISA_VERSES) || !AN_NISA_VERSES.length) {
      console.warn("Surah An-Nisa tool: container atau data ayat tiada.");
      return;
    }

    const versesContainer = container.querySelector("#versesContainer");
    const loadingIndicator = container.querySelector("#loadingIndicator");
    const playPauseBtn = container.querySelector("#playPauseBtn");
    const playIcon = container.querySelector("#playIcon");
    const pauseIcon = container.querySelector("#pauseIcon");
    const progressBar = container.querySelector("#progressBar");
    const currentVerseLabel = container.querySelector("#currentVerse");
    const audioTimeLabel = container.querySelector("#audioTime");
    const qariSelector = container.querySelector("#qariSelector");
    const settingsToggle = container.querySelector("#settingsToggle");
    const settingsContent = container.querySelector("#settingsContent");
    const arabicSizeRange = container.querySelector("#arabicSize");
    const arabicSizeValue = container.querySelector("#arabicSizeValue");
    const translationSizeRange = container.querySelector("#translationSize");
    const translationSizeValue = container.querySelector("#translationSizeValue");
    const showTranslitCheckbox = container.querySelector("#showTransliteration");
    const autoScrollCheckbox = container.querySelector("#autoScroll");
    const toastEl = document.getElementById("toast");

    if (!versesContainer || !playPauseBtn || !progressBar) {
      console.warn("Surah An-Nisa tool: elemen penting tak lengkap.");
      return;
    }

    const STORAGE_KEY_BOOKMARKS = "ilmualam_an_nisa_bookmarks_v1";
    const STORAGE_KEY_SETTINGS = "ilmualam_an_nisa_settings_v1";

    const state = {
      currentIndex: 0,
      isPlaying: false,
      isAutoPlay: false,
      autoScroll: true,
      bookmarks: new Set(),
    };

    const audio = new Audio();
    audio.preload = "none";

    // ==============================
    // Qari config (per-ayat audio)
    // ==============================
    const QARI_CONFIG = {
      mishary: {
        name: "Mishary Rashid Alafasy",
        getUrl: (verseNumber) => {
          const v = String(verseNumber).padStart(3, "0");
          // Surah 004, ayat NNN
          return (
            "https://everyayah.com/data/Alafasy_128kbps/004" + v + ".mp3"
          );
        },
      },
      husary: {
        name: "Mahmoud Khalil Al-Husary",
        getUrl: (verseNumber) => {
          const v = String(verseNumber).padStart(3, "0");
          return (
            "https://everyayah.com/data/Husary_128kbps_Mujawwad/004" +
            v +
            ".mp3"
          );
        },
      },
      sudais: {
        name: "Abdul Rahman Al-Sudais",
        getUrl: (verseNumber) => {
          const v = String(verseNumber).padStart(3, "0");
          return (
            "https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/004" +
            v +
            ".mp3"
          );
        },
      },
    };

    // ==============================
    // Util kecil
    // ==============================
    function showToast(message) {
      if (!toastEl) return;
      toastEl.textContent = message;
      toastEl.classList.add("show");
      setTimeout(() => {
        toastEl.classList.remove("show");
      }, 2200);
    }

    function formatTime(sec) {
      if (!isFinite(sec)) return "0:00";
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return m + ":" + String(s).padStart(2, "0");
    }

    function isValidIndex(i) {
      return i >= 0 && i < AN_NISA_VERSES.length;
    }

    function getCurrentQariKey() {
      const val = qariSelector ? qariSelector.value : "mishary";
      return QARI_CONFIG[val] ? val : "mishary";
    }

    function getAudioUrlForIndex(index) {
      const verse = AN_NISA_VERSES[index];
      if (!verse) return null;
      const verseNumber = verse.number || index + 1;
      const key = getCurrentQariKey();
      return QARI_CONFIG[key].getUrl(verseNumber);
    }

    // ==============================
    // Settings + bookmarks
    // ==============================
    function loadSettings() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_SETTINGS);
        if (!raw) return;
        const saved = JSON.parse(raw);

        if (typeof saved.arabicSize === "number" && arabicSizeRange) {
          arabicSizeRange.value = saved.arabicSize;
          container.style.setProperty(
            "--an-nisa-arabic-font",
            saved.arabicSize + "px"
          );
          if (arabicSizeValue) arabicSizeValue.textContent = saved.arabicSize + "px";
        }
        if (
          typeof saved.translationSize === "number" &&
          translationSizeRange
        ) {
          translationSizeRange.value = saved.translationSize;
          container.style.setProperty(
            "--an-nisa-translation-font",
            saved.translationSize + "px"
          );
          if (translationSizeValue)
            translationSizeValue.textContent = saved.translationSize + "px";
        }
        if (typeof saved.showTranslit === "boolean" && showTranslitCheckbox) {
          showTranslitCheckbox.checked = saved.showTranslit;
          container.setAttribute(
            "data-show-translit",
            saved.showTranslit ? "1" : "0"
          );
        }
        if (typeof saved.autoScroll === "boolean" && autoScrollCheckbox) {
          autoScrollCheckbox.checked = saved.autoScroll;
          state.autoScroll = saved.autoScroll;
        }
      } catch (e) {
        console.warn("An-Nisa: gagal load settings", e);
      }
    }

    function saveSettings() {
      try {
        const payload = {
          arabicSize: arabicSizeRange ? Number(arabicSizeRange.value) : 28,
          translationSize: translationSizeRange
            ? Number(translationSizeRange.value)
            : 16,
          showTranslit: showTranslitCheckbox
            ? !!showTranslitCheckbox.checked
            : true,
          autoScroll: autoScrollCheckbox ? !!autoScrollCheckbox.checked : true,
        };
        localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(payload));
      } catch (e) {
        // ignore
      }
    }

    function loadBookmarks() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
        if (!raw) return;
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) {
          state.bookmarks = new Set(arr);
        }
      } catch (e) {
        console.warn("An-Nisa: gagal load bookmarks", e);
      }
    }

    function saveBookmarks() {
      try {
        localStorage.setItem(
          STORAGE_KEY_BOOKMARKS,
          JSON.stringify(Array.from(state.bookmarks))
        );
      } catch (e) {
        // ignore
      }
    }

    // ==============================
    // UI: active ayat + scroll
    // ==============================
    function setActiveVerse(index) {
      const all = versesContainer.querySelectorAll(".verse");
      all.forEach((el) => {
        const idx = Number(el.getAttribute("data-index"));
        if (idx === index) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    }

    function scrollToVerse(index) {
      if (!state.autoScroll) return;
      const verseEl = versesContainer.querySelector(
        '.verse[data-index="' + index + '"]'
      );
      if (!verseEl) return;
      const rect = verseEl.getBoundingClientRect();
      const offset = 100; // atas sikit supaya nampak header/tombol
      const absoluteTop = window.scrollY + rect.top - offset;
      window.scrollTo({ top: absoluteTop, behavior: "smooth" });
    }

    function updatePlayPauseUI() {
      if (!playIcon || !pauseIcon) return;
      if (state.isPlaying) {
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
      } else {
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
      }
    }

    function setCurrentVerseLabel(index) {
      if (!currentVerseLabel) return;
      currentVerseLabel.textContent = "Ayat " + (index + 1);
    }

    function updateAudioTimeUI() {
      if (!audioTimeLabel) return;
      audioTimeLabel.textContent =
        formatTime(audio.currentTime || 0) +
        " / " +
        formatTime(audio.duration || 0);
    }

    function updateProgressBar() {
      if (!progressBar) return;
      if (!audio.duration || !isFinite(audio.duration)) {
        progressBar.style.width = "0%";
        return;
      }
      const ratio = audio.currentTime / audio.duration;
      const pct = Math.max(0, Math.min(1, ratio)) * 100;
      progressBar.style.width = pct + "%";
    }

    // ==============================
    // AUDIO CONTROL
    // ==============================
    function stopAudio() {
      state.isPlaying = false;
      state.isAutoPlay = false;
      audio.pause();
      updatePlayPauseUI();
    }

    function playVerseAtIndex(index, autoPlayChain) {
      if (!isValidIndex(index)) {
        stopAudio();
        return;
      }
      state.currentIndex = index;
      state.isPlaying = true;
      if (typeof autoPlayChain === "boolean") {
        state.isAutoPlay = autoPlayChain;
      }

      const url = getAudioUrlForIndex(index);
      if (url) {
        audio.src = url;
      }
      audio.currentTime = 0;
      audio
        .play()
        .catch((err) => {
          console.warn("Audio play blocked", err);
          showToast("Tekan sekali lagi untuk mula main audio.");
        });

      setCurrentVerseLabel(index);
      setActiveVerse(index);
      scrollToVerse(index);
      updatePlayPauseUI();
    }

    function handleGlobalPlayPause() {
      if (state.isPlaying) {
        audio.pause();
        state.isPlaying = false;
        state.isAutoPlay = false;
        updatePlayPauseUI();
      } else {
        playVerseAtIndex(state.currentIndex || 0, true);
      }
    }

    function handleAudioEnded() {
      if (!state.isAutoPlay) {
        state.isPlaying = false;
        updatePlayPauseUI();
        return;
      }
      const next = state.currentIndex + 1;
      if (isValidIndex(next)) {
        playVerseAtIndex(next, true);
      } else {
        state.isPlaying = false;
        state.isAutoPlay = false;
        updatePlayPauseUI();
        showToast("Tamat bacaan Surah An-Nisa.");
      }
    }

    function handleProgressClick(evt) {
      const rect = evt.currentTarget.getBoundingClientRect();
      const x = evt.clientX - rect.left;
      const ratio = x / rect.width;
      if (audio.duration && isFinite(audio.duration)) {
        audio.currentTime =
          audio.duration * Math.max(0, Math.min(1, ratio));
      }
    }

    // ==============================
    // Copy / Share / Bookmark
    // ==============================
    function copyVerseText(index) {
      const v = AN_NISA_VERSES[index];
      if (!v) return;
      const text =
        "Surah An-Nisa, Ayat " +
        (index + 1) +
        "\n\n" +
        (v.arabic || "") +
        "\n" +
        (v.transliteration || "") +
        "\n" +
        (v.translation || "");

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(() => showToast("Ayat disalin."))
          .catch(() => showToast("Gagal salin ayat."));
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
          showToast("Ayat disalin.");
        } catch (e) {
          showToast("Gagal salin ayat.");
        }
        document.body.removeChild(ta);
      }
    }

    function shareVerse(index) {
      const v = AN_NISA_VERSES[index];
      if (!v) return;
      const text =
        "Surah An-Nisa, Ayat " +
        (index + 1) +
        "\n\n" +
        (v.arabic || "") +
        "\n" +
        (v.translation || "");

      if (navigator.share) {
        navigator
          .share({
            title: "Surah An-Nisa Ayat " + (index + 1),
            text,
            url: window.location.href,
          })
          .catch(() => {
            // user cancel / unsupported
          });
      } else {
        copyVerseText(index);
      }
    }

    function toggleBookmark(index, btnEl) {
      const key = String(index + 1);
      if (state.bookmarks.has(key)) {
        state.bookmarks.delete(key);
        if (btnEl) btnEl.classList.remove("is-bookmarked");
        showToast("Tandabuku dibuang.");
      } else {
        state.bookmarks.add(key);
        if (btnEl) btnEl.classList.add("is-bookmarked");
        showToast("Ayat ditandabuku.");
      }
      saveBookmarks();
    }

    // ==============================
    // Render semua ayat
    // ==============================
    function renderVerses() {
      versesContainer.innerHTML = "";
      AN_NISA_VERSES.forEach((v, index) => {
        const verseEl = document.createElement("div");
        verseEl.className = "verse";
        verseEl.setAttribute("data-index", index);

        const header = document.createElement("div");
        header.className = "verse-header";

        const numberBtn = document.createElement("button");
        numberBtn.type = "button";
        numberBtn.className = "verse-number";
        numberBtn.textContent =
          v.number != null ? v.number : index + 1;
        header.appendChild(numberBtn);

        const actions = document.createElement("div");
        actions.className = "verse-actions";

        // Play
        const playBtn = document.createElement("button");
        playBtn.type = "button";
        playBtn.className = "verse-action-btn verse-play-btn";
        playBtn.innerHTML =
          '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>';
        actions.appendChild(playBtn);

        // Copy
        const copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "verse-action-btn verse-copy-btn";
        copyBtn.innerHTML =
          '<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z"></path></svg>';
        actions.appendChild(copyBtn);

        // Share
        const shareBtn = document.createElement("button");
        shareBtn.type = "button";
        shareBtn.className = "verse-action-btn verse-share-btn";
        shareBtn.innerHTML =
          '<svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a2.48 2.48 0 0 0 0-1.39l7.02-4.11A2.5 2.5 0 1 0 14.5 5a2.5 2.5 0 0 0 .06.54L7.6 9.65a2.5 2.5 0 1 0 0 4.69l6.96 4.06c-.03.17-.06.34-.06.52a2.5 2.5 0 1 0 2.5-2.84z"></path></svg>';
        actions.appendChild(shareBtn);

        // Bookmark
        const bookmarkBtn = document.createElement("button");
        bookmarkBtn.type = "button";
        bookmarkBtn.className = "verse-action-btn verse-bookmark-btn";
        bookmarkBtn.innerHTML =
          '<svg viewBox="0 0 24 24"><path d="M17 3H7a2 2 0 0 0-2 2v16l7-3 7 3V5a2 2 0 0 0-2-2z"></path></svg>';
        if (state.bookmarks.has(String(index + 1))) {
          bookmarkBtn.classList.add("is-bookmarked");
        }
        actions.appendChild(bookmarkBtn);

        header.appendChild(actions);
        verseEl.appendChild(header);

        // Arab
        const arabicEl = document.createElement("div");
        arabicEl.className = "verse-arabic";
        arabicEl.textContent = v.arabic || "";
        verseEl.appendChild(arabicEl);

        // Rumi
        const translitEl = document.createElement("div");
        translitEl.className = "verse-transliteration";
        translitEl.textContent = v.transliteration || "";
        verseEl.appendChild(translitEl);

        // Terjemahan
        const translationEl = document.createElement("p");
        translationEl.className = "verse-translation";
        translationEl.textContent = v.translation || "";
        verseEl.appendChild(translationEl);

        versesContainer.appendChild(verseEl);
      });

      setActiveVerse(state.currentIndex);
    }

    // ==============================
    // Event wiring
    // ==============================
    playPauseBtn.addEventListener("click", handleGlobalPlayPause);

    if (qariSelector) {
      qariSelector.addEventListener("change", () => {
        if (state.isPlaying) {
          playVerseAtIndex(state.currentIndex, state.isAutoPlay);
        }
      });
    }

    if (settingsToggle && settingsContent) {
      settingsToggle.addEventListener("click", () => {
        const isVisible = settingsContent.style.display === "block";
        settingsContent.style.display = isVisible ? "none" : "block";
      });
    }

    if (arabicSizeRange && arabicSizeValue) {
      arabicSizeRange.addEventListener("input", () => {
        const val = Number(arabicSizeRange.value);
        container.style.setProperty("--an-nisa-arabic-font", val + "px");
        arabicSizeValue.textContent = val + "px";
        saveSettings();
      });
    }

    if (translationSizeRange && translationSizeValue) {
      translationSizeRange.addEventListener("input", () => {
        const val = Number(translationSizeRange.value);
        container.style.setProperty(
          "--an-nisa-translation-font",
          val + "px"
        );
        translationSizeValue.textContent = val + "px";
        saveSettings();
      });
    }

    if (showTranslitCheckbox) {
      showTranslitCheckbox.addEventListener("change", () => {
        const on = !!showTranslitCheckbox.checked;
        container.setAttribute("data-show-translit", on ? "1" : "0");
        saveSettings();
      });
    }

    if (autoScrollCheckbox) {
      autoScrollCheckbox.addEventListener("change", () => {
        state.autoScroll = !!autoScrollCheckbox.checked;
        saveSettings();
      });
    }

    const progressWrapper = container.querySelector(".audio-progress");
    if (progressWrapper) {
      progressWrapper.addEventListener("click", handleProgressClick);
    }

    // Delegation untuk semua button ayat
    versesContainer.addEventListener("click", (evt) => {
      const target = evt.target;
      const verseEl = target.closest(".verse");
      if (!verseEl) return;
      const index = Number(verseEl.getAttribute("data-index"));
      if (!isValidIndex(index)) return;

      if (target.closest(".verse-number")) {
        // klik nombor ayat → terus play & auto chain
        playVerseAtIndex(index, true);
        return;
      }
      if (target.closest(".verse-play-btn")) {
        playVerseAtIndex(index, true);
        return;
      }
      if (target.closest(".verse-copy-btn")) {
        copyVerseText(index);
        return;
      }
      if (target.closest(".verse-share-btn")) {
        shareVerse(index);
        return;
      }
      if (target.closest(".verse-bookmark-btn")) {
        const btnEl = target.closest(".verse-bookmark-btn");
        toggleBookmark(index, btnEl);
        return;
      }
    });

    // AUDIO events
    audio.addEventListener("timeupdate", () => {
      updateAudioTimeUI();
      updateProgressBar();
    });

    audio.addEventListener("ended", handleAudioEnded);

    audio.addEventListener("play", () => {
      state.isPlaying = true;
      updatePlayPauseUI();
    });

    audio.addEventListener("pause", () => {
      state.isPlaying = false;
      updatePlayPauseUI();
    });

    // ==============================
    // INIT
    // ==============================
    loadBookmarks();
    renderVerses();
    loadSettings();

    container.setAttribute(
      "data-show-translit",
      showTranslitCheckbox && showTranslitCheckbox.checked ? "1" : "0"
    );
    if (loadingIndicator) {
      loadingIndicator.style.display = "none";
    }
    setCurrentVerseLabel(state.currentIndex);
    updateAudioTimeUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAnNisaTool);
  } else {
    initAnNisaTool();
  }
})();
