import { Avatar } from '@material-ui/core';
import { MoreHorizOutlined, ShareOutlined } from '@material-ui/icons';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import  ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import  RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import  ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import React, { useState } from 'react';
import '../css/Post.css';
import  Modal  from 'react-modal';
// import {  useSelector } from "react-redux";
// import { selectQuestionId } from '../features/questionSlice';
import firebase from "firebase";
import db from "firebase";
// import selectQuestionName from '../features/questionSlice';
// import  selectUser  from '../features/userSlice';
// import {useDispatch} from "react-redux";
import setQuestionInfo from '../features/questionSlice';

Modal.setAppElement("#root");


function Post({id,question,imageUrl,timestamp,users}) {

  //   const [openModal,setopenModal] = useState(false);
  //   const dispatch = useDispatch();
  //   const questionId = useSelector(selectQuestionId);
  //   const [answer,setAnswer] = useState("");
  //  const questionName = useSelector(selectQuestionName);
  //  const user = useSelector(selectUser);

    // const handleAnswer = (e) => {
    //   e.preventDefault();
  
    //   if (questionId) {
    //     db.collection("questions").doc(questionId).collection("answer").add({
    //       user: user,
    //       answer: answer,
    //       questionId: questionId,
    //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     });
    //   }
    //   console.log(questionId,questionName);
    //   setAnswer("");
    //   setopenModal(false);
    // };
    return (
        <div className="post"
      //  onClick={() =>
      //    dispatch(
      //      setQuestionInfo({
      //        questionId: id,
      //        questionName: question,
      //      })
      //    )
      //   }  
            
        >
            <div className="post__info">
                 <Avatar
                 src= {users.photo}
                 />
                 <h5>{users.displayName ? users.displayName : users.email }</h5>
                 <small>{new  Date(timestamp.toDate()).toLocaleString()}</small>
            </div>
            <div className="post__body">
                <div className="post__question">
                     <p>{question}</p>
                     <button /*onClick = {() =>setopenModal(true)}*/ className="post__btnAnswer">Answer</button>
                     <Modal
                // isOpen = {openModal}
                // onRequestClose = {() => setopenModal(false)}
                 shouldCloseOnOverlayClick={false}
                 style={{
                    overlay: {
                      width: 700,
                      height: 600,
                      backgroundColor: "rgba(0,0,0,0.8)",
                      zIndex: "1000",
                      top: "50%",
                      left: "50%",
                      marginTop: "-300px",
                      marginLeft: "-350px",
                    },
                  }}
                 >
                     <div className="modal__question">
                      <h1>{question}</h1>
                      <p>
                            asked by{" "}
                      <span className="name">
                            {users.displayName ? users.displayName : users.email }
                      </span>{" "}
                        on{" "}
                      <span className="name">
                            {new Date(timestamp?.toDate()).toLocaleString()}
                      </span>
                       </p>
                     </div>
                     <div className="modal__answer">
                           <textarea
                             required
                             //value={answer}
                             //onChange={(e) => setAnswer(e.target.value)}
                             placeholder="Enter Your Answer"
                             type="text"
                           />
                      </div>
                      <div className="modal__button">
                          <button className="close" /*onClick={() => setopenModal(false)}*/>
                            Close
                          </button>
                          <button type="sumbit" /*onClick={handleAnswer}*/ className="add">
                            Add Answer
                          </button>
                      </div>
                 </Modal>
                </div>
                <div className="post__answer">
                     
                </div>
                <img src={imageUrl} alt=""/>
            </div>
            <div className="post__footer">
                  <div className="post__footerAction">
                     <ArrowUpwardOutlinedIcon/>
                     <ArrowDownwardOutlinedIcon/>
                  </div>
                     <RepeatOutlinedIcon />
                     <ChatBubbleOutlineOutlinedIcon />
                  <div className="post__footerLeft">
                     <ShareOutlined/>
                     <MoreHorizOutlined/>
                  </div>
            </div>
        </div>
    )
}

export default Post
