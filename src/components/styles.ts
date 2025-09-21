import { css } from "@linaria/core";

export const coreStyle = css`
  text-align: center;
  background-color: #eeeeee;
  color: #333333;
  height: 100vh;

  #includeDeadlines {
    margin-top: 1.5rem;
  }

  .warn {
    color: deeppink;
    font-size: 1.1rem;
  }

  a {
    color: #666;
  }

  a:hover {
    color: #3da9fc;
  }

  a:active,
  a:focus {
    color: inherit;
  }

  label {
    cursor: pointer;
  }
`;

export const fileSelectorStyle = css`
  label > input {
    display: none;
  }
  label {
    margin-bottom: 1rem;
  }

  #fileUpload {
    position: center;
    white-space: nowrap;
    width: 12rem;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    letter-spacing: 0.1%;
    font-weight: 400;
    line-height: 2.5rem;
    background-color: #ccc;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin-block: 2.5% 4.5%;
    padding: 0.7% 0.5%;
  }

  #fileUpload:hover {
    background-color: #5ecfd1;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;

export const contributorLinkStyle = css`
  margin-left: 0.2rem;
`;

export const footerStyle = css`
  margin-top: 2rem;
`;

export const helpStyle = css`
  .help {
    color: #333333;
    height: 100vh;
  }

  .notice {
    margin-top: 2%;
  }

  .About {
    margin-top: 8%;
    padding-bottom: 5%;
  }

  .warn {
    color: deeppink;
    font-size: 1.1rem;
    text-decoration: underline;
  }
`;
