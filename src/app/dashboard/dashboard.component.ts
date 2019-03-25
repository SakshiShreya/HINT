import { Component, OnInit, OnDestroy } from "@angular/core";
import { PrescriptionService } from '../prescription.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  available: boolean;

  constructor(private presService: PrescriptionService) {
    this.available = presService.PrescriptionAvailable;
  }

  ngOnInit() {
    this.subscription = this.presService.prescriptionChanged.subscribe((available: boolean) => {
      this.available = available;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  imageChanged(event) {
    console.log("Hey!", event);
  }
}
