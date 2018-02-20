import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ClientComponent } from './client/client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ChatComponent } from './chat/chat.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { TicketOrderComponent } from './ticket-order/ticket-order.component';
import { EmarComponent } from './emar/emar.component';
import { PharmacistCornerComponent } from './pharmacist-corner/pharmacist-corner.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { AdministerMedsComponent } from './administer-meds/administer-meds.component';

const routes: Routes = [
  { path: '', component: FeedsComponent },
  { path: 'feeds', component: FeedsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'clients', component: ClientComponent },
  { path: 'clients-detail', component: ClientDetailComponent },
  { path: 'add-ticket', component: AddTicketComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'order-ticket', component: TicketOrderComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'emars', component: EmarComponent },
  { path: 'pharmacist-corner', component: PharmacistCornerComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'administer-meds', component: AdministerMedsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedsComponent,
    ClientComponent,
    ClientDetailComponent,
    TicketsComponent,
    ChatComponent,
    AddTicketComponent,
    TicketOrderComponent,
    EmarComponent,
    PharmacistCornerComponent,
    DocumentsComponent,
    HomeComponent,
    AdministerMedsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}


