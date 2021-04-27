export interface Transaction {
  id: number, 
  source: string, 
  target: string, 
  amount: number, 
  description: string
}

export interface Lookup {
    [key: string]: Transaction
}

/**
 * Find duplicate transactions
 * Given a list of transactions, find and return duplicate transactions. There can be more than one duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 * 
 * This is how a transaction looks like.
 * 
 * {
 *   id: 1,
 *   source: 'A',
 *   target: 'B',
 *   amount: 300,
 *   description: 'tikkie'
 * }
 * 
 * Note:
 * - Create additional functions if required.
 * - Follow proper coding conventions and best practices.
 * - Make sure existing unit test passes.
 * - Write further unit tests to cover maximum code.
 *  
 * 
 * @param transactions List of transactions
 * @returns {Transaction[]} List of duplicate transactions
 */
export function findDuplicateTransactions(transactions: Transaction[]): Transaction[] {
    let duplicateTransactions: Transaction[] = [];
    let lookupObj: Lookup = {};

    for (let transaction of transactions) {
        let transKey = getKey(transaction);
        lookupObj[transKey] ? duplicateTransactions.push(lookupObj[transKey], transaction) : lookupObj[transKey] = transaction;
    }

    return duplicateTransactions;
}
/**
 * 
 * @param {Transaction} transaction 
 * @returns {string} transaction key
 */
function getKey(transaction: Transaction): string {
    let delimitter: string = '=&=';
    let transKey = transaction.source + delimitter + transaction.target + delimitter + transaction.amount + delimitter + transaction.description;
    return transKey.toLowerCase();
}
