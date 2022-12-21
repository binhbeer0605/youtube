import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Button } from '@/components/Button';
import { IconClear, IconMicro, IconSearch } from '@/components/Icon';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [focus, setFocus] = useState(false);
    const [showKeyboard, setShowKeyboard] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search', { [`has-focus`]: focus })}>
                <div className={cx('search-form')}>
                    <div className={cx('container')} onMouseEnter={() => setShowKeyboard(true)}>
                        <div className={cx('search-icon')}>
                            <IconSearch width="20" height="20" />
                        </div>
                        <div className={cx('search-input')}>
                            <div className={cx('input-container')}>
                                {showKeyboard && (
                                    <div className={cx('keyboard-button')}>
                                        <img
                                            src="https://www.gstatic.com/inputtools/images/tia.png"
                                            alt="keyboard"
                                        />
                                    </div>
                                )}
                                <div className={cx('input-box')}>
                                    <input
                                        value={searchValue}
                                        className={cx('input')}
                                        placeholder="Tìm kiếm"
                                        onFocus={() => setFocus(true)}
                                        onBlur={() => setFocus(false)}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        {!!searchValue && (
                            <div className={cx('search-clear-button')}>
                                <Button circle>
                                    <IconClear />
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className={cx('search-container')}></div>
                </div>
                <Tippy content="Tìm kiếm" placement="bottom">
                    <button className={cx('search-button')}>
                        <IconSearch />
                    </button>
                </Tippy>
            </div>
            <div className={cx('voice-search-button')}>
                <Tippy content="Tìm kiếm bằng giọng nói" placement="bottom">
                    <Button circle className="bg-gray">
                        <IconMicro />
                    </Button>
                </Tippy>
            </div>
        </div>
    );
}

export default Search;
