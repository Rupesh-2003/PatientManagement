import React, { useState } from "react";
import classes from './PatientCard.module.css'

import Clock from '../../assets/clock.svg'
import Diagnosed from '../../assets/diagnosed.svg'
import Pending from '../../assets/pending.svg'

const PatientCard = (props) => {
    const [openDetails, setOpenDetails] = useState(false)

    return (
        <div className={[classes.Card, openDetails && classes.OpenDetails].join(' ')}>
            <div className={classes.Flex1}>
                <div className={[classes.Photo, props.patient.gender === "Female" && classes.Female].join(' ')}>{props.patient.gender === 'Male' ? "M" : "F" }</div>
                <div className={classes.PatientName}>{props.patient.name}</div>
                <div className={classes.AppointmentTime}>
                    <img src={Clock}/>
                    {props.patient.appointmentTime}
                </div>
               {props.patient.status === 'diagnosed' 
                ? 
                    <div className={classes.Status}>
                        <img src={Diagnosed}/>
                        Diagnosed
                    </div>
                :
                    <div className={classes.Status}>
                        <img src={Pending}/>
                        Pending
                    </div>
                }
                <button className={classes.OpenCloseButton} onClick={() => setOpenDetails(!openDetails)}>Open Details</button>
            </div>

            {openDetails && 
            <>
                <div className={classes.PatientStatus}>
                    Patient Status:
                    <div className={classes.Status}>
                        <img src={Diagnosed}/>
                        Diagnosed
                    </div>
                    <div className={classes.Status}>
                        <img src={Pending}/>
                        Pending
                    </div>
                </div>
                <div className={classes.SaveButton}>Save</div>
            </>
            }
        </div>
    )
}

export default PatientCard