import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/983f8b59d8333ce9877f5afe439db4fa~c5_100x100.jpeg?x-expires=1654642800&x-signature=FHT%2FN01DrNVzj%2FH8fPMAaXW6%2Fd0%3D"
                alt="hnanaut.99"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Tuấn Anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>hnanaut.99</span>
            </div>
        </div>
    );
}

export default AccountItem;
