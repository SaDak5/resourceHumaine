import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssiduitesComponent } from './assiduites/assiduites.component';
import { UpdateAssiduiteComponent } from './update-assiduite/update-assiduite.component';
import { AddAssiduiteComponent } from './add-assiduite/add-assiduite.component';
import { ListeAbsencesComponent } from './liste-absences/liste-absences.component';
import { UpdateAbsenceComponent } from './update-absence/update-absence.component';
import { DocumentsComponent } from './documents/documents.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { ContratComponent } from './contrat/contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { ProfilPersonnelComponent } from './profil-personnel/profil-personnel.component';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { UpdatePersonnelComponent } from './update-personnel/update-personnel.component';
import { RechercheParDepartementComponent } from './recherche-par-departement/recherche-par-departement.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeDepartementsComponent } from './liste-departements/liste-departements.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { AddPretComponent } from './add-pret/add-pret.component';
import { ListecongeComponent } from './listeconge/listeconge.component';
import { ListepretComponent } from './listepret/listepret.component';
import { UpdateCongeComponent } from './update-conge/update-conge.component';
import { UpdatePretComponent } from './update-pret/update-pret.component';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
const routes: Routes = [
  {path: "assiduites", component : AssiduitesComponent},
  {path: "addAssiduite", component : AddAssiduiteComponent},
  {path: "updateAssiduite/:id", component :UpdateAssiduiteComponent},
  {path: "listeAbsences", component :ListeAbsencesComponent},
  {path: "updateAbsence", component :UpdateAbsenceComponent},
  {path: "documents", component :DocumentsComponent},
  {path: "addDocument", component : AddDocumentComponent},
  {path: "updateDocument/:id", component :UpdateDocumentComponent},
  {path: "contrats", component :ContratComponent},
  {path: "addContrat", component : AddContratComponent},
  {path: "updateContrat/:id", component :UpdateContratComponent},
  {path: "personnel", component : PersonnelComponent },
  {path: "addPersonnel", component : AddPersonnelComponent },
  {path: "updatePersonnel/:idPersonnel", component : UpdatePersonnelComponent },
  {path: "profil/:idPersonnel", component: ProfilPersonnelComponent },
  {path: "profil", component: ProfilPersonnelComponent },
  {path: "rechercheParDepartement", component : RechercheParDepartementComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeDep", component : ListeDepartementsComponent},
  {path: "addDep", component: AddDepartementComponent},
  {path: "listeConge", component: ListecongeComponent},
  {path: "listeConge/:idConge", component: ListecongeComponent},
  {path: "addConge", component: AddCongeComponent},
  {path: "updateConge/:idConge", component: UpdateCongeComponent},
  {path: "listePret/:idPret", component: ListepretComponent},
  {path: "listePret", component: ListepretComponent},
  {path: "addPret", component: AddPretComponent},
  {path: "updatePret/:idPret", component: UpdatePretComponent},
  {path: "addAbsence", component: AddAbsenceComponent},
  {path: "updateAbsence/:id", component :UpdateAbsenceComponent},
  
  { path: "", redirectTo: "assiduites", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
 
}
