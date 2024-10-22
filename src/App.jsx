import React, { useState } from 'react';

function App() {
  const [item, setItem] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('1');
  const [list, setList] = useState([]);

  function remove(index) {
    const yeniArr = list.filter((_, i) => index !== i);
    setList(yeniArr);
  }

  const handleAdd = () => {
    if (item && selectedNumber) {
      setList([...list, { item, number: selectedNumber, checked: false }]);
      setItem('');
      setSelectedNumber('1');
    }
  };

  const handleCheck = (index) => {
    const updatedList = list.map((entry, i) => 
      i === index ? { ...entry, checked: !entry.checked } : entry
    );
    setList(updatedList);
  };

  function deleteAll() {
    setList([]);
  }


  return (
    <>
      <div className='flex justify-center items-center bg-green-500'>
        <h1 className='text-white font-bold text-[20px]'>What do you need for your💗 trip?</h1>
        <select
          className='bg-slate-100 text-green-700 px-4 py-2 rounded-lg m-6'
          value={selectedNumber}
          onChange={(e) => setSelectedNumber(e.target.value)}
        >
          <option value="1">1</option>
          {Array.from({ length: 19 }, (_, index) => index + 2).map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <input
          className='bg-slate-100 text-green-700 px-4 py-2 rounded-lg m-6'
          placeholder='item...'
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className='bg-slate-100 text-green-700 px-4 py-2 rounded-lg m-6' onClick={handleAdd}>Add</button>
      </div>
      <div className='bg-green-200 min-h-screen p-6 flex justify-center'>
        {list.map((entry, index) => (
          <div key={index} className='p-4 m-2 rounded'>
            <input 
              type="checkbox" 
              checked={entry.checked} 
              onChange={() => handleCheck(index)} 
            /> 
            <span style={{ textDecoration: entry.checked ? 'line-through' : 'none' }}>
              {entry.number} {entry.item}
            </span>
            <span onClick={() => remove(index)} className='cursor-pointer text-red-800 font-bold shadow-white text-[20px]'> x</span>
          </div>
        ))}
        <div>
        <button onClick={deleteAll} className='bg-yellow-500 text-white mt-[200px] rounded px-5 py-3'>Clear to List</button>
        </div>
      </div>
      
    </>
  );
}

export default App;





// import React, { useState } from 'react';

// function App() {
//   const [item, setItem] = useState('');
//   const [selectedNumber, setSelectedNumber] = useState('1');
//   const [list, setList] = useState([]);

//   function remove(index) {
//     const yeniArr = list.filter((_, i) => index !== i);
//     setList(yeniArr);
//   }

//   const handleAdd = () => {
//     if (item && selectedNumber) {
//       setList([...list, { item, number: selectedNumber }]);
//       setItem('');
//       setSelectedNumber('1'); // Yenidən 1-ə sıfırlayırıq
//     }
//   };

//   return (
//     <>
//       <div className='flex justify-center items-center bg-green-500'>
//         <h1 className='text-white font-bold text-[20px]'>What do you need for your💗 trip?</h1>
//         <select
//           className='bg-slate-100 text-green-700 px-4 py-2 rounded-lg m-6'
//           value={selectedNumber}
//           onChange={(e) => setSelectedNumber(e.target.value)}
//         >
//           <option value="1">1</option>
//           {Array.from({ length: 19 }, (_, index) => index + 2).map((num) => (
//             <option key={num} value={num}>{num}</option>
//           ))}
//         </select>
//         <input
//           className='bg-slate-100 text-green-700 px-4 py-2 rounded-lg m-6'
//           placeholder='item...'
//           type="text"
//           value={item}
//           onChange={(e) => setItem(e.target.value)}
//         />
//         <button className='bg-slate-100 text-green-700 px-4 py-2 rounded-lg m-6' onClick={handleAdd}>Add</button>
//       </div>
//       <div className='bg-green-200 min-h-screen p-6'>
//         {list.map((entry, index) => (
//           <div key={index} className='p-4 m-2 rounded'>
//             <input type="checkbox" name="" id="" /> {entry.number} {entry.item} 
//             <span onClick={() => remove(index)} className='cursor-pointer text-red-800 font-bold shadow-white text-[20px]'> x</span>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;




// import React from 'react'

// function App() {
//   return (
//     <>
//       <div className='flex justify-center items-center bg-green-500'>
//         <h1 className='text-white font-bold text-[20px]'>What do you need for your💗 trip?</h1>
//         <select className='bg-slate-100 text-green-700 px-4 py-2 rounded-lg m-6' name="" id=""></select>
//         <input className='bg-slate-100 text-green-700 px-4 py-2 rounded-lg m-6' placeholder='item...' type="text" />
//         <button className='bg-slate-100 text-green-700 px-4 py-2 rounded-lg m-6'>Add</button>
//       </div>
//       <div className='bg-green-200 min-h-screen'></div>
//     </>
//   )
// }

// export default App