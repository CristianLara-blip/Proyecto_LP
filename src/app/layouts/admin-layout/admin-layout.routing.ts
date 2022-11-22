import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { RequisitosComponent } from '../../pages/requisitos/requisitos.component';
import { OrganizacionesSocialesComponent } from '../../pages/organizaciones-sociales/organizaciones-sociales.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'requisitos',           component: RequisitosComponent },
    { path: 'organizaciones-sociales',           component: OrganizacionesSocialesComponent }
];
