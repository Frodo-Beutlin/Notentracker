import React from "react";
import { IconContext } from "react-icons";
import {CgCloseR} from "react-icons/cg";
import { useState } from "react";

function NeueNoteOverlay() {

  const [overlay, openOverlay] = useState(false);
  const [neuerPunkt, setNeuerPunkt] = useState()
  const [punkte, setPunkte] = useState([])

function handleSubmit(e) {
  e.preventDefault()

  const neuerEintrag = {
    id: new Date().getTime(),
    punkt: neuerPunkt
  }
}


  return (
    <>
      <div className="NeueNoteOverlay">
        <form onSubmit={handleSubmit}>
          {overlay && <NeueNoteOverlay/>}
          <CgCloseR onClick={() => openOverlay(false)} cursor="pointer" size="1.5em" color="#FF5757" className="NeueNoteClose"/>
          <h2 align="middle">Note hinzufügen</h2>
          <label className="LabelOben">Punkte</label>
          <input className="NeueNoteBox" min="0" max="15" required="number" type="number" onChange={(e)=> setNeuerPunkt(e.target.value)} value={neuerPunkt}/>
          <label className="LabelUnten">0 bis 15</label>
          <label className="LabelOben">Leistung</label>
          <input className="NeueNoteBox" maxlength="50" required="required" type="text"/>
          <label className="LabelUnten">max. 50 Zeichen</label>
          <label className="LabelOben">Datum</label>
          <input className="NeueNoteBox" required="required" type="date"/>
          <label className="LabelUnten"></label>
          <span>
            <button className="NeueNoteSubmit" type="submit">Note hinzufügen</button>
            <button className="NeueNoteReset" type="reset">Reset</button>
          </span>
        </form>
      </div>
    </>
  );
}

export default NeueNoteOverlay;
