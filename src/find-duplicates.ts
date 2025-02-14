export interface Transaction {
  id: number, 
  source: string, 
  target: string, 
  amount: number, 
  description: string
}

export interface LookupTransaction {
    [key: string]: number
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
    // There was a major glitch in the previous version. 
    // Thank you for pointing out. Hope this fixes the issue. 
    const lookupObj = transactions.reduce((acc, ele) => {
        let transKey = getKey(ele);
        acc[transKey] = ++acc[transKey] || 0;
        return acc;
    }, {} as LookupTransaction);

    return transactions.filter(transaction => lookupObj[getKey(transaction)]);
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