import React  from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Buttons";
import styled from "styled-components";
import {FaDiscord,FaInstagram,FaYoutube} from "react-icons/fa"
const Footer=()=>
{
  const Wrapper=styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
  `
  return <Wrapper>
            <section className="contact-short">
              <div className="grid grid-two-column">
                <div>
                   <h3>Ready to get started?</h3>
                   <h3>Talk to us today</h3>
                </div>
                <div className="contact-short-btn">
                  <NavLink to="/">
                    <Button>Get started</Button>
                  </NavLink>
                </div>
              </div>
            </section>

            <footer>
              <div className="container grid grid-four-column">
                <div className="footer-about">
                  <h3>zipTech Solutions</h3>
                  <p>where innovation meets reliability for all your tech needs</p>
                </div>
                <div className="footer-subscribe">
                  <h3>Subscribe to get important updates</h3>
                  <form action="#">
                    <input type="email"
                      required
                      autoComplete="off"
                      placeholder="Email"
                    />
                    <input type="submit" value="Subscribe"/>
                  </form>
                </div>
                <div className="footer-social">
                  <h3>Follows Us</h3>
                   <div className="footer-social--icons">
                      <div>
                         <FaDiscord className="icons"/>
                      </div>
                      <div>
                        <FaInstagram className="icons"/>
                      </div>
                      <div>
                        <FaYoutube className="icons"/>
                      </div>
                   </div>
                </div>
                <div className="footer-contact">
                   <h3>Call Us</h3>
                   <h3>+91 7876565432</h3>
                </div>
              </div>
              <div className="footer-bottom--section">
                <hr/>
                <div className="copyright grid grid-two-column">
                   <div>
                   <p>&copy;{new Date().getFullYear()} zipTech Solutions. All Rights Reserved</p>
                   </div>
                   <div>
                     <p>PRIVACY POLICY</p>
                     <p>TERMS & CONDITIONS</p>
                   </div>
                </div>
              </div>
            </footer>
         </Wrapper>
}
export default Footer