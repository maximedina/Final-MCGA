import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TooltipModule } from "primeng/tooltip";
import { DropdownModule } from "primeng/dropdown";
import { ToastModule } from "primeng/toast";
import { FieldsetModule } from "primeng/fieldset";
import { FileUploadModule } from "primeng/fileupload";
import { BlockUIModule } from "ng-block-ui";
import { BlockTemplateCmp } from "./block-template.component";

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ToggleButtonModule } from "primeng/togglebutton";
import { InputMaskModule } from "primeng/inputmask";
import { PanelMenuModule } from "primeng/panelmenu";
import { DialogModule } from "primeng/dialog";
import { ToolbarModule } from "primeng/toolbar";
import { TableModule } from "primeng/table";
import { PaginatorModule } from "primeng/paginator";
import { TreeTableModule } from "primeng/treetable";
import { AutoCompleteModule } from "primeng/autocomplete";
import { PanelModule } from "primeng/panel";
import { SidebarModule } from "primeng/sidebar";
import { CardModule } from "primeng/card";
import { TreeModule } from "primeng/tree";
import { RadioButtonModule } from "primeng/radiobutton";
import { PickListModule } from "primeng/picklist";
import { AccordionModule } from "primeng/accordion";
import { DialogService } from "primeng/dynamicdialog";
import { ContextMenuModule } from "primeng/contextmenu";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { CheckboxModule } from "primeng/checkbox";
import { MultiSelectModule } from "primeng/multiselect";
import { KeyFilterModule } from "primeng/keyfilter";
import { EditorModule } from "primeng/editor";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { TriStateCheckboxModule } from "primeng/tristatecheckbox";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { InplaceModule } from "primeng/inplace";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./Views/Layout/Navbar/navbar.component";
import { JustificationComponent } from "./Views/justification/justification.component";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { CarouselModule } from "primeng/carousel";
import { DragDropModule } from "primeng/dragdrop";
import { OrderListModule } from "primeng/orderlist";
import { LoginComponent } from "./Views/Security/Login/login.component";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { HomeComponent } from "./Views/Home/Home.component";
import { TabViewModule } from "primeng/tabview";
import { TieredMenuModule } from "primeng/tieredmenu";

import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
import { ProvinciaComponent } from "./Views/Localizacion/provincia/provincia.component";
import { ProvinciaModalComponent } from "./Views/Localizacion/provincia/provincia-modal/provincia-modal.component";
import { CiudadComponent } from "./Views/Localizacion/ciudad/ciudad.component";
import { CiudadModalComponent } from "./Views/Localizacion/ciudad/ciudad-modal/ciudad-modal.component";
import { PasswordModalComponent } from "./Views/Security/password-modal/password-modal.component";

import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { InputSwitchModule } from "primeng/inputswitch";

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JustificationComponent,
    LoginComponent,
    HomeComponent,
    BlockTemplateCmp,
    ProvinciaComponent,
    ProvinciaModalComponent,
    CiudadComponent,
    CiudadModalComponent,
    PasswordModalComponent,
  ],
  imports: [
    InputSwitchModule,
    EditorModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    ToggleButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputMaskModule,
    PanelMenuModule,
    DialogModule,
    ToolbarModule,
    NgbModule,
    PaginatorModule,
    TreeTableModule,
    DropdownModule,
    SidebarModule,
    CardModule,
    RadioButtonModule,
    PickListModule,
    TreeModule,
    AccordionModule,
    AutoCompleteModule,
    PanelModule,
    ToastModule,
    ContextMenuModule,
    DynamicDialogModule,
    CheckboxModule,
    MultiSelectModule,
    ConfirmDialogModule,
    CarouselModule,
    DragDropModule,
    OrderListModule,
    KeyFilterModule,
    FieldsetModule,
    TabViewModule,
    FileUploadModule,
    TieredMenuModule,
    OverlayPanelModule,
    BlockUIModule.forRoot({
      template: BlockTemplateCmp,
    }),
    TriStateCheckboxModule,
    ScrollPanelModule,
    InplaceModule,
    FullCalendarModule,
  ],
  entryComponents: [JustificationComponent, BlockTemplateCmp],
  providers: [
    NgbActiveModal,
    DialogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: "es" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
