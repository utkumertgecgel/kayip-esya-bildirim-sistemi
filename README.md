# Kayıp Eşya Bildirim Sistemi

Kampüslerde kayıp ve bulunan eşyaların bildirilmesi, takibi ve sahiplerine ulaştırılması için modern web uygulaması.

![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Material](https://img.shields.io/badge/Angular%20Material-19-757575?style=flat-square&logo=material-design)

## 🚀 Özellikler

- ✅ **Kayıp Eşya Bildirimi** - Form ile kayıp eşya bildirme
- ✅ **Bulunan Eşya Bildirimi** - Bulunan eşyaları sisteme ekleme
- ✅ **Arama ve Filtreleme** - Kategori, konum ve tür bazlı filtreleme
- ✅ **Detay Görüntüleme** - Eşya detayları ve iletişim bilgileri
- ✅ **Durum Takibi** - Aktif/Teslim Edildi durumu
- ✅ **Modern UI** - Material Design ile profesyonel arayüz

## 📸 Ekran Görüntüleri

### Ana Sayfa
- Hero section ve istatistik kartları
- Son kayıp ve bulunan eşyalar
- Nasıl çalışır rehberi

### Bildirim Formları
- Validasyonlu form alanları
- Kategori ve konum seçimi
- İletişim bilgileri girişi

## 🛠️ Teknolojiler

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| Angular | 19.x | Frontend framework |
| Angular Material | 19.x | UI bileşen kütüphanesi |
| TypeScript | 5.x | Programlama dili |
| SCSS | - | Stil tanımlamaları |
| RxJS | - | Reaktif programlama |

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Navigasyon
│   │   └── item-card/       # Eşya kartı
│   ├── pages/
│   │   ├── home/            # Ana sayfa
│   │   ├── report-lost/     # Kayıp bildir
│   │   ├── report-found/    # Bulunan bildir
│   │   ├── search/          # Arama
│   │   └── item-detail/     # Detay
│   ├── services/
│   │   └── item.service.ts  # Veri servisi
│   └── models/
│       └── item.model.ts    # Veri modeli
└── styles.scss              # Global stiller
```

## ⚡ Kurulum

```bash
# Repoyu klonla
git clone https://github.com/YOUR_USERNAME/kayip-esya-bildirimi.git

# Klasöre gir
cd kayip-esya-bildirimi

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run start
```

Tarayıcıda `http://localhost:4200` adresini aç.

## 📝 Kullanım

1. **Ana Sayfa** - Son bildirimleri görüntüle
2. **Kayıp Bildir** - Kaybettiğin eşyayı bildir
3. **Bulunan Bildir** - Bulduğun eşyayı bildir
4. **Ara** - Eşyaları filtrele ve ara
5. **Detay** - Eşya detaylarını ve iletişim bilgilerini gör

## 🔧 Geliştirme

```bash
# Geliştirme sunucusu
npm run start

# Production build
npm run build

# Testleri çalıştır
npm run test
```

## 📄 Lisans

MIT License - [LICENSE](LICENSE)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
