


import { useEffect, useRef, useState } from 'react';
import chaticon from '../../assets/chat_bubble.svg';

export default function Card(props) {
    const [username, setUsername] = useState(props.usernam);
    const [post , setPost] = useState(props.pos);
    const [isActive, setIsActive] = useState(props.isActiv);
    const [lastActive, setLastActive] = useState(props.lastActiv);
    const [task , setTask] = useState(props.tas);
    const statusRef = useRef(null);
    const maindiv = useRef(null);
    const [showTask, setShowTask] = useState(false);
    const [showpost, setShowPost] = useState(false);
    const [showStatus, setShowStatus] = useState(false);

    useEffect(() => {
        if (statusRef.current) {
            if (isActive) {
                statusRef.current.classList.remove('bg-red-500');
                statusRef.current.classList.add('bg-green-500');
            } else {
                if (statusRef.current.classList.contains('bg-green-500')) {
                    statusRef.current.classList.remove('bg-green-500');
                    statusRef.current.classList.add('bg-red-500');
                } else if (!statusRef.current.classList.contains('bg-red-500')) {
                    statusRef.current.classList.add('bg-red-500');
                }
            }
        }

        if(maindiv.current){
            if(task){
                if(!maindiv.current.classList.contains('border-blue-500')){
                    maindiv.current.classList.add("border-blue-500");    
                }
            }
            else{
                if(maindiv.current.classList.contains('border-blue-500')){
                    maindiv.current.classList.remove("border-blue-500");    
                } 
            }
        }
    }, [isActive ,task]);

    return (
        <div 
            ref={maindiv} 
            onMouseEnter={() => setShowTask(true)} 
            onMouseLeave={() => setShowTask(false)} 
            className="w-72  rounded-lg border-2 border-blue-500 flex flex-col items-center p-6 bg-white shadow-xl hover:shadow-lg transition-shadow duration-300 relative"
        >
            <div className="flex items-center gap-4">
                <div className="rounded-full w-14 h-14 bg-slate-500 text-2xl text-white flex justify-center items-center font-semibold">
                    {username.charAt(0).toUpperCase()}{username.charAt(username.indexOf('') + 1).toUpperCase()}
                </div>
                <div className="flex flex-col">
                    <div className="text-lg font-bold text-gray-800 ">{username}</div>
                    <div className="text-sm text-gray-400 cursor-pointer " onMouseEnter={()=>{ setShowPost(true) }} onMouseLeave={()=>{setShowPost(false)}}  >{post.substring(0,9)}... </div> 
                       
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div ref={statusRef} className="rounded-full w-4 h-4 bg-red-500"></div>
                    <img src={chaticon} alt="Chat" className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity duration-200" />
                </div>
            </div>
            {
                isActive ? (
                    <div className="mt-4 text-sm text-gray-500">Last active: {lastActive}</div>
                ):(<div className="mt-4 text-sm text-gray-500">Last active: Online now</div>)
            }
            {
                showTask && task && (
                    <div className="absolute -bottom-8 left-10   w-48 text-white bg-gray-800 text-sm p-2 border border-gray-300 rounded-lg shadow-lg transition-opacity duration-300 z-10">
                        Status:{isActive?"Active":"Inactive"} <br />
                        Task:{task} <br />
                        
                            <div>Post:{post}</div>
    
                        
                    </div>
                )
            }
        </div>
    );
}
 
