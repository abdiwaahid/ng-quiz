import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { CategoryComponent } from './components/category/category.component';
import { QuizComponent } from './components/quiz/quiz.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    NavItemComponent,
    CategoryComponent,
    QuizComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CategoryComponent,
    QuizComponent,
  ]
})
export class CoreModule { }
