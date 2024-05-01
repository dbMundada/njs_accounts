function openDatabase() {
  return window.openDatabase('lp', '1.0', 'LastPass Local Database', 200000)
}

export function selectAll<T = unknown>(
  query: string,
  ...parameters
): Promise<T[]> {
  return new Promise(resolve => {
    const errorCallback = () => {
      resolve([])
      return false
    }
    const db = openDatabase()
    db.readTransaction(transaction => {
      transaction.executeSql(
        query,
        parameters,
        (_, results) => {
          const rows: T[] = []
          for (let i = 0; i < results.rows.length; ++i) {
            rows.push(results.rows.item(i))
          }
          resolve(rows)
        },
        errorCallback
      )
    }, errorCallback)
  })
}