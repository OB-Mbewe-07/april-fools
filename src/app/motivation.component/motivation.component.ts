import { 
    ChangeDetectionStrategy, Component, inject, Input, signal 
} from '@angular/core';
import { Router } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
    selector: 'app-motivation',
    standalone: true,
    imports: [HlmButtonImports, HlmCardImports],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './motivation.component.html',
})
export class MotivationComponent  {
    @Input() drinkId!: string;

    private router = inject(Router);

    drinkName = signal<string>('Mystery Soup');
    motivation = signal('');
    submitted = signal(false);
    wordCount = signal(0);
    
    readonly minWords = 20;

    onMotivationChange(event: Event) {
        const value = (event.target as HTMLTextAreaElement).value;
        this.motivation.set(value);
        this.wordCount.set(value.trim().split(' ').filter(word => word.length > 0).length);
    }

    get canSubmit() {
        return this.wordCount() >= this.minWords;
    }

    onSubmit() {
        if (!this.canSubmit) return;
        this.submitted.set(true);
    }

    goBack() {
        this.router.navigate(['/']);
    }
}