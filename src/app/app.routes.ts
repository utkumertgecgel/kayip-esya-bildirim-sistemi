import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReportLostComponent } from './pages/report-lost/report-lost.component';
import { ReportFoundComponent } from './pages/report-found/report-found.component';
import { SearchComponent } from './pages/search/search.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Ana Sayfa - Kayıp Eşya Bildirimi'
    },
    {
        path: 'kayip-bildir',
        component: ReportLostComponent,
        title: 'Kayıp Eşya Bildir - Kayıp Eşya Bildirimi'
    },
    {
        path: 'buluntu-bildir',
        component: ReportFoundComponent,
        title: 'Bulunan Eşya Bildir - Kayıp Eşya Bildirimi'
    },
    {
        path: 'ara',
        component: SearchComponent,
        title: 'Eşya Ara - Kayıp Eşya Bildirimi'
    },
    {
        path: 'esya/:id',
        component: ItemDetailComponent,
        title: 'Eşya Detayı - Kayıp Eşya Bildirimi'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
