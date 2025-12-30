import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item, ItemCategory } from '../models/item.model';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    // Mock data - gerçek veritabanı yerine kullanılıyor
    private mockItems: Item[] = [
        {
            id: 1,
            type: 'lost',
            category: 'telefon',
            title: 'Siyah iPhone 13',
            description: 'Siyah renkli iPhone 13, ekranında küçük çizik var. Pembe kılıflı.',
            date: new Date('2025-12-20'),
            location: 'Kütüphane',
            contactName: 'Ahmet Yılmaz',
            contactPhone: '0532 123 45 67',
            contactEmail: 'ahmet@email.com',
            status: 'active',
            createdAt: new Date('2025-12-20T14:30:00')
        },
        {
            id: 2,
            type: 'found',
            category: 'cuzdan',
            title: 'Kahverengi Deri Cüzdan',
            description: 'Kahverengi deri erkek cüzdanı. İçinde kimlik ve kartlar var.',
            date: new Date('2025-12-22'),
            location: 'Yemekhane',
            contactName: 'Güvenlik Birimi',
            contactPhone: '0212 452 45 00',
            contactEmail: 'guvenlik@email.com',
            status: 'active',
            createdAt: new Date('2025-12-22T12:15:00')
        },
        {
            id: 3,
            type: 'lost',
            category: 'kitap',
            title: 'Veri Yapıları ve Algoritmalar Kitabı',
            description: 'Mavi kapaklı, Cormen - Algoritmalara Giriş kitabı. İçinde notlar var.',
            date: new Date('2025-12-19'),
            location: 'A Blok',
            contactName: 'Zeynep Kaya',
            contactPhone: '0555 987 65 43',
            contactEmail: 'zeynep.kaya@email.com',
            status: 'active',
            createdAt: new Date('2025-12-19T16:45:00')
        },
        {
            id: 4,
            type: 'found',
            category: 'anahtar',
            title: 'Araba Anahtarı - Renault',
            description: 'Renault marka araba anahtarı, siyah kumanda üzerinde.',
            date: new Date('2025-12-23'),
            location: 'Otopark',
            contactName: 'Güvenlik Birimi',
            contactPhone: '0212 452 45 00',
            contactEmail: 'guvenlik@email.com',
            status: 'active',
            createdAt: new Date('2025-12-23T09:20:00')
        },
        {
            id: 5,
            type: 'lost',
            category: 'canta',
            title: 'Gri Laptop Çantası',
            description: 'Gri renkli laptop çantası, içinde şarj aleti ve mouse var.',
            date: new Date('2025-12-21'),
            location: 'Kantin',
            contactName: 'Mehmet Demir',
            contactPhone: '0544 321 98 76',
            contactEmail: 'mehmet.d@email.com',
            status: 'active',
            createdAt: new Date('2025-12-21T11:30:00')
        },
        {
            id: 6,
            type: 'found',
            category: 'gozluk',
            title: 'Siyah Çerçeveli Gözlük',
            description: 'Siyah plastik çerçeveli numaralı gözlük, Ray-Ban kutusuyla birlikte.',
            date: new Date('2025-12-24'),
            location: 'Konferans Salonu',
            contactName: 'Personel Ofisi',
            contactPhone: '0212 452 45 10',
            contactEmail: 'personel@email.com',
            status: 'active',
            createdAt: new Date('2025-12-24T10:00:00')
        },
        {
            id: 7,
            type: 'lost',
            category: 'elektronik',
            title: 'Kablosuz Kulaklık - AirPods',
            description: 'Beyaz Apple AirPods Pro, şarj kutusunda A.Y. baş harfleri kazılı.',
            date: new Date('2025-12-18'),
            location: 'Spor Salonu',
            contactName: 'Ali Yıldız',
            contactPhone: '0533 456 78 90',
            contactEmail: 'ali.yildiz@email.com',
            status: 'resolved',
            createdAt: new Date('2025-12-18T17:45:00')
        },
        {
            id: 8,
            type: 'found',
            category: 'giysi',
            title: 'Lacivert Mont',
            description: 'Lacivert renkli kışlık mont, XL beden, North Face marka.',
            date: new Date('2025-12-17'),
            location: 'Ana Bina - Giriş',
            contactName: 'Danışma',
            contactPhone: '0212 452 45 00',
            contactEmail: 'danisma@email.com',
            status: 'active',
            createdAt: new Date('2025-12-17T08:30:00')
        }
    ];

    private itemsSubject = new BehaviorSubject<Item[]>(this.mockItems);

    constructor() { }

    // Tüm eşyaları getir
    getItems(): Observable<Item[]> {
        return this.itemsSubject.asObservable();
    }

    // Tek bir eşya getir
    getItemById(id: number): Item | undefined {
        return this.mockItems.find(item => item.id === id);
    }

    // Kayıp eşyaları getir
    getLostItems(): Item[] {
        return this.mockItems.filter(item => item.type === 'lost');
    }

    // Bulunan eşyaları getir
    getFoundItems(): Item[] {
        return this.mockItems.filter(item => item.type === 'found');
    }

    // Son eklenen eşyaları getir
    getRecentItems(count: number = 5): Item[] {
        return [...this.mockItems]
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            .slice(0, count);
    }

    // Aktif eşyaları getir
    getActiveItems(): Item[] {
        return this.mockItems.filter(item => item.status === 'active');
    }

    // Eşya ara ve filtrele
    searchItems(
        query: string = '',
        type: 'all' | 'lost' | 'found' = 'all',
        category: ItemCategory | 'all' = 'all',
        location: string = 'all'
    ): Item[] {
        return this.mockItems.filter(item => {
            const matchesQuery = query === '' ||
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase());

            const matchesType = type === 'all' || item.type === type;
            const matchesCategory = category === 'all' || item.category === category;
            const matchesLocation = location === 'all' || item.location === location;

            return matchesQuery && matchesType && matchesCategory && matchesLocation;
        });
    }

    // Yeni kayıp eşya bildir
    reportLostItem(item: Omit<Item, 'id' | 'type' | 'status' | 'createdAt'>): Item {
        const newItem: Item = {
            ...item,
            id: this.generateId(),
            type: 'lost',
            status: 'active',
            createdAt: new Date()
        };
        this.mockItems.unshift(newItem);
        this.itemsSubject.next(this.mockItems);
        return newItem;
    }

    // Yeni bulunan eşya bildir
    reportFoundItem(item: Omit<Item, 'id' | 'type' | 'status' | 'createdAt'>): Item {
        const newItem: Item = {
            ...item,
            id: this.generateId(),
            type: 'found',
            status: 'active',
            createdAt: new Date()
        };
        this.mockItems.unshift(newItem);
        this.itemsSubject.next(this.mockItems);
        return newItem;
    }

    // Eşya durumunu güncelle
    updateItemStatus(id: number, status: 'active' | 'resolved'): void {
        const item = this.mockItems.find(i => i.id === id);
        if (item) {
            item.status = status;
            this.itemsSubject.next(this.mockItems);
        }
    }

    // Benzersiz ID oluştur
    private generateId(): number {
        return Math.max(...this.mockItems.map(i => i.id), 0) + 1;
    }

    // Kategoriye göre eşya sayısını getir
    getItemCountByCategory(): { category: string; count: number }[] {
        const counts = new Map<string, number>();
        this.mockItems.forEach(item => {
            counts.set(item.category, (counts.get(item.category) || 0) + 1);
        });
        return Array.from(counts.entries()).map(([category, count]) => ({ category, count }));
    }
}
