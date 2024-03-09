import './App.css';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
   <div style={{backgroundColor:'black'}} className="app">
     <div className="app-wrapper">
     <GlobalProvider >
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
     
    </GlobalProvider>
     </div>
   </div>
  );
}

export default App;
