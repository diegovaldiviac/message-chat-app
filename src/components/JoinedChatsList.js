import React from "react";
import ChatSearch from "./ChatSearch";
import {useHistory} from "react-router-dom"


export default function JoinedChatsList({chats}) {

  const history = useHistory();

    return (
        <div className="list-container">
          <ChatSearch />
          <ul className="items">
            {
              chats.map(chat =>
                <li
                  key={chat.id}
                  onClick={() => history.push('/chat')}
                  className="item">
                  <div className="item-status">
                    <img src={chat.Image} alt="Retail Admin"/>
                    <span className="status online"></span>
                  </div>
                  <p className="name-time">
                    <span className="name mr-2">{chat.Name}</span>
                  </p>
                </li>
                )}          
          </ul>
        </div>
      )
}