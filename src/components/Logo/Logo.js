import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';

const cx = classNames.bind(styles);

function Logo({ src }) {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('logo-render')} to="/" title="Trang chủ Youtube">
                <div className={cx('box-logo')}>
                    <img src={src} alt="logo" />
                </div>
            </Link>
            <span className={cx('country')}>VN</span>
        </div>
    );
}

export default Logo;
