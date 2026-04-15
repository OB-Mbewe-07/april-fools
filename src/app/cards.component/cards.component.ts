import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { GetDataService } from '../data.service/data.service';
import { DrinkCard, Joke} from '../models/data.models';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck, lucideInfo } from '@ng-icons/lucide';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
    HlmCardImports,
    HlmButtonImports,
    HlmBadgeImports,
    AsyncPipe,
    HlmAlertImports, NgIcon,
],
    providers: [provideIcons({ lucideCircleCheck, lucideInfo })],
	changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards.component.html',
})
export class BevarageCardComponent implements OnInit{
    private api = inject(GetDataService);
    private router = inject(Router);

    drinks$!: Observable<DrinkCard[]>;
    jokeData$ !: Observable<Joke>;

    ngOnInit(): void {
        this.drinks$ = this.api.getMagaritas();
        this.jokeData$ = this.api.getJoke()  
    }

    onDrinkClick(drink: DrinkCard) {
        this.router.navigate(['/motivation', drink.id], {
            state: { drinkName: drink.name } 
        });
    }
}