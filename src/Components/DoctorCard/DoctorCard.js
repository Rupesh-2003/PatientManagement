import React from "react";
import classes from './DoctorCard.module.css'

const DoctorCard = (props) => {
    return (
        <div className={classes.Card}>
            <div className={classes.Flex1}>
                <img src={props.doctor.photo} className={classes.DoctorPhoto} alt="Doctor"/>
                <div className={classes.NameAndDesignationFlex}>
                    <div className={classes.Name}>
                        Dr. {props.doctor.name}
                        <div className={classes.AvailabiltyFlex}>
                            <div className={classes.Circle}></div>
                            Available
                            </div>
                    </div>
                    <div className={classes.Designation}>{props.doctor.designation}</div>
                </div>
            </div>
            <div className={classes.StatisticsFlex}>
                <div className={classes.StatisticsHeading}>Today’s Patient Statistics :</div>
                <div className={classes.StatisticsSubFlex}>
                    <div className={classes.StatisticsContainer}>
                        <div className={classes.StatisticName}>Pending</div>
                        <div className={classes.Statistic}>03</div>
                    </div>
                    <div className={classes.StatisticsContainer}>
                        <div className={classes.StatisticName}>Diagnosed</div>
                        <div className={classes.Statistic}>27</div>
                    </div>
                    <div className={classes.StatisticsContainer}>
                        <div className={classes.StatisticName}>Charges</div>
                        <div className={classes.Statistic}>Rs. 750</div>
                    </div>
                </div>
            </div>
            <div className={classes.HorizontalLine}/>
            <div className={classes.ShowPatients}>Show Patients</div>
        </div>
    )
}

export default DoctorCard