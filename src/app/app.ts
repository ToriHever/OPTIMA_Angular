import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { Footer } from "./components/footer/footer";
import { CourierModal } from "./modals/courier-modal/courier-modal";
import { RepairStatusModal } from "./modals/repair-status-modal/repair-status-modal";
import { CertificateModal } from "./modals/certificate-modal/certificate-modal";
import { RepairsModal } from "./modals/repairs-modal/repairs-modal";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    Footer,
    CourierModal,
    RepairStatusModal,
    CertificateModal,
    RepairsModal
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'optima-service';
}