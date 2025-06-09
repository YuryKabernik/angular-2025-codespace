/**
 * This component is assumed to be used as a list of transactions done per account.
 *
 * The Account Listing report identifies the transactions that have been posted to the ledger, by chart of accounts code. You can include transactions for a range of accounts and accounting periods. You can select a single account code or range of account codes and a range of accounting periods for which transactions are to be listed.
 * Note:  See also 'Producing an Account Listing with Archived Transactions'.
 *
 *  https://docs.infor.com/ss/6.3.x/en-us/ssolh/lsm1457708133880.html
 */

import { Component } from '@angular/core';

type Account = {
	id: string;
	name: string;
	balance: number;
	currency: string;
};

@Component({
	selector: 'app-accounts-listing',
	imports: [],
	templateUrl: './accounts-listing.component.html',
	styleUrl: './accounts-listing.component.scss',
})
export class AccountsListingComponent {
	accounts: Account[] = [];
}
