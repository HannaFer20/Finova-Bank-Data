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
  }
];