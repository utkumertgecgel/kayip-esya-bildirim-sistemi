import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        ItemCardComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    recentLostItems: Item[] = [];
    recentFoundItems: Item[] = [];
    stats = {
        totalLost: 0,
        totalFound: 0,
        resolved: 0
    };

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.loadData();
    }

    loadData(): void {
        const allItems = this.itemService.getActiveItems();

        this.recentLostItems = this.itemService.getLostItems()
            .filter(item => item.status === 'active')
            .slice(0, 4);

        this.recentFoundItems = this.itemService.getFoundItems()
            .filter(item => item.status === 'active')
            .slice(0, 4);

        this.stats = {
            totalLost: this.itemService.getLostItems().length,
            totalFound: this.itemService.getFoundItems().length,
            resolved: this.itemService.getLostItems().filter(i => i.status === 'resolved').length +
                this.itemService.getFoundItems().filter(i => i.status === 'resolved').length
        };
    }
}
