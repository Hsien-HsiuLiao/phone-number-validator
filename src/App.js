import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  function telephoneCheck(str) {

    var re = /(\d)/g;
    var newArr = [];
    newArr = str.split('');
    var str2 = '';
    str2 = newArr[0];
    str2 = str2.replace(re, 'x');
    // newArr[0]==='1' returns true
    if (newArr[0] !== '(' && str2 !== 'x') {
      return false;
    }
    re = /[-]/g;
    var newstr = str.replace(re, '');  //var test = new RegExp(str,/\d/);
    if (newstr.length === 10) {
      return true;
    }
    re = /\s+/g;
    newstr = newstr.replace(re, '');
    if (newstr.length === 10) {
      return true;
    }
    re = /[1]/g;
    newstr = newstr.replace(re, '');
    if (newstr.length === 10) {
      return true;
    }

    //re=/[]/g;
    //newstr=newstr.replace('(', '');
    if (newstr.length === 12) {
      newArr = newstr.split('');
      // return newArr;
      if (newArr[0] === '(' && newArr[4] === ')') {
        return true;
      }
    }


    if (newstr.length < 10) {
      return false;
    }
    return false;
  }



  telephoneCheck("555-555-5555");
  //telephoneCheck("(6505552368)");
  telephoneCheck("1 555)555-5555");
  telephoneCheck("1 (555) 555-5555");
  telephoneCheck("-1 (757) 622-7382");
  telephoneCheck("1 555-555-5555");


  //https://react.dev/learn/reacting-to-input-with-state#step-2-determine-what-triggers-those-state-changes
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }
  //
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This app will take an input and check if it is a valid phone number
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h2>phone number validator</h2>
      <p>
        Input something
</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
  </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </div>






  );
}

export default App;
