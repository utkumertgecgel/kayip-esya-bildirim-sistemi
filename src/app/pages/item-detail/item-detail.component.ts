import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ItemService } from '../../services/item.service';
import { Item, CATEGORIES } from '../../models/item.model';

@Component({
    selector: 'app-item-detail',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatDividerModule,
        MatSnackBarModule
    ],
    templateUrl: './item-detail.component.html',
    styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent implements OnInit {
    item: Item | undefined;
    notFound = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private itemService: ItemService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.item = this.itemService.getItemById(Number(id));
            if (!this.item) {
                this.notFound = true;
            }
        } else {
            this.notFound = true;
        }
    }

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
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }

    markAsResolved(): void {
        if (this.item) {
            this.itemService.updateItemStatus(this.item.id, 'resolved');
            this.snackBar.open('Eşya durumu güncellendi!', 'Tamam', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top'
            });
            this.item = this.itemService.getItemById(this.item.id);
        }
    }

    copyContactInfo(): void {
        if (this.item) {
            const contactInfo = `${this.item.contactName} - ${this.item.contactPhone} - ${this.item.contactEmail}`;
            navigator.clipboard.writeText(contactInfo);
            this.snackBar.open('İletişim bilgileri kopyalandı!', 'Tamam', {
                duration: 2000,
                horizontalPosition: 'center',
                verticalPosition: 'top'
            });
        }
    }

    goBack(): void {
        this.router.navigate(['/ara']);
    }
}
