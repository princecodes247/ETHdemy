import { useState, useEffect } from "react"

  const MessageBubble = (props) => {
    return <div className={`p-2 rounded flex flex-col bg-white max-w-full  text-black mb-3 ${props.fromMe ? "self-end" : ""}`}>
      <p className="flex-wrap  w-full break-words">{props?.body}</p>
      <p className="text-xs italics text-right">{props?.time}</p>
    </div>
  }



  const PopUp = (props) => {
    const [chat, setChat] = useState([])
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const sendMessage = () => {
      if (input.trim().length === 0) { return }
      let message = {
        body: input,
        fromMe: true,
        time: new Date
      }
      let newChats = chat
      newChats.push(message)
      setChat(newChats)
      setInput("")
    }
    return <div className={`flex gap-3 flex-col px-3 w-5/6 max-w-md  h-4/5 py-4 text-white rounded items-center justify-end fixed bottom-6 right-6`}>
            
            
          <div className={`h-full flex flex-col flex-1 w-full relative bg-gray-400 rounded shadow p-2 ${open ? "" : "hidden"}`}>
            <div className="flex pb-3 gap-5 items-center">
              <div className="flex items-center justify-center h-12 self-end rounded-full w-12 bg-gray-100">
                 <svg class="w-6 h-6 text-primary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
              <p>Customer Support</p>
            </div>
            <div className="flex-1 overflow-y-scroll flex flex-col items-start p-3">
              {chat.map(message => {
                              return (<MessageBubble fromMe={message.fromMe} body={message.body} time={message.time.getTime()}/>)
                            })}
            </div>
            <div className="flex py-2 px-2 gap-5">
              <input className="p-2 flex-1 rounded text-black" placeholder="Send a message" value={input} onChange={e=>{setInput(e.target.value)}} type="text"/> 
              <button className="p-3 h-12 w-12 rounded-full bg-primary-accent" onClick={sendMessage}>S</button>
            </div>
          </div>
          <button onClick={()=>{setOpen(!open)}} className="h-14 p-4 flex items-center justify-center self-end rounded-full w-14 bg-primary-accent">
           <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          </button>
    </div>
  }

  export default PopUp;