import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function ValidatePhonenumber() {

  function telephoneCheck(str) {
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    //check for (
    var re = /(\d)/g;
    var newArr = [];
    newArr = str.split('');
    console.log(newArr);

    var str2 = '';
    str2 = newArr[0];
    str2 = str2.replace(re, 'x');
    // newArr[0]==='1' returns true
    if (newArr[0] !== '(' && str2 !== 'x') {
      return false;
    }

    //    check for - (dash)
    re = /[-]/g;
    var newstr = str.replace(re, '');  //var test = new RegExp(str,/\d/);
    if (newstr.length === 10) {
      return true;
    }
    //check for 
    re = /\s+/g;
    newstr = newstr.replace(re, '');
    if (newstr.length === 10) {
      return true;
    }
    //check for leading 1
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



  /* telephoneCheck("555-555-5555");
  //telephoneCheck("(6505552368)");
  telephoneCheck("1 555)555-5555");
  telephoneCheck("1 (555) 555-5555");
  telephoneCheck("-1 (757) 622-7382");
  telephoneCheck("1 555-555-5555");
 */

  //https://react.dev/learn/reacting-to-input-with-state#step-2-determine-what-triggers-those-state-changes
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>Valid phone number</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      //      await submitForm(answer);
      telephoneCheck(answer);
      console.log('telephoneCheck(answer)', telephoneCheck(answer));
      if (telephoneCheck(answer) === true) {

        setStatus('success');
      }
      if (telephoneCheck(answer) === false) {
        setError(false);
      }
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

export default ValidatePhonenumber;
