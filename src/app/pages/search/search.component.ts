import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { ItemService } from '../../services/item.service';
import { Item, CATEGORIES, LOCATIONS, ItemCategory } from '../../models/item.model';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatChipsModule,
        ItemCardComponent
    ],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
    searchForm: FormGroup;
    categories = CATEGORIES;
    locations = LOCATIONS;
    filteredItems: Item[] = [];
    totalResults = 0;

    constructor(
        private fb: FormBuilder,
        private itemService: ItemService,
        private route: ActivatedRoute
    ) {
        this.searchForm = this.fb.group({
            query: [''],
            type: ['all'],
            category: ['all'],
            location: ['all']
        });
    }

    ngOnInit(): void {
        // URL'den parametreleri al
        this.route.queryParams.subscribe(params => {
            if (params['type']) {
                this.searchForm.patchValue({ type: params['type'] });
            }
            if (params['category']) {
                this.searchForm.patchValue({ category: params['category'] });
            }
            this.search();
        });

        // Form değişikliklerini dinle
        this.searchForm.valueChanges.subscribe(() => {
            this.search();
        });
    }

    search(): void {
        const { query, type, category, location } = this.searchForm.value;
        this.filteredItems = this.itemService.searchItems(
            query,
            type,
            category as ItemCategory | 'all',
            location
        );
        this.totalResults = this.filteredItems.length;
    }

    clearFilters(): void {
        this.searchForm.reset({
            query: '',
            type: 'all',
            category: 'all',
            location: 'all'
        });
    }

    getCategoryLabel(category: string): string {
        const cat = CATEGORIES.find(c => c.value === category);
        return cat ? cat.label : category;
    }
}
