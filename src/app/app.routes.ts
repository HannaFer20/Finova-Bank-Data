import { Routes } from '@angular/router';
import { LoginManager } from './pages/login-manager/login-manager';
import { ManagerLayout } from './pages/manager/manager-layout/manager-layout';
import { Alerts } from './pages/manager/alerts/alerts';
import { CreditApprovals } from './pages/manager/credit-approvals/credit-approvals';
import { LoanRequest } from './pages/manager/loan-request/loan-request';
import { MyAccount } from './pages/manager/my-account/my-account';
import { Reports } from './pages/manager/reports/reports';
import { TotalClients } from './pages/manager/total-clients/total-clients';
import { Transactions } from './pages/manager/transactions/transactions';
import { Credit } from './pages/client/credit/credit';
import { CreditApplication } from './pages/client/credit-application/credit-application';
import { Inquiry } from './pages/client/inquiry/inquiry';
import { Loan } from './pages/client/loan/loan';
import { LoanApplication } from './pages/client/loan-application/loan-application';
import { PaymentDetails } from './pages/client/payment-details/payment-details';
import { Payments } from './pages/client/payments/payments';
import { Transfer } from './pages/client/transfer/transfer';
import { TransferDetails } from './pages/client/transfer-details/transfer-details';
import { Withdrawal } from './pages/client/withdrawal/withdrawal';
import { WithdrawalDetails } from './pages/client/withdrawal-details/withdrawal-details';

export const routes: Routes = [
  { path: '', component: LoginManager },

  {
    path: 'manager-layout',
    component: ManagerLayout,
    children: [
      { path: '', redirectTo: 'my-account', pathMatch: 'full' }, 
      { path: 'alerts', component: Alerts },
      { path: 'credit-approvals', component: CreditApprovals },
      { path: 'loan-request', component: LoanRequest },
      { path: 'my-account', component: MyAccount },
      { path: 'reports', component: Reports },
      { path: 'total-clients', component: TotalClients },
      { path: 'transactions', component: Transactions }
    ]
  },

    {
    path: 'client-layout',
    component: ManagerLayout,
    children: [
      { path: '', redirectTo: 'my-account', pathMatch: 'full' }, 
      { path: 'credit', component: Credit },
      { path: 'credit-application', component: CreditApplication },
      { path: 'inquiry', component: Inquiry },
      { path: 'loan', component: Loan },
      { path: 'loan-application', component: LoanApplication },
      { path: 'my-account', component: MyAccount },
      { path: 'payment-details', component: PaymentDetails },
      { path: 'payments', component: Payments },
      { path: 'transfer', component: Transfer },
      { path: 'transfer-details', component: TransferDetails },
      { path: 'withdrawal', component: Withdrawal },
      { path: 'withdrawal-details', component: WithdrawalDetails },
    ]
  }
];