import { Injectable, computed, inject } from '@angular/core';
import { I18nService } from './i18n.service';
import { CONTENT, SiteContent } from '../content/content';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly i18n = inject(I18nService);
  readonly content = computed<SiteContent>(() => CONTENT[this.i18n.language()]);
}


