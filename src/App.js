import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { auth } from './firebase';
import { db } from './firebase';
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import LoginPage from './LoginPage';
import Nav from './Nav';
import Total from './Total';
import EditPage from './EditPage';
import Data from './Data';
import Income from './Income';
import Expense from './Expense';
import TransactionList from './TransactionList';
import ExpenseInput from './ExpenseInput';
import { setPersistence,browserSessionPersistence } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState('');
  const [type, setType] = useState('income');
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  const [totalIncome, setTotalIncome] = useState([]);
  const [totalExpense, setTotalExpense] = useState([]);

  const [user, setUser] = useState(null);

  const [emailSignIn, setEmailSignIn] = useState('');
  const [emailSignUp, setEmailSignUp] = useState('');
  
  const [passwordSignIn, setPasswordSignIn] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');

  const [itemId,setItemid] = useState(1);

  const [theme,setTheme] = useState(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if(window.matchMedia("(prefers-color-scheme: dark)").matches){
  //     setTheme("dark")
  //   }else{
  //     setTheme("light")
  //   }
  // },[])
  // useEffect(() => {
  //   if(theme === "dark"){
  //     document.documentElement.classList.add("dark")
  //   }else{
  //     document.documentElement.classList.remove("dark")
  //   }
  // },[theme])
  const handleTheme = () => {
    console.log(theme)
    setTheme(theme === "dark" ? "light" : "dark" )
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = collection(db, 'users', user.uid, 'expense');
          const docRef = await getDocs(userDocRef);
          const datas = docRef.docs.map((doc) => ({
            id: doc.data().id,
            name: doc.data().name,
            amount: doc.data().amount,
            type: doc.data().type,
            date: doc.data().date,
          }));
          setItems(datas);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    let newTotal = 0;
    let newIncome = 0;
    let newExpense = 0;
    setItemid(items.length);
    for (let i = 0; i < items.length; i++) {
      let amount = parseInt(items[i].amount);
      if (items[i].type === 'income') {
        newTotal += amount;
        newIncome += amount;
        setIncome(newIncome);
        setTotalIncome((prevTotalIncome) => [...prevTotalIncome, amount]);
      } else {
        newTotal -= amount;
        newExpense += amount;
        setExpense(newExpense);
        setTotalExpense((prevTotalExpense) => [...prevTotalExpense, amount]);
      }
    }
    setTotal(newTotal);
  }, [items]);

  useEffect(() => {
    const filteredResult = items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => a.id - b.id);
    setSearchResults(filteredResult);
  }, [items, search]);

  useEffect(() => {
    const newList = searchResults.filter((item) => item.type === 'income');
    setIncomeList(newList);
  }, [searchResults]);

  useEffect(() => {
    const newList = searchResults.filter((item) => item.type !== 'income');
    setExpenseList(newList);
  }, [searchResults]);

  const handleSubmit = async () => {
    if (name.length === 0 || amount === 0) {
      alert('Enter proper value');
      return;
    }

    try {
      const user = auth.currentUser;
      const id = itemId+1;
      if (user) {
        const newItemRef = await addDoc(collection(db, 'users', user.uid, 'expense'), {
          id,
          name,
          amount,
          type,
          date: new Date().toLocaleDateString(),
        });

        const newItem = {
          id,
          name,
          amount,
          type,
          date: new Date().toLocaleDateString(),
        };

        setItems((prevItems) => [...prevItems, newItem]);
        alert('Successfully Added');
      }
    } catch (error) {
      console.error('Error adding item:', error.message);
    }

    setAmount(0);
    setName('');
    setType('income');
  };

  const handleSignIn = async () => {
    try {
      if (emailSignIn.trim() === '' || passwordSignIn.trim() === '') {
        alert('Enter Correct Input!');
        return;
      }
      await setPersistence(auth,browserSessionPersistence);
      const response = await signInWithEmailAndPassword(auth, emailSignIn, passwordSignIn);
      setUser(response.user);
      setEmailSignIn('');
      setPasswordSignIn('');
      console.log('Login successful', response.user);
      navigate('/home');
    } catch (err) {
      console.log(err)
      alert("Invalid Password Or User Does Not Exist")
    }
  };

  const handleSignUp = async () => {
    try {
      if (emailSignUp.trim() === '' || passwordSignUp.trim() === '') {
        alert('Enter Correct Input!');
        return;
      }else if(passwordSignUp.trim().length <= 6){
        throw FirebaseError;
      }
      const response = await createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp);
      navigate('/')
      // setUser(null)
      setEmailSignUp('');
      setPasswordSignUp('');
      console.log('Signup successful', response.user);
    } catch (err) {
      console.log(err)
      alert("User Already Exists")
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='App px-2 flex flex-col my-5 mx-auto max-w-4xl w-2xl dark:bg-black dark:text-slate-100'>
      {user && (
        <>
          <Nav handleLogout={handleLogout} handleTheme={handleTheme} />
          <Total total={total} />
        </>
      )}
      {user && user ? (
        <Routes>
          <Route path='/home' element={<ExpenseInput amount={amount} type={type} name={name} handleSubmit={handleSubmit} setName={setName} setType={setType} setAmount={setAmount} />} />
          <Route path='/transactionlist' element={<TransactionList setSearchResults={setSearchResults} searchResults={searchResults} setSearch={setSearch} search={search} />} />
          <Route path='/data' element={<Data totalIncome={totalIncome} income={income} totalExpense={totalExpense} expense={expense} />} />
          <Route path='/incomelist' element={<Income incomeList={incomeList} setIncomeList={setIncomeList}></Income>} />
          <Route path='/expenselist' element={<Expense expenseList={expenseList} setExpenseList={setExpenseList}></Expense>} />
          <Route path="/editpage" element={<EditPage></EditPage>}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path='/' element={<LoginPage emailSignIn={emailSignIn} passwordSignIn={passwordSignIn} emailSignUp={emailSignUp} passwordSignUp={passwordSignUp} handleSignIn={handleSignIn} setEmailSignIn={setEmailSignIn} setPasswordSignIn={setPasswordSignIn} handleSignUp={handleSignUp} setEmailSignUp={setEmailSignUp} setPasswordSignUp={setPasswordSignUp}></LoginPage>}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
