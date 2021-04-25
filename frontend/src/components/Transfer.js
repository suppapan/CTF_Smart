import React from "react";

export function Transfer({ transferTokens, tokenSymbol, checkBalance }) {
  return (
    <div>
      <center>
        <h4>Talk with Boss and Show your money.</h4>
      </center>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          checkBalance();
        }}
      >
        <br />
        <center>
          <div className="form-group">
            <input
              className="btn btn-primary"
              type="submit"
              value="Talk With Boss"
            />
          </div>
        </center>
      </form>
    </div>
  );
}
