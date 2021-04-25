import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import line from "./lineid.JPG";

export function NoTokensMessage({ selectedAddress }) {
  return (
    <>
      <center>
        <p>You can win this game if you're millionaire.</p>
        <p>
          Find treasery and Stole it, if you have more than 1,000m USD you will
          win.
        </p>
        <p>
          If you are bank of america may be you can print it or you go to the
          bank and robber it ,May be it the way to let you be billianaire
        </p>
      </center>
      <br />
      <p></p>
      <hr />
      <br />
      <div className="App">
        <center>
          <p>
            {" "}
            If you think you get stuck to use Metamask Learn how to use it.
          </p>
          <h3>Learn How Get Started MetaMask</h3>
        </center>
        <YoutubeEmbed embedId="ZIGUC9JAAw8" />
      </div>
      <br />
      <center>
        <p>
          Attention, please be aware Ropsten Faucet can be Retrive 1 ETH
          per/day.
        </p>
      </center>

      <center>
        <a href="https://faucet.ropsten.be/" target="_blank">
          Click this Link to Retrive ETH for Free
        </a>

        <p>Use this for retrive {selectedAddress}</p>
        <p>ETH not let you win Because we need USD money not ETH</p>
        <br />
        <p>After You have ETH enough for gas fee.</p>
        <br />
        <hr />
        <br />
        <p>
          <h3>How you Can win This game?</h3>
        </p>
        <p>
          If you found that treasery refresh this and reconnect wallet. That's
          will let you to Meet the Boss and Boss wil let thing your most wanted
        </p>
        <br />
        <hr />
        <br />
        <p>
          Let us know if you get stuck you can DM to me may be you will get some
          advice
        </p>
        <img src={line} alt="lineid" width="100" height="100" />
      </center>
    </>
  );
}
