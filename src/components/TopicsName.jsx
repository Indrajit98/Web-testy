import React from 'react';

const TopicsName = ({topicData}) => {
    console.log(topicData)
    const {name,logo}= topicData;
    return (
        <div className='border border-orange-400 p-4'>
           <div>
           <img className='bg-slate-200 ' src={logo} alt="" />
            <h3 className='font-bold text-slate-600 mt-4'>Topic Name: {name}</h3>
            <button className='bg bg-amber-600 py-2 px-8 mt-8 rounded-md text-white font-bold'>Start Quiz</button>
           </div>
            
        </div>
    );
};

export default TopicsName;