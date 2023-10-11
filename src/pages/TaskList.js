import React from 'react';
// import useCountdown from '../hooks/useCountdown';
import { BiDotsVertical } from 'react-icons/bi'
import { BiSolidPlusCircle } from 'react-icons/bi'


const TaskList = () => {
    return (
        <>
            <div className='w-full flex flex-col'>
                <div className='w-full flex justify-center items-center mb-5'>
                    <div className='w-full flex flex-row justify-between items-center border-b-2 py-3 border-white border-opacity-60 text-lg'>
                        <span>
                            Tasks
                        </span>
                        <div className='p-1 rounded-md bg-white bg-opacity-10 hover:cursor-pointer hover:bg-opacity-20'>
                            <BiDotsVertical size={24} />
                        </div>
                    </div>
                </div>
                <div className='w-full py-5 flex justify-center items-center bg-black bg-opacity-10 rounded-lg opacity-60 border-2 border-dashed border-opacity-60 hover:opacity-80 hover:border-opacity-80 hover:bg-opacity-20 hover:cursor-pointer'>
                    <div className='mr-2'>
                        <BiSolidPlusCircle size={24}/>
                    </div>
                    <span>
                        Add Task
                    </span>
                </div>
            </div>
        </>
    );
}

export default TaskList;