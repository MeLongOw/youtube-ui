import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { MicroIcon, SearchIcon } from '~/components/Icons';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('input-wrapper')}>
                <div className={cx('mini-icon')}>
                    <SearchIcon height="2rem" width="2rem" />
                </div>
                <input placeholder="Tìm Kiếm" className={cx('input')} />
            </div>
            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
            <div className={cx('micro')}>
                <Button>
                    <MicroIcon />
                </Button>
            </div>
        </div>
    );
}

export default Search;
