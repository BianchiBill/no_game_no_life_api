"use client";

import { Card, FullView } from '../components/index.js'
import { chars } from '../../packages/chars/chars.js';
import { useEffect, useState } from 'react';

export default function Home() {
  const [openJsonDiv, setOpenJsonDiv] = useState(false)
  const [selectedChar, setSelectedChar] = useState()

  const onSubmit = (event) => {
    event.preventDefault();
    const char = event.target[0].value ? event.target[0].value : 'sora'

    console.log(`🚀 ==  onSubmit ==  char:`, char)
    console.log(`🚀 ==  onSubmit ==  chars[char]:`, chars[char])

    setSelectedChar(chars[char])
    setOpenJsonDiv(true);
    console.log(selectedChar)
  };

  return (
    <div className='bg-pink-900'>
      <div className="flex flex-col justify-items-center items-center content-center">
        <div className="justify-items-center items-center content-center">
          <img src={'assets/No-Game-No-Life-anime-logo-api.png'} alt={'bg'} className="" />
        </div>
        <div className='pb-4'>
          <form className="my-2" onSubmit={onSubmit}>
            <div className="items-center py-2 bg-white text-ngnl-pink font-semibold rounded-md">
              <label className='ml-2'>https://no-game-no-life-api.vercel.app/chars/</label>
              <input className="appearance-none bg-transparent border-none text-ngnl-border focus:outline-none" type="text" placeholder="sora">
              </input>
              <button className=" bg-ngnl-pink hover:bg-ngnl-dark-pink border-ngbg-ngnl-pink hover:border-ngnl-pink text-sm text-white py-1 px-2 mr-2 rounded" type="submit" >
                Submit
              </button>
            </div>
          </form>
        </div>
        {openJsonDiv && selectedChar ? (
          // <FullView data={selectedChar} />
          <div className="bg-ngnl-dark-pink border-2 text-white mx-16 mb-10 px-4 rounded-lg">
            <pre className='p-4' style={{
              whiteSpace: 'pre-wrap', wordBreak: 'break-word',
              fontFamily: "monospace",
            }}>
              {JSON.stringify(selectedChar, null, 2)}
            </pre>        </div>
        ) : (
          <div className="bg-ngnl-dark-pink content-center items-center min-h-screen justify-center rounded-md grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-2">
            {Object.values(chars).map((char) => {
              return (
                <div key={char.name} className='mx-4 px-4 py-2 my-1 transform transition-transform hover:scale-105 hover:px-4 hover:z-10'>
                  <Card data={char} key={char.name} />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// border-top-left-radius: 10px;
//     border-bottom-left-radius: 10px;
//     color: rgb(85, 85, 85);
//     z-index: 2;
//     font-size: 1em;
//     flex: 0 0 0%;
//     white-space: nowrap;
//     border-width: 1px 0px 1px 1px;
//     border-style: solid;
//     border-color: rgb(230, 230, 230);
//     border-image: initial;
//     background: rgb(230, 230, 230);
//     padding: 0.35em 0.5em;
