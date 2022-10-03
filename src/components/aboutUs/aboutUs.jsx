import {useBorderActive} from '../../global_vars&funcs';
import Plants2 from '../../img/plants2.png';
import Stick from '../../img/stick.svg';
import Hands from '../../img/hands.svg';
import FlowerPods from '../../img/flower_pods.svg';
import classes from '../aboutUs/aboutUs.module.css';
import Shift from '../../styles/varibles/shift';

function About(props) {
    const activate_page = props.activate_page;
    useBorderActive(2, activate_page);

    return (
        <section>
            <h3 style={Shift.About}>About Us</h3>
            <div className={classes.contentAbout}>
                <img className={classes['about-image']} src={Plants2} alt="Some plant" />

                <div className={classes.divAbout}>
                    <div className={classes.about_logo_text}>
                        <img className={classes['about-logo']} src={Stick} alt="img" />
                        <div>
                            <h4 style={Shift.AboutH4}>We make plants easy</h4>
                            <p style={Shift.AboutText}>Plants should be fun. Our mission is to make the nation greener and make gardening easy for everyone. Each plant comes with easy to follow care instructions and our plant doctors are on hand to help if anything goes wrong.</p>
                        </div>
                    </div>
                    <div className={classes.about_logo_text}>
                        <img className={classes['about-logo']} src={Hands} alt="img" />
                        <div>
                            <h4 style={Shift.AboutH4}>Building a Community of Plant Lovers</h4>
                            <p style={Shift.AboutText}>We turn customers into fans. Whether you’re a total beginner, a pandemic plant parent or have an experienced green thumb, we’re excited to play a part in your love of plants.</p>
                        </div>
                    </div>
                    <div className={classes.about_logo_text}>
                        <img className={classes['about-logo']} src={FlowerPods} alt="img" />
                        <div>
                            <h4 style={Shift.AboutH4}>Planet conscious</h4>
                            <p style={Shift.AboutText}>We care about the planet and believe in doing business for good not just for profit. We're committed to building a business that puts the planet first.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default About;