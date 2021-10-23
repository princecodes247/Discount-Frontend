import tableStyles from '../styles/table.module.css'

import DashboardSection from './dashboardSection'
import AccountsTableItem from './accountsTableItem'

export default function AccountsTable(props) {

    let account = {
      id: 231212222,
      type: "Crypto",
      option: "BTC",
      routing: ""
    }

    return  <DashboardSection name="Existing Accounts">
      <table className={tableStyles.table}>
    <thead>
      <tr className={tableStyles.tr}>
          <th className={tableStyles.th}>Acc No./Wallet</th>
          <th className={tableStyles.th}>Acc Name/Type</th>
          <th className={tableStyles.th}>Bank Name/Crypto</th>
          <th className={tableStyles.th}>Routing No.</th>
      </tr>
    </thead>

    <tbody>
      <AccountsTableItem {...account}/>
    </tbody>
  </table>
    </DashboardSection>
      
  }
  