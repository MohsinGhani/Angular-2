import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { LessonComponent } from './lesson/lesson.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

export const router: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent },
    {path: 'courses',
        children: [
            {
                path: '',
                component: CoursesComponent
            },
            {
                path: ':id',
                component: CourseDetailComponent,
            }
        ]
    },
    {path: 'lesson', component: LessonComponent },
    {path:'**', component: HomeComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
// @NgModule({
//     imports: [RouterModule.forRoot(router)],
//     exports: [RouterModule]
// })

// export class AppRoutingModule {}
// export const routingComponents = [HomeComponent,CoursesComponent,LessonComponent]