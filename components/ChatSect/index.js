import { useState, useEffect } from "react"

  const MessageBubble = (props) => {
    return <div className={`p-2 rounded flex flex-col bg-white max-w-full  text-black mb-3 ${props.fromMe ? "self-end" : ""}`}>
      <p className="flex-wrap  w-full break-words">{props?.body}</p>
      <p className="text-xs italics text-right">{props?.time}</p>
    </div>
  }



  const PopUp = (props) => {
    const [chat, setChat] = useState([])
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
    return <div className={`flex flex-col px-3 w-5/6 max-w-md  h-4/5 py-4 text-white rounded items-center fixed bottom-6 right-6`}>
            
            
          <div className="h-full flex flex-col flex-1 w-full relative bg-gray-400 rounded shadow p-2">
            <div className="flex pb-3 gap-5 items-center">
              <div className="h-12 self-end rounded-full w-12 bg-black">
                 BTN
                </div>
              <p>Customer Support</p>
            </div>
            <div className="flex-1 overflow-y-scroll flex flex-col items-start p-3">
              {chat.map(message => {
                              return (<MessageBubble fromMe={message.fromMe} body={message.body} time={message.time.getTime()}/>)
                            })}
            </div>
            <div className="flex py-2 px-2 gap-5">
              <input className="flex-1 rounded text-black" value={input} onChange={e=>{setInput(e.target.value)}} type="text"/> 
              <button className="p-3 h-12 w-12 rounded-full bg-primary-accent" onClick={sendMessage}>S</button>
            </div>
          </div>
          <div className="h-14 p-5 self-end rounded-full w-14 bg-black">
           BTN
          </div>
    </div>
  }

  export default PopUp;