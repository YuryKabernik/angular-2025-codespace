# Accounting Application

## What Is Accounting?

Accounting is the process of recording financial transactions pertaining to a business or other large organization. The accounting process includes summarizing, analyzing, and reporting these transactions to oversight agencies, regulators, and tax collection entities. The financial statements used in accounting are a concise summary of financial transactions over an accounting period, summarizing a company's operations, financial position, and cash flows.

## Architerure

The architecture of the application consists of the following components:

- **Frontend**: An Angular application providing the user interface for managing accounts, transactions, and reports.
- **Backend**: A .NET Web API designed as a RESTful service, handling business logic and communication between the frontend and other services.
- **Receipt Analyzer Service**: Integrates with Azure and AWS text recognition services to process and extract data from uploaded receipts.
- **FinAPI Integration Service**: Retrieves account and transaction details for users via the RESTful API, supporting Account Information Services (AIS) and Payment Initiation Services (PIS) applications.
- **Database**: Stores information related to each bank account and owner, with integration to FinAPI V2 for secure financial data management.

This modular architecture ensures scalability, maintainability, and secure handling of sensitive financial information.