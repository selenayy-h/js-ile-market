let urun1 = { isim: "Elma", uretimYeri: "Amasya", fiyat: 15, raf: "1.5.RAF", stok: 10 }
let urun2 = { isim: "Domates", uretimYeri: "Antalya", fiyat: 8, raf: "2.3.RAF", stok: 20 }
let urun3 = { isim: "Muz", uretimYeri: "Mersin", fiyat: 20, raf: "3.4.RAF", stok: 15 }
let urun4 = { isim: "Salatalık", uretimYeri: "Bursa", fiyat: 7, raf: "4.1.RAF", stok: 30 }
let urun5 = { isim: "Portakal", uretimYeri: "Adana", fiyat: 10, raf: "5.3.RAF", stok: 25 }

let urunler = [urun1, urun2, urun3, urun4, urun5];

let raf11 = { kod: "1.1.RAF", goster: false }
let raf12 = { kod: "1.2.RAF", goster: false }
let raf13 = { kod: "1.3.RAF", goster: false }
let raf14 = { kod: "1.4.RAF", goster: false }
let raf15 = { kod: "1.5.RAF", goster: false }

let raf21 = { kod: "2.1.RAF", goster: false }
let raf22 = { kod: "2.2.RAF", goster: false }
let raf23 = { kod: "2.3.RAF", goster: false }
let raf24 = { kod: "2.4.RAF", goster: false }
let raf25 = { kod: "2.5.RAF", goster: false }

let raf31 = { kod: "3.1.RAF", goster: false }
let raf32 = { kod: "3.2.RAF", goster: false }
let raf33 = { kod: "3.3.RAF", goster: false }
let raf34 = { kod: "3.4.RAF", goster: false }
let raf35 = { kod: "3.5.RAF", goster: false }

let raf41 = { kod: "4.1.RAF", goster: false }
let raf42 = { kod: "4.2.RAF", goster: false }
let raf43 = { kod: "4.3.RAF", goster: false }
let raf44 = { kod: "4.4.RAF", goster: false }
let raf45 = { kod: "4.5.RAF", goster: false }

let raf51 = { kod: "5.1.RAF", goster: false }
let raf52 = { kod: "5.2.RAF", goster: false }
let raf53 = { kod: "5.3.RAF", goster: false }
let raf54 = { kod: "5.4.RAF", goster: false }
let raf55 = { kod: "5.5.RAF", goster: false }

let raflar = [
    [raf51, raf52, raf53, raf54, raf55],
    [raf41, raf42, raf43, raf44, raf45],
    [raf31, raf32, raf33, raf34, raf35],
    [raf21, raf22, raf23, raf24, raf25],
    [raf11, raf12, raf13, raf14, raf15]
];

function rafOlustur() {
    console.clear();
    let satir = "";
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---") + "";
        }
        console.log(satir);
        console.log("--------------------");
        satir = "";
    }
}

function kodBul(urunIsmi) {
    let rafKod = null;
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(urunIsmi.toUpperCase(), 0)) {
            rafKod = urun.raf;
            console.log(`Bulunan ürün: ${urun.isim}, Stok: ${urun.stok}, Fiyat: ${urun.fiyat} TL`);
        }
    });
    return rafKod;
}

function raftaGoster(rafKodu) {
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (raflar[i][j].kod == rafKodu) {
                raflar[i][j].goster = true;
                break;
            }
        }
    }
}

rafOlustur();

let urunIsmi = prompt("Lütfen bir ürün ismi giriniz.");
let rafKod = kodBul(urunIsmi);

if (rafKod != null) {
    raftaGoster(rafKod);
    rafOlustur();
    
    let urun = urunler.find(urun => urun.raf === rafKod);
    let miktar = parseInt(prompt("Kaç adet almak istiyorsunuz?"));
    
    if (miktar <= urun.stok) {
        let toplamFiyat = miktar * urun.fiyat;
        alert(`Toplam fiyat: ${toplamFiyat} TL`);
    } else {
        alert("Stokta yeterli ürün bulunmamaktadır.");
    }
} else {
    alert("Girdiğiniz ürün marketimizde bulunmamaktadır.");
}
