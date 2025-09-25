import { Routes } from '@angular/router';
import {LoginClient} from './pages/login-client/login-client';
import {WithdrawalDetails} from './pages/client/withdrawal-details/withdrawal-details';
import {Withdrawal} from './pages/client/withdrawal/withdrawal';
import {TransferDetails} from './pages/client/transfer-details/transfer-details';
import {Transfer} from './pages/client/transfer/transfer';
import {Payments} from './pages/client/payments/payments';
import {PaymentDetails} from './pages/client/payment-details/payment-details';
import {MyAccount} from './pages/client/my-account/my-account';
import { LoanApplication } from './pages/client/loan-application/loan-application';
import { Loan } from './pages/client/loan/loan';
import { Inquiry } from './pages/client/inquiry/inquiry';
import { CreditApplication } from './pages/client/credit-application/credit-application';
import { Credit } from './pages/client/credit/credit';
import { Client } from './pages/client/client';

export const routes: Routes = [
  { path: '', component: LoginClient },

  {
    path: 'manager-layout',
    component: Client,
    children: [
      { path: '', redirectTo: 'my-account', pathMatch: 'full' }, 
      { path: 'credit', component: Credit },
      { path: 'credit-application', component: CreditApplication },
      { path: 'inquiry', component: Inquiry },
      { path: 'my-account', component: MyAccount },
      { path: 'loan', component: Loan },
      { path: 'loan-application', component: LoanApplication },
      { path: 'payment-details', component: PaymentDetails },
      { path: 'payments', component: Payments },
      { path: 'transfer', component: Transfer },
      { path: 'transfer-details', component: TransferDetails },
      { path: 'withdrawal', component: Withdrawal },
      { path: 'withdrawal-details', component: WithdrawalDetails },
    ]
  }
];