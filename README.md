# 🔍 Kayıp Eşya Bildirim Sistemi

Kampüslerde, iş yerlerinde ve toplu yaşam alanlarında kayıp ve bulunan eşyaların bildirilmesi, takibi ve sahiplerine ulaştırılması için geliştirilmiş modern web uygulaması.

![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Material](https://img.shields.io/badge/Angular%20Material-19-757575?style=flat-square&logo=material-design)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Demo](#-demo)
- [Teknolojiler](#️-teknolojiler)
- [Kurulum](#-kurulum)
- [Proje Yapısı](#-proje-yapısı)
- [API Entegrasyonu](#-api-entegrasyonu)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)

---

## 🚀 Özellikler

### Ana Özellikler
- ✅ **Kayıp Eşya Bildirimi** - Detaylı form ile kayıp eşya bildirme
- ✅ **Bulunan Eşya Bildirimi** - Bulunan eşyaları sisteme ekleme
- ✅ **Gelişmiş Arama** - Kategori, konum ve tür bazlı filtreleme
- ✅ **Detay Görüntüleme** - Eşya detayları ve iletişim bilgileri
- ✅ **Durum Takibi** - Aktif/Teslim Edildi durum yönetimi
- ✅ **İstatistik Dashboard** - Anlık kayıp/bulunan eşya istatistikleri

### Teknik Özellikler
- 🎨 **Modern UI/UX** - Material Design 3 ile profesyonel arayüz
- 📱 **Responsive Tasarım** - Mobil ve masaüstü uyumlu
- ⚡ **Hızlı Performans** - Angular 19 standalone components
- 🔒 **Form Validasyonları** - Güçlü input doğrulama
- 🎯 **SEO Dostu** - Meta tag optimizasyonu
- 🌐 **Türkçe Arayüz** - Tam Türkçe dil desteği

---

## 🖼️ Demo

### Ana Sayfa
- Hero section ve çağrı aksiyonu butonları
- Gerçek zamanlı istatistik kartları (Kayıp, Bulunan, Teslim Edildi)
- Son bildirilen kayıp ve bulunan eşyalar
- Adım adım kullanım rehberi

### Bildirim Formları
- Çok adımlı form yapısı (Eşya Bilgileri → Tarih/Konum → İletişim)
- Canlı validasyon mesajları
- Kategori bazlı ikon desteği
- Konum seçimi dropdown menü

### Arama ve Filtreleme
- Metin bazlı arama
- Tür toggle (Tümü / Kayıp / Bulundu)
- Kategori ve konum filtreleri
- Sonuç sayısı gösterimi

---

## 🛠️ Teknolojiler

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| **Angular** | 19.x | Modern frontend framework |
| **Angular Material** | 19.x | UI bileşen kütüphanesi |
| **TypeScript** | 5.x | Tip güvenli JavaScript |
| **SCSS** | - | Gelişmiş CSS preprocessor |
| **RxJS** | 7.x | Reaktif programlama |

### Neden Bu Teknolojiler?

- **Angular 19**: Standalone components ile daha hızlı bundle boyutu, signals desteği
- **Material Design**: Tutarlı ve erişilebilir UI bileşenleri
- **TypeScript**: Derleme zamanı hata yakalama, IDE desteği
- **RxJS**: Asenkron veri akışı yönetimi

---

## ⚡ Kurulum

### Gereksinimler
- Node.js 18+ 
- npm 9+
- Angular CLI (opsiyonel)

### Adımlar

```bash
# 1. Repoyu klonla
git clone https://github.com/utkumertgecgel/kayip-esya-bildirim-sistemi.git

# 2. Proje klasörüne gir
cd kayip-esya-bildirim-sistemi

# 3. Bağımlılıkları yükle
npm install

# 4. Geliştirme sunucusunu başlat
npm run start

# 5. Tarayıcıda aç
# http://localhost:4200
```

### Diğer Komutlar

```bash
# Production build
npm run build

# Unit testleri çalıştır
npm run test

# Linting
npm run lint
```

---

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── components/              # Paylaşılan bileşenler
│   │   ├── navbar/              # Navigasyon çubuğu
│   │   └── item-card/           # Eşya kart bileşeni
│   │
│   ├── pages/                   # Sayfa bileşenleri
│   │   ├── home/                # Ana sayfa (dashboard)
│   │   ├── report-lost/         # Kayıp eşya bildirimi
│   │   ├── report-found/        # Bulunan eşya bildirimi
│   │   ├── search/              # Arama ve filtreleme
│   │   └── item-detail/         # Eşya detay sayfası
│   │
│   ├── services/                # Servis katmanı
│   │   └── item.service.ts      # Eşya CRUD operasyonları
│   │
│   ├── models/                  # Veri modelleri
│   │   └── item.model.ts        # Item interface ve tipler
│   │
│   ├── app.routes.ts            # Routing yapılandırması
│   ├── app.config.ts            # Uygulama konfigürasyonu
│   └── app.ts                   # Root component
│
├── styles.scss                  # Global stiller ve tema
└── index.html                   # Ana HTML şablonu
```

---

## 🔌 API Entegrasyonu

Bu proje **API-Ready** olarak tasarlanmıştır. Şu an mock data ile çalışmakta olup, backend entegrasyonu için hazırdır.

### Mevcut Servis Yapısı

```typescript
// item.service.ts
@Injectable({ providedIn: 'root' })
export class ItemService {
  // CRUD operasyonları
  getItems(): Observable<Item[]>
  getItemById(id: number): Item | undefined
  reportLostItem(item: Item): Item
  reportFoundItem(item: Item): Item
  updateItemStatus(id: number, status: string): void
  searchItems(query, type, category, location): Item[]
}
```

### Backend Entegrasyonu İçin

`item.service.ts` dosyasında mock data yerine HTTP istekleri eklenebilir:

```typescript
// Örnek API entegrasyonu
private apiUrl = 'https://api.example.com/items';

getItems(): Observable<Item[]> {
  return this.http.get<Item[]>(this.apiUrl);
}

reportLostItem(item: Item): Observable<Item> {
  return this.http.post<Item>(`${this.apiUrl}/lost`, item);
}
```

### Önerilen Backend Teknolojileri
- **Node.js + Express** - JavaScript/TypeScript backend
- **Spring Boot** - Java enterprise çözümü
- **Django/FastAPI** - Python backend
- **Firebase** - Serverless çözüm

### Gelecek Entegrasyonlar
- 🔐 JWT Authentication
- 📧 E-posta bildirim sistemi
- 📸 Fotoğraf yükleme (Cloudinary/S3)
- 🔔 Push notification desteği
- 📊 Admin dashboard

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! 

### Nasıl Katkıda Bulunabilirsiniz?

1. Bu repoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request açın

### Geliştirme Önerileri
- [ ] Kullanıcı authentication sistemi
- [ ] Fotoğraf yükleme desteği
- [ ] E-posta/SMS bildirimleri
- [ ] PWA (Progressive Web App) desteği
- [ ] Dark mode
- [ ] Çoklu dil desteği

---

## 📝 Kullanım Senaryoları

### Senaryo 1: Kayıp Eşya Bildirimi
1. Ana sayfadan "Kayıp Eşya Bildir" butonuna tıklayın
2. Eşya kategorisini seçin (Telefon, Cüzdan, Anahtar vb.)
3. Eşyanın detaylı açıklamasını yazın
4. Kaybettiğiniz tarih ve konumu belirtin
5. İletişim bilgilerinizi girin
6. Formu gönderin

### Senaryo 2: Eşya Arama
1. Menüden "Ara" sayfasına gidin
2. Arama kutusuna eşya adı veya açıklama yazın
3. Filtreleri kullanarak sonuçları daraltın
4. Eşleşen eşyanın detaylarına tıklayın
5. İletişim bilgilerinden sahibiyle bağlantı kurun

---

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 📞 İletişim

- **GitHub:** [@utkumertgecgel](https://github.com/utkumertgecgel)

---

<p align="center">
  ⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
</p>
