import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Button } from '@/components/Button';
import { Search } from '@/layouts/components';
import { IconBars, IconBell, IconLive } from '@/components/Icon';
import images from '@/assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '@/components/Logo';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-box')}>
                <Button circle>
                    <IconBars />
                </Button>

                <Logo src={images.logo} />
            </div>

            <Search />

            <div className={cx('actions')}>
                <Tippy content="Tạo" placement="bottom">
                    <Button circle>
                        <IconLive />
                    </Button>
                </Tippy>
                <Tippy content="Thông báo" placement="bottom">
                    <Button circle>
                        <IconBell />
                    </Button>
                </Tippy>
                <div className={cx('avatar-box')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/272057218_703871467656884_2273660669885648889_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Xi3ITdo00LsAX9nzmxt&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfDOeLPsXGmf-IspD_gzKUgr6hp0X2236plqE5L4Ryg8ZQ&oe=63A7D91B"
                        alt="avt"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
