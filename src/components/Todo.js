import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';

import { green } from '@mui/material/colors';
import { margin } from '@mui/system';


var tasks = [
    { id: 0, name: 'Study', description: 'Study ReactJS', done: true },
    { id: 1, name: 'Eat', description: 'Eat spagatthi', done: false },
    { id: 2, name: 'Clean Room', description: 'Throw out the trash', done: true }
]

function Todo() {
    return (
        <div>

            {tasks.map(task => {
                return (
                    <div key={task.id} className='flex flex-row bg-[#1E1E1E]'>
                        <Checkbox
                            defaultChecked={task.done}
                            sx={{
                                color: grey[900],
                                '&.Mui-checked': {
                                    color: grey[900],
                                },
                            }}
                        />

                        <div className='flex flex-col items-start'>
                            <p className='text-2xl	'>{task.name}</p>
                            <p className='text-lg	'>{task.description}</p>
                        </div>

                        <div>
                            <Button style={{
                                backgroundColor: "#fafafa",
                                width: "30px",
                                height: "30px",
                                minWidth: "20px",    
                                padding: "0px 0px 0px 12px"

                                
                            }} startIcon={<DeleteIcon />} sx={{
                                color: grey[900]
                            }} size="large">
                            </Button>
                        </div>
                        <hr />
                    </div>
                );
            })}


        </div>


    )// className='color-[#fafafa] p-0 font-18 w-10 min-w-0 h-10 text-center'
}

export default Todo;
