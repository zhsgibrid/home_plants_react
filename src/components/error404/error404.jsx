import {useBorderActive} from '../../global_vars&funcs';
import Shift from '../../styles/varibles/shift';
import classes from './error404.module.css';
import backImgError from '../../img/backImgError.png';

function Error404(props) {
    // const activate_page = props.activate_page;
    // useBorderActive(0, activate_page);

    return (
        <div className={classes.Error} >
            <img className={classes.Errorimg} src={backImgError} alt="some img" />
            <h1 style={Shift.About } className={classes.ErrorText}>404 ERROR</h1>
            <p style={Shift.Text404 } className={classes.Text404}>This page not found.
                <br />
            Back to home and start again</p>
            <button style={Shift.btnText } className={classes.Text404btnText} >SIGN IN</button>
        </div>
    )
}

export default Error404;