/**
 * The journal includes information like the transaction date, the accounts affected, and the dollar amounts.
 * Most journal entries are composed in a double-entry bookkeeping method.
 */

export type JournalEntry = {
	date: Date;
	description: string;
	account: string;
	debit: number;
	credit: number;
};
