import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Item, CATEGORIES } from '../../models/item.model';

@Component({
    selector: 'app-item-card',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule
    ],
    templateUrl: './item-card.component.html',
    styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
    @Input() item!: Item;

    getCategoryIcon(category: string): string {
        const cat = CATEGORIES.find(c => c.value === category);
        return cat ? cat.icon : 'category';
    }

    getCategoryLabel(category: string): string {
        const cat = CATEGORIES.find(c => c.value === category);
        return cat ? cat.label : category;
    }

    formatDate(date: Date): string {
        return new Date(date).toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }
}
