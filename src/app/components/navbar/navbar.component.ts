import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    navLinks = [
        { path: '/', label: 'Ana Sayfa', icon: 'home' },
        { path: '/kayip-bildir', label: 'Kayıp Bildir', icon: 'report_problem' },
        { path: '/buluntu-bildir', label: 'Buluntu Bildir', icon: 'add_circle' },
        { path: '/ara', label: 'Ara', icon: 'search' }
    ];
}
