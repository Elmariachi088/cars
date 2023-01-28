import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../shared/language.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
 
  
})
export class MenuComponent {
  constructor(private translate: TranslateService, private langService: LanguageService) {
   this.translate.use(this.langService.getLang().toLowerCase());
   }

   useLanguage(language: string) {
    this.langService.setLang(language);
    this.translate.use(this.langService.getLang().toLowerCase());
  }
   lang(){
     return this.langService.getLang();
   }
}



