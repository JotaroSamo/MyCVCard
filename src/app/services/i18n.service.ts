import { Injectable, signal } from '@angular/core';

type LanguageCode = 'ru' | 'en';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly language = signal<LanguageCode>('ru');

  private readonly dict: Record<LanguageCode, Record<string, string>> = {
    ru: {
      'nav.home': 'Главная',
      'nav.about': 'Обо мне',
      'nav.experience': 'Опыт',
      'nav.education': 'Образование',
      'nav.skills': 'Навыки',
      'nav.contacts': 'Контакты',

      'sections.about.title': 'Обо мне',
      'sections.experience.title': 'Опыт работы',
      'sections.education.title': 'Образование',
      'sections.skills.title': 'Навыки',
      'sections.contacts.title': 'Контакты',

      'intro.badge.ready': 'Готов к работе',

      'contacts.phone': 'Телефон',
      'contacts.telegram': 'Telegram',
      'contacts.email': 'Email',
      'contacts.linkedin': 'LinkedIn',
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.skills': 'Skills',
      'nav.contacts': 'Contacts',

      'sections.about.title': 'About me',
      'sections.experience.title': 'Work experience',
      'sections.education.title': 'Education',
      'sections.skills.title': 'Skills',
      'sections.contacts.title': 'Contacts',

      'intro.badge.ready': 'Available for work',

      'contacts.phone': 'Phone',
      'contacts.telegram': 'Telegram',
      'contacts.email': 'Email',
      'contacts.linkedin': 'LinkedIn',
    },
  };

  setLanguage(lang: LanguageCode): void {
    this.language.set(lang);
    try {
      document.documentElement.lang = lang;
    } catch {}
  }

  toggleLanguage(): void {
    this.setLanguage(this.language() === 'ru' ? 'en' : 'ru');
  }

  t(key: string): string {
    const lang = this.language();
    return this.dict[lang][key] ?? key;
  }
}


