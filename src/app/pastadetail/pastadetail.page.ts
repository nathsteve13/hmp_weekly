import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
  standalone: false
})
export class PastadetailPage implements OnInit {
  index = 0;
  pasta: any = {};

  newStep: number | null = null;
  newInstruction: string = "";

  constructor(
    private route: ActivatedRoute,
    private foodservice: FoodserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = +params['id']; 
      this.loadPastaDetail();
    });
  }

  loadPastaDetail() {
    this.foodservice.pastaDetail(this.index).subscribe(
      (data) => {
        this.pasta = data;
      },
      (error) => {
        console.error('Failed to load pasta details', error);
      }
    );
  }

  goToEdit() {
    if (this.index !== undefined && this.index !== null) {
      this.router.navigate(['editpasta', this.index]);
    } else {
      console.error('Index is undefined or null');
    }
  }

  deletepasta(id: any) {
    if (!confirm('Are you sure you want to delete this pasta?')) return;

    this.foodservice.deletePasta(id).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("Successfully deleted pasta");
          this.router.navigate(['/pasta']);
        } else {
          alert("Delete failed: " + (response.message || 'Unknown error'));
        }
      },
      (error) => {
        console.error('Delete pasta failed', error);
        alert('Delete request failed. Check console.');
      }
    );
  }

  submitInstruction() {
    if (!this.pasta.id || this.newStep == null || !this.newInstruction.trim()) {
      alert('Please enter a valid pasta ID, step, and instruction');
      return;
    }
    this.foodservice.addInstruction(this.pasta.id, this.newStep, this.newInstruction).subscribe(
      () => {
        alert('Instruction added successfully');
        this.loadPastaDetail();  
        this.newStep = null;
        this.newInstruction = "";
      },
      (error) => {
        console.error('Failed to add instruction', error);
        alert('Failed to add instruction. Check console for details.');
      }
    );
  }
}
