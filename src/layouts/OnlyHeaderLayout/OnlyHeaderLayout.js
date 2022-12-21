import { Header } from '@/layouts/components';

function OnlyHeaderLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default OnlyHeaderLayout;
