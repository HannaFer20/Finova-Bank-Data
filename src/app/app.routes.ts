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
import { ClientLayout } from './pages/client/client-layout/client-layout';
import { Index } from './pages/executive/index';
import { ActualizeRequest } from './pages/executive/actualize-request/actualize-request';
import { AssociatedServices } from './pages/executive/associated-services/associated-services';
import { CloseAccounts } from './pages/executive/close-accounts/close-accounts';
import { EjecutiveMain } from './pages/executive/ejecutive-main/ejecutive-main';
import { Finance } from './pages/executive/finance/finance';
import { OppenAccounts } from './pages/executive/oppen-accounts/oppen-accounts';
import { Queries } from './pages/executive/queries/queries';

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
    component: ClientLayout,
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
  },

      {
    path: 'index',
    component: Index,
    children: [
      { path: '', redirectTo: 'ejecutive-main', pathMatch: 'full' }, 
      { path: 'actualize-request', component: ActualizeRequest },
      { path: 'associated-services', component: AssociatedServices },
      { path: 'close-accounts', component: CloseAccounts },
      { path: 'ejecutive-main', component: EjecutiveMain },
      { path: 'finance', component: Finance },
      { path: 'index', component: Index },
      { path: 'oppen-accounts', component: OppenAccounts },
      { path: 'queries', component: Queries },
    ]
  }
];