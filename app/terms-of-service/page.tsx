import { LegalLayout } from '@/components/LegalLayout';
import { MarkdownContent } from '@/components/MarkdownContent';

export default function TermsOfService() {
    const sections = [
        { id: 'account-opening', title: 'Account Opening & Infrastructure' },
        { id: 'digital-representation', title: 'Digital Representation & "$"' },
        { id: 'pair-balance-and-security', title: 'Pair Balance and Security' },
        { id: 'communications-and-data-usage', title: 'Communications & Data' },
        { id: 'peer-to-peer-p2p-service', title: 'Peer-to-Peer Service' },
        { id: 'transaction-disputes-and-resolution', title: 'Transaction Disputes' },
        { id: 'summary-of-operations-for-the-curious-user', title: 'Summary of Operations' },
        { id: 'contact-us', title: 'Contact Us' },
    ];

    const markdownContent = `
This Agreement is between you and Pair Financial Inc. (“Pair,” “we,” or “us”). Pair is a financial technology platform, not a bank.

## Account Opening
**Orchestration Role:** Pair provides the user interface and orchestration layer for your financial activities. Banking services and stablecoin infrastructure are provided by our partner, Bridge.xyz, a Permitted Payment Stablecoin Issuer (PPSI) under the GENIUS Act of 2025.  

**Virtual Accounts:** Upon successful onboarding, you may be issued a virtual account number and routing number. These are provided by Bridge's partner financial institutions (e.g., Lead Bank, Member FDIC) solely for the purpose of receiving fiat currency deposits.  

**Automatic Conversion:** By using Pair, you authorize and direct Bridge to automatically convert any U.S. Dollar (“USD”) deposits received into your virtual account into USDB stablecoins.  

## Digital Representation
**Informational Display:** For ease of use, your account balance is displayed using the "$" symbol. You acknowledge that this is a digital representation of the amount of USDB held in your Pair account.  

**1:1 Value:** Each $1.00 displayed in your Pair app represents one (1) USDB token. USDB is a payment stablecoin designed to maintain a stable 1:1 value with the U.S. Dollar and is fully backed by reserves.  

**Redemption Rights:** You have a legal right to redeem your USDB balance for physical U.S. Dollars at par ($1 per token) through the Bridge infrastructure.  

## Pair Balance and Security
**Not FDIC Insured:** Balances displayed in your Pair account are held in USDB and are not insured by the FDIC or any other government agency.  

**GENIUS Act Protections:** Your USDB is backed by a 1:1 reserve of high-quality liquid assets (like U.S. Treasuries) held in segregated, bankruptcy-remote accounts by the issuer, Bridge.xyz. In the event of issuer insolvency, these reserves are legally prioritized for your redemption.  

**No Interest:** As a payment stablecoin under the GENIUS Act, USDB balances do not earn interest.

## Communications and Data Usage
We will provide all notices and receipts electronically via the Pair app or email. Pair complies with the Bank Secrecy Act (BSA) and the GENIUS Act’s strict data privacy standards; we do not sell your transaction data to third parties.

## Peer-to-Peer (P2P) Service
**Instant Settlement:** When you send "$" to another Pair user, you are initiating a blockchain-based transfer of USDB. This allows for near-instant settlement 24/7.

**Irreversibility:** Once a P2P transfer is confirmed, it is final and cannot be reversed by Pair, as the underlying USDB has been transferred on a public ledger.

## Transaction Disputes and Resolution
**Error Reporting:** You must notify Pair of any unauthorized transactions within 60 days.

**Arbitration:** All disputes will be resolved through individual, binding arbitration. You waive your right to a jury trial or to participate in a class-action lawsuit.

## Summary of Operations for the Curious User
**How it Works:** When you send money to your Pair account number, it lands at a partner bank. Bridge immediately sees that deposit and "mints" an equivalent amount of USDB stablecoin. We show you the "$" symbol so you don't have to worry about the technical details, but your money is actually moving on faster, more secure digital rails. If you ever want to "cash out," the USDB is "burned" (destroyed), and real U.S. Dollars are sent to your external bank account.

## Contact Us
For support or legal inquiries, please contact legal@pair.xyz.
`;

    return (
        <LegalLayout
            title="Terms of Service"
            lastUpdated="May 13, 2026"
            sections={sections}
        >
            <MarkdownContent content={markdownContent} />
        </LegalLayout>
    );
}
