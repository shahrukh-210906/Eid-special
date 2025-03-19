function showDua() {
    document.getElementById("duaText").style.display = "block";
    new Audio('dua.mp3').play();
}
function showHadith() {
    const hadiths = [
        {
            "arabic": "وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ",
            "english": "And those who restrain anger and pardon people – and Allah loves the doers of good. (Quran 3:134)",
            "urdu": "اور جو غصے کو پی جاتے ہیں اور لوگوں کو معاف کر دیتے ہیں، اور اللہ احسان کرنے والوں سے محبت کرتا ہے۔ (القرآن 3:134)"
        },
        {
            "arabic": "وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ",
            "english": "And when they are angry, they forgive. (Quran 42:37)",
            "urdu": "اور جب وہ غصے میں آتے ہیں تو معاف کر دیتے ہیں۔ (القرآن 42:37)"
        },
        {
            "arabic": "قَالَ رَسُولُ اللَّهِ ﷺ: لَا تَغْضَبْ",
            "english": "The Messenger of Allah ﷺ said: ‘Do not get angry.’ (Bukhari 6116)",
            "urdu": "رسول اللہ ﷺ نے فرمایا: 'غصہ مت کرو۔' (بخاری 6116)"
        },
        {
            "arabic": "إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
            "english": "The strong man is not the one who wrestles, but the one who controls himself in anger. (Bukhari 6114)",
            "urdu": "طاقتور وہ نہیں جو کشتی میں غالب آئے، بلکہ وہ ہے جو غصے کے وقت اپنے آپ کو قابو میں رکھے۔ (بخاری 6114)"
        },
        {
            "arabic": "إِذَا غَضِبَ أَحَدُكُمْ فَلْيَسْكُتْ",
            "english": "If one of you gets angry, let him be silent. (Ahmad 2137)",
            "urdu": "اگر تم میں سے کسی کو غصہ آئے تو اسے خاموش رہنا چاہیے۔ (احمد 2137)"
        },
        {
            "arabic": "إِذَا غَضِبَ أَحَدُكُمْ وَهُوَ قَائِمٌ فَلْيَجْلِسْ",
            "english": "If one of you gets angry while standing, let him sit down. (Abu Dawood 4782)",
            "urdu": "اگر تم میں سے کوئی غصے میں ہو اور کھڑا ہو تو بیٹھ جائے۔ (ابو داؤد 4782)"
        },
        {
            "arabic": "إِنَّ الْغَضَبَ مِنَ الشَّيْطَانِ",
            "english": "Indeed, anger is from Satan. (Abu Dawood 4766)",
            "urdu": "بے شک غصہ شیطان کی طرف سے ہے۔ (ابو داؤد 4766)"
        },
        {
            "arabic": "اللَّهُمَّ أَذْهِبْ عَنِّي غَضَبِي",
            "english": "O Allah, remove my anger. (Tirmidhi 3435)",
            "urdu": "اے اللہ! میرا غصہ دور فرما۔ (ترمذی 3435)"
        },
        {
            "arabic": "إِذَا غَضِبْتَ فَتَوَضَّأْ",
            "english": "If you become angry, perform ablution. (Abu Dawood 4784)",
            "urdu": "جب تمہیں غصہ آئے تو وضو کر لو۔ (ابو داؤد 4784)"
        },
        {
            "arabic": "الْغَضَبُ يُفْسِدُ الْإِيمَانَ",
            "english": "Anger ruins faith. (Baihaqi 5616)",
            "urdu": "غصہ ایمان کو برباد کر دیتا ہے۔ (بیہقی 5616)"
        }
    ];

    // Select a random hadith
    const randomHadith = hadiths[Math.floor(Math.random() * hadiths.length)];

    // Format and display the hadith
    document.getElementById("hadithText").innerHTML = `
        <p style="font-size: 20px; text-align: center;">${randomHadith.arabic}</p>
        <p style="font-size: 18px; text-align: center;">${randomHadith.english}</p>
        <p style="font-size: 18px; text-align: center;">${randomHadith.urdu}</p>
    `;

    document.getElementById("hadithText").style.display = "block";
}

function showWuduReminder() {
    document.getElementById("wuduText").style.display = "block";
}