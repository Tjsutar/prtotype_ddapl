# Project Setup for Angular Ticket Management System

# Variables
$projectName = "ticket-management"
$srcFolder = "src/app"
$coreFolder = "$srcFolder/core"
$uiFolder = "$srcFolder/ui"
$pagesFolder = "$srcFolder/pages"
$featuresFolder = "$srcFolder/features"
$ticketFeatureFolder = "$featuresFolder/ticket"

# Step 1: Create Angular project
ng new $projectName --routing --style=scss --strict
cd $projectName

# Step 2: Create Folders Based on Structure
New-Item -ItemType Directory -Force -Path $coreFolder
New-Item -ItemType Directory -Force -Path "$coreFolder/services"
New-Item -ItemType Directory -Force -Path "$coreFolder/guards"
New-Item -ItemType Directory -Force -Path "$coreFolder/interceptors"

New-Item -ItemType Directory -Force -Path $uiFolder
New-Item -ItemType Directory -Force -Path "$uiFolder/components"
New-Item -ItemType Directory -Force -Path "$uiFolder/directives"

New-Item -ItemType Directory -Force -Path $pagesFolder
New-Item -ItemType Directory -Force -Path "$pagesFolder/dashboard"
New-Item -ItemType Directory -Force -Path "$pagesFolder/ticket-details"
New-Item -ItemType Directory -Force -Path "$pagesFolder/new-ticket"

New-Item -ItemType Directory -Force -Path $featuresFolder
New-Item -ItemType Directory -Force -Path $ticketFeatureFolder

# Step 3: Generate Components and Services

# Generate core services
ng generate service $coreFolder/services/ticket --skip-tests
ng generate service $coreFolder/services/api --skip-tests

# Generate UI components
ng generate component $uiFolder/components/ticket-card --skip-tests --standalone
ng generate component $uiFolder/components/filter --skip-tests --standalone
ng generate component $uiFolder/components/search-bar --skip-tests --standalone
ng generate component $uiFolder/components/status-badge --skip-tests --standalone

# Generate Pages Components
ng generate component $pagesFolder/dashboard/dashboard --skip-tests --standalone
ng generate component $pagesFolder/ticket-details/ticket-details --skip-tests --standalone
ng generate component $pagesFolder/new-ticket/new-ticket --skip-tests --standalone

# Generate Ticket Feature
ng generate component $ticketFeatureFolder/ticket --skip-tests --standalone
ng generate service $ticketFeatureFolder/ticket.service --skip-tests

# Step 4: Add Angular Material (Optional UI Library)
ng add @angular/material

# Step 5: Set Up Routing in `app.routes.ts`
$routesContent = @"
import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TicketDetailsComponent } from './pages/ticket-details/ticket-details.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'ticket/:id', component: TicketDetailsComponent },
  { path: 'new-ticket', component: NewTicketComponent },
];
"@

# Write routes configuration to app.routes.ts
Set-Content -Path "src/app/app.routes.ts" -Value $routesContent

# Step 6: Set Up App Module in `app.module.ts`
$appModuleContent = @"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { TicketService } from './features/ticket/ticket.service';
import { TicketCardComponent } from './ui/components/ticket-card/ticket-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketCardComponent,  // Reusable components
    // Add more UI components as needed
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // Add Angular Material modules or any other shared modules
  ],
  providers: [TicketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
"@

# Write app.module.ts content
Set-Content -Path "src/app/app.module.ts" -Value $appModuleContent

# Step 7: Add TailwindCSS (optional, if using)
ng add @angular/localize

Write-Host "`n✅ Angular Ticket Management System structure setup complete!"
Write-Host "➡️ Next Steps:"
Write-Host "1. Implement core services in: $coreFolder/services"
Write-Host "2. Define routing paths in: src/app/app.routes.ts"
Write-Host "3. Implement feature-specific services and components in: $ticketFeatureFolder"
Write-Host "4. Add TailwindCSS or Material components in: $uiFolder"
Write-Host "5. Customize the pages in: $pagesFolder"
