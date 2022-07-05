import React from "react";

function postEmoji(minute) {
  let emojis = ""
  if (minute < 30) {
    let emoji = "☕️"
    let emojiCount = Math.ceil(minute/5)
    for(let i=0 ; i < emojiCount; i++) {
      emojis += emoji
    }
  } else {
    let emoji = "🍱"
    let emojiCount = Math.ceil(minute/10)
    for (let i=0; i< emojiCount; i++) {
      emojis += emoji
    }
  }
  return emojis
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emoji = postEmoji(minutes)
  return(
    <article>
      <h3>{title}</h3>
      <small>{date},{emoji} {minutes} min read </small> 
      <p>{preview}</p>    
    </article>
  )
}

export default Article