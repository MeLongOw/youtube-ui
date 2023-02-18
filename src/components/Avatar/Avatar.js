import classNames from "classnames/bind"
import styles from './Avatar.module.scss'

const cx = classNames.bind(styles)

function Avatar({ src, small = false, medium = false }) {
    const classes = cx('avatar', {small, medium})
    return <img src={src} alt="img" className={classes} />;
}

export default Avatar;
