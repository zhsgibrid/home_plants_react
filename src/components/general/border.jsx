import classes from './border.module.css';

function BorderGeneral(props) {
    const style = props.style;

    return (
        <div className={classes.border} style={style}></div>
    )
}

export default BorderGeneral;