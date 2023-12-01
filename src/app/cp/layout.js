"use client"

import ControlNav from "../../ControlPanal/ControlNav/ControlNav"

export default function DashboardLayout({children}) {
    return (
      <section> 
        <div className="row">
            <div className="col-12 col-md-3" >
            <ControlNav/>
            </div>
            <div className="col-12 col-md-9">{children}</div>

        </div>
      </section>
    )
  }