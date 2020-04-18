import { Patient } from './patient.model';
import { Prescriber } from './prescriber.model';
import { Analyse } from './analyse.model';
import { Log } from './log.model';

export enum StateEnum {   
 prescribed = 'prescribed',
 ordered = 'ordered',
 preparation = 'preparation',
 sent = 'sent',
 delivered = 'delivered',
 samplessent = 'samplessent',
 samplesreceived = 'samplesreceived',
 cancelled = 'cancelled',
 onhold = 'onhold'
}

export enum BillingState {   
  topay = 1,
  paidonline = 2,
  paidbycheck = 3,
  paidbytransfer = 4,
  receivednotpaid = 5
 }

export class Prescription {

    public PrescriptionId : number;
    public State: string;
    public Billing_state: string;
    public Invoice_state: string;
    public Invoice_id: string;
    public Price_analyses: number;
    public Price_shipping: number;
    public Amount_paid: number;
    public Payment_method:string;
    public Patient: Patient;
    public Prescriber: Prescriber;
    public Dossier_glims: string;
    public Kit_shipping_no: string;
    public Sample_shipping_no: string;
    public Shipped_by:string;
    public Shipped_on:string ;
    public Analyses: Analyse[];
    public Logs: Log[];

    constructor() {
      this.Patient = new Patient();
      this.Prescriber = new Prescriber(); 
    }
}
