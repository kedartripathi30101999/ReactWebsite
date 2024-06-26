import React from "react";
import styled from "styled-components";
const Contact=()=>
{
    const Wrapper=styled.section`
      padding:9rem 0 5rem 0;

      .container
      {
        margin-top:6rem;
        text-align:center;
      }
      .contact-form
      {
        max-width:40rem;
        margin:auto;
      }
      .contact-inputs
      {
        display:flex;
        flex-direction:column;
        gap:3rem;

        input[type="submit"]
        {
            cursor:pointer;
            transition:all 0.2s;

            &:hover
            {
                background-color:${({theme})=>theme.colors.white};
                border:1px solid ${({theme})=>theme.colors.btn};
                color:${({theme})=>theme.colors.btn}
            }
        }
      }

    `
    return <Wrapper>
             <h2 className="common-heading">Feel Free to Contact us</h2>
             <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/mqkrwoay"
                    method="POST" 
                    className="contact-inputs">
                       <input
                        type="text"
                        name="username"
                        placeholder="username"
                        autoComplete="off"
                        required
                       />

                       <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        autoComplete="off"
                        required
                       />

                       <textarea
                       name="message"
                       cols="30"
                       rows="6"
                       placeholder="enter your message"
                       autoComplete="off"
                       required>
                       </textarea>

                       <input
                        type="submit"
                        value="send"
                       />
                    </form>
                </div>
             </div>
           </Wrapper>
}
export default Contact