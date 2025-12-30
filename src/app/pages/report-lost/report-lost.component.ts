import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ItemService } from '../../services/item.service';
import { CATEGORIES, LOCATIONS } from '../../models/item.model';

@Component({
    selector: 'app-report-lost',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule
    ],
    templateUrl: './report-lost.component.html',
    styleUrl: './report-lost.component.scss'
})
export class ReportLostComponent {
    lostForm: FormGroup;
    categories = CATEGORIES;
    locations = LOCATIONS;
    maxDate = new Date();

    constructor(
        private fb: FormBuilder,
        private itemService: ItemService,
        private router: Router,
        private snackBar: MatSnackBar
    ) {
        this.lostForm = this.fb.group({
            category: ['', Validators.required],
            title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
            date: [new Date(), Validators.required],
            location: ['', Validators.required],
            contactName: ['', [Validators.required, Validators.minLength(2)]],
            contactPhone: ['', [Validators.required, Validators.pattern(/^[0-9\s\-\+]{10,15}$/)]],
            contactEmail: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit(): void {
        if (this.lostForm.valid) {
            const formData = this.lostForm.value;
            this.itemService.reportLostItem(formData);

            this.snackBar.open('Kayıp eşya bildirimi başarıyla oluşturuldu!', 'Tamam', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['success-snackbar']
            });

            this.router.navigate(['/']);
        } else {
            this.markFormGroupTouched();
        }
    }

    private markFormGroupTouched(): void {
        Object.keys(this.lostForm.controls).forEach(key => {
            this.lostForm.get(key)?.markAsTouched();
        });
    }

    getErrorMessage(controlName: string): string {
        const control = this.lostForm.get(controlName);
        if (!control) return '';

        if (control.hasError('required')) return 'Bu alan zorunludur';
        if (control.hasError('minlength')) return `En az ${control.errors?.['minlength'].requiredLength} karakter giriniz`;
        if (control.hasError('maxlength')) return `En fazla ${control.errors?.['maxlength'].requiredLength} karakter giriniz`;
        if (control.hasError('email')) return 'Geçerli bir e-posta adresi giriniz';
        if (control.hasError('pattern')) return 'Geçerli bir telefon numarası giriniz';

        return '';
    }
}
