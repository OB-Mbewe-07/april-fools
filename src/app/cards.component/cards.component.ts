import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { GetDataService } from '../data.service/data.service';
import { DrinkCard } from '../models/data.models';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [HlmCardImports, HlmButtonImports, HlmBadgeImports, AsyncPipe],
	changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards.component.html',
})
export class BevarageCardComponent implements OnInit{
    private getDrinks = inject(GetDataService);

    drinks$!: Observable<DrinkCard[]>;

    ngOnInit(): void {
        this.drinks$ = this.getDrinks.getMagaritas();
    }
}