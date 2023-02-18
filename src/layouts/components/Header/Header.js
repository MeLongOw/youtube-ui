import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './Header.module.scss';

import images from '~/assets/images';
import { BellIcon, CreateVideoIcon, ToggleIcon } from '~/components/Icons';
import Search from '../Search';
import Button from '~/components/Button/Button';
import Avatar from '~/components/Avatar';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Button>
                        <ToggleIcon />
                    </Button>
                    <Link to={config.routes.home}>
                        <div className="logo-wrapper">
                            <img src={images.logo} alt="logo" className={cx('logo-item')} />
                        </div>
                    </Link>
                </div>

                <div className={cx('search')}>
                    <Search />
                </div>

                <div className={cx('actions')}>
                    <Button>
                        <CreateVideoIcon />
                    </Button>
                    <Button>
                        <BellIcon />
                    </Button>
                    <div className={cx('actions-avatar')}>
                        <button>
                            <Avatar medium src='https://yt3.ggpht.com/yti/AHXOFjXdN1MAGFBhX8E5yEqg8A_Fn4QONUz8uJESow=s88-c-k-c0x00ffffff-no-rj-mo   '/>
                        </button>
                    </div >
                </div>
            </div>
        </div>
    );
}

export default Header;
