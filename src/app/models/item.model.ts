// Eşya veri modeli
export interface Item {
    id: number;
    type: 'lost' | 'found';
    category: ItemCategory;
    title: string;
    description: string;
    date: Date;
    location: string;
    contactName: string;
    contactPhone: string;
    contactEmail: string;
    status: 'active' | 'resolved';
    imageUrl?: string;
    createdAt: Date;
}

// Kategori türleri
export type ItemCategory =
    | 'telefon'
    | 'kitap'
    | 'cuzdan'
    | 'anahtar'
    | 'canta'
    | 'gozluk'
    | 'elektronik'
    | 'giysi'
    | 'diger';

// Kategori bilgileri
export const CATEGORIES: { value: ItemCategory; label: string; icon: string }[] = [
    { value: 'telefon', label: 'Telefon', icon: 'smartphone' },
    { value: 'kitap', label: 'Kitap', icon: 'menu_book' },
    { value: 'cuzdan', label: 'Cüzdan', icon: 'account_balance_wallet' },
    { value: 'anahtar', label: 'Anahtar', icon: 'key' },
    { value: 'canta', label: 'Çanta', icon: 'backpack' },
    { value: 'gozluk', label: 'Gözlük', icon: 'visibility' },
    { value: 'elektronik', label: 'Elektronik', icon: 'devices' },
    { value: 'giysi', label: 'Giysi', icon: 'checkroom' },
    { value: 'diger', label: 'Diğer', icon: 'category' }
];

// Konum bilgileri  
export const LOCATIONS: string[] = [
    'Ana Bina - Giriş',
    'Ana Bina - Kantin',
    'Kütüphane',
    'Spor Salonu',
    'Konferans Salonu',
    'A Blok',
    'B Blok',
    'C Blok',
    'Laboratuvar',
    'Yemekhane',
    'Otopark',
    'Bahçe',
    'Diğer'
];
